import { c as createCommonjsModule, g as getDefaultExportFromCjs, a as commonjsGlobal } from '../../common/_commonjsHelpers-6f5dde0d.js';
import { p as process } from '../../common/process-06825524.js';
import { i as interopRequireDefault } from '../../common/interopRequireDefault-87881f6d.js';
import { _ as _extends_1 } from '../../common/extends-2cc905c5.js';

var _typeof_1 = createCommonjsModule(function (module) {
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;
});

var interopRequireWildcard = createCommonjsModule(function (module) {
function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof_1(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;
});

var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;

var escapeStringRegexp = function (str) {
	if (typeof str !== 'string') {
		throw new TypeError('Expected a string');
	}

	return str.replace(matchOperatorsRe, '\\$&');
};

var colorName = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};

var conversions = createCommonjsModule(function (module) {
/* MIT license */


// NOTE: conversions should only return primitive values (i.e. arrays, or
//       values that give correct `typeof` results).
//       do not use box values types (i.e. Number(), String(), etc.)

var reverseKeywords = {};
for (var key in colorName) {
	if (colorName.hasOwnProperty(key)) {
		reverseKeywords[colorName[key]] = key;
	}
}

var convert = module.exports = {
	rgb: {channels: 3, labels: 'rgb'},
	hsl: {channels: 3, labels: 'hsl'},
	hsv: {channels: 3, labels: 'hsv'},
	hwb: {channels: 3, labels: 'hwb'},
	cmyk: {channels: 4, labels: 'cmyk'},
	xyz: {channels: 3, labels: 'xyz'},
	lab: {channels: 3, labels: 'lab'},
	lch: {channels: 3, labels: 'lch'},
	hex: {channels: 1, labels: ['hex']},
	keyword: {channels: 1, labels: ['keyword']},
	ansi16: {channels: 1, labels: ['ansi16']},
	ansi256: {channels: 1, labels: ['ansi256']},
	hcg: {channels: 3, labels: ['h', 'c', 'g']},
	apple: {channels: 3, labels: ['r16', 'g16', 'b16']},
	gray: {channels: 1, labels: ['gray']}
};

// hide .channels and .labels properties
for (var model in convert) {
	if (convert.hasOwnProperty(model)) {
		if (!('channels' in convert[model])) {
			throw new Error('missing channels property: ' + model);
		}

		if (!('labels' in convert[model])) {
			throw new Error('missing channel labels property: ' + model);
		}

		if (convert[model].labels.length !== convert[model].channels) {
			throw new Error('channel and label counts mismatch: ' + model);
		}

		var channels = convert[model].channels;
		var labels = convert[model].labels;
		delete convert[model].channels;
		delete convert[model].labels;
		Object.defineProperty(convert[model], 'channels', {value: channels});
		Object.defineProperty(convert[model], 'labels', {value: labels});
	}
}

convert.rgb.hsl = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var min = Math.min(r, g, b);
	var max = Math.max(r, g, b);
	var delta = max - min;
	var h;
	var s;
	var l;

	if (max === min) {
		h = 0;
	} else if (r === max) {
		h = (g - b) / delta;
	} else if (g === max) {
		h = 2 + (b - r) / delta;
	} else if (b === max) {
		h = 4 + (r - g) / delta;
	}

	h = Math.min(h * 60, 360);

	if (h < 0) {
		h += 360;
	}

	l = (min + max) / 2;

	if (max === min) {
		s = 0;
	} else if (l <= 0.5) {
		s = delta / (max + min);
	} else {
		s = delta / (2 - max - min);
	}

	return [h, s * 100, l * 100];
};

convert.rgb.hsv = function (rgb) {
	var rdif;
	var gdif;
	var bdif;
	var h;
	var s;

	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var v = Math.max(r, g, b);
	var diff = v - Math.min(r, g, b);
	var diffc = function (c) {
		return (v - c) / 6 / diff + 1 / 2;
	};

	if (diff === 0) {
		h = s = 0;
	} else {
		s = diff / v;
		rdif = diffc(r);
		gdif = diffc(g);
		bdif = diffc(b);

		if (r === v) {
			h = bdif - gdif;
		} else if (g === v) {
			h = (1 / 3) + rdif - bdif;
		} else if (b === v) {
			h = (2 / 3) + gdif - rdif;
		}
		if (h < 0) {
			h += 1;
		} else if (h > 1) {
			h -= 1;
		}
	}

	return [
		h * 360,
		s * 100,
		v * 100
	];
};

convert.rgb.hwb = function (rgb) {
	var r = rgb[0];
	var g = rgb[1];
	var b = rgb[2];
	var h = convert.rgb.hsl(rgb)[0];
	var w = 1 / 255 * Math.min(r, Math.min(g, b));

	b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));

	return [h, w * 100, b * 100];
};

convert.rgb.cmyk = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var c;
	var m;
	var y;
	var k;

	k = Math.min(1 - r, 1 - g, 1 - b);
	c = (1 - r - k) / (1 - k) || 0;
	m = (1 - g - k) / (1 - k) || 0;
	y = (1 - b - k) / (1 - k) || 0;

	return [c * 100, m * 100, y * 100, k * 100];
};

/**
 * See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
 * */
function comparativeDistance(x, y) {
	return (
		Math.pow(x[0] - y[0], 2) +
		Math.pow(x[1] - y[1], 2) +
		Math.pow(x[2] - y[2], 2)
	);
}

convert.rgb.keyword = function (rgb) {
	var reversed = reverseKeywords[rgb];
	if (reversed) {
		return reversed;
	}

	var currentClosestDistance = Infinity;
	var currentClosestKeyword;

	for (var keyword in colorName) {
		if (colorName.hasOwnProperty(keyword)) {
			var value = colorName[keyword];

			// Compute comparative distance
			var distance = comparativeDistance(rgb, value);

			// Check if its less, if so set as closest
			if (distance < currentClosestDistance) {
				currentClosestDistance = distance;
				currentClosestKeyword = keyword;
			}
		}
	}

	return currentClosestKeyword;
};

convert.keyword.rgb = function (keyword) {
	return colorName[keyword];
};

convert.rgb.xyz = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;

	// assume sRGB
	r = r > 0.04045 ? Math.pow(((r + 0.055) / 1.055), 2.4) : (r / 12.92);
	g = g > 0.04045 ? Math.pow(((g + 0.055) / 1.055), 2.4) : (g / 12.92);
	b = b > 0.04045 ? Math.pow(((b + 0.055) / 1.055), 2.4) : (b / 12.92);

	var x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
	var y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
	var z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);

	return [x * 100, y * 100, z * 100];
};

convert.rgb.lab = function (rgb) {
	var xyz = convert.rgb.xyz(rgb);
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);

	return [l, a, b];
};

convert.hsl.rgb = function (hsl) {
	var h = hsl[0] / 360;
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var t1;
	var t2;
	var t3;
	var rgb;
	var val;

	if (s === 0) {
		val = l * 255;
		return [val, val, val];
	}

	if (l < 0.5) {
		t2 = l * (1 + s);
	} else {
		t2 = l + s - l * s;
	}

	t1 = 2 * l - t2;

	rgb = [0, 0, 0];
	for (var i = 0; i < 3; i++) {
		t3 = h + 1 / 3 * -(i - 1);
		if (t3 < 0) {
			t3++;
		}
		if (t3 > 1) {
			t3--;
		}

		if (6 * t3 < 1) {
			val = t1 + (t2 - t1) * 6 * t3;
		} else if (2 * t3 < 1) {
			val = t2;
		} else if (3 * t3 < 2) {
			val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
		} else {
			val = t1;
		}

		rgb[i] = val * 255;
	}

	return rgb;
};

convert.hsl.hsv = function (hsl) {
	var h = hsl[0];
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var smin = s;
	var lmin = Math.max(l, 0.01);
	var sv;
	var v;

	l *= 2;
	s *= (l <= 1) ? l : 2 - l;
	smin *= lmin <= 1 ? lmin : 2 - lmin;
	v = (l + s) / 2;
	sv = l === 0 ? (2 * smin) / (lmin + smin) : (2 * s) / (l + s);

	return [h, sv * 100, v * 100];
};

convert.hsv.rgb = function (hsv) {
	var h = hsv[0] / 60;
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var hi = Math.floor(h) % 6;

	var f = h - Math.floor(h);
	var p = 255 * v * (1 - s);
	var q = 255 * v * (1 - (s * f));
	var t = 255 * v * (1 - (s * (1 - f)));
	v *= 255;

	switch (hi) {
		case 0:
			return [v, t, p];
		case 1:
			return [q, v, p];
		case 2:
			return [p, v, t];
		case 3:
			return [p, q, v];
		case 4:
			return [t, p, v];
		case 5:
			return [v, p, q];
	}
};

convert.hsv.hsl = function (hsv) {
	var h = hsv[0];
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var vmin = Math.max(v, 0.01);
	var lmin;
	var sl;
	var l;

	l = (2 - s) * v;
	lmin = (2 - s) * vmin;
	sl = s * vmin;
	sl /= (lmin <= 1) ? lmin : 2 - lmin;
	sl = sl || 0;
	l /= 2;

	return [h, sl * 100, l * 100];
};

// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
convert.hwb.rgb = function (hwb) {
	var h = hwb[0] / 360;
	var wh = hwb[1] / 100;
	var bl = hwb[2] / 100;
	var ratio = wh + bl;
	var i;
	var v;
	var f;
	var n;

	// wh + bl cant be > 1
	if (ratio > 1) {
		wh /= ratio;
		bl /= ratio;
	}

	i = Math.floor(6 * h);
	v = 1 - bl;
	f = 6 * h - i;

	if ((i & 0x01) !== 0) {
		f = 1 - f;
	}

	n = wh + f * (v - wh); // linear interpolation

	var r;
	var g;
	var b;
	switch (i) {
		default:
		case 6:
		case 0: r = v; g = n; b = wh; break;
		case 1: r = n; g = v; b = wh; break;
		case 2: r = wh; g = v; b = n; break;
		case 3: r = wh; g = n; b = v; break;
		case 4: r = n; g = wh; b = v; break;
		case 5: r = v; g = wh; b = n; break;
	}

	return [r * 255, g * 255, b * 255];
};

convert.cmyk.rgb = function (cmyk) {
	var c = cmyk[0] / 100;
	var m = cmyk[1] / 100;
	var y = cmyk[2] / 100;
	var k = cmyk[3] / 100;
	var r;
	var g;
	var b;

	r = 1 - Math.min(1, c * (1 - k) + k);
	g = 1 - Math.min(1, m * (1 - k) + k);
	b = 1 - Math.min(1, y * (1 - k) + k);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.rgb = function (xyz) {
	var x = xyz[0] / 100;
	var y = xyz[1] / 100;
	var z = xyz[2] / 100;
	var r;
	var g;
	var b;

	r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
	g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
	b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);

	// assume sRGB
	r = r > 0.0031308
		? ((1.055 * Math.pow(r, 1.0 / 2.4)) - 0.055)
		: r * 12.92;

	g = g > 0.0031308
		? ((1.055 * Math.pow(g, 1.0 / 2.4)) - 0.055)
		: g * 12.92;

	b = b > 0.0031308
		? ((1.055 * Math.pow(b, 1.0 / 2.4)) - 0.055)
		: b * 12.92;

	r = Math.min(Math.max(0, r), 1);
	g = Math.min(Math.max(0, g), 1);
	b = Math.min(Math.max(0, b), 1);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.lab = function (xyz) {
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);

	return [l, a, b];
};

convert.lab.xyz = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var x;
	var y;
	var z;

	y = (l + 16) / 116;
	x = a / 500 + y;
	z = y - b / 200;

	var y2 = Math.pow(y, 3);
	var x2 = Math.pow(x, 3);
	var z2 = Math.pow(z, 3);
	y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
	x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
	z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;

	x *= 95.047;
	y *= 100;
	z *= 108.883;

	return [x, y, z];
};

convert.lab.lch = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var hr;
	var h;
	var c;

	hr = Math.atan2(b, a);
	h = hr * 360 / 2 / Math.PI;

	if (h < 0) {
		h += 360;
	}

	c = Math.sqrt(a * a + b * b);

	return [l, c, h];
};

convert.lch.lab = function (lch) {
	var l = lch[0];
	var c = lch[1];
	var h = lch[2];
	var a;
	var b;
	var hr;

	hr = h / 360 * 2 * Math.PI;
	a = c * Math.cos(hr);
	b = c * Math.sin(hr);

	return [l, a, b];
};

convert.rgb.ansi16 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];
	var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args)[2]; // hsv -> ansi16 optimization

	value = Math.round(value / 50);

	if (value === 0) {
		return 30;
	}

	var ansi = 30
		+ ((Math.round(b / 255) << 2)
		| (Math.round(g / 255) << 1)
		| Math.round(r / 255));

	if (value === 2) {
		ansi += 60;
	}

	return ansi;
};

convert.hsv.ansi16 = function (args) {
	// optimization here; we already know the value and don't need to get
	// it converted for us.
	return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
};

convert.rgb.ansi256 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];

	// we use the extended greyscale palette here, with the exception of
	// black and white. normal palette only has 4 greyscale shades.
	if (r === g && g === b) {
		if (r < 8) {
			return 16;
		}

		if (r > 248) {
			return 231;
		}

		return Math.round(((r - 8) / 247) * 24) + 232;
	}

	var ansi = 16
		+ (36 * Math.round(r / 255 * 5))
		+ (6 * Math.round(g / 255 * 5))
		+ Math.round(b / 255 * 5);

	return ansi;
};

convert.ansi16.rgb = function (args) {
	var color = args % 10;

	// handle greyscale
	if (color === 0 || color === 7) {
		if (args > 50) {
			color += 3.5;
		}

		color = color / 10.5 * 255;

		return [color, color, color];
	}

	var mult = (~~(args > 50) + 1) * 0.5;
	var r = ((color & 1) * mult) * 255;
	var g = (((color >> 1) & 1) * mult) * 255;
	var b = (((color >> 2) & 1) * mult) * 255;

	return [r, g, b];
};

convert.ansi256.rgb = function (args) {
	// handle greyscale
	if (args >= 232) {
		var c = (args - 232) * 10 + 8;
		return [c, c, c];
	}

	args -= 16;

	var rem;
	var r = Math.floor(args / 36) / 5 * 255;
	var g = Math.floor((rem = args % 36) / 6) / 5 * 255;
	var b = (rem % 6) / 5 * 255;

	return [r, g, b];
};

convert.rgb.hex = function (args) {
	var integer = ((Math.round(args[0]) & 0xFF) << 16)
		+ ((Math.round(args[1]) & 0xFF) << 8)
		+ (Math.round(args[2]) & 0xFF);

	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.hex.rgb = function (args) {
	var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
	if (!match) {
		return [0, 0, 0];
	}

	var colorString = match[0];

	if (match[0].length === 3) {
		colorString = colorString.split('').map(function (char) {
			return char + char;
		}).join('');
	}

	var integer = parseInt(colorString, 16);
	var r = (integer >> 16) & 0xFF;
	var g = (integer >> 8) & 0xFF;
	var b = integer & 0xFF;

	return [r, g, b];
};

convert.rgb.hcg = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var max = Math.max(Math.max(r, g), b);
	var min = Math.min(Math.min(r, g), b);
	var chroma = (max - min);
	var grayscale;
	var hue;

	if (chroma < 1) {
		grayscale = min / (1 - chroma);
	} else {
		grayscale = 0;
	}

	if (chroma <= 0) {
		hue = 0;
	} else
	if (max === r) {
		hue = ((g - b) / chroma) % 6;
	} else
	if (max === g) {
		hue = 2 + (b - r) / chroma;
	} else {
		hue = 4 + (r - g) / chroma + 4;
	}

	hue /= 6;
	hue %= 1;

	return [hue * 360, chroma * 100, grayscale * 100];
};

convert.hsl.hcg = function (hsl) {
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var c = 1;
	var f = 0;

	if (l < 0.5) {
		c = 2.0 * s * l;
	} else {
		c = 2.0 * s * (1.0 - l);
	}

	if (c < 1.0) {
		f = (l - 0.5 * c) / (1.0 - c);
	}

	return [hsl[0], c * 100, f * 100];
};

convert.hsv.hcg = function (hsv) {
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;

	var c = s * v;
	var f = 0;

	if (c < 1.0) {
		f = (v - c) / (1 - c);
	}

	return [hsv[0], c * 100, f * 100];
};

convert.hcg.rgb = function (hcg) {
	var h = hcg[0] / 360;
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	if (c === 0.0) {
		return [g * 255, g * 255, g * 255];
	}

	var pure = [0, 0, 0];
	var hi = (h % 1) * 6;
	var v = hi % 1;
	var w = 1 - v;
	var mg = 0;

	switch (Math.floor(hi)) {
		case 0:
			pure[0] = 1; pure[1] = v; pure[2] = 0; break;
		case 1:
			pure[0] = w; pure[1] = 1; pure[2] = 0; break;
		case 2:
			pure[0] = 0; pure[1] = 1; pure[2] = v; break;
		case 3:
			pure[0] = 0; pure[1] = w; pure[2] = 1; break;
		case 4:
			pure[0] = v; pure[1] = 0; pure[2] = 1; break;
		default:
			pure[0] = 1; pure[1] = 0; pure[2] = w;
	}

	mg = (1.0 - c) * g;

	return [
		(c * pure[0] + mg) * 255,
		(c * pure[1] + mg) * 255,
		(c * pure[2] + mg) * 255
	];
};

convert.hcg.hsv = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	var v = c + g * (1.0 - c);
	var f = 0;

	if (v > 0.0) {
		f = c / v;
	}

	return [hcg[0], f * 100, v * 100];
};

convert.hcg.hsl = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	var l = g * (1.0 - c) + 0.5 * c;
	var s = 0;

	if (l > 0.0 && l < 0.5) {
		s = c / (2 * l);
	} else
	if (l >= 0.5 && l < 1.0) {
		s = c / (2 * (1 - l));
	}

	return [hcg[0], s * 100, l * 100];
};

convert.hcg.hwb = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;
	var v = c + g * (1.0 - c);
	return [hcg[0], (v - c) * 100, (1 - v) * 100];
};

convert.hwb.hcg = function (hwb) {
	var w = hwb[1] / 100;
	var b = hwb[2] / 100;
	var v = 1 - b;
	var c = v - w;
	var g = 0;

	if (c < 1) {
		g = (v - c) / (1 - c);
	}

	return [hwb[0], c * 100, g * 100];
};

convert.apple.rgb = function (apple) {
	return [(apple[0] / 65535) * 255, (apple[1] / 65535) * 255, (apple[2] / 65535) * 255];
};

convert.rgb.apple = function (rgb) {
	return [(rgb[0] / 255) * 65535, (rgb[1] / 255) * 65535, (rgb[2] / 255) * 65535];
};

convert.gray.rgb = function (args) {
	return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
};

convert.gray.hsl = convert.gray.hsv = function (args) {
	return [0, 0, args[0]];
};

convert.gray.hwb = function (gray) {
	return [0, 100, gray[0]];
};

convert.gray.cmyk = function (gray) {
	return [0, 0, 0, gray[0]];
};

convert.gray.lab = function (gray) {
	return [gray[0], 0, 0];
};

convert.gray.hex = function (gray) {
	var val = Math.round(gray[0] / 100 * 255) & 0xFF;
	var integer = (val << 16) + (val << 8) + val;

	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.rgb.gray = function (rgb) {
	var val = (rgb[0] + rgb[1] + rgb[2]) / 3;
	return [val / 255 * 100];
};
});

/*
	this function routes a model to all other models.

	all functions that are routed have a property `.conversion` attached
	to the returned synthetic function. This property is an array
	of strings, each with the steps in between the 'from' and 'to'
	color models (inclusive).

	conversions that are not possible simply are not included.
*/

function buildGraph() {
	var graph = {};
	// https://jsperf.com/object-keys-vs-for-in-with-closure/3
	var models = Object.keys(conversions);

	for (var len = models.length, i = 0; i < len; i++) {
		graph[models[i]] = {
			// http://jsperf.com/1-vs-infinity
			// micro-opt, but this is simple.
			distance: -1,
			parent: null
		};
	}

	return graph;
}

// https://en.wikipedia.org/wiki/Breadth-first_search
function deriveBFS(fromModel) {
	var graph = buildGraph();
	var queue = [fromModel]; // unshift -> queue -> pop

	graph[fromModel].distance = 0;

	while (queue.length) {
		var current = queue.pop();
		var adjacents = Object.keys(conversions[current]);

		for (var len = adjacents.length, i = 0; i < len; i++) {
			var adjacent = adjacents[i];
			var node = graph[adjacent];

			if (node.distance === -1) {
				node.distance = graph[current].distance + 1;
				node.parent = current;
				queue.unshift(adjacent);
			}
		}
	}

	return graph;
}

function link(from, to) {
	return function (args) {
		return to(from(args));
	};
}

function wrapConversion(toModel, graph) {
	var path = [graph[toModel].parent, toModel];
	var fn = conversions[graph[toModel].parent][toModel];

	var cur = graph[toModel].parent;
	while (graph[cur].parent) {
		path.unshift(graph[cur].parent);
		fn = link(conversions[graph[cur].parent][cur], fn);
		cur = graph[cur].parent;
	}

	fn.conversion = path;
	return fn;
}

var route = function (fromModel) {
	var graph = deriveBFS(fromModel);
	var conversion = {};

	var models = Object.keys(graph);
	for (var len = models.length, i = 0; i < len; i++) {
		var toModel = models[i];
		var node = graph[toModel];

		if (node.parent === null) {
			// no possible conversion, or this node is the source model.
			continue;
		}

		conversion[toModel] = wrapConversion(toModel, graph);
	}

	return conversion;
};

var convert = {};

var models = Object.keys(conversions);

function wrapRaw(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		return fn(args);
	};

	// preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

function wrapRounded(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		var result = fn(args);

		// we're assuming the result is an array here.
		// see notice in conversions.js; don't use box types
		// in conversion functions.
		if (typeof result === 'object') {
			for (var len = result.length, i = 0; i < len; i++) {
				result[i] = Math.round(result[i]);
			}
		}

		return result;
	};

	// preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

models.forEach(function (fromModel) {
	convert[fromModel] = {};

	Object.defineProperty(convert[fromModel], 'channels', {value: conversions[fromModel].channels});
	Object.defineProperty(convert[fromModel], 'labels', {value: conversions[fromModel].labels});

	var routes = route(fromModel);
	var routeModels = Object.keys(routes);

	routeModels.forEach(function (toModel) {
		var fn = routes[toModel];

		convert[fromModel][toModel] = wrapRounded(fn);
		convert[fromModel][toModel].raw = wrapRaw(fn);
	});
});

var colorConvert = convert;

var ansiStyles = createCommonjsModule(function (module) {


const wrapAnsi16 = (fn, offset) => function () {
	const code = fn.apply(colorConvert, arguments);
	return `\u001B[${code + offset}m`;
};

const wrapAnsi256 = (fn, offset) => function () {
	const code = fn.apply(colorConvert, arguments);
	return `\u001B[${38 + offset};5;${code}m`;
};

const wrapAnsi16m = (fn, offset) => function () {
	const rgb = fn.apply(colorConvert, arguments);
	return `\u001B[${38 + offset};2;${rgb[0]};${rgb[1]};${rgb[2]}m`;
};

function assembleStyles() {
	const codes = new Map();
	const styles = {
		modifier: {
			reset: [0, 0],
			// 21 isn't widely supported and 22 does the same thing
			bold: [1, 22],
			dim: [2, 22],
			italic: [3, 23],
			underline: [4, 24],
			inverse: [7, 27],
			hidden: [8, 28],
			strikethrough: [9, 29]
		},
		color: {
			black: [30, 39],
			red: [31, 39],
			green: [32, 39],
			yellow: [33, 39],
			blue: [34, 39],
			magenta: [35, 39],
			cyan: [36, 39],
			white: [37, 39],
			gray: [90, 39],

			// Bright color
			redBright: [91, 39],
			greenBright: [92, 39],
			yellowBright: [93, 39],
			blueBright: [94, 39],
			magentaBright: [95, 39],
			cyanBright: [96, 39],
			whiteBright: [97, 39]
		},
		bgColor: {
			bgBlack: [40, 49],
			bgRed: [41, 49],
			bgGreen: [42, 49],
			bgYellow: [43, 49],
			bgBlue: [44, 49],
			bgMagenta: [45, 49],
			bgCyan: [46, 49],
			bgWhite: [47, 49],

			// Bright color
			bgBlackBright: [100, 49],
			bgRedBright: [101, 49],
			bgGreenBright: [102, 49],
			bgYellowBright: [103, 49],
			bgBlueBright: [104, 49],
			bgMagentaBright: [105, 49],
			bgCyanBright: [106, 49],
			bgWhiteBright: [107, 49]
		}
	};

	// Fix humans
	styles.color.grey = styles.color.gray;

	for (const groupName of Object.keys(styles)) {
		const group = styles[groupName];

		for (const styleName of Object.keys(group)) {
			const style = group[styleName];

			styles[styleName] = {
				open: `\u001B[${style[0]}m`,
				close: `\u001B[${style[1]}m`
			};

			group[styleName] = styles[styleName];

			codes.set(style[0], style[1]);
		}

		Object.defineProperty(styles, groupName, {
			value: group,
			enumerable: false
		});

		Object.defineProperty(styles, 'codes', {
			value: codes,
			enumerable: false
		});
	}

	const ansi2ansi = n => n;
	const rgb2rgb = (r, g, b) => [r, g, b];

	styles.color.close = '\u001B[39m';
	styles.bgColor.close = '\u001B[49m';

	styles.color.ansi = {
		ansi: wrapAnsi16(ansi2ansi, 0)
	};
	styles.color.ansi256 = {
		ansi256: wrapAnsi256(ansi2ansi, 0)
	};
	styles.color.ansi16m = {
		rgb: wrapAnsi16m(rgb2rgb, 0)
	};

	styles.bgColor.ansi = {
		ansi: wrapAnsi16(ansi2ansi, 10)
	};
	styles.bgColor.ansi256 = {
		ansi256: wrapAnsi256(ansi2ansi, 10)
	};
	styles.bgColor.ansi16m = {
		rgb: wrapAnsi16m(rgb2rgb, 10)
	};

	for (let key of Object.keys(colorConvert)) {
		if (typeof colorConvert[key] !== 'object') {
			continue;
		}

		const suite = colorConvert[key];

		if (key === 'ansi16') {
			key = 'ansi';
		}

		if ('ansi16' in suite) {
			styles.color.ansi[key] = wrapAnsi16(suite.ansi16, 0);
			styles.bgColor.ansi[key] = wrapAnsi16(suite.ansi16, 10);
		}

		if ('ansi256' in suite) {
			styles.color.ansi256[key] = wrapAnsi256(suite.ansi256, 0);
			styles.bgColor.ansi256[key] = wrapAnsi256(suite.ansi256, 10);
		}

		if ('rgb' in suite) {
			styles.color.ansi16m[key] = wrapAnsi16m(suite.rgb, 0);
			styles.bgColor.ansi16m[key] = wrapAnsi16m(suite.rgb, 10);
		}
	}

	return styles;
}

// Make the export immutable
Object.defineProperty(module, 'exports', {
	enumerable: true,
	get: assembleStyles
});
});

var browser = {
	stdout: false,
	stderr: false
};

const TEMPLATE_REGEX = /(?:\\(u[a-f\d]{4}|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi;
const STYLE_REGEX = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g;
const STRING_REGEX = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/;
const ESCAPE_REGEX = /\\(u[a-f\d]{4}|x[a-f\d]{2}|.)|([^\\])/gi;

const ESCAPES = new Map([
	['n', '\n'],
	['r', '\r'],
	['t', '\t'],
	['b', '\b'],
	['f', '\f'],
	['v', '\v'],
	['0', '\0'],
	['\\', '\\'],
	['e', '\u001B'],
	['a', '\u0007']
]);

function unescape(c) {
	if ((c[0] === 'u' && c.length === 5) || (c[0] === 'x' && c.length === 3)) {
		return String.fromCharCode(parseInt(c.slice(1), 16));
	}

	return ESCAPES.get(c) || c;
}

function parseArguments(name, args) {
	const results = [];
	const chunks = args.trim().split(/\s*,\s*/g);
	let matches;

	for (const chunk of chunks) {
		if (!isNaN(chunk)) {
			results.push(Number(chunk));
		} else if ((matches = chunk.match(STRING_REGEX))) {
			results.push(matches[2].replace(ESCAPE_REGEX, (m, escape, chr) => escape ? unescape(escape) : chr));
		} else {
			throw new Error(`Invalid Chalk template style argument: ${chunk} (in style '${name}')`);
		}
	}

	return results;
}

function parseStyle(style) {
	STYLE_REGEX.lastIndex = 0;

	const results = [];
	let matches;

	while ((matches = STYLE_REGEX.exec(style)) !== null) {
		const name = matches[1];

		if (matches[2]) {
			const args = parseArguments(name, matches[2]);
			results.push([name].concat(args));
		} else {
			results.push([name]);
		}
	}

	return results;
}

function buildStyle(chalk, styles) {
	const enabled = {};

	for (const layer of styles) {
		for (const style of layer.styles) {
			enabled[style[0]] = layer.inverse ? null : style.slice(1);
		}
	}

	let current = chalk;
	for (const styleName of Object.keys(enabled)) {
		if (Array.isArray(enabled[styleName])) {
			if (!(styleName in current)) {
				throw new Error(`Unknown Chalk style: ${styleName}`);
			}

			if (enabled[styleName].length > 0) {
				current = current[styleName].apply(current, enabled[styleName]);
			} else {
				current = current[styleName];
			}
		}
	}

	return current;
}

var templates = (chalk, tmp) => {
	const styles = [];
	const chunks = [];
	let chunk = [];

	// eslint-disable-next-line max-params
	tmp.replace(TEMPLATE_REGEX, (m, escapeChar, inverse, style, close, chr) => {
		if (escapeChar) {
			chunk.push(unescape(escapeChar));
		} else if (style) {
			const str = chunk.join('');
			chunk = [];
			chunks.push(styles.length === 0 ? str : buildStyle(chalk, styles)(str));
			styles.push({inverse, styles: parseStyle(style)});
		} else if (close) {
			if (styles.length === 0) {
				throw new Error('Found extraneous } in Chalk template literal');
			}

			chunks.push(buildStyle(chalk, styles)(chunk.join('')));
			chunk = [];
			styles.pop();
		} else {
			chunk.push(chr);
		}
	});

	chunks.push(chunk.join(''));

	if (styles.length > 0) {
		const errMsg = `Chalk template literal is missing ${styles.length} closing bracket${styles.length === 1 ? '' : 's'} (\`}\`)`;
		throw new Error(errMsg);
	}

	return chunks.join('');
};

var chalk = createCommonjsModule(function (module) {


const stdoutColor = browser.stdout;



const isSimpleWindowsTerm = process.platform === 'win32' && !(process.env.TERM || '').toLowerCase().startsWith('xterm');

// `supportsColor.level` → `ansiStyles.color[name]` mapping
const levelMapping = ['ansi', 'ansi', 'ansi256', 'ansi16m'];

// `color-convert` models to exclude from the Chalk API due to conflicts and such
const skipModels = new Set(['gray']);

const styles = Object.create(null);

function applyOptions(obj, options) {
	options = options || {};

	// Detect level if not set manually
	const scLevel =  0;
	obj.level = options.level === undefined ? scLevel : options.level;
	obj.enabled = 'enabled' in options ? options.enabled : obj.level > 0;
}

function Chalk(options) {
	// We check for this.template here since calling `chalk.constructor()`
	// by itself will have a `this` of a previously constructed chalk object
	if (!this || !(this instanceof Chalk) || this.template) {
		const chalk = {};
		applyOptions(chalk, options);

		chalk.template = function () {
			const args = [].slice.call(arguments);
			return chalkTag.apply(null, [chalk.template].concat(args));
		};

		Object.setPrototypeOf(chalk, Chalk.prototype);
		Object.setPrototypeOf(chalk.template, chalk);

		chalk.template.constructor = Chalk;

		return chalk.template;
	}

	applyOptions(this, options);
}

// Use bright blue on Windows as the normal blue color is illegible
if (isSimpleWindowsTerm) {
	ansiStyles.blue.open = '\u001B[94m';
}

for (const key of Object.keys(ansiStyles)) {
	ansiStyles[key].closeRe = new RegExp(escapeStringRegexp(ansiStyles[key].close), 'g');

	styles[key] = {
		get() {
			const codes = ansiStyles[key];
			return build.call(this, this._styles ? this._styles.concat(codes) : [codes], this._empty, key);
		}
	};
}

styles.visible = {
	get() {
		return build.call(this, this._styles || [], true, 'visible');
	}
};

ansiStyles.color.closeRe = new RegExp(escapeStringRegexp(ansiStyles.color.close), 'g');
for (const model of Object.keys(ansiStyles.color.ansi)) {
	if (skipModels.has(model)) {
		continue;
	}

	styles[model] = {
		get() {
			const level = this.level;
			return function () {
				const open = ansiStyles.color[levelMapping[level]][model].apply(null, arguments);
				const codes = {
					open,
					close: ansiStyles.color.close,
					closeRe: ansiStyles.color.closeRe
				};
				return build.call(this, this._styles ? this._styles.concat(codes) : [codes], this._empty, model);
			};
		}
	};
}

ansiStyles.bgColor.closeRe = new RegExp(escapeStringRegexp(ansiStyles.bgColor.close), 'g');
for (const model of Object.keys(ansiStyles.bgColor.ansi)) {
	if (skipModels.has(model)) {
		continue;
	}

	const bgModel = 'bg' + model[0].toUpperCase() + model.slice(1);
	styles[bgModel] = {
		get() {
			const level = this.level;
			return function () {
				const open = ansiStyles.bgColor[levelMapping[level]][model].apply(null, arguments);
				const codes = {
					open,
					close: ansiStyles.bgColor.close,
					closeRe: ansiStyles.bgColor.closeRe
				};
				return build.call(this, this._styles ? this._styles.concat(codes) : [codes], this._empty, model);
			};
		}
	};
}

const proto = Object.defineProperties(() => {}, styles);

function build(_styles, _empty, key) {
	const builder = function () {
		return applyStyle.apply(builder, arguments);
	};

	builder._styles = _styles;
	builder._empty = _empty;

	const self = this;

	Object.defineProperty(builder, 'level', {
		enumerable: true,
		get() {
			return self.level;
		},
		set(level) {
			self.level = level;
		}
	});

	Object.defineProperty(builder, 'enabled', {
		enumerable: true,
		get() {
			return self.enabled;
		},
		set(enabled) {
			self.enabled = enabled;
		}
	});

	// See below for fix regarding invisible grey/dim combination on Windows
	builder.hasGrey = this.hasGrey || key === 'gray' || key === 'grey';

	// `__proto__` is used because we must return a function, but there is
	// no way to create a function with a different prototype
	builder.__proto__ = proto; // eslint-disable-line no-proto

	return builder;
}

function applyStyle() {
	// Support varags, but simply cast to string in case there's only one arg
	const args = arguments;
	const argsLen = args.length;
	let str = String(arguments[0]);

	if (argsLen === 0) {
		return '';
	}

	if (argsLen > 1) {
		// Don't slice `arguments`, it prevents V8 optimizations
		for (let a = 1; a < argsLen; a++) {
			str += ' ' + args[a];
		}
	}

	if (!this.enabled || this.level <= 0 || !str) {
		return this._empty ? '' : str;
	}

	// Turns out that on Windows dimmed gray text becomes invisible in cmd.exe,
	// see https://github.com/chalk/chalk/issues/58
	// If we're on Windows and we're dealing with a gray color, temporarily make 'dim' a noop.
	const originalDim = ansiStyles.dim.open;
	if (isSimpleWindowsTerm && this.hasGrey) {
		ansiStyles.dim.open = '';
	}

	for (const code of this._styles.slice().reverse()) {
		// Replace any instances already present with a re-opening code
		// otherwise only the part of the string until said closing code
		// will be colored, and the rest will simply be 'plain'.
		str = code.open + str.replace(code.closeRe, code.open) + code.close;

		// Close the styling before a linebreak and reopen
		// after next line to fix a bleed issue on macOS
		// https://github.com/chalk/chalk/pull/92
		str = str.replace(/\r?\n/g, `${code.close}$&${code.open}`);
	}

	// Reset the original `dim` if we changed it to work around the Windows dimmed gray issue
	ansiStyles.dim.open = originalDim;

	return str;
}

function chalkTag(chalk, strings) {
	if (!Array.isArray(strings)) {
		// If chalk() was called by itself or with a string,
		// return the string itself as a string.
		return [].slice.call(arguments, 1).join(' ');
	}

	const args = [].slice.call(arguments, 2);
	const parts = [strings.raw[0]];

	for (let i = 1; i < strings.length; i++) {
		parts.push(String(args[i - 1]).replace(/[{}\\]/g, '\\$&'));
		parts.push(String(strings.raw[i]));
	}

	return templates(chalk, parts.join(''));
}

Object.defineProperties(Chalk.prototype, styles);

module.exports = Chalk(); // eslint-disable-line new-cap
module.exports.supportsColor = stdoutColor;
module.exports.default = module.exports; // For TypeScript
});

var buildEs5 = createCommonjsModule(function (module, exports) {
(function webpackUniversalModuleDefinition(root, factory) {
	module.exports = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/pretty-format/src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/ansi-regex/index.js":
/*!******************************************!*\
  !*** ./node_modules/ansi-regex/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


module.exports = function (options) {
  options = Object.assign({
    onlyFirst: false
  }, options);
  var pattern = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))'].join('|');
  return new RegExp(pattern, options.onlyFirst ? undefined : 'g');
};

/***/ }),

/***/ "./node_modules/ansi-styles/index.js":
/*!*******************************************!*\
  !*** ./node_modules/ansi-styles/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
/* WEBPACK VAR INJECTION */(function(module) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var colorConvert = __webpack_require__(/*! color-convert */ "./node_modules/color-convert/index.js");

var wrapAnsi16 = function wrapAnsi16(fn, offset) {
  return function () {
    var code = fn.apply(colorConvert, arguments);
    return "\x1B[".concat(code + offset, "m");
  };
};

var wrapAnsi256 = function wrapAnsi256(fn, offset) {
  return function () {
    var code = fn.apply(colorConvert, arguments);
    return "\x1B[".concat(38 + offset, ";5;").concat(code, "m");
  };
};

var wrapAnsi16m = function wrapAnsi16m(fn, offset) {
  return function () {
    var rgb = fn.apply(colorConvert, arguments);
    return "\x1B[".concat(38 + offset, ";2;").concat(rgb[0], ";").concat(rgb[1], ";").concat(rgb[2], "m");
  };
};

function assembleStyles() {
  var codes = new Map();
  var styles = {
    modifier: {
      reset: [0, 0],
      // 21 isn't widely supported and 22 does the same thing
      bold: [1, 22],
      dim: [2, 22],
      italic: [3, 23],
      underline: [4, 24],
      inverse: [7, 27],
      hidden: [8, 28],
      strikethrough: [9, 29]
    },
    color: {
      black: [30, 39],
      red: [31, 39],
      green: [32, 39],
      yellow: [33, 39],
      blue: [34, 39],
      magenta: [35, 39],
      cyan: [36, 39],
      white: [37, 39],
      gray: [90, 39],
      // Bright color
      redBright: [91, 39],
      greenBright: [92, 39],
      yellowBright: [93, 39],
      blueBright: [94, 39],
      magentaBright: [95, 39],
      cyanBright: [96, 39],
      whiteBright: [97, 39]
    },
    bgColor: {
      bgBlack: [40, 49],
      bgRed: [41, 49],
      bgGreen: [42, 49],
      bgYellow: [43, 49],
      bgBlue: [44, 49],
      bgMagenta: [45, 49],
      bgCyan: [46, 49],
      bgWhite: [47, 49],
      // Bright color
      bgBlackBright: [100, 49],
      bgRedBright: [101, 49],
      bgGreenBright: [102, 49],
      bgYellowBright: [103, 49],
      bgBlueBright: [104, 49],
      bgMagentaBright: [105, 49],
      bgCyanBright: [106, 49],
      bgWhiteBright: [107, 49]
    }
  }; // Fix humans

  styles.color.grey = styles.color.gray;

  var _arr = Object.keys(styles);

  for (var _i = 0; _i < _arr.length; _i++) {
    var groupName = _arr[_i];
    var group = styles[groupName];

    var _arr3 = Object.keys(group);

    for (var _i3 = 0; _i3 < _arr3.length; _i3++) {
      var styleName = _arr3[_i3];
      var style = group[styleName];
      styles[styleName] = {
        open: "\x1B[".concat(style[0], "m"),
        close: "\x1B[".concat(style[1], "m")
      };
      group[styleName] = styles[styleName];
      codes.set(style[0], style[1]);
    }

    Object.defineProperty(styles, groupName, {
      value: group,
      enumerable: false
    });
    Object.defineProperty(styles, 'codes', {
      value: codes,
      enumerable: false
    });
  }

  var ansi2ansi = function ansi2ansi(n) {
    return n;
  };

  var rgb2rgb = function rgb2rgb(r, g, b) {
    return [r, g, b];
  };

  styles.color.close = "\x1B[39m";
  styles.bgColor.close = "\x1B[49m";
  styles.color.ansi = {
    ansi: wrapAnsi16(ansi2ansi, 0)
  };
  styles.color.ansi256 = {
    ansi256: wrapAnsi256(ansi2ansi, 0)
  };
  styles.color.ansi16m = {
    rgb: wrapAnsi16m(rgb2rgb, 0)
  };
  styles.bgColor.ansi = {
    ansi: wrapAnsi16(ansi2ansi, 10)
  };
  styles.bgColor.ansi256 = {
    ansi256: wrapAnsi256(ansi2ansi, 10)
  };
  styles.bgColor.ansi16m = {
    rgb: wrapAnsi16m(rgb2rgb, 10)
  };

  var _arr2 = Object.keys(colorConvert);

  for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
    var key = _arr2[_i2];

    if (_typeof(colorConvert[key]) !== 'object') {
      continue;
    }

    var suite = colorConvert[key];

    if (key === 'ansi16') {
      key = 'ansi';
    }

    if ('ansi16' in suite) {
      styles.color.ansi[key] = wrapAnsi16(suite.ansi16, 0);
      styles.bgColor.ansi[key] = wrapAnsi16(suite.ansi16, 10);
    }

    if ('ansi256' in suite) {
      styles.color.ansi256[key] = wrapAnsi256(suite.ansi256, 0);
      styles.bgColor.ansi256[key] = wrapAnsi256(suite.ansi256, 10);
    }

    if ('rgb' in suite) {
      styles.color.ansi16m[key] = wrapAnsi16m(suite.rgb, 0);
      styles.bgColor.ansi16m[key] = wrapAnsi16m(suite.rgb, 10);
    }
  }

  return styles;
} // Make the export immutable


Object.defineProperty(module, 'exports', {
  enumerable: true,
  get: assembleStyles
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)));

/***/ }),

/***/ "./node_modules/color-convert/conversions.js":
/*!***************************************************!*\
  !*** ./node_modules/color-convert/conversions.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/* MIT license */
var cssKeywords = __webpack_require__(/*! color-name */ "./node_modules/color-name/index.js"); // NOTE: conversions should only return primitive values (i.e. arrays, or
//       values that give correct `typeof` results).
//       do not use box values types (i.e. Number(), String(), etc.)


var reverseKeywords = {};

for (var key in cssKeywords) {
  if (cssKeywords.hasOwnProperty(key)) {
    reverseKeywords[cssKeywords[key]] = key;
  }
}

var convert = module.exports = {
  rgb: {
    channels: 3,
    labels: 'rgb'
  },
  hsl: {
    channels: 3,
    labels: 'hsl'
  },
  hsv: {
    channels: 3,
    labels: 'hsv'
  },
  hwb: {
    channels: 3,
    labels: 'hwb'
  },
  cmyk: {
    channels: 4,
    labels: 'cmyk'
  },
  xyz: {
    channels: 3,
    labels: 'xyz'
  },
  lab: {
    channels: 3,
    labels: 'lab'
  },
  lch: {
    channels: 3,
    labels: 'lch'
  },
  hex: {
    channels: 1,
    labels: ['hex']
  },
  keyword: {
    channels: 1,
    labels: ['keyword']
  },
  ansi16: {
    channels: 1,
    labels: ['ansi16']
  },
  ansi256: {
    channels: 1,
    labels: ['ansi256']
  },
  hcg: {
    channels: 3,
    labels: ['h', 'c', 'g']
  },
  apple: {
    channels: 3,
    labels: ['r16', 'g16', 'b16']
  },
  gray: {
    channels: 1,
    labels: ['gray']
  }
}; // hide .channels and .labels properties

for (var model in convert) {
  if (convert.hasOwnProperty(model)) {
    if (!('channels' in convert[model])) {
      throw new Error('missing channels property: ' + model);
    }

    if (!('labels' in convert[model])) {
      throw new Error('missing channel labels property: ' + model);
    }

    if (convert[model].labels.length !== convert[model].channels) {
      throw new Error('channel and label counts mismatch: ' + model);
    }

    var channels = convert[model].channels;
    var labels = convert[model].labels;
    delete convert[model].channels;
    delete convert[model].labels;
    Object.defineProperty(convert[model], 'channels', {
      value: channels
    });
    Object.defineProperty(convert[model], 'labels', {
      value: labels
    });
  }
}

convert.rgb.hsl = function (rgb) {
  var r = rgb[0] / 255;
  var g = rgb[1] / 255;
  var b = rgb[2] / 255;
  var min = Math.min(r, g, b);
  var max = Math.max(r, g, b);
  var delta = max - min;
  var h;
  var s;
  var l;

  if (max === min) {
    h = 0;
  } else if (r === max) {
    h = (g - b) / delta;
  } else if (g === max) {
    h = 2 + (b - r) / delta;
  } else if (b === max) {
    h = 4 + (r - g) / delta;
  }

  h = Math.min(h * 60, 360);

  if (h < 0) {
    h += 360;
  }

  l = (min + max) / 2;

  if (max === min) {
    s = 0;
  } else if (l <= 0.5) {
    s = delta / (max + min);
  } else {
    s = delta / (2 - max - min);
  }

  return [h, s * 100, l * 100];
};

convert.rgb.hsv = function (rgb) {
  var rdif;
  var gdif;
  var bdif;
  var h;
  var s;
  var r = rgb[0] / 255;
  var g = rgb[1] / 255;
  var b = rgb[2] / 255;
  var v = Math.max(r, g, b);
  var diff = v - Math.min(r, g, b);

  var diffc = function diffc(c) {
    return (v - c) / 6 / diff + 1 / 2;
  };

  if (diff === 0) {
    h = s = 0;
  } else {
    s = diff / v;
    rdif = diffc(r);
    gdif = diffc(g);
    bdif = diffc(b);

    if (r === v) {
      h = bdif - gdif;
    } else if (g === v) {
      h = 1 / 3 + rdif - bdif;
    } else if (b === v) {
      h = 2 / 3 + gdif - rdif;
    }

    if (h < 0) {
      h += 1;
    } else if (h > 1) {
      h -= 1;
    }
  }

  return [h * 360, s * 100, v * 100];
};

convert.rgb.hwb = function (rgb) {
  var r = rgb[0];
  var g = rgb[1];
  var b = rgb[2];
  var h = convert.rgb.hsl(rgb)[0];
  var w = 1 / 255 * Math.min(r, Math.min(g, b));
  b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
  return [h, w * 100, b * 100];
};

convert.rgb.cmyk = function (rgb) {
  var r = rgb[0] / 255;
  var g = rgb[1] / 255;
  var b = rgb[2] / 255;
  var c;
  var m;
  var y;
  var k;
  k = Math.min(1 - r, 1 - g, 1 - b);
  c = (1 - r - k) / (1 - k) || 0;
  m = (1 - g - k) / (1 - k) || 0;
  y = (1 - b - k) / (1 - k) || 0;
  return [c * 100, m * 100, y * 100, k * 100];
};
/**
 * See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
 * */


function comparativeDistance(x, y) {
  return Math.pow(x[0] - y[0], 2) + Math.pow(x[1] - y[1], 2) + Math.pow(x[2] - y[2], 2);
}

convert.rgb.keyword = function (rgb) {
  var reversed = reverseKeywords[rgb];

  if (reversed) {
    return reversed;
  }

  var currentClosestDistance = Infinity;
  var currentClosestKeyword;

  for (var keyword in cssKeywords) {
    if (cssKeywords.hasOwnProperty(keyword)) {
      var value = cssKeywords[keyword]; // Compute comparative distance

      var distance = comparativeDistance(rgb, value); // Check if its less, if so set as closest

      if (distance < currentClosestDistance) {
        currentClosestDistance = distance;
        currentClosestKeyword = keyword;
      }
    }
  }

  return currentClosestKeyword;
};

convert.keyword.rgb = function (keyword) {
  return cssKeywords[keyword];
};

convert.rgb.xyz = function (rgb) {
  var r = rgb[0] / 255;
  var g = rgb[1] / 255;
  var b = rgb[2] / 255; // assume sRGB

  r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
  g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
  b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;
  var x = r * 0.4124 + g * 0.3576 + b * 0.1805;
  var y = r * 0.2126 + g * 0.7152 + b * 0.0722;
  var z = r * 0.0193 + g * 0.1192 + b * 0.9505;
  return [x * 100, y * 100, z * 100];
};

convert.rgb.lab = function (rgb) {
  var xyz = convert.rgb.xyz(rgb);
  var x = xyz[0];
  var y = xyz[1];
  var z = xyz[2];
  var l;
  var a;
  var b;
  x /= 95.047;
  y /= 100;
  z /= 108.883;
  x = x > 0.008856 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
  y = y > 0.008856 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
  z = z > 0.008856 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;
  l = 116 * y - 16;
  a = 500 * (x - y);
  b = 200 * (y - z);
  return [l, a, b];
};

convert.hsl.rgb = function (hsl) {
  var h = hsl[0] / 360;
  var s = hsl[1] / 100;
  var l = hsl[2] / 100;
  var t1;
  var t2;
  var t3;
  var rgb;
  var val;

  if (s === 0) {
    val = l * 255;
    return [val, val, val];
  }

  if (l < 0.5) {
    t2 = l * (1 + s);
  } else {
    t2 = l + s - l * s;
  }

  t1 = 2 * l - t2;
  rgb = [0, 0, 0];

  for (var i = 0; i < 3; i++) {
    t3 = h + 1 / 3 * -(i - 1);

    if (t3 < 0) {
      t3++;
    }

    if (t3 > 1) {
      t3--;
    }

    if (6 * t3 < 1) {
      val = t1 + (t2 - t1) * 6 * t3;
    } else if (2 * t3 < 1) {
      val = t2;
    } else if (3 * t3 < 2) {
      val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
    } else {
      val = t1;
    }

    rgb[i] = val * 255;
  }

  return rgb;
};

convert.hsl.hsv = function (hsl) {
  var h = hsl[0];
  var s = hsl[1] / 100;
  var l = hsl[2] / 100;
  var smin = s;
  var lmin = Math.max(l, 0.01);
  var sv;
  var v;
  l *= 2;
  s *= l <= 1 ? l : 2 - l;
  smin *= lmin <= 1 ? lmin : 2 - lmin;
  v = (l + s) / 2;
  sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);
  return [h, sv * 100, v * 100];
};

convert.hsv.rgb = function (hsv) {
  var h = hsv[0] / 60;
  var s = hsv[1] / 100;
  var v = hsv[2] / 100;
  var hi = Math.floor(h) % 6;
  var f = h - Math.floor(h);
  var p = 255 * v * (1 - s);
  var q = 255 * v * (1 - s * f);
  var t = 255 * v * (1 - s * (1 - f));
  v *= 255;

  switch (hi) {
    case 0:
      return [v, t, p];

    case 1:
      return [q, v, p];

    case 2:
      return [p, v, t];

    case 3:
      return [p, q, v];

    case 4:
      return [t, p, v];

    case 5:
      return [v, p, q];
  }
};

convert.hsv.hsl = function (hsv) {
  var h = hsv[0];
  var s = hsv[1] / 100;
  var v = hsv[2] / 100;
  var vmin = Math.max(v, 0.01);
  var lmin;
  var sl;
  var l;
  l = (2 - s) * v;
  lmin = (2 - s) * vmin;
  sl = s * vmin;
  sl /= lmin <= 1 ? lmin : 2 - lmin;
  sl = sl || 0;
  l /= 2;
  return [h, sl * 100, l * 100];
}; // http://dev.w3.org/csswg/css-color/#hwb-to-rgb


convert.hwb.rgb = function (hwb) {
  var h = hwb[0] / 360;
  var wh = hwb[1] / 100;
  var bl = hwb[2] / 100;
  var ratio = wh + bl;
  var i;
  var v;
  var f;
  var n; // wh + bl cant be > 1

  if (ratio > 1) {
    wh /= ratio;
    bl /= ratio;
  }

  i = Math.floor(6 * h);
  v = 1 - bl;
  f = 6 * h - i;

  if ((i & 0x01) !== 0) {
    f = 1 - f;
  }

  n = wh + f * (v - wh); // linear interpolation

  var r;
  var g;
  var b;

  switch (i) {
    default:
    case 6:
    case 0:
      r = v;
      g = n;
      b = wh;
      break;

    case 1:
      r = n;
      g = v;
      b = wh;
      break;

    case 2:
      r = wh;
      g = v;
      b = n;
      break;

    case 3:
      r = wh;
      g = n;
      b = v;
      break;

    case 4:
      r = n;
      g = wh;
      b = v;
      break;

    case 5:
      r = v;
      g = wh;
      b = n;
      break;
  }

  return [r * 255, g * 255, b * 255];
};

convert.cmyk.rgb = function (cmyk) {
  var c = cmyk[0] / 100;
  var m = cmyk[1] / 100;
  var y = cmyk[2] / 100;
  var k = cmyk[3] / 100;
  var r;
  var g;
  var b;
  r = 1 - Math.min(1, c * (1 - k) + k);
  g = 1 - Math.min(1, m * (1 - k) + k);
  b = 1 - Math.min(1, y * (1 - k) + k);
  return [r * 255, g * 255, b * 255];
};

convert.xyz.rgb = function (xyz) {
  var x = xyz[0] / 100;
  var y = xyz[1] / 100;
  var z = xyz[2] / 100;
  var r;
  var g;
  var b;
  r = x * 3.2406 + y * -1.5372 + z * -0.4986;
  g = x * -0.9689 + y * 1.8758 + z * 0.0415;
  b = x * 0.0557 + y * -0.2040 + z * 1.0570; // assume sRGB

  r = r > 0.0031308 ? 1.055 * Math.pow(r, 1.0 / 2.4) - 0.055 : r * 12.92;
  g = g > 0.0031308 ? 1.055 * Math.pow(g, 1.0 / 2.4) - 0.055 : g * 12.92;
  b = b > 0.0031308 ? 1.055 * Math.pow(b, 1.0 / 2.4) - 0.055 : b * 12.92;
  r = Math.min(Math.max(0, r), 1);
  g = Math.min(Math.max(0, g), 1);
  b = Math.min(Math.max(0, b), 1);
  return [r * 255, g * 255, b * 255];
};

convert.xyz.lab = function (xyz) {
  var x = xyz[0];
  var y = xyz[1];
  var z = xyz[2];
  var l;
  var a;
  var b;
  x /= 95.047;
  y /= 100;
  z /= 108.883;
  x = x > 0.008856 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
  y = y > 0.008856 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
  z = z > 0.008856 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;
  l = 116 * y - 16;
  a = 500 * (x - y);
  b = 200 * (y - z);
  return [l, a, b];
};

convert.lab.xyz = function (lab) {
  var l = lab[0];
  var a = lab[1];
  var b = lab[2];
  var x;
  var y;
  var z;
  y = (l + 16) / 116;
  x = a / 500 + y;
  z = y - b / 200;
  var y2 = Math.pow(y, 3);
  var x2 = Math.pow(x, 3);
  var z2 = Math.pow(z, 3);
  y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
  x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
  z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;
  x *= 95.047;
  y *= 100;
  z *= 108.883;
  return [x, y, z];
};

convert.lab.lch = function (lab) {
  var l = lab[0];
  var a = lab[1];
  var b = lab[2];
  var hr;
  var h;
  var c;
  hr = Math.atan2(b, a);
  h = hr * 360 / 2 / Math.PI;

  if (h < 0) {
    h += 360;
  }

  c = Math.sqrt(a * a + b * b);
  return [l, c, h];
};

convert.lch.lab = function (lch) {
  var l = lch[0];
  var c = lch[1];
  var h = lch[2];
  var a;
  var b;
  var hr;
  hr = h / 360 * 2 * Math.PI;
  a = c * Math.cos(hr);
  b = c * Math.sin(hr);
  return [l, a, b];
};

convert.rgb.ansi16 = function (args) {
  var r = args[0];
  var g = args[1];
  var b = args[2];
  var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args)[2]; // hsv -> ansi16 optimization

  value = Math.round(value / 50);

  if (value === 0) {
    return 30;
  }

  var ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));

  if (value === 2) {
    ansi += 60;
  }

  return ansi;
};

convert.hsv.ansi16 = function (args) {
  // optimization here; we already know the value and don't need to get
  // it converted for us.
  return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
};

convert.rgb.ansi256 = function (args) {
  var r = args[0];
  var g = args[1];
  var b = args[2]; // we use the extended greyscale palette here, with the exception of
  // black and white. normal palette only has 4 greyscale shades.

  if (r === g && g === b) {
    if (r < 8) {
      return 16;
    }

    if (r > 248) {
      return 231;
    }

    return Math.round((r - 8) / 247 * 24) + 232;
  }

  var ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);
  return ansi;
};

convert.ansi16.rgb = function (args) {
  var color = args % 10; // handle greyscale

  if (color === 0 || color === 7) {
    if (args > 50) {
      color += 3.5;
    }

    color = color / 10.5 * 255;
    return [color, color, color];
  }

  var mult = (~~(args > 50) + 1) * 0.5;
  var r = (color & 1) * mult * 255;
  var g = (color >> 1 & 1) * mult * 255;
  var b = (color >> 2 & 1) * mult * 255;
  return [r, g, b];
};

convert.ansi256.rgb = function (args) {
  // handle greyscale
  if (args >= 232) {
    var c = (args - 232) * 10 + 8;
    return [c, c, c];
  }

  args -= 16;
  var rem;
  var r = Math.floor(args / 36) / 5 * 255;
  var g = Math.floor((rem = args % 36) / 6) / 5 * 255;
  var b = rem % 6 / 5 * 255;
  return [r, g, b];
};

convert.rgb.hex = function (args) {
  var integer = ((Math.round(args[0]) & 0xFF) << 16) + ((Math.round(args[1]) & 0xFF) << 8) + (Math.round(args[2]) & 0xFF);
  var string = integer.toString(16).toUpperCase();
  return '000000'.substring(string.length) + string;
};

convert.hex.rgb = function (args) {
  var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);

  if (!match) {
    return [0, 0, 0];
  }

  var colorString = match[0];

  if (match[0].length === 3) {
    colorString = colorString.split('').map(function (char) {
      return char + char;
    }).join('');
  }

  var integer = parseInt(colorString, 16);
  var r = integer >> 16 & 0xFF;
  var g = integer >> 8 & 0xFF;
  var b = integer & 0xFF;
  return [r, g, b];
};

convert.rgb.hcg = function (rgb) {
  var r = rgb[0] / 255;
  var g = rgb[1] / 255;
  var b = rgb[2] / 255;
  var max = Math.max(Math.max(r, g), b);
  var min = Math.min(Math.min(r, g), b);
  var chroma = max - min;
  var grayscale;
  var hue;

  if (chroma < 1) {
    grayscale = min / (1 - chroma);
  } else {
    grayscale = 0;
  }

  if (chroma <= 0) {
    hue = 0;
  } else if (max === r) {
    hue = (g - b) / chroma % 6;
  } else if (max === g) {
    hue = 2 + (b - r) / chroma;
  } else {
    hue = 4 + (r - g) / chroma + 4;
  }

  hue /= 6;
  hue %= 1;
  return [hue * 360, chroma * 100, grayscale * 100];
};

convert.hsl.hcg = function (hsl) {
  var s = hsl[1] / 100;
  var l = hsl[2] / 100;
  var c = 1;
  var f = 0;

  if (l < 0.5) {
    c = 2.0 * s * l;
  } else {
    c = 2.0 * s * (1.0 - l);
  }

  if (c < 1.0) {
    f = (l - 0.5 * c) / (1.0 - c);
  }

  return [hsl[0], c * 100, f * 100];
};

convert.hsv.hcg = function (hsv) {
  var s = hsv[1] / 100;
  var v = hsv[2] / 100;
  var c = s * v;
  var f = 0;

  if (c < 1.0) {
    f = (v - c) / (1 - c);
  }

  return [hsv[0], c * 100, f * 100];
};

convert.hcg.rgb = function (hcg) {
  var h = hcg[0] / 360;
  var c = hcg[1] / 100;
  var g = hcg[2] / 100;

  if (c === 0.0) {
    return [g * 255, g * 255, g * 255];
  }

  var pure = [0, 0, 0];
  var hi = h % 1 * 6;
  var v = hi % 1;
  var w = 1 - v;
  var mg = 0;

  switch (Math.floor(hi)) {
    case 0:
      pure[0] = 1;
      pure[1] = v;
      pure[2] = 0;
      break;

    case 1:
      pure[0] = w;
      pure[1] = 1;
      pure[2] = 0;
      break;

    case 2:
      pure[0] = 0;
      pure[1] = 1;
      pure[2] = v;
      break;

    case 3:
      pure[0] = 0;
      pure[1] = w;
      pure[2] = 1;
      break;

    case 4:
      pure[0] = v;
      pure[1] = 0;
      pure[2] = 1;
      break;

    default:
      pure[0] = 1;
      pure[1] = 0;
      pure[2] = w;
  }

  mg = (1.0 - c) * g;
  return [(c * pure[0] + mg) * 255, (c * pure[1] + mg) * 255, (c * pure[2] + mg) * 255];
};

convert.hcg.hsv = function (hcg) {
  var c = hcg[1] / 100;
  var g = hcg[2] / 100;
  var v = c + g * (1.0 - c);
  var f = 0;

  if (v > 0.0) {
    f = c / v;
  }

  return [hcg[0], f * 100, v * 100];
};

convert.hcg.hsl = function (hcg) {
  var c = hcg[1] / 100;
  var g = hcg[2] / 100;
  var l = g * (1.0 - c) + 0.5 * c;
  var s = 0;

  if (l > 0.0 && l < 0.5) {
    s = c / (2 * l);
  } else if (l >= 0.5 && l < 1.0) {
    s = c / (2 * (1 - l));
  }

  return [hcg[0], s * 100, l * 100];
};

convert.hcg.hwb = function (hcg) {
  var c = hcg[1] / 100;
  var g = hcg[2] / 100;
  var v = c + g * (1.0 - c);
  return [hcg[0], (v - c) * 100, (1 - v) * 100];
};

convert.hwb.hcg = function (hwb) {
  var w = hwb[1] / 100;
  var b = hwb[2] / 100;
  var v = 1 - b;
  var c = v - w;
  var g = 0;

  if (c < 1) {
    g = (v - c) / (1 - c);
  }

  return [hwb[0], c * 100, g * 100];
};

convert.apple.rgb = function (apple) {
  return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255];
};

convert.rgb.apple = function (rgb) {
  return [rgb[0] / 255 * 65535, rgb[1] / 255 * 65535, rgb[2] / 255 * 65535];
};

convert.gray.rgb = function (args) {
  return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
};

convert.gray.hsl = convert.gray.hsv = function (args) {
  return [0, 0, args[0]];
};

convert.gray.hwb = function (gray) {
  return [0, 100, gray[0]];
};

convert.gray.cmyk = function (gray) {
  return [0, 0, 0, gray[0]];
};

convert.gray.lab = function (gray) {
  return [gray[0], 0, 0];
};

convert.gray.hex = function (gray) {
  var val = Math.round(gray[0] / 100 * 255) & 0xFF;
  var integer = (val << 16) + (val << 8) + val;
  var string = integer.toString(16).toUpperCase();
  return '000000'.substring(string.length) + string;
};

convert.rgb.gray = function (rgb) {
  var val = (rgb[0] + rgb[1] + rgb[2]) / 3;
  return [val / 255 * 100];
};

/***/ }),

/***/ "./node_modules/color-convert/index.js":
/*!*********************************************!*\
  !*** ./node_modules/color-convert/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var conversions = __webpack_require__(/*! ./conversions */ "./node_modules/color-convert/conversions.js");

var route = __webpack_require__(/*! ./route */ "./node_modules/color-convert/route.js");

var convert = {};
var models = Object.keys(conversions);

function wrapRaw(fn) {
  var wrappedFn = function wrappedFn(args) {
    if (args === undefined || args === null) {
      return args;
    }

    if (arguments.length > 1) {
      args = Array.prototype.slice.call(arguments);
    }

    return fn(args);
  }; // preserve .conversion property if there is one


  if ('conversion' in fn) {
    wrappedFn.conversion = fn.conversion;
  }

  return wrappedFn;
}

function wrapRounded(fn) {
  var wrappedFn = function wrappedFn(args) {
    if (args === undefined || args === null) {
      return args;
    }

    if (arguments.length > 1) {
      args = Array.prototype.slice.call(arguments);
    }

    var result = fn(args); // we're assuming the result is an array here.
    // see notice in conversions.js; don't use box types
    // in conversion functions.

    if (_typeof(result) === 'object') {
      for (var len = result.length, i = 0; i < len; i++) {
        result[i] = Math.round(result[i]);
      }
    }

    return result;
  }; // preserve .conversion property if there is one


  if ('conversion' in fn) {
    wrappedFn.conversion = fn.conversion;
  }

  return wrappedFn;
}

models.forEach(function (fromModel) {
  convert[fromModel] = {};
  Object.defineProperty(convert[fromModel], 'channels', {
    value: conversions[fromModel].channels
  });
  Object.defineProperty(convert[fromModel], 'labels', {
    value: conversions[fromModel].labels
  });
  var routes = route(fromModel);
  var routeModels = Object.keys(routes);
  routeModels.forEach(function (toModel) {
    var fn = routes[toModel];
    convert[fromModel][toModel] = wrapRounded(fn);
    convert[fromModel][toModel].raw = wrapRaw(fn);
  });
});
module.exports = convert;

/***/ }),

/***/ "./node_modules/color-convert/route.js":
/*!*********************************************!*\
  !*** ./node_modules/color-convert/route.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var conversions = __webpack_require__(/*! ./conversions */ "./node_modules/color-convert/conversions.js");
/*
	this function routes a model to all other models.

	all functions that are routed have a property `.conversion` attached
	to the returned synthetic function. This property is an array
	of strings, each with the steps in between the 'from' and 'to'
	color models (inclusive).

	conversions that are not possible simply are not included.
*/


function buildGraph() {
  var graph = {}; // https://jsperf.com/object-keys-vs-for-in-with-closure/3

  var models = Object.keys(conversions);

  for (var len = models.length, i = 0; i < len; i++) {
    graph[models[i]] = {
      // http://jsperf.com/1-vs-infinity
      // micro-opt, but this is simple.
      distance: -1,
      parent: null
    };
  }

  return graph;
} // https://en.wikipedia.org/wiki/Breadth-first_search


function deriveBFS(fromModel) {
  var graph = buildGraph();
  var queue = [fromModel]; // unshift -> queue -> pop

  graph[fromModel].distance = 0;

  while (queue.length) {
    var current = queue.pop();
    var adjacents = Object.keys(conversions[current]);

    for (var len = adjacents.length, i = 0; i < len; i++) {
      var adjacent = adjacents[i];
      var node = graph[adjacent];

      if (node.distance === -1) {
        node.distance = graph[current].distance + 1;
        node.parent = current;
        queue.unshift(adjacent);
      }
    }
  }

  return graph;
}

function link(from, to) {
  return function (args) {
    return to(from(args));
  };
}

function wrapConversion(toModel, graph) {
  var path = [graph[toModel].parent, toModel];
  var fn = conversions[graph[toModel].parent][toModel];
  var cur = graph[toModel].parent;

  while (graph[cur].parent) {
    path.unshift(graph[cur].parent);
    fn = link(conversions[graph[cur].parent][cur], fn);
    cur = graph[cur].parent;
  }

  fn.conversion = path;
  return fn;
}

module.exports = function (fromModel) {
  var graph = deriveBFS(fromModel);
  var conversion = {};
  var models = Object.keys(graph);

  for (var len = models.length, i = 0; i < len; i++) {
    var toModel = models[i];
    var node = graph[toModel];

    if (node.parent === null) {
      // no possible conversion, or this node is the source model.
      continue;
    }

    conversion[toModel] = wrapConversion(toModel, graph);
  }

  return conversion;
};

/***/ }),

/***/ "./node_modules/color-name/index.js":
/*!******************************************!*\
  !*** ./node_modules/color-name/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


module.exports = {
  "aliceblue": [240, 248, 255],
  "antiquewhite": [250, 235, 215],
  "aqua": [0, 255, 255],
  "aquamarine": [127, 255, 212],
  "azure": [240, 255, 255],
  "beige": [245, 245, 220],
  "bisque": [255, 228, 196],
  "black": [0, 0, 0],
  "blanchedalmond": [255, 235, 205],
  "blue": [0, 0, 255],
  "blueviolet": [138, 43, 226],
  "brown": [165, 42, 42],
  "burlywood": [222, 184, 135],
  "cadetblue": [95, 158, 160],
  "chartreuse": [127, 255, 0],
  "chocolate": [210, 105, 30],
  "coral": [255, 127, 80],
  "cornflowerblue": [100, 149, 237],
  "cornsilk": [255, 248, 220],
  "crimson": [220, 20, 60],
  "cyan": [0, 255, 255],
  "darkblue": [0, 0, 139],
  "darkcyan": [0, 139, 139],
  "darkgoldenrod": [184, 134, 11],
  "darkgray": [169, 169, 169],
  "darkgreen": [0, 100, 0],
  "darkgrey": [169, 169, 169],
  "darkkhaki": [189, 183, 107],
  "darkmagenta": [139, 0, 139],
  "darkolivegreen": [85, 107, 47],
  "darkorange": [255, 140, 0],
  "darkorchid": [153, 50, 204],
  "darkred": [139, 0, 0],
  "darksalmon": [233, 150, 122],
  "darkseagreen": [143, 188, 143],
  "darkslateblue": [72, 61, 139],
  "darkslategray": [47, 79, 79],
  "darkslategrey": [47, 79, 79],
  "darkturquoise": [0, 206, 209],
  "darkviolet": [148, 0, 211],
  "deeppink": [255, 20, 147],
  "deepskyblue": [0, 191, 255],
  "dimgray": [105, 105, 105],
  "dimgrey": [105, 105, 105],
  "dodgerblue": [30, 144, 255],
  "firebrick": [178, 34, 34],
  "floralwhite": [255, 250, 240],
  "forestgreen": [34, 139, 34],
  "fuchsia": [255, 0, 255],
  "gainsboro": [220, 220, 220],
  "ghostwhite": [248, 248, 255],
  "gold": [255, 215, 0],
  "goldenrod": [218, 165, 32],
  "gray": [128, 128, 128],
  "green": [0, 128, 0],
  "greenyellow": [173, 255, 47],
  "grey": [128, 128, 128],
  "honeydew": [240, 255, 240],
  "hotpink": [255, 105, 180],
  "indianred": [205, 92, 92],
  "indigo": [75, 0, 130],
  "ivory": [255, 255, 240],
  "khaki": [240, 230, 140],
  "lavender": [230, 230, 250],
  "lavenderblush": [255, 240, 245],
  "lawngreen": [124, 252, 0],
  "lemonchiffon": [255, 250, 205],
  "lightblue": [173, 216, 230],
  "lightcoral": [240, 128, 128],
  "lightcyan": [224, 255, 255],
  "lightgoldenrodyellow": [250, 250, 210],
  "lightgray": [211, 211, 211],
  "lightgreen": [144, 238, 144],
  "lightgrey": [211, 211, 211],
  "lightpink": [255, 182, 193],
  "lightsalmon": [255, 160, 122],
  "lightseagreen": [32, 178, 170],
  "lightskyblue": [135, 206, 250],
  "lightslategray": [119, 136, 153],
  "lightslategrey": [119, 136, 153],
  "lightsteelblue": [176, 196, 222],
  "lightyellow": [255, 255, 224],
  "lime": [0, 255, 0],
  "limegreen": [50, 205, 50],
  "linen": [250, 240, 230],
  "magenta": [255, 0, 255],
  "maroon": [128, 0, 0],
  "mediumaquamarine": [102, 205, 170],
  "mediumblue": [0, 0, 205],
  "mediumorchid": [186, 85, 211],
  "mediumpurple": [147, 112, 219],
  "mediumseagreen": [60, 179, 113],
  "mediumslateblue": [123, 104, 238],
  "mediumspringgreen": [0, 250, 154],
  "mediumturquoise": [72, 209, 204],
  "mediumvioletred": [199, 21, 133],
  "midnightblue": [25, 25, 112],
  "mintcream": [245, 255, 250],
  "mistyrose": [255, 228, 225],
  "moccasin": [255, 228, 181],
  "navajowhite": [255, 222, 173],
  "navy": [0, 0, 128],
  "oldlace": [253, 245, 230],
  "olive": [128, 128, 0],
  "olivedrab": [107, 142, 35],
  "orange": [255, 165, 0],
  "orangered": [255, 69, 0],
  "orchid": [218, 112, 214],
  "palegoldenrod": [238, 232, 170],
  "palegreen": [152, 251, 152],
  "paleturquoise": [175, 238, 238],
  "palevioletred": [219, 112, 147],
  "papayawhip": [255, 239, 213],
  "peachpuff": [255, 218, 185],
  "peru": [205, 133, 63],
  "pink": [255, 192, 203],
  "plum": [221, 160, 221],
  "powderblue": [176, 224, 230],
  "purple": [128, 0, 128],
  "rebeccapurple": [102, 51, 153],
  "red": [255, 0, 0],
  "rosybrown": [188, 143, 143],
  "royalblue": [65, 105, 225],
  "saddlebrown": [139, 69, 19],
  "salmon": [250, 128, 114],
  "sandybrown": [244, 164, 96],
  "seagreen": [46, 139, 87],
  "seashell": [255, 245, 238],
  "sienna": [160, 82, 45],
  "silver": [192, 192, 192],
  "skyblue": [135, 206, 235],
  "slateblue": [106, 90, 205],
  "slategray": [112, 128, 144],
  "slategrey": [112, 128, 144],
  "snow": [255, 250, 250],
  "springgreen": [0, 255, 127],
  "steelblue": [70, 130, 180],
  "tan": [210, 180, 140],
  "teal": [0, 128, 128],
  "thistle": [216, 191, 216],
  "tomato": [255, 99, 71],
  "turquoise": [64, 224, 208],
  "violet": [238, 130, 238],
  "wheat": [245, 222, 179],
  "white": [255, 255, 255],
  "whitesmoke": [245, 245, 245],
  "yellow": [255, 255, 0],
  "yellowgreen": [154, 205, 50]
};

/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

{
  (function () {

    Object.defineProperty(exports, '__esModule', {
      value: true
    }); // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.

    var hasSymbol = typeof Symbol === 'function' && Symbol.for;
    var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
    var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
    var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
    var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
    var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
    var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
    var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
    var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
    var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
    var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
    var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
    var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

    function isValidElementType(type) {
      return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || _typeof(type) === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
    }
    /**
     * Forked from fbjs/warning:
     * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
     *
     * Only change is we use console.warn instead of console.error,
     * and do nothing when 'console' is not supported.
     * This really simplifies the code.
     * ---
     * Similar to invariant but only logs a warning if the condition is not met.
     * This can be used to log issues in development environments in critical
     * paths. Removing the logging code for production environments will keep the
     * same logic and follow the same code paths.
     */


    var lowPriorityWarning = function lowPriorityWarning() {};

    {
      var printWarning = function printWarning(format) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        var argIndex = 0;
        var message = 'Warning: ' + format.replace(/%s/g, function () {
          return args[argIndex++];
        });

        if (typeof console !== 'undefined') {
          console.warn(message);
        }

        try {
          // --- Welcome to debugging React ---
          // This error was thrown as a convenience so that you can use this stack
          // to find the callsite that caused this warning to fire.
          throw new Error(message);
        } catch (x) {}
      };

      lowPriorityWarning = function lowPriorityWarning(condition, format) {
        if (format === undefined) {
          throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
        }

        if (!condition) {
          for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
            args[_key2 - 2] = arguments[_key2];
          }

          printWarning.apply(undefined, [format].concat(args));
        }
      };
    }
    var lowPriorityWarning$1 = lowPriorityWarning;

    function typeOf(object) {
      if (_typeof(object) === 'object' && object !== null) {
        var $$typeof = object.$$typeof;

        switch ($$typeof) {
          case REACT_ELEMENT_TYPE:
            var type = object.type;

            switch (type) {
              case REACT_ASYNC_MODE_TYPE:
              case REACT_CONCURRENT_MODE_TYPE:
              case REACT_FRAGMENT_TYPE:
              case REACT_PROFILER_TYPE:
              case REACT_STRICT_MODE_TYPE:
              case REACT_SUSPENSE_TYPE:
                return type;

              default:
                var $$typeofType = type && type.$$typeof;

                switch ($$typeofType) {
                  case REACT_CONTEXT_TYPE:
                  case REACT_FORWARD_REF_TYPE:
                  case REACT_PROVIDER_TYPE:
                    return $$typeofType;

                  default:
                    return $$typeof;
                }

            }

          case REACT_LAZY_TYPE:
          case REACT_MEMO_TYPE:
          case REACT_PORTAL_TYPE:
            return $$typeof;
        }
      }

      return undefined;
    } // AsyncMode is deprecated along with isAsyncMode


    var AsyncMode = REACT_ASYNC_MODE_TYPE;
    var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
    var ContextConsumer = REACT_CONTEXT_TYPE;
    var ContextProvider = REACT_PROVIDER_TYPE;
    var Element = REACT_ELEMENT_TYPE;
    var ForwardRef = REACT_FORWARD_REF_TYPE;
    var Fragment = REACT_FRAGMENT_TYPE;
    var Lazy = REACT_LAZY_TYPE;
    var Memo = REACT_MEMO_TYPE;
    var Portal = REACT_PORTAL_TYPE;
    var Profiler = REACT_PROFILER_TYPE;
    var StrictMode = REACT_STRICT_MODE_TYPE;
    var Suspense = REACT_SUSPENSE_TYPE;
    var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

    function isAsyncMode(object) {
      {
        if (!hasWarnedAboutDeprecatedIsAsyncMode) {
          hasWarnedAboutDeprecatedIsAsyncMode = true;
          lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
        }
      }
      return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
    }

    function isConcurrentMode(object) {
      return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
    }

    function isContextConsumer(object) {
      return typeOf(object) === REACT_CONTEXT_TYPE;
    }

    function isContextProvider(object) {
      return typeOf(object) === REACT_PROVIDER_TYPE;
    }

    function isElement(object) {
      return _typeof(object) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }

    function isForwardRef(object) {
      return typeOf(object) === REACT_FORWARD_REF_TYPE;
    }

    function isFragment(object) {
      return typeOf(object) === REACT_FRAGMENT_TYPE;
    }

    function isLazy(object) {
      return typeOf(object) === REACT_LAZY_TYPE;
    }

    function isMemo(object) {
      return typeOf(object) === REACT_MEMO_TYPE;
    }

    function isPortal(object) {
      return typeOf(object) === REACT_PORTAL_TYPE;
    }

    function isProfiler(object) {
      return typeOf(object) === REACT_PROFILER_TYPE;
    }

    function isStrictMode(object) {
      return typeOf(object) === REACT_STRICT_MODE_TYPE;
    }

    function isSuspense(object) {
      return typeOf(object) === REACT_SUSPENSE_TYPE;
    }

    exports.typeOf = typeOf;
    exports.AsyncMode = AsyncMode;
    exports.ConcurrentMode = ConcurrentMode;
    exports.ContextConsumer = ContextConsumer;
    exports.ContextProvider = ContextProvider;
    exports.Element = Element;
    exports.ForwardRef = ForwardRef;
    exports.Fragment = Fragment;
    exports.Lazy = Lazy;
    exports.Memo = Memo;
    exports.Portal = Portal;
    exports.Profiler = Profiler;
    exports.StrictMode = StrictMode;
    exports.Suspense = Suspense;
    exports.isValidElementType = isValidElementType;
    exports.isAsyncMode = isAsyncMode;
    exports.isConcurrentMode = isConcurrentMode;
    exports.isContextConsumer = isContextConsumer;
    exports.isContextProvider = isContextProvider;
    exports.isElement = isElement;
    exports.isForwardRef = isForwardRef;
    exports.isFragment = isFragment;
    exports.isLazy = isLazy;
    exports.isMemo = isMemo;
    exports.isPortal = isPortal;
    exports.isProfiler = isProfiler;
    exports.isStrictMode = isStrictMode;
    exports.isSuspense = isSuspense;
  })();
}

/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


{
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),

/***/ "./packages/pretty-format/src/collections.ts":
/*!***************************************************!*\
  !*** ./packages/pretty-format/src/collections.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.printIteratorEntries = printIteratorEntries;
exports.printIteratorValues = printIteratorValues;
exports.printListItems = printListItems;
exports.printObjectProperties = printObjectProperties;

/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var getKeysOfEnumerableProperties = function getKeysOfEnumerableProperties(object) {
  var keys = Object.keys(object).sort();

  if (Object.getOwnPropertySymbols) {
    Object.getOwnPropertySymbols(object).forEach(function (symbol) {
      if (Object.getOwnPropertyDescriptor(object, symbol).enumerable) {
        keys.push(symbol);
      }
    });
  }

  return keys;
};
/**
 * Return entries (for example, of a map)
 * with spacing, indentation, and comma
 * without surrounding punctuation (for example, braces)
 */


function printIteratorEntries( // Flow 0.51.0: property `@@iterator` of $Iterator not found in Object
// To allow simplistic getRecordIterator in immutable.js
iterator, config, indentation, depth, refs, printer) {
  var separator = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : ': ';
  var result = '';
  var current = iterator.next();

  if (!current.done) {
    result += config.spacingOuter;
    var indentationNext = indentation + config.indent;

    while (!current.done) {
      var name = printer(current.value[0], config, indentationNext, depth, refs);
      var value = printer(current.value[1], config, indentationNext, depth, refs);
      result += indentationNext + name + separator + value;
      current = iterator.next();

      if (!current.done) {
        result += ',' + config.spacingInner;
      } else if (!config.min) {
        result += ',';
      }
    }

    result += config.spacingOuter + indentation;
  }

  return result;
}
/**
 * Return values (for example, of a set)
 * with spacing, indentation, and comma
 * without surrounding punctuation (braces or brackets)
 */


function printIteratorValues(iterator, config, indentation, depth, refs, printer) {
  var result = '';
  var current = iterator.next();

  if (!current.done) {
    result += config.spacingOuter;
    var indentationNext = indentation + config.indent;

    while (!current.done) {
      result += indentationNext + printer(current.value, config, indentationNext, depth, refs);
      current = iterator.next();

      if (!current.done) {
        result += ',' + config.spacingInner;
      } else if (!config.min) {
        result += ',';
      }
    }

    result += config.spacingOuter + indentation;
  }

  return result;
}
/**
 * Return items (for example, of an array)
 * with spacing, indentation, and comma
 * without surrounding punctuation (for example, brackets)
 **/


function printListItems(list, config, indentation, depth, refs, printer) {
  var result = '';

  if (list.length) {
    result += config.spacingOuter;
    var indentationNext = indentation + config.indent;

    for (var i = 0; i < list.length; i++) {
      result += indentationNext + printer(list[i], config, indentationNext, depth, refs);

      if (i < list.length - 1) {
        result += ',' + config.spacingInner;
      } else if (!config.min) {
        result += ',';
      }
    }

    result += config.spacingOuter + indentation;
  }

  return result;
}
/**
 * Return properties of an object
 * with spacing, indentation, and comma
 * without surrounding punctuation (for example, braces)
 */


function printObjectProperties(val, config, indentation, depth, refs, printer) {
  var result = '';
  var keys = getKeysOfEnumerableProperties(val);

  if (keys.length) {
    result += config.spacingOuter;
    var indentationNext = indentation + config.indent;

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var name = printer(key, config, indentationNext, depth, refs);
      var value = printer(val[key], config, indentationNext, depth, refs);
      result += indentationNext + name + ': ' + value;

      if (i < keys.length - 1) {
        result += ',' + config.spacingInner;
      } else if (!config.min) {
        result += ',';
      }
    }

    result += config.spacingOuter + indentation;
  }

  return result;
}

/***/ }),

/***/ "./packages/pretty-format/src/index.ts":
/*!*********************************************!*\
  !*** ./packages/pretty-format/src/index.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var _ansiStyles = _interopRequireDefault(__webpack_require__(/*! ansi-styles */ "./node_modules/ansi-styles/index.js"));

var _collections = __webpack_require__(/*! ./collections */ "./packages/pretty-format/src/collections.ts");

var _AsymmetricMatcher = _interopRequireDefault(__webpack_require__(/*! ./plugins/AsymmetricMatcher */ "./packages/pretty-format/src/plugins/AsymmetricMatcher.ts"));

var _ConvertAnsi = _interopRequireDefault(__webpack_require__(/*! ./plugins/ConvertAnsi */ "./packages/pretty-format/src/plugins/ConvertAnsi.ts"));

var _DOMCollection = _interopRequireDefault(__webpack_require__(/*! ./plugins/DOMCollection */ "./packages/pretty-format/src/plugins/DOMCollection.ts"));

var _DOMElement = _interopRequireDefault(__webpack_require__(/*! ./plugins/DOMElement */ "./packages/pretty-format/src/plugins/DOMElement.ts"));

var _Immutable = _interopRequireDefault(__webpack_require__(/*! ./plugins/Immutable */ "./packages/pretty-format/src/plugins/Immutable.ts"));

var _ReactElement = _interopRequireDefault(__webpack_require__(/*! ./plugins/ReactElement */ "./packages/pretty-format/src/plugins/ReactElement.ts"));

var _ReactTestComponent = _interopRequireDefault(__webpack_require__(/*! ./plugins/ReactTestComponent */ "./packages/pretty-format/src/plugins/ReactTestComponent.ts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var toString = Object.prototype.toString;
var toISOString = Date.prototype.toISOString;
var errorToString = Error.prototype.toString;
var regExpToString = RegExp.prototype.toString;
var symbolToString = Symbol.prototype.toString;
/**
 * Explicitly comparing typeof constructor to function avoids undefined as name
 * when mock identity-obj-proxy returns the key as the value for any key.
 */

var getConstructorName = function getConstructorName(val) {
  return typeof val.constructor === 'function' && val.constructor.name || 'Object';
};
/* global window */

/** Is val is equal to global window object? Works even if it does not exist :) */


var isWindow = function isWindow(val) {
  return typeof window !== 'undefined' && val === window;
};

var SYMBOL_REGEXP = /^Symbol\((.*)\)(.*)$/;
var NEWLINE_REGEXP = /\n/gi;

var PrettyFormatPluginError =
/*#__PURE__*/
function (_Error) {
  _inherits(PrettyFormatPluginError, _Error);

  function PrettyFormatPluginError(message, stack) {
    var _this;

    _classCallCheck(this, PrettyFormatPluginError);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PrettyFormatPluginError).call(this, message));
    _this.stack = stack;
    _this.name = _this.constructor.name;
    return _this;
  }

  return PrettyFormatPluginError;
}(_wrapNativeSuper(Error));

function isToStringedArrayType(toStringed) {
  return toStringed === '[object Array]' || toStringed === '[object ArrayBuffer]' || toStringed === '[object DataView]' || toStringed === '[object Float32Array]' || toStringed === '[object Float64Array]' || toStringed === '[object Int8Array]' || toStringed === '[object Int16Array]' || toStringed === '[object Int32Array]' || toStringed === '[object Uint8Array]' || toStringed === '[object Uint8ClampedArray]' || toStringed === '[object Uint16Array]' || toStringed === '[object Uint32Array]';
}

function printNumber(val) {
  return Object.is(val, -0) ? '-0' : String(val);
}

function printBigInt(val) {
  return String("".concat(val, "n"));
}

function printFunction(val, printFunctionName) {
  if (!printFunctionName) {
    return '[Function]';
  }

  return '[Function ' + (val.name || 'anonymous') + ']';
}

function printSymbol(val) {
  return symbolToString.call(val).replace(SYMBOL_REGEXP, 'Symbol($1)');
}

function printError(val) {
  return '[' + errorToString.call(val) + ']';
}
/**
 * The first port of call for printing an object, handles most of the
 * data-types in JS.
 */


function printBasicValue(val, printFunctionName, escapeRegex, escapeString) {
  if (val === true || val === false) {
    return '' + val;
  }

  if (val === undefined) {
    return 'undefined';
  }

  if (val === null) {
    return 'null';
  }

  var typeOf = _typeof(val);

  if (typeOf === 'number') {
    return printNumber(val);
  }

  if (typeOf === 'bigint') {
    return printBigInt(val);
  }

  if (typeOf === 'string') {
    if (escapeString) {
      return '"' + val.replace(/"|\\/g, '\\$&') + '"';
    }

    return '"' + val + '"';
  }

  if (typeOf === 'function') {
    return printFunction(val, printFunctionName);
  }

  if (typeOf === 'symbol') {
    return printSymbol(val);
  }

  var toStringed = toString.call(val);

  if (toStringed === '[object WeakMap]') {
    return 'WeakMap {}';
  }

  if (toStringed === '[object WeakSet]') {
    return 'WeakSet {}';
  }

  if (toStringed === '[object Function]' || toStringed === '[object GeneratorFunction]') {
    return printFunction(val, printFunctionName);
  }

  if (toStringed === '[object Symbol]') {
    return printSymbol(val);
  }

  if (toStringed === '[object Date]') {
    return isNaN(+val) ? 'Date { NaN }' : toISOString.call(val);
  }

  if (toStringed === '[object Error]') {
    return printError(val);
  }

  if (toStringed === '[object RegExp]') {
    if (escapeRegex) {
      // https://github.com/benjamingr/RegExp.escape/blob/master/polyfill.js
      return regExpToString.call(val).replace(/[\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    return regExpToString.call(val);
  }

  if (val instanceof Error) {
    return printError(val);
  }

  return null;
}
/**
 * Handles more complex objects ( such as objects with circular references.
 * maps and sets etc )
 */


function printComplexValue(val, config, indentation, depth, refs, hasCalledToJSON) {
  if (refs.indexOf(val) !== -1) {
    return '[Circular]';
  }

  refs = refs.slice();
  refs.push(val);
  var hitMaxDepth = ++depth > config.maxDepth;
  var min = config.min;

  if (config.callToJSON && !hitMaxDepth && val.toJSON && typeof val.toJSON === 'function' && !hasCalledToJSON) {
    return printer(val.toJSON(), config, indentation, depth, refs, true);
  }

  var toStringed = toString.call(val);

  if (toStringed === '[object Arguments]') {
    return hitMaxDepth ? '[Arguments]' : (min ? '' : 'Arguments ') + '[' + (0, _collections.printListItems)(val, config, indentation, depth, refs, printer) + ']';
  }

  if (isToStringedArrayType(toStringed)) {
    return hitMaxDepth ? '[' + val.constructor.name + ']' : (min ? '' : val.constructor.name + ' ') + '[' + (0, _collections.printListItems)(val, config, indentation, depth, refs, printer) + ']';
  }

  if (toStringed === '[object Map]') {
    return hitMaxDepth ? '[Map]' : 'Map {' + (0, _collections.printIteratorEntries)(val.entries(), config, indentation, depth, refs, printer, ' => ') + '}';
  }

  if (toStringed === '[object Set]') {
    return hitMaxDepth ? '[Set]' : 'Set {' + (0, _collections.printIteratorValues)(val.values(), config, indentation, depth, refs, printer) + '}';
  } // Avoid failure to serialize global window object in jsdom test environment.
  // For example, not even relevant if window is prop of React element.


  return hitMaxDepth || isWindow(val) ? '[' + getConstructorName(val) + ']' : (min ? '' : getConstructorName(val) + ' ') + '{' + (0, _collections.printObjectProperties)(val, config, indentation, depth, refs, printer) + '}';
}

function isNewPlugin(plugin) {
  return plugin.serialize != null;
}

function printPlugin(plugin, val, config, indentation, depth, refs) {
  var printed;

  try {
    printed = isNewPlugin(plugin) ? plugin.serialize(val, config, indentation, depth, refs, printer) : plugin.print(val, function (valChild) {
      return printer(valChild, config, indentation, depth, refs);
    }, function (str) {
      var indentationNext = indentation + config.indent;
      return indentationNext + str.replace(NEWLINE_REGEXP, '\n' + indentationNext);
    }, {
      edgeSpacing: config.spacingOuter,
      min: config.min,
      spacing: config.spacingInner
    }, config.colors);
  } catch (error) {
    throw new PrettyFormatPluginError(error.message, error.stack);
  }

  if (typeof printed !== 'string') {
    throw new Error("pretty-format: Plugin must return type \"string\" but instead returned \"".concat(_typeof(printed), "\"."));
  }

  return printed;
}

function findPlugin(plugins, val) {
  for (var p = 0; p < plugins.length; p++) {
    try {
      if (plugins[p].test(val)) {
        return plugins[p];
      }
    } catch (error) {
      throw new PrettyFormatPluginError(error.message, error.stack);
    }
  }

  return null;
}

function printer(val, config, indentation, depth, refs, hasCalledToJSON) {
  var plugin = findPlugin(config.plugins, val);

  if (plugin !== null) {
    return printPlugin(plugin, val, config, indentation, depth, refs);
  }

  var basicResult = printBasicValue(val, config.printFunctionName, config.escapeRegex, config.escapeString);

  if (basicResult !== null) {
    return basicResult;
  }

  return printComplexValue(val, config, indentation, depth, refs, hasCalledToJSON);
}

var DEFAULT_THEME = {
  comment: 'gray',
  content: 'reset',
  prop: 'yellow',
  tag: 'cyan',
  value: 'green'
};
var DEFAULT_THEME_KEYS = Object.keys(DEFAULT_THEME);
var DEFAULT_OPTIONS = {
  callToJSON: true,
  escapeRegex: false,
  escapeString: true,
  highlight: false,
  indent: 2,
  maxDepth: Infinity,
  min: false,
  plugins: [],
  printFunctionName: true,
  theme: DEFAULT_THEME
};

function validateOptions(options) {
  Object.keys(options).forEach(function (key) {
    if (!DEFAULT_OPTIONS.hasOwnProperty(key)) {
      throw new Error("pretty-format: Unknown option \"".concat(key, "\"."));
    }
  });

  if (options.min && options.indent !== undefined && options.indent !== 0) {
    throw new Error('pretty-format: Options "min" and "indent" cannot be used together.');
  }

  if (options.theme !== undefined) {
    if (options.theme === null) {
      throw new Error("pretty-format: Option \"theme\" must not be null.");
    }

    if (_typeof(options.theme) !== 'object') {
      throw new Error("pretty-format: Option \"theme\" must be of type \"object\" but instead received \"".concat(_typeof(options.theme), "\"."));
    }
  }
}

var getColorsHighlight = function getColorsHighlight(options) {
  return DEFAULT_THEME_KEYS.reduce(function (colors, key) {
    var value = options.theme && options.theme[key] !== undefined ? options.theme[key] : DEFAULT_THEME[key];
    var color = value && _ansiStyles.default[value];

    if (color && typeof color.close === 'string' && typeof color.open === 'string') {
      colors[key] = color;
    } else {
      throw new Error("pretty-format: Option \"theme\" has a key \"".concat(key, "\" whose value \"").concat(value, "\" is undefined in ansi-styles."));
    }

    return colors;
  }, Object.create(null));
};

var getColorsEmpty = function getColorsEmpty() {
  return DEFAULT_THEME_KEYS.reduce(function (colors, key) {
    colors[key] = {
      close: '',
      open: ''
    };
    return colors;
  }, Object.create(null));
};

var getPrintFunctionName = function getPrintFunctionName(options) {
  return options && options.printFunctionName !== undefined ? options.printFunctionName : DEFAULT_OPTIONS.printFunctionName;
};

var getEscapeRegex = function getEscapeRegex(options) {
  return options && options.escapeRegex !== undefined ? options.escapeRegex : DEFAULT_OPTIONS.escapeRegex;
};

var getEscapeString = function getEscapeString(options) {
  return options && options.escapeString !== undefined ? options.escapeString : DEFAULT_OPTIONS.escapeString;
};

var getConfig = function getConfig(options) {
  return {
    callToJSON: options && options.callToJSON !== undefined ? options.callToJSON : DEFAULT_OPTIONS.callToJSON,
    colors: options && options.highlight ? getColorsHighlight(options) : getColorsEmpty(),
    escapeRegex: getEscapeRegex(options),
    escapeString: getEscapeString(options),
    indent: options && options.min ? '' : createIndent(options && options.indent !== undefined ? options.indent : DEFAULT_OPTIONS.indent),
    maxDepth: options && options.maxDepth !== undefined ? options.maxDepth : DEFAULT_OPTIONS.maxDepth,
    min: options && options.min !== undefined ? options.min : DEFAULT_OPTIONS.min,
    plugins: options && options.plugins !== undefined ? options.plugins : DEFAULT_OPTIONS.plugins,
    printFunctionName: getPrintFunctionName(options),
    spacingInner: options && options.min ? ' ' : '\n',
    spacingOuter: options && options.min ? '' : '\n'
  };
};

function createIndent(indent) {
  return new Array(indent + 1).join(' ');
}
/**
 * Returns a presentation string of your `val` object
 * @param val any potential JavaScript object
 * @param options Custom settings
 */


function prettyFormat(val, options) {
  if (options) {
    validateOptions(options);

    if (options.plugins) {
      var plugin = findPlugin(options.plugins, val);

      if (plugin !== null) {
        return printPlugin(plugin, val, getConfig(options), '', 0, []);
      }
    }
  }

  var basicResult = printBasicValue(val, getPrintFunctionName(options), getEscapeRegex(options), getEscapeString(options));

  if (basicResult !== null) {
    return basicResult;
  }

  return printComplexValue(val, getConfig(options), '', 0, []);
}

prettyFormat.plugins = {
  AsymmetricMatcher: _AsymmetricMatcher.default,
  ConvertAnsi: _ConvertAnsi.default,
  DOMCollection: _DOMCollection.default,
  DOMElement: _DOMElement.default,
  Immutable: _Immutable.default,
  ReactElement: _ReactElement.default,
  ReactTestComponent: _ReactTestComponent.default
};
/* eslint-disable-next-line no-redeclare */

module.exports = prettyFormat;

/***/ }),

/***/ "./packages/pretty-format/src/plugins/AsymmetricMatcher.ts":
/*!*****************************************************************!*\
  !*** ./packages/pretty-format/src/plugins/AsymmetricMatcher.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.test = exports.serialize = void 0;

var _collections = __webpack_require__(/*! ../collections */ "./packages/pretty-format/src/collections.ts");

/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var asymmetricMatcher = Symbol.for('jest.asymmetricMatcher');
var SPACE = ' ';

var serialize = function serialize(val, config, indentation, depth, refs, printer) {
  var stringedValue = val.toString();

  if (stringedValue === 'ArrayContaining' || stringedValue === 'ArrayNotContaining') {
    if (++depth > config.maxDepth) {
      return '[' + stringedValue + ']';
    }

    return stringedValue + SPACE + '[' + (0, _collections.printListItems)(val.sample, config, indentation, depth, refs, printer) + ']';
  }

  if (stringedValue === 'ObjectContaining' || stringedValue === 'ObjectNotContaining') {
    if (++depth > config.maxDepth) {
      return '[' + stringedValue + ']';
    }

    return stringedValue + SPACE + '{' + (0, _collections.printObjectProperties)(val.sample, config, indentation, depth, refs, printer) + '}';
  }

  if (stringedValue === 'StringMatching' || stringedValue === 'StringNotMatching') {
    return stringedValue + SPACE + printer(val.sample, config, indentation, depth, refs);
  }

  if (stringedValue === 'StringContaining' || stringedValue === 'StringNotContaining') {
    return stringedValue + SPACE + printer(val.sample, config, indentation, depth, refs);
  }

  return val.toAsymmetricMatcher();
};

exports.serialize = serialize;

var test = function test(val) {
  return val && val.$$typeof === asymmetricMatcher;
};

exports.test = test;
var plugin = {
  serialize: serialize,
  test: test
};
var _default = plugin;
exports.default = _default;

/***/ }),

/***/ "./packages/pretty-format/src/plugins/ConvertAnsi.ts":
/*!***********************************************************!*\
  !*** ./packages/pretty-format/src/plugins/ConvertAnsi.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.serialize = exports.test = void 0;

var _ansiRegex = _interopRequireDefault(__webpack_require__(/*! ansi-regex */ "./node_modules/ansi-regex/index.js"));

var _ansiStyles = _interopRequireDefault(__webpack_require__(/*! ansi-styles */ "./node_modules/ansi-styles/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var toHumanReadableAnsi = function toHumanReadableAnsi(text) {
  return text.replace((0, _ansiRegex.default)(), function (match) {
    switch (match) {
      case _ansiStyles.default.red.close:
      case _ansiStyles.default.green.close:
      case _ansiStyles.default.cyan.close:
      case _ansiStyles.default.gray.close:
      case _ansiStyles.default.white.close:
      case _ansiStyles.default.yellow.close:
      case _ansiStyles.default.bgRed.close:
      case _ansiStyles.default.bgGreen.close:
      case _ansiStyles.default.bgYellow.close:
      case _ansiStyles.default.inverse.close:
      case _ansiStyles.default.dim.close:
      case _ansiStyles.default.bold.close:
      case _ansiStyles.default.reset.open:
      case _ansiStyles.default.reset.close:
        return '</>';

      case _ansiStyles.default.red.open:
        return '<red>';

      case _ansiStyles.default.green.open:
        return '<green>';

      case _ansiStyles.default.cyan.open:
        return '<cyan>';

      case _ansiStyles.default.gray.open:
        return '<gray>';

      case _ansiStyles.default.white.open:
        return '<white>';

      case _ansiStyles.default.yellow.open:
        return '<yellow>';

      case _ansiStyles.default.bgRed.open:
        return '<bgRed>';

      case _ansiStyles.default.bgGreen.open:
        return '<bgGreen>';

      case _ansiStyles.default.bgYellow.open:
        return '<bgYellow>';

      case _ansiStyles.default.inverse.open:
        return '<inverse>';

      case _ansiStyles.default.dim.open:
        return '<dim>';

      case _ansiStyles.default.bold.open:
        return '<bold>';

      default:
        return '';
    }
  });
};

var test = function test(val) {
  return typeof val === 'string' && !!val.match((0, _ansiRegex.default)());
};

exports.test = test;

var serialize = function serialize(val, config, indentation, depth, refs, printer) {
  return printer(toHumanReadableAnsi(val), config, indentation, depth, refs);
};

exports.serialize = serialize;
var plugin = {
  serialize: serialize,
  test: test
};
var _default = plugin;
exports.default = _default;

/***/ }),

/***/ "./packages/pretty-format/src/plugins/DOMCollection.ts":
/*!*************************************************************!*\
  !*** ./packages/pretty-format/src/plugins/DOMCollection.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.serialize = exports.test = void 0;

var _collections = __webpack_require__(/*! ../collections */ "./packages/pretty-format/src/collections.ts");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SPACE = ' ';
var OBJECT_NAMES = ['DOMStringMap', 'NamedNodeMap'];
var ARRAY_REGEXP = /^(HTML\w*Collection|NodeList)$/;

var testName = function testName(name) {
  return OBJECT_NAMES.indexOf(name) !== -1 || ARRAY_REGEXP.test(name);
};

var test = function test(val) {
  return val && val.constructor && val.constructor.name && testName(val.constructor.name);
}; // Convert array of attribute objects to props object.


exports.test = test;

var propsReducer = function propsReducer(props, attribute) {
  props[attribute.name] = attribute.value;
  return props;
};

var serialize = function serialize(collection, config, indentation, depth, refs, printer) {
  var name = collection.constructor.name;

  if (++depth > config.maxDepth) {
    return '[' + name + ']';
  }

  return (config.min ? '' : name + SPACE) + (OBJECT_NAMES.indexOf(name) !== -1 ? '{' + (0, _collections.printObjectProperties)(name === 'NamedNodeMap' ? Array.prototype.reduce.call(collection, propsReducer, {}) : _objectSpread({}, collection), config, indentation, depth, refs, printer) + '}' : '[' + (0, _collections.printListItems)(Array.from(collection), config, indentation, depth, refs, printer) + ']');
};

exports.serialize = serialize;
var plugin = {
  serialize: serialize,
  test: test
};
var _default = plugin;
exports.default = _default;

/***/ }),

/***/ "./packages/pretty-format/src/plugins/DOMElement.ts":
/*!**********************************************************!*\
  !*** ./packages/pretty-format/src/plugins/DOMElement.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.serialize = exports.test = void 0;

var _markup = __webpack_require__(/*! ./lib/markup */ "./packages/pretty-format/src/plugins/lib/markup.ts");

/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ELEMENT_NODE = 1;
var TEXT_NODE = 3;
var COMMENT_NODE = 8;
var FRAGMENT_NODE = 11;
var ELEMENT_REGEXP = /^((HTML|SVG)\w*)?Element$/;

var testNode = function testNode(nodeType, name) {
  return nodeType === ELEMENT_NODE && ELEMENT_REGEXP.test(name) || nodeType === TEXT_NODE && name === 'Text' || nodeType === COMMENT_NODE && name === 'Comment' || nodeType === FRAGMENT_NODE && name === 'DocumentFragment';
};

var test = function test(val) {
  return val && val.constructor && val.constructor.name && testNode(val.nodeType, val.constructor.name);
};

exports.test = test;

function nodeIsText(node) {
  return node.nodeType === TEXT_NODE;
}

function nodeIsComment(node) {
  return node.nodeType === COMMENT_NODE;
}

function nodeIsFragment(node) {
  return node.nodeType === FRAGMENT_NODE;
}

var serialize = function serialize(node, config, indentation, depth, refs, printer) {
  if (nodeIsText(node)) {
    return (0, _markup.printText)(node.data, config);
  }

  if (nodeIsComment(node)) {
    return (0, _markup.printComment)(node.data, config);
  }

  var type = nodeIsFragment(node) ? "DocumentFragment" : node.tagName.toLowerCase();

  if (++depth > config.maxDepth) {
    return (0, _markup.printElementAsLeaf)(type, config);
  }

  return (0, _markup.printElement)(type, (0, _markup.printProps)(nodeIsFragment(node) ? [] : Array.from(node.attributes).map(function (attr) {
    return attr.name;
  }).sort(), nodeIsFragment(node) ? [] : Array.from(node.attributes).reduce(function (props, attribute) {
    props[attribute.name] = attribute.value;
    return props;
  }, {}), config, indentation + config.indent, depth, refs, printer), (0, _markup.printChildren)(Array.prototype.slice.call(node.childNodes || node.children), config, indentation + config.indent, depth, refs, printer), config, indentation);
};

exports.serialize = serialize;
var plugin = {
  serialize: serialize,
  test: test
};
var _default = plugin;
exports.default = _default;

/***/ }),

/***/ "./packages/pretty-format/src/plugins/Immutable.ts":
/*!*********************************************************!*\
  !*** ./packages/pretty-format/src/plugins/Immutable.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.test = exports.serialize = void 0;

var _collections = __webpack_require__(/*! ../collections */ "./packages/pretty-format/src/collections.ts");

/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// SENTINEL constants are from https://github.com/facebook/immutable-js
var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
var IS_LIST_SENTINEL = '@@__IMMUTABLE_LIST__@@';
var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
var IS_MAP_SENTINEL = '@@__IMMUTABLE_MAP__@@';
var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';
var IS_RECORD_SENTINEL = '@@__IMMUTABLE_RECORD__@@'; // immutable v4

var IS_SEQ_SENTINEL = '@@__IMMUTABLE_SEQ__@@';
var IS_SET_SENTINEL = '@@__IMMUTABLE_SET__@@';
var IS_STACK_SENTINEL = '@@__IMMUTABLE_STACK__@@';

var getImmutableName = function getImmutableName(name) {
  return 'Immutable.' + name;
};

var printAsLeaf = function printAsLeaf(name) {
  return '[' + name + ']';
};

var SPACE = ' ';
var LAZY = '…'; // Seq is lazy if it calls a method like filter

var printImmutableEntries = function printImmutableEntries(val, config, indentation, depth, refs, printer, type) {
  return ++depth > config.maxDepth ? printAsLeaf(getImmutableName(type)) : getImmutableName(type) + SPACE + '{' + (0, _collections.printIteratorEntries)(val.entries(), config, indentation, depth, refs, printer) + '}';
}; // Record has an entries method because it is a collection in immutable v3.
// Return an iterator for Immutable Record from version v3 or v4.


var getRecordEntries = function getRecordEntries(val) {
  var i = 0;
  return {
    next: function next() {
      if (i < val._keys.length) {
        var key = val._keys[i++];
        return {
          done: false,
          value: [key, val.get(key)]
        };
      }

      return {
        done: true
      };
    }
  };
};

var printImmutableRecord = function printImmutableRecord(val, config, indentation, depth, refs, printer) {
  // _name property is defined only for an Immutable Record instance
  // which was constructed with a second optional descriptive name arg
  var name = getImmutableName(val._name || 'Record');
  return ++depth > config.maxDepth ? printAsLeaf(name) : name + SPACE + '{' + (0, _collections.printIteratorEntries)(getRecordEntries(val), config, indentation, depth, refs, printer) + '}';
};

var printImmutableSeq = function printImmutableSeq(val, config, indentation, depth, refs, printer) {
  var name = getImmutableName('Seq');

  if (++depth > config.maxDepth) {
    return printAsLeaf(name);
  }

  if (val[IS_KEYED_SENTINEL]) {
    return name + SPACE + '{' + ( // from Immutable collection of entries or from ECMAScript object
    val._iter || val._object ? (0, _collections.printIteratorEntries)(val.entries(), config, indentation, depth, refs, printer) : LAZY) + '}';
  }

  return name + SPACE + '[' + (val._iter || // from Immutable collection of values
  val._array || // from ECMAScript array
  val._collection || // from ECMAScript collection in immutable v4
  val._iterable // from ECMAScript collection in immutable v3
  ? (0, _collections.printIteratorValues)(val.values(), config, indentation, depth, refs, printer) : LAZY) + ']';
};

var printImmutableValues = function printImmutableValues(val, config, indentation, depth, refs, printer, type) {
  return ++depth > config.maxDepth ? printAsLeaf(getImmutableName(type)) : getImmutableName(type) + SPACE + '[' + (0, _collections.printIteratorValues)(val.values(), config, indentation, depth, refs, printer) + ']';
};

var serialize = function serialize(val, config, indentation, depth, refs, printer) {
  if (val[IS_MAP_SENTINEL]) {
    return printImmutableEntries(val, config, indentation, depth, refs, printer, val[IS_ORDERED_SENTINEL] ? 'OrderedMap' : 'Map');
  }

  if (val[IS_LIST_SENTINEL]) {
    return printImmutableValues(val, config, indentation, depth, refs, printer, 'List');
  }

  if (val[IS_SET_SENTINEL]) {
    return printImmutableValues(val, config, indentation, depth, refs, printer, val[IS_ORDERED_SENTINEL] ? 'OrderedSet' : 'Set');
  }

  if (val[IS_STACK_SENTINEL]) {
    return printImmutableValues(val, config, indentation, depth, refs, printer, 'Stack');
  }

  if (val[IS_SEQ_SENTINEL]) {
    return printImmutableSeq(val, config, indentation, depth, refs, printer);
  } // For compatibility with immutable v3 and v4, let record be the default.


  return printImmutableRecord(val, config, indentation, depth, refs, printer);
}; // Explicitly comparing sentinel properties to true avoids false positive
// when mock identity-obj-proxy returns the key as the value for any key.


exports.serialize = serialize;

var test = function test(val) {
  return val && (val[IS_ITERABLE_SENTINEL] === true || val[IS_RECORD_SENTINEL] === true);
};

exports.test = test;
var plugin = {
  serialize: serialize,
  test: test
};
var _default = plugin;
exports.default = _default;

/***/ }),

/***/ "./packages/pretty-format/src/plugins/ReactElement.ts":
/*!************************************************************!*\
  !*** ./packages/pretty-format/src/plugins/ReactElement.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.test = exports.serialize = void 0;

var ReactIs = _interopRequireWildcard(__webpack_require__(/*! react-is */ "./node_modules/react-is/index.js"));

var _markup = __webpack_require__(/*! ./lib/markup */ "./packages/pretty-format/src/plugins/lib/markup.ts");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// Given element.props.children, or subtree during recursive traversal,
// return flattened array of children.
var getChildren = function getChildren(arg) {
  var children = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (Array.isArray(arg)) {
    arg.forEach(function (item) {
      getChildren(item, children);
    });
  } else if (arg != null && arg !== false) {
    children.push(arg);
  }

  return children;
};

var getType = function getType(element) {
  var type = element.type;

  if (typeof type === 'string') {
    return type;
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || 'Unknown';
  }

  if (ReactIs.isFragment(element)) {
    return 'React.Fragment';
  }

  if (ReactIs.isSuspense(element)) {
    return 'React.Suspense';
  }

  if (_typeof(type) === 'object' && type !== null) {
    if (ReactIs.isContextProvider(element)) {
      return 'Context.Provider';
    }

    if (ReactIs.isContextConsumer(element)) {
      return 'Context.Consumer';
    }

    if (ReactIs.isForwardRef(element)) {
      var functionName = type.render.displayName || type.render.name || '';
      return functionName !== '' ? 'ForwardRef(' + functionName + ')' : 'ForwardRef';
    }

    if (ReactIs.isMemo(type)) {
      var _functionName = type.displayName || type.type.displayName || type.type.name || '';

      return _functionName !== '' ? 'Memo(' + _functionName + ')' : 'Memo';
    }
  }

  return 'UNDEFINED';
};

var getPropKeys = function getPropKeys(element) {
  var props = element.props;
  return Object.keys(props).filter(function (key) {
    return key !== 'children' && props[key] !== undefined;
  }).sort();
};

var serialize = function serialize(element, config, indentation, depth, refs, printer) {
  return ++depth > config.maxDepth ? (0, _markup.printElementAsLeaf)(getType(element), config) : (0, _markup.printElement)(getType(element), (0, _markup.printProps)(getPropKeys(element), element.props, config, indentation + config.indent, depth, refs, printer), (0, _markup.printChildren)(getChildren(element.props.children), config, indentation + config.indent, depth, refs, printer), config, indentation);
};

exports.serialize = serialize;

var test = function test(val) {
  return val && ReactIs.isElement(val);
};

exports.test = test;
var plugin = {
  serialize: serialize,
  test: test
};
var _default = plugin;
exports.default = _default;

/***/ }),

/***/ "./packages/pretty-format/src/plugins/ReactTestComponent.ts":
/*!******************************************************************!*\
  !*** ./packages/pretty-format/src/plugins/ReactTestComponent.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.test = exports.serialize = void 0;

var _markup = __webpack_require__(/*! ./lib/markup */ "./packages/pretty-format/src/plugins/lib/markup.ts");

/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// Child can be `number` in Stack renderer but not in Fiber renderer.
var testSymbol = Symbol.for('react.test.json');

var getPropKeys = function getPropKeys(object) {
  var props = object.props;
  return props ? Object.keys(props).filter(function (key) {
    return props[key] !== undefined;
  }).sort() : [];
};

var serialize = function serialize(object, config, indentation, depth, refs, printer) {
  return ++depth > config.maxDepth ? (0, _markup.printElementAsLeaf)(object.type, config) : (0, _markup.printElement)(object.type, object.props ? (0, _markup.printProps)(getPropKeys(object), object.props, config, indentation + config.indent, depth, refs, printer) : '', object.children ? (0, _markup.printChildren)(object.children, config, indentation + config.indent, depth, refs, printer) : '', config, indentation);
};

exports.serialize = serialize;

var test = function test(val) {
  return val && val.$$typeof === testSymbol;
};

exports.test = test;
var plugin = {
  serialize: serialize,
  test: test
};
var _default = plugin;
exports.default = _default;

/***/ }),

/***/ "./packages/pretty-format/src/plugins/lib/escapeHTML.ts":
/*!**************************************************************!*\
  !*** ./packages/pretty-format/src/plugins/lib/escapeHTML.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = escapeHTML;

/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function escapeHTML(str) {
  return str.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/***/ }),

/***/ "./packages/pretty-format/src/plugins/lib/markup.ts":
/*!**********************************************************!*\
  !*** ./packages/pretty-format/src/plugins/lib/markup.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.printElementAsLeaf = exports.printElement = exports.printComment = exports.printText = exports.printChildren = exports.printProps = void 0;

var _escapeHTML = _interopRequireDefault(__webpack_require__(/*! ./escapeHTML */ "./packages/pretty-format/src/plugins/lib/escapeHTML.ts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// Return empty string if keys is empty.
var printProps = function printProps(keys, props, config, indentation, depth, refs, printer) {
  var indentationNext = indentation + config.indent;
  var colors = config.colors;
  return keys.map(function (key) {
    var value = props[key];
    var printed = printer(value, config, indentationNext, depth, refs);

    if (typeof value !== 'string') {
      if (printed.indexOf('\n') !== -1) {
        printed = config.spacingOuter + indentationNext + printed + config.spacingOuter + indentation;
      }

      printed = '{' + printed + '}';
    }

    return config.spacingInner + indentation + colors.prop.open + key + colors.prop.close + '=' + colors.value.open + printed + colors.value.close;
  }).join('');
}; // Return empty string if children is empty.


exports.printProps = printProps;

var printChildren = function printChildren(children, config, indentation, depth, refs, printer) {
  return children.map(function (child) {
    return config.spacingOuter + indentation + (typeof child === 'string' ? printText(child, config) : printer(child, config, indentation, depth, refs));
  }).join('');
};

exports.printChildren = printChildren;

var printText = function printText(text, config) {
  var contentColor = config.colors.content;
  return contentColor.open + (0, _escapeHTML.default)(text) + contentColor.close;
};

exports.printText = printText;

var printComment = function printComment(comment, config) {
  var commentColor = config.colors.comment;
  return commentColor.open + '<!--' + (0, _escapeHTML.default)(comment) + '-->' + commentColor.close;
}; // Separate the functions to format props, children, and element,
// so a plugin could override a particular function, if needed.
// Too bad, so sad: the traditional (but unnecessary) space
// in a self-closing tagColor requires a second test of printedProps.


exports.printComment = printComment;

var printElement = function printElement(type, printedProps, printedChildren, config, indentation) {
  var tagColor = config.colors.tag;
  return tagColor.open + '<' + type + (printedProps && tagColor.close + printedProps + config.spacingOuter + indentation + tagColor.open) + (printedChildren ? '>' + tagColor.close + printedChildren + config.spacingOuter + indentation + tagColor.open + '</' + type : (printedProps && !config.min ? '' : ' ') + '/') + '>' + tagColor.close;
};

exports.printElement = printElement;

var printElementAsLeaf = function printElementAsLeaf(type, config) {
  var tagColor = config.colors.tag;
  return tagColor.open + '<' + type + tagColor.close + ' …' + tagColor.open + ' />' + tagColor.close;
};

exports.printElementAsLeaf = printElementAsLeaf;

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map
});

/*@__PURE__*/getDefaultExportFromCjs(buildEs5);

/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// get the type of a value with handling the edge cases like `typeof []`
// and `typeof null`
function getType(value) {
  if (value === undefined) {
    return 'undefined';
  } else if (value === null) {
    return 'null';
  } else if (Array.isArray(value)) {
    return 'array';
  } else if (typeof value === 'boolean') {
    return 'boolean';
  } else if (typeof value === 'function') {
    return 'function';
  } else if (typeof value === 'number') {
    return 'number';
  } else if (typeof value === 'string') {
    return 'string';
  } else if (typeof value === 'object') {
    if (value != null) {
      if (value.constructor === RegExp) {
        return 'regexp';
      } else if (value.constructor === Map) {
        return 'map';
      } else if (value.constructor === Set) {
        return 'set';
      } else if (value.constructor === Date) {
        return 'date';
      }
    }

    return 'object';
  } else if (typeof value === 'symbol') {
    return 'symbol';
  }

  throw new Error(`value of unknown type: ${value}`);
}

getType.isPrimitive = value => Object(value) !== value;

var build = getType;

var build$1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
// This diff-sequences package implements the linear space variation in
// An O(ND) Difference Algorithm and Its Variations by Eugene W. Myers
// Relationship in notation between Myers paper and this package:
// A is a
// N is aLength, aEnd - aStart, and so on
// x is aIndex, aFirst, aLast, and so on
// B is b
// M is bLength, bEnd - bStart, and so on
// y is bIndex, bFirst, bLast, and so on
// Δ = N - M is negative of baDeltaLength = bLength - aLength
// D is d
// k is kF
// k + Δ is kF = kR - baDeltaLength
// V is aIndexesF or aIndexesR (see comment below about Indexes type)
// index intervals [1, N] and [1, M] are [0, aLength) and [0, bLength)
// starting point in forward direction (0, 0) is (-1, -1)
// starting point in reverse direction (N + 1, M + 1) is (aLength, bLength)
// The “edit graph” for sequences a and b corresponds to items:
// in a on the horizontal axis
// in b on the vertical axis
//
// Given a-coordinate of a point in a diagonal, you can compute b-coordinate.
//
// Forward diagonals kF:
// zero diagonal intersects top left corner
// positive diagonals intersect top edge
// negative diagonals insersect left edge
//
// Reverse diagonals kR:
// zero diagonal intersects bottom right corner
// positive diagonals intersect right edge
// negative diagonals intersect bottom edge
// The graph contains a directed acyclic graph of edges:
// horizontal: delete an item from a
// vertical: insert an item from b
// diagonal: common item in a and b
//
// The algorithm solves dual problems in the graph analogy:
// Find longest common subsequence: path with maximum number of diagonal edges
// Find shortest edit script: path with minimum number of non-diagonal edges
// Input callback function compares items at indexes in the sequences.
// Output callback function receives the number of adjacent items
// and starting indexes of each common subsequence.
// Either original functions or wrapped to swap indexes if graph is transposed.
// Indexes in sequence a of last point of forward or reverse paths in graph.
// Myers algorithm indexes by diagonal k which for negative is bad deopt in V8.
// This package indexes by iF and iR which are greater than or equal to zero.
// and also updates the index arrays in place to cut memory in half.
// kF = 2 * iF - d
// kR = d - 2 * iR
// Division of index intervals in sequences a and b at the middle change.
// Invariant: intervals do not have common items at the start or end.
const pkg = 'diff-sequences'; // for error messages

const NOT_YET_SET = 0; // small int instead of undefined to avoid deopt in V8
// Return the number of common items that follow in forward direction.
// The length of what Myers paper calls a “snake” in a forward path.

const countCommonItemsF = (aIndex, aEnd, bIndex, bEnd, isCommon) => {
  let nCommon = 0;

  while (aIndex < aEnd && bIndex < bEnd && isCommon(aIndex, bIndex)) {
    aIndex += 1;
    bIndex += 1;
    nCommon += 1;
  }

  return nCommon;
}; // Return the number of common items that precede in reverse direction.
// The length of what Myers paper calls a “snake” in a reverse path.

const countCommonItemsR = (aStart, aIndex, bStart, bIndex, isCommon) => {
  let nCommon = 0;

  while (aStart <= aIndex && bStart <= bIndex && isCommon(aIndex, bIndex)) {
    aIndex -= 1;
    bIndex -= 1;
    nCommon += 1;
  }

  return nCommon;
}; // A simple function to extend forward paths from (d - 1) to d changes
// when forward and reverse paths cannot yet overlap.

const extendPathsF = (d, aEnd, bEnd, bF, isCommon, aIndexesF, iMaxF) => {
  // Unroll the first iteration.
  let iF = 0;
  let kF = -d; // kF = 2 * iF - d

  let aFirst = aIndexesF[iF]; // in first iteration always insert

  let aIndexPrev1 = aFirst; // prev value of [iF - 1] in next iteration

  aIndexesF[iF] += countCommonItemsF(
    aFirst + 1,
    aEnd,
    bF + aFirst - kF + 1,
    bEnd,
    isCommon
  ); // Optimization: skip diagonals in which paths cannot ever overlap.

  const nF = d < iMaxF ? d : iMaxF; // The diagonals kF are odd when d is odd and even when d is even.

  for (iF += 1, kF += 2; iF <= nF; iF += 1, kF += 2) {
    // To get first point of path segment, move one change in forward direction
    // from last point of previous path segment in an adjacent diagonal.
    // In last possible iteration when iF === d and kF === d always delete.
    if (iF !== d && aIndexPrev1 < aIndexesF[iF]) {
      aFirst = aIndexesF[iF]; // vertical to insert from b
    } else {
      aFirst = aIndexPrev1 + 1; // horizontal to delete from a

      if (aEnd <= aFirst) {
        // Optimization: delete moved past right of graph.
        return iF - 1;
      }
    } // To get last point of path segment, move along diagonal of common items.

    aIndexPrev1 = aIndexesF[iF];
    aIndexesF[iF] =
      aFirst +
      countCommonItemsF(aFirst + 1, aEnd, bF + aFirst - kF + 1, bEnd, isCommon);
  }

  return iMaxF;
}; // A simple function to extend reverse paths from (d - 1) to d changes
// when reverse and forward paths cannot yet overlap.

const extendPathsR = (d, aStart, bStart, bR, isCommon, aIndexesR, iMaxR) => {
  // Unroll the first iteration.
  let iR = 0;
  let kR = d; // kR = d - 2 * iR

  let aFirst = aIndexesR[iR]; // in first iteration always insert

  let aIndexPrev1 = aFirst; // prev value of [iR - 1] in next iteration

  aIndexesR[iR] -= countCommonItemsR(
    aStart,
    aFirst - 1,
    bStart,
    bR + aFirst - kR - 1,
    isCommon
  ); // Optimization: skip diagonals in which paths cannot ever overlap.

  const nR = d < iMaxR ? d : iMaxR; // The diagonals kR are odd when d is odd and even when d is even.

  for (iR += 1, kR -= 2; iR <= nR; iR += 1, kR -= 2) {
    // To get first point of path segment, move one change in reverse direction
    // from last point of previous path segment in an adjacent diagonal.
    // In last possible iteration when iR === d and kR === -d always delete.
    if (iR !== d && aIndexesR[iR] < aIndexPrev1) {
      aFirst = aIndexesR[iR]; // vertical to insert from b
    } else {
      aFirst = aIndexPrev1 - 1; // horizontal to delete from a

      if (aFirst < aStart) {
        // Optimization: delete moved past left of graph.
        return iR - 1;
      }
    } // To get last point of path segment, move along diagonal of common items.

    aIndexPrev1 = aIndexesR[iR];
    aIndexesR[iR] =
      aFirst -
      countCommonItemsR(
        aStart,
        aFirst - 1,
        bStart,
        bR + aFirst - kR - 1,
        isCommon
      );
  }

  return iMaxR;
}; // A complete function to extend forward paths from (d - 1) to d changes.
// Return true if a path overlaps reverse path of (d - 1) changes in its diagonal.

const extendOverlappablePathsF = (
  d,
  aStart,
  aEnd,
  bStart,
  bEnd,
  isCommon,
  aIndexesF,
  iMaxF,
  aIndexesR,
  iMaxR,
  division
) => {
  const bF = bStart - aStart; // bIndex = bF + aIndex - kF

  const aLength = aEnd - aStart;
  const bLength = bEnd - bStart;
  const baDeltaLength = bLength - aLength; // kF = kR - baDeltaLength
  // Range of diagonals in which forward and reverse paths might overlap.

  const kMinOverlapF = -baDeltaLength - (d - 1); // -(d - 1) <= kR

  const kMaxOverlapF = -baDeltaLength + (d - 1); // kR <= (d - 1)

  let aIndexPrev1 = NOT_YET_SET; // prev value of [iF - 1] in next iteration
  // Optimization: skip diagonals in which paths cannot ever overlap.

  const nF = d < iMaxF ? d : iMaxF; // The diagonals kF = 2 * iF - d are odd when d is odd and even when d is even.

  for (let iF = 0, kF = -d; iF <= nF; iF += 1, kF += 2) {
    // To get first point of path segment, move one change in forward direction
    // from last point of previous path segment in an adjacent diagonal.
    // In first iteration when iF === 0 and kF === -d always insert.
    // In last possible iteration when iF === d and kF === d always delete.
    const insert = iF === 0 || (iF !== d && aIndexPrev1 < aIndexesF[iF]);
    const aLastPrev = insert ? aIndexesF[iF] : aIndexPrev1;
    const aFirst = insert
      ? aLastPrev // vertical to insert from b
      : aLastPrev + 1; // horizontal to delete from a
    // To get last point of path segment, move along diagonal of common items.

    const bFirst = bF + aFirst - kF;
    const nCommonF = countCommonItemsF(
      aFirst + 1,
      aEnd,
      bFirst + 1,
      bEnd,
      isCommon
    );
    const aLast = aFirst + nCommonF;
    aIndexPrev1 = aIndexesF[iF];
    aIndexesF[iF] = aLast;

    if (kMinOverlapF <= kF && kF <= kMaxOverlapF) {
      // Solve for iR of reverse path with (d - 1) changes in diagonal kF:
      // kR = kF + baDeltaLength
      // kR = (d - 1) - 2 * iR
      const iR = (d - 1 - (kF + baDeltaLength)) / 2; // If this forward path overlaps the reverse path in this diagonal,
      // then this is the middle change of the index intervals.

      if (iR <= iMaxR && aIndexesR[iR] - 1 <= aLast) {
        // Unlike the Myers algorithm which finds only the middle “snake”
        // this package can find two common subsequences per division.
        // Last point of previous path segment is on an adjacent diagonal.
        const bLastPrev = bF + aLastPrev - (insert ? kF + 1 : kF - 1); // Because of invariant that intervals preceding the middle change
        // cannot have common items at the end,
        // move in reverse direction along a diagonal of common items.

        const nCommonR = countCommonItemsR(
          aStart,
          aLastPrev,
          bStart,
          bLastPrev,
          isCommon
        );
        const aIndexPrevFirst = aLastPrev - nCommonR;
        const bIndexPrevFirst = bLastPrev - nCommonR;
        const aEndPreceding = aIndexPrevFirst + 1;
        const bEndPreceding = bIndexPrevFirst + 1;
        division.nChangePreceding = d - 1;

        if (d - 1 === aEndPreceding + bEndPreceding - aStart - bStart) {
          // Optimization: number of preceding changes in forward direction
          // is equal to number of items in preceding interval,
          // therefore it cannot contain any common items.
          division.aEndPreceding = aStart;
          division.bEndPreceding = bStart;
        } else {
          division.aEndPreceding = aEndPreceding;
          division.bEndPreceding = bEndPreceding;
        }

        division.nCommonPreceding = nCommonR;

        if (nCommonR !== 0) {
          division.aCommonPreceding = aEndPreceding;
          division.bCommonPreceding = bEndPreceding;
        }

        division.nCommonFollowing = nCommonF;

        if (nCommonF !== 0) {
          division.aCommonFollowing = aFirst + 1;
          division.bCommonFollowing = bFirst + 1;
        }

        const aStartFollowing = aLast + 1;
        const bStartFollowing = bFirst + nCommonF + 1;
        division.nChangeFollowing = d - 1;

        if (d - 1 === aEnd + bEnd - aStartFollowing - bStartFollowing) {
          // Optimization: number of changes in reverse direction
          // is equal to number of items in following interval,
          // therefore it cannot contain any common items.
          division.aStartFollowing = aEnd;
          division.bStartFollowing = bEnd;
        } else {
          division.aStartFollowing = aStartFollowing;
          division.bStartFollowing = bStartFollowing;
        }

        return true;
      }
    }
  }

  return false;
}; // A complete function to extend reverse paths from (d - 1) to d changes.
// Return true if a path overlaps forward path of d changes in its diagonal.

const extendOverlappablePathsR = (
  d,
  aStart,
  aEnd,
  bStart,
  bEnd,
  isCommon,
  aIndexesF,
  iMaxF,
  aIndexesR,
  iMaxR,
  division
) => {
  const bR = bEnd - aEnd; // bIndex = bR + aIndex - kR

  const aLength = aEnd - aStart;
  const bLength = bEnd - bStart;
  const baDeltaLength = bLength - aLength; // kR = kF + baDeltaLength
  // Range of diagonals in which forward and reverse paths might overlap.

  const kMinOverlapR = baDeltaLength - d; // -d <= kF

  const kMaxOverlapR = baDeltaLength + d; // kF <= d

  let aIndexPrev1 = NOT_YET_SET; // prev value of [iR - 1] in next iteration
  // Optimization: skip diagonals in which paths cannot ever overlap.

  const nR = d < iMaxR ? d : iMaxR; // The diagonals kR = d - 2 * iR are odd when d is odd and even when d is even.

  for (let iR = 0, kR = d; iR <= nR; iR += 1, kR -= 2) {
    // To get first point of path segment, move one change in reverse direction
    // from last point of previous path segment in an adjacent diagonal.
    // In first iteration when iR === 0 and kR === d always insert.
    // In last possible iteration when iR === d and kR === -d always delete.
    const insert = iR === 0 || (iR !== d && aIndexesR[iR] < aIndexPrev1);
    const aLastPrev = insert ? aIndexesR[iR] : aIndexPrev1;
    const aFirst = insert
      ? aLastPrev // vertical to insert from b
      : aLastPrev - 1; // horizontal to delete from a
    // To get last point of path segment, move along diagonal of common items.

    const bFirst = bR + aFirst - kR;
    const nCommonR = countCommonItemsR(
      aStart,
      aFirst - 1,
      bStart,
      bFirst - 1,
      isCommon
    );
    const aLast = aFirst - nCommonR;
    aIndexPrev1 = aIndexesR[iR];
    aIndexesR[iR] = aLast;

    if (kMinOverlapR <= kR && kR <= kMaxOverlapR) {
      // Solve for iF of forward path with d changes in diagonal kR:
      // kF = kR - baDeltaLength
      // kF = 2 * iF - d
      const iF = (d + (kR - baDeltaLength)) / 2; // If this reverse path overlaps the forward path in this diagonal,
      // then this is a middle change of the index intervals.

      if (iF <= iMaxF && aLast - 1 <= aIndexesF[iF]) {
        const bLast = bFirst - nCommonR;
        division.nChangePreceding = d;

        if (d === aLast + bLast - aStart - bStart) {
          // Optimization: number of changes in reverse direction
          // is equal to number of items in preceding interval,
          // therefore it cannot contain any common items.
          division.aEndPreceding = aStart;
          division.bEndPreceding = bStart;
        } else {
          division.aEndPreceding = aLast;
          division.bEndPreceding = bLast;
        }

        division.nCommonPreceding = nCommonR;

        if (nCommonR !== 0) {
          // The last point of reverse path segment is start of common subsequence.
          division.aCommonPreceding = aLast;
          division.bCommonPreceding = bLast;
        }

        division.nChangeFollowing = d - 1;

        if (d === 1) {
          // There is no previous path segment.
          division.nCommonFollowing = 0;
          division.aStartFollowing = aEnd;
          division.bStartFollowing = bEnd;
        } else {
          // Unlike the Myers algorithm which finds only the middle “snake”
          // this package can find two common subsequences per division.
          // Last point of previous path segment is on an adjacent diagonal.
          const bLastPrev = bR + aLastPrev - (insert ? kR - 1 : kR + 1); // Because of invariant that intervals following the middle change
          // cannot have common items at the start,
          // move in forward direction along a diagonal of common items.

          const nCommonF = countCommonItemsF(
            aLastPrev,
            aEnd,
            bLastPrev,
            bEnd,
            isCommon
          );
          division.nCommonFollowing = nCommonF;

          if (nCommonF !== 0) {
            // The last point of reverse path segment is start of common subsequence.
            division.aCommonFollowing = aLastPrev;
            division.bCommonFollowing = bLastPrev;
          }

          const aStartFollowing = aLastPrev + nCommonF; // aFirstPrev

          const bStartFollowing = bLastPrev + nCommonF; // bFirstPrev

          if (d - 1 === aEnd + bEnd - aStartFollowing - bStartFollowing) {
            // Optimization: number of changes in forward direction
            // is equal to number of items in following interval,
            // therefore it cannot contain any common items.
            division.aStartFollowing = aEnd;
            division.bStartFollowing = bEnd;
          } else {
            division.aStartFollowing = aStartFollowing;
            division.bStartFollowing = bStartFollowing;
          }
        }

        return true;
      }
    }
  }

  return false;
}; // Given index intervals and input function to compare items at indexes,
// divide at the middle change.
//
// DO NOT CALL if start === end, because interval cannot contain common items
// and because this function will throw the “no overlap” error.

const divide = (
  nChange,
  aStart,
  aEnd,
  bStart,
  bEnd,
  isCommon,
  aIndexesF,
  aIndexesR,
  division // output
) => {
  const bF = bStart - aStart; // bIndex = bF + aIndex - kF

  const bR = bEnd - aEnd; // bIndex = bR + aIndex - kR

  const aLength = aEnd - aStart;
  const bLength = bEnd - bStart; // Because graph has square or portrait orientation,
  // length difference is minimum number of items to insert from b.
  // Corresponding forward and reverse diagonals in graph
  // depend on length difference of the sequences:
  // kF = kR - baDeltaLength
  // kR = kF + baDeltaLength

  const baDeltaLength = bLength - aLength; // Optimization: max diagonal in graph intersects corner of shorter side.

  let iMaxF = aLength;
  let iMaxR = aLength; // Initialize no changes yet in forward or reverse direction:

  aIndexesF[0] = aStart - 1; // at open start of interval, outside closed start

  aIndexesR[0] = aEnd; // at open end of interval

  if (baDeltaLength % 2 === 0) {
    // The number of changes in paths is 2 * d if length difference is even.
    const dMin = (nChange || baDeltaLength) / 2;
    const dMax = (aLength + bLength) / 2;

    for (let d = 1; d <= dMax; d += 1) {
      iMaxF = extendPathsF(d, aEnd, bEnd, bF, isCommon, aIndexesF, iMaxF);

      if (d < dMin) {
        iMaxR = extendPathsR(d, aStart, bStart, bR, isCommon, aIndexesR, iMaxR);
      } else if (
        // If a reverse path overlaps a forward path in the same diagonal,
        // return a division of the index intervals at the middle change.
        extendOverlappablePathsR(
          d,
          aStart,
          aEnd,
          bStart,
          bEnd,
          isCommon,
          aIndexesF,
          iMaxF,
          aIndexesR,
          iMaxR,
          division
        )
      ) {
        return;
      }
    }
  } else {
    // The number of changes in paths is 2 * d - 1 if length difference is odd.
    const dMin = ((nChange || baDeltaLength) + 1) / 2;
    const dMax = (aLength + bLength + 1) / 2; // Unroll first half iteration so loop extends the relevant pairs of paths.
    // Because of invariant that intervals have no common items at start or end,
    // and limitation not to call divide with empty intervals,
    // therefore it cannot be called if a forward path with one change
    // would overlap a reverse path with no changes, even if dMin === 1.

    let d = 1;
    iMaxF = extendPathsF(d, aEnd, bEnd, bF, isCommon, aIndexesF, iMaxF);

    for (d += 1; d <= dMax; d += 1) {
      iMaxR = extendPathsR(
        d - 1,
        aStart,
        bStart,
        bR,
        isCommon,
        aIndexesR,
        iMaxR
      );

      if (d < dMin) {
        iMaxF = extendPathsF(d, aEnd, bEnd, bF, isCommon, aIndexesF, iMaxF);
      } else if (
        // If a forward path overlaps a reverse path in the same diagonal,
        // return a division of the index intervals at the middle change.
        extendOverlappablePathsF(
          d,
          aStart,
          aEnd,
          bStart,
          bEnd,
          isCommon,
          aIndexesF,
          iMaxF,
          aIndexesR,
          iMaxR,
          division
        )
      ) {
        return;
      }
    }
  }
  /* istanbul ignore next */

  throw new Error(
    `${pkg}: no overlap aStart=${aStart} aEnd=${aEnd} bStart=${bStart} bEnd=${bEnd}`
  );
}; // Given index intervals and input function to compare items at indexes,
// return by output function the number of adjacent items and starting indexes
// of each common subsequence. Divide and conquer with only linear space.
//
// The index intervals are half open [start, end) like array slice method.
// DO NOT CALL if start === end, because interval cannot contain common items
// and because divide function will throw the “no overlap” error.

const findSubsequences = (
  nChange,
  aStart,
  aEnd,
  bStart,
  bEnd,
  transposed,
  callbacks,
  aIndexesF,
  aIndexesR,
  division // temporary memory, not input nor output
) => {
  if (bEnd - bStart < aEnd - aStart) {
    // Transpose graph so it has portrait instead of landscape orientation.
    // Always compare shorter to longer sequence for consistency and optimization.
    transposed = !transposed;

    if (transposed && callbacks.length === 1) {
      // Lazily wrap callback functions to swap args if graph is transposed.
      const _callbacks$ = callbacks[0],
        foundSubsequence = _callbacks$.foundSubsequence,
        isCommon = _callbacks$.isCommon;
      callbacks[1] = {
        foundSubsequence: (function(_foundSubsequence) {
          function foundSubsequence(_x, _x2, _x3) {
            return _foundSubsequence.apply(this, arguments);
          }

          foundSubsequence.toString = function() {
            return _foundSubsequence.toString();
          };

          return foundSubsequence;
        })((nCommon, bCommon, aCommon) => {
          foundSubsequence(nCommon, aCommon, bCommon);
        }),
        isCommon: (function(_isCommon) {
          function isCommon(_x4, _x5) {
            return _isCommon.apply(this, arguments);
          }

          isCommon.toString = function() {
            return _isCommon.toString();
          };

          return isCommon;
        })((bIndex, aIndex) => isCommon(aIndex, bIndex))
      };
    }

    const tStart = aStart;
    const tEnd = aEnd;
    aStart = bStart;
    aEnd = bEnd;
    bStart = tStart;
    bEnd = tEnd;
  }

  const _callbacks = callbacks[transposed ? 1 : 0],
    foundSubsequence = _callbacks.foundSubsequence,
    isCommon = _callbacks.isCommon; // Divide the index intervals at the middle change.

  divide(
    nChange,
    aStart,
    aEnd,
    bStart,
    bEnd,
    isCommon,
    aIndexesF,
    aIndexesR,
    division
  );
  const nChangePreceding = division.nChangePreceding,
    aEndPreceding = division.aEndPreceding,
    bEndPreceding = division.bEndPreceding,
    nCommonPreceding = division.nCommonPreceding,
    aCommonPreceding = division.aCommonPreceding,
    bCommonPreceding = division.bCommonPreceding,
    nCommonFollowing = division.nCommonFollowing,
    aCommonFollowing = division.aCommonFollowing,
    bCommonFollowing = division.bCommonFollowing,
    nChangeFollowing = division.nChangeFollowing,
    aStartFollowing = division.aStartFollowing,
    bStartFollowing = division.bStartFollowing; // Unless either index interval is empty, they might contain common items.

  if (aStart < aEndPreceding && bStart < bEndPreceding) {
    // Recursely find and return common subsequences preceding the division.
    findSubsequences(
      nChangePreceding,
      aStart,
      aEndPreceding,
      bStart,
      bEndPreceding,
      transposed,
      callbacks,
      aIndexesF,
      aIndexesR,
      division
    );
  } // Return common subsequences that are adjacent to the middle change.

  if (nCommonPreceding !== 0) {
    foundSubsequence(nCommonPreceding, aCommonPreceding, bCommonPreceding);
  }

  if (nCommonFollowing !== 0) {
    foundSubsequence(nCommonFollowing, aCommonFollowing, bCommonFollowing);
  } // Unless either index interval is empty, they might contain common items.

  if (aStartFollowing < aEnd && bStartFollowing < bEnd) {
    // Recursely find and return common subsequences following the division.
    findSubsequences(
      nChangeFollowing,
      aStartFollowing,
      aEnd,
      bStartFollowing,
      bEnd,
      transposed,
      callbacks,
      aIndexesF,
      aIndexesR,
      division
    );
  }
};

const validateLength = (name, arg) => {
  const type = typeof arg;

  if (type !== 'number') {
    throw new TypeError(`${pkg}: ${name} typeof ${type} is not a number`);
  }

  if (!Number.isSafeInteger(arg)) {
    throw new RangeError(`${pkg}: ${name} value ${arg} is not a safe integer`);
  }

  if (arg < 0) {
    throw new RangeError(`${pkg}: ${name} value ${arg} is a negative integer`);
  }
};

const validateCallback = (name, arg) => {
  const type = typeof arg;

  if (type !== 'function') {
    throw new TypeError(`${pkg}: ${name} typeof ${type} is not a function`);
  }
}; // Compare items in two sequences to find a longest common subsequence.
// Given lengths of sequences and input function to compare items at indexes,
// return by output function the number of adjacent items and starting indexes
// of each common subsequence.

var _default = (aLength, bLength, isCommon, foundSubsequence) => {
  validateLength('aLength', aLength);
  validateLength('bLength', bLength);
  validateCallback('isCommon', isCommon);
  validateCallback('foundSubsequence', foundSubsequence); // Count common items from the start in the forward direction.

  const nCommonF = countCommonItemsF(0, aLength, 0, bLength, isCommon);

  if (nCommonF !== 0) {
    foundSubsequence(nCommonF, 0, 0);
  } // Unless both sequences consist of common items only,
  // find common items in the half-trimmed index intervals.

  if (aLength !== nCommonF || bLength !== nCommonF) {
    // Invariant: intervals do not have common items at the start.
    // The start of an index interval is closed like array slice method.
    const aStart = nCommonF;
    const bStart = nCommonF; // Count common items from the end in the reverse direction.

    const nCommonR = countCommonItemsR(
      aStart,
      aLength - 1,
      bStart,
      bLength - 1,
      isCommon
    ); // Invariant: intervals do not have common items at the end.
    // The end of an index interval is open like array slice method.

    const aEnd = aLength - nCommonR;
    const bEnd = bLength - nCommonR; // Unless one sequence consists of common items only,
    // therefore the other trimmed index interval consists of changes only,
    // find common items in the trimmed index intervals.

    const nCommonFR = nCommonF + nCommonR;

    if (aLength !== nCommonFR && bLength !== nCommonFR) {
      const nChange = 0; // number of change items is not yet known

      const transposed = false; // call the original unwrapped functions

      const callbacks = [
        {
          foundSubsequence,
          isCommon
        }
      ]; // Indexes in sequence a of last points in furthest reaching paths
      // from outside the start at top left in the forward direction:

      const aIndexesF = [NOT_YET_SET]; // from the end at bottom right in the reverse direction:

      const aIndexesR = [NOT_YET_SET]; // Initialize one object as output of all calls to divide function.

      const division = {
        aCommonFollowing: NOT_YET_SET,
        aCommonPreceding: NOT_YET_SET,
        aEndPreceding: NOT_YET_SET,
        aStartFollowing: NOT_YET_SET,
        bCommonFollowing: NOT_YET_SET,
        bCommonPreceding: NOT_YET_SET,
        bEndPreceding: NOT_YET_SET,
        bStartFollowing: NOT_YET_SET,
        nChangeFollowing: NOT_YET_SET,
        nChangePreceding: NOT_YET_SET,
        nCommonFollowing: NOT_YET_SET,
        nCommonPreceding: NOT_YET_SET
      }; // Find and return common subsequences in the trimmed index intervals.

      findSubsequences(
        nChange,
        aStart,
        aEnd,
        bStart,
        bEnd,
        transposed,
        callbacks,
        aIndexesF,
        aIndexesR,
        division
      );
    }

    if (nCommonR !== 0) {
      foundSubsequence(nCommonR, aEnd, bEnd);
    }
  }
};

exports.default = _default;
});

var constants = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.SIMILAR_MESSAGE = exports.NO_DIFF_MESSAGE = void 0;

var _chalk = _interopRequireDefault(chalk);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const NO_DIFF_MESSAGE = _chalk.default.dim(
  'Compared values have no visual difference.'
);

exports.NO_DIFF_MESSAGE = NO_DIFF_MESSAGE;

const SIMILAR_MESSAGE = _chalk.default.dim(
  'Compared values serialize to the same structure.\n' +
    'Printing internal object structure without calling `toJSON` instead.'
);

exports.SIMILAR_MESSAGE = SIMILAR_MESSAGE;
});

var cleanupSemantic = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.cleanupSemantic = exports.DIFF_INSERT = exports.DIFF_DELETE = exports.DIFF_EQUAL = exports.Diff = void 0;

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

/**
 * Diff Match and Patch
 * Copyright 2018 The diff-match-patch Authors.
 * https://github.com/google/diff-match-patch
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Computes the difference between two texts to create a patch.
 * Applies the patch onto another text, allowing for errors.
 * @author fraser@google.com (Neil Fraser)
 */

/**
 * CHANGES by pedrottimark to diff_match_patch_uncompressed.ts file:
 *
 * 1. Delete anything not needed to use diff_cleanupSemantic method
 * 2. Convert from prototype properties to var declarations
 * 3. Convert Diff to class from constructor and prototype
 * 4. Add type annotations for arguments and return values
 * 5. Add exports
 */

/**
 * The data structure representing a diff is an array of tuples:
 * [[DIFF_DELETE, 'Hello'], [DIFF_INSERT, 'Goodbye'], [DIFF_EQUAL, ' world.']]
 * which means: delete 'Hello', add 'Goodbye' and keep ' world.'
 */
var DIFF_DELETE = -1;
exports.DIFF_DELETE = DIFF_DELETE;
var DIFF_INSERT = 1;
exports.DIFF_INSERT = DIFF_INSERT;
var DIFF_EQUAL = 0;
/**
 * Class representing one diff tuple.
 * Attempts to look like a two-element array (which is what this used to be).
 * @param {number} op Operation, one of: DIFF_DELETE, DIFF_INSERT, DIFF_EQUAL.
 * @param {string} text Text to be deleted, inserted, or retained.
 * @constructor
 */

exports.DIFF_EQUAL = DIFF_EQUAL;

class Diff {
  constructor(op, text) {
    _defineProperty(this, 0, void 0);

    _defineProperty(this, 1, void 0);

    this[0] = op;
    this[1] = text;
  }
}
/**
 * Determine the common prefix of two strings.
 * @param {string} text1 First string.
 * @param {string} text2 Second string.
 * @return {number} The number of characters common to the start of each
 *     string.
 */

exports.Diff = Diff;

var diff_commonPrefix = function diff_commonPrefix(text1, text2) {
  // Quick check for common null cases.
  if (!text1 || !text2 || text1.charAt(0) != text2.charAt(0)) {
    return 0;
  } // Binary search.
  // Performance analysis: https://neil.fraser.name/news/2007/10/09/

  var pointermin = 0;
  var pointermax = Math.min(text1.length, text2.length);
  var pointermid = pointermax;
  var pointerstart = 0;

  while (pointermin < pointermid) {
    if (
      text1.substring(pointerstart, pointermid) ==
      text2.substring(pointerstart, pointermid)
    ) {
      pointermin = pointermid;
      pointerstart = pointermin;
    } else {
      pointermax = pointermid;
    }

    pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
  }

  return pointermid;
};
/**
 * Determine the common suffix of two strings.
 * @param {string} text1 First string.
 * @param {string} text2 Second string.
 * @return {number} The number of characters common to the end of each string.
 */

var diff_commonSuffix = function diff_commonSuffix(text1, text2) {
  // Quick check for common null cases.
  if (
    !text1 ||
    !text2 ||
    text1.charAt(text1.length - 1) != text2.charAt(text2.length - 1)
  ) {
    return 0;
  } // Binary search.
  // Performance analysis: https://neil.fraser.name/news/2007/10/09/

  var pointermin = 0;
  var pointermax = Math.min(text1.length, text2.length);
  var pointermid = pointermax;
  var pointerend = 0;

  while (pointermin < pointermid) {
    if (
      text1.substring(text1.length - pointermid, text1.length - pointerend) ==
      text2.substring(text2.length - pointermid, text2.length - pointerend)
    ) {
      pointermin = pointermid;
      pointerend = pointermin;
    } else {
      pointermax = pointermid;
    }

    pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
  }

  return pointermid;
};
/**
 * Determine if the suffix of one string is the prefix of another.
 * @param {string} text1 First string.
 * @param {string} text2 Second string.
 * @return {number} The number of characters common to the end of the first
 *     string and the start of the second string.
 * @private
 */

var diff_commonOverlap_ = function diff_commonOverlap_(text1, text2) {
  // Cache the text lengths to prevent multiple calls.
  var text1_length = text1.length;
  var text2_length = text2.length; // Eliminate the null case.

  if (text1_length == 0 || text2_length == 0) {
    return 0;
  } // Truncate the longer string.

  if (text1_length > text2_length) {
    text1 = text1.substring(text1_length - text2_length);
  } else if (text1_length < text2_length) {
    text2 = text2.substring(0, text1_length);
  }

  var text_length = Math.min(text1_length, text2_length); // Quick check for the worst case.

  if (text1 == text2) {
    return text_length;
  } // Start by looking for a single character match
  // and increase length until no match is found.
  // Performance analysis: https://neil.fraser.name/news/2010/11/04/

  var best = 0;
  var length = 1;

  while (true) {
    var pattern = text1.substring(text_length - length);
    var found = text2.indexOf(pattern);

    if (found == -1) {
      return best;
    }

    length += found;

    if (
      found == 0 ||
      text1.substring(text_length - length) == text2.substring(0, length)
    ) {
      best = length;
      length++;
    }
  }
};
/**
 * Reduce the number of edits by eliminating semantically trivial equalities.
 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
 */

var diff_cleanupSemantic = function diff_cleanupSemantic(diffs) {
  var changes = false;
  var equalities = []; // Stack of indices where equalities are found.

  var equalitiesLength = 0; // Keeping our own length var is faster in JS.

  /** @type {?string} */

  var lastEquality = null; // Always equal to diffs[equalities[equalitiesLength - 1]][1]

  var pointer = 0; // Index of current position.
  // Number of characters that changed prior to the equality.

  var length_insertions1 = 0;
  var length_deletions1 = 0; // Number of characters that changed after the equality.

  var length_insertions2 = 0;
  var length_deletions2 = 0;

  while (pointer < diffs.length) {
    if (diffs[pointer][0] == DIFF_EQUAL) {
      // Equality found.
      equalities[equalitiesLength++] = pointer;
      length_insertions1 = length_insertions2;
      length_deletions1 = length_deletions2;
      length_insertions2 = 0;
      length_deletions2 = 0;
      lastEquality = diffs[pointer][1];
    } else {
      // An insertion or deletion.
      if (diffs[pointer][0] == DIFF_INSERT) {
        length_insertions2 += diffs[pointer][1].length;
      } else {
        length_deletions2 += diffs[pointer][1].length;
      } // Eliminate an equality that is smaller or equal to the edits on both
      // sides of it.

      if (
        lastEquality &&
        lastEquality.length <=
          Math.max(length_insertions1, length_deletions1) &&
        lastEquality.length <= Math.max(length_insertions2, length_deletions2)
      ) {
        // Duplicate record.
        diffs.splice(
          equalities[equalitiesLength - 1],
          0,
          new Diff(DIFF_DELETE, lastEquality)
        ); // Change second copy to insert.

        diffs[equalities[equalitiesLength - 1] + 1][0] = DIFF_INSERT; // Throw away the equality we just deleted.

        equalitiesLength--; // Throw away the previous equality (it needs to be reevaluated).

        equalitiesLength--;
        pointer = equalitiesLength > 0 ? equalities[equalitiesLength - 1] : -1;
        length_insertions1 = 0; // Reset the counters.

        length_deletions1 = 0;
        length_insertions2 = 0;
        length_deletions2 = 0;
        lastEquality = null;
        changes = true;
      }
    }

    pointer++;
  } // Normalize the diff.

  if (changes) {
    diff_cleanupMerge(diffs);
  }

  diff_cleanupSemanticLossless(diffs); // Find any overlaps between deletions and insertions.
  // e.g: <del>abcxxx</del><ins>xxxdef</ins>
  //   -> <del>abc</del>xxx<ins>def</ins>
  // e.g: <del>xxxabc</del><ins>defxxx</ins>
  //   -> <ins>def</ins>xxx<del>abc</del>
  // Only extract an overlap if it is as big as the edit ahead or behind it.

  pointer = 1;

  while (pointer < diffs.length) {
    if (
      diffs[pointer - 1][0] == DIFF_DELETE &&
      diffs[pointer][0] == DIFF_INSERT
    ) {
      var deletion = diffs[pointer - 1][1];
      var insertion = diffs[pointer][1];
      var overlap_length1 = diff_commonOverlap_(deletion, insertion);
      var overlap_length2 = diff_commonOverlap_(insertion, deletion);

      if (overlap_length1 >= overlap_length2) {
        if (
          overlap_length1 >= deletion.length / 2 ||
          overlap_length1 >= insertion.length / 2
        ) {
          // Overlap found.  Insert an equality and trim the surrounding edits.
          diffs.splice(
            pointer,
            0,
            new Diff(DIFF_EQUAL, insertion.substring(0, overlap_length1))
          );
          diffs[pointer - 1][1] = deletion.substring(
            0,
            deletion.length - overlap_length1
          );
          diffs[pointer + 1][1] = insertion.substring(overlap_length1);
          pointer++;
        }
      } else {
        if (
          overlap_length2 >= deletion.length / 2 ||
          overlap_length2 >= insertion.length / 2
        ) {
          // Reverse overlap found.
          // Insert an equality and swap and trim the surrounding edits.
          diffs.splice(
            pointer,
            0,
            new Diff(DIFF_EQUAL, deletion.substring(0, overlap_length2))
          );
          diffs[pointer - 1][0] = DIFF_INSERT;
          diffs[pointer - 1][1] = insertion.substring(
            0,
            insertion.length - overlap_length2
          );
          diffs[pointer + 1][0] = DIFF_DELETE;
          diffs[pointer + 1][1] = deletion.substring(overlap_length2);
          pointer++;
        }
      }

      pointer++;
    }

    pointer++;
  }
};
/**
 * Look for single edits surrounded on both sides by equalities
 * which can be shifted sideways to align the edit to a word boundary.
 * e.g: The c<ins>at c</ins>ame. -> The <ins>cat </ins>came.
 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
 */

exports.cleanupSemantic = diff_cleanupSemantic;

var diff_cleanupSemanticLossless = function diff_cleanupSemanticLossless(
  diffs
) {
  /**
   * Given two strings, compute a score representing whether the internal
   * boundary falls on logical boundaries.
   * Scores range from 6 (best) to 0 (worst).
   * Closure, but does not reference any external variables.
   * @param {string} one First string.
   * @param {string} two Second string.
   * @return {number} The score.
   * @private
   */
  function diff_cleanupSemanticScore_(one, two) {
    if (!one || !two) {
      // Edges are the best.
      return 6;
    } // Each port of this function behaves slightly differently due to
    // subtle differences in each language's definition of things like
    // 'whitespace'.  Since this function's purpose is largely cosmetic,
    // the choice has been made to use each language's native features
    // rather than force total conformity.

    var char1 = one.charAt(one.length - 1);
    var char2 = two.charAt(0);
    var nonAlphaNumeric1 = char1.match(nonAlphaNumericRegex_);
    var nonAlphaNumeric2 = char2.match(nonAlphaNumericRegex_);
    var whitespace1 = nonAlphaNumeric1 && char1.match(whitespaceRegex_);
    var whitespace2 = nonAlphaNumeric2 && char2.match(whitespaceRegex_);
    var lineBreak1 = whitespace1 && char1.match(linebreakRegex_);
    var lineBreak2 = whitespace2 && char2.match(linebreakRegex_);
    var blankLine1 = lineBreak1 && one.match(blanklineEndRegex_);
    var blankLine2 = lineBreak2 && two.match(blanklineStartRegex_);

    if (blankLine1 || blankLine2) {
      // Five points for blank lines.
      return 5;
    } else if (lineBreak1 || lineBreak2) {
      // Four points for line breaks.
      return 4;
    } else if (nonAlphaNumeric1 && !whitespace1 && whitespace2) {
      // Three points for end of sentences.
      return 3;
    } else if (whitespace1 || whitespace2) {
      // Two points for whitespace.
      return 2;
    } else if (nonAlphaNumeric1 || nonAlphaNumeric2) {
      // One point for non-alphanumeric.
      return 1;
    }

    return 0;
  }

  var pointer = 1; // Intentionally ignore the first and last element (don't need checking).

  while (pointer < diffs.length - 1) {
    if (
      diffs[pointer - 1][0] == DIFF_EQUAL &&
      diffs[pointer + 1][0] == DIFF_EQUAL
    ) {
      // This is a single edit surrounded by equalities.
      var equality1 = diffs[pointer - 1][1];
      var edit = diffs[pointer][1];
      var equality2 = diffs[pointer + 1][1]; // First, shift the edit as far left as possible.

      var commonOffset = diff_commonSuffix(equality1, edit);

      if (commonOffset) {
        var commonString = edit.substring(edit.length - commonOffset);
        equality1 = equality1.substring(0, equality1.length - commonOffset);
        edit = commonString + edit.substring(0, edit.length - commonOffset);
        equality2 = commonString + equality2;
      } // Second, step character by character right, looking for the best fit.

      var bestEquality1 = equality1;
      var bestEdit = edit;
      var bestEquality2 = equality2;
      var bestScore =
        diff_cleanupSemanticScore_(equality1, edit) +
        diff_cleanupSemanticScore_(edit, equality2);

      while (edit.charAt(0) === equality2.charAt(0)) {
        equality1 += edit.charAt(0);
        edit = edit.substring(1) + equality2.charAt(0);
        equality2 = equality2.substring(1);
        var score =
          diff_cleanupSemanticScore_(equality1, edit) +
          diff_cleanupSemanticScore_(edit, equality2); // The >= encourages trailing rather than leading whitespace on edits.

        if (score >= bestScore) {
          bestScore = score;
          bestEquality1 = equality1;
          bestEdit = edit;
          bestEquality2 = equality2;
        }
      }

      if (diffs[pointer - 1][1] != bestEquality1) {
        // We have an improvement, save it back to the diff.
        if (bestEquality1) {
          diffs[pointer - 1][1] = bestEquality1;
        } else {
          diffs.splice(pointer - 1, 1);
          pointer--;
        }

        diffs[pointer][1] = bestEdit;

        if (bestEquality2) {
          diffs[pointer + 1][1] = bestEquality2;
        } else {
          diffs.splice(pointer + 1, 1);
          pointer--;
        }
      }
    }

    pointer++;
  }
}; // Define some regex patterns for matching boundaries.

var nonAlphaNumericRegex_ = /[^a-zA-Z0-9]/;
var whitespaceRegex_ = /\s/;
var linebreakRegex_ = /[\r\n]/;
var blanklineEndRegex_ = /\n\r?\n$/;
var blanklineStartRegex_ = /^\r?\n\r?\n/;
/**
 * Reorder and merge like edit sections.  Merge equalities.
 * Any edit section can move as long as it doesn't cross an equality.
 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
 */

var diff_cleanupMerge = function diff_cleanupMerge(diffs) {
  // Add a dummy entry at the end.
  diffs.push(new Diff(DIFF_EQUAL, ''));
  var pointer = 0;
  var count_delete = 0;
  var count_insert = 0;
  var text_delete = '';
  var text_insert = '';
  var commonlength;

  while (pointer < diffs.length) {
    switch (diffs[pointer][0]) {
      case DIFF_INSERT:
        count_insert++;
        text_insert += diffs[pointer][1];
        pointer++;
        break;

      case DIFF_DELETE:
        count_delete++;
        text_delete += diffs[pointer][1];
        pointer++;
        break;

      case DIFF_EQUAL:
        // Upon reaching an equality, check for prior redundancies.
        if (count_delete + count_insert > 1) {
          if (count_delete !== 0 && count_insert !== 0) {
            // Factor out any common prefixies.
            commonlength = diff_commonPrefix(text_insert, text_delete);

            if (commonlength !== 0) {
              if (
                pointer - count_delete - count_insert > 0 &&
                diffs[pointer - count_delete - count_insert - 1][0] ==
                  DIFF_EQUAL
              ) {
                diffs[
                  pointer - count_delete - count_insert - 1
                ][1] += text_insert.substring(0, commonlength);
              } else {
                diffs.splice(
                  0,
                  0,
                  new Diff(DIFF_EQUAL, text_insert.substring(0, commonlength))
                );
                pointer++;
              }

              text_insert = text_insert.substring(commonlength);
              text_delete = text_delete.substring(commonlength);
            } // Factor out any common suffixies.

            commonlength = diff_commonSuffix(text_insert, text_delete);

            if (commonlength !== 0) {
              diffs[pointer][1] =
                text_insert.substring(text_insert.length - commonlength) +
                diffs[pointer][1];
              text_insert = text_insert.substring(
                0,
                text_insert.length - commonlength
              );
              text_delete = text_delete.substring(
                0,
                text_delete.length - commonlength
              );
            }
          } // Delete the offending records and add the merged ones.

          pointer -= count_delete + count_insert;
          diffs.splice(pointer, count_delete + count_insert);

          if (text_delete.length) {
            diffs.splice(pointer, 0, new Diff(DIFF_DELETE, text_delete));
            pointer++;
          }

          if (text_insert.length) {
            diffs.splice(pointer, 0, new Diff(DIFF_INSERT, text_insert));
            pointer++;
          }

          pointer++;
        } else if (pointer !== 0 && diffs[pointer - 1][0] == DIFF_EQUAL) {
          // Merge this equality with the previous one.
          diffs[pointer - 1][1] += diffs[pointer][1];
          diffs.splice(pointer, 1);
        } else {
          pointer++;
        }

        count_insert = 0;
        count_delete = 0;
        text_delete = '';
        text_insert = '';
        break;
    }
  }

  if (diffs[diffs.length - 1][1] === '') {
    diffs.pop(); // Remove the dummy entry at the end.
  } // Second pass: look for single edits surrounded on both sides by equalities
  // which can be shifted sideways to eliminate an equality.
  // e.g: A<ins>BA</ins>C -> <ins>AB</ins>AC

  var changes = false;
  pointer = 1; // Intentionally ignore the first and last element (don't need checking).

  while (pointer < diffs.length - 1) {
    if (
      diffs[pointer - 1][0] == DIFF_EQUAL &&
      diffs[pointer + 1][0] == DIFF_EQUAL
    ) {
      // This is a single edit surrounded by equalities.
      if (
        diffs[pointer][1].substring(
          diffs[pointer][1].length - diffs[pointer - 1][1].length
        ) == diffs[pointer - 1][1]
      ) {
        // Shift the edit over the previous equality.
        diffs[pointer][1] =
          diffs[pointer - 1][1] +
          diffs[pointer][1].substring(
            0,
            diffs[pointer][1].length - diffs[pointer - 1][1].length
          );
        diffs[pointer + 1][1] = diffs[pointer - 1][1] + diffs[pointer + 1][1];
        diffs.splice(pointer - 1, 1);
        changes = true;
      } else if (
        diffs[pointer][1].substring(0, diffs[pointer + 1][1].length) ==
        diffs[pointer + 1][1]
      ) {
        // Shift the edit over the next equality.
        diffs[pointer - 1][1] += diffs[pointer + 1][1];
        diffs[pointer][1] =
          diffs[pointer][1].substring(diffs[pointer + 1][1].length) +
          diffs[pointer + 1][1];
        diffs.splice(pointer + 1, 1);
        changes = true;
      }
    }

    pointer++;
  } // If shifts were made, the diff needs reordering and another shift sweep.

  if (changes) {
    diff_cleanupMerge(diffs);
  }
};
});

var diffStrings_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _diffSequences = _interopRequireDefault(build$1);



function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const diffStrings = (a, b) => {
  const isCommon = (aIndex, bIndex) => a[aIndex] === b[bIndex];

  let aIndex = 0;
  let bIndex = 0;
  const diffs = [];

  const foundSubsequence = (nCommon, aCommon, bCommon) => {
    if (aIndex !== aCommon) {
      diffs.push(
        new cleanupSemantic.Diff(
          cleanupSemantic.DIFF_DELETE,
          a.slice(aIndex, aCommon)
        )
      );
    }

    if (bIndex !== bCommon) {
      diffs.push(
        new cleanupSemantic.Diff(
          cleanupSemantic.DIFF_INSERT,
          b.slice(bIndex, bCommon)
        )
      );
    }

    aIndex = aCommon + nCommon; // number of characters compared in a

    bIndex = bCommon + nCommon; // number of characters compared in b

    diffs.push(
      new cleanupSemantic.Diff(
        cleanupSemantic.DIFF_EQUAL,
        b.slice(bCommon, bIndex)
      )
    );
  };

  (0, _diffSequences.default)(a.length, b.length, isCommon, foundSubsequence); // After the last common subsequence, push remaining change items.

  if (aIndex !== a.length) {
    diffs.push(
      new cleanupSemantic.Diff(cleanupSemantic.DIFF_DELETE, a.slice(aIndex))
    );
  }

  if (bIndex !== b.length) {
    diffs.push(
      new cleanupSemantic.Diff(cleanupSemantic.DIFF_INSERT, b.slice(bIndex))
    );
  }

  return diffs;
};

var _default = diffStrings;
exports.default = _default;
});

var getAlignedDiffs_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;





function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

// Encapsulate change lines until either a common newline or the end.
class ChangeBuffer {
  // incomplete line
  // complete lines
  constructor(op) {
    _defineProperty(this, 'op', void 0);

    _defineProperty(this, 'line', void 0);

    _defineProperty(this, 'lines', void 0);

    this.op = op;
    this.line = [];
    this.lines = [];
  }

  pushSubstring(substring) {
    this.pushDiff(new cleanupSemantic.Diff(this.op, substring));
  }

  pushLine() {
    // Assume call only if line has at least one diff,
    // therefore an empty line must have a diff which has an empty string.
    this.lines.push(
      new cleanupSemantic.Diff(
        this.op,
        (0, printDiffs.getHighlightedString)(this.op, this.line)
      )
    );
    this.line.length = 0;
  }

  isLineEmpty() {
    return this.line.length === 0;
  } // Minor input to buffer.

  pushDiff(diff) {
    this.line.push(diff);
  } // Main input to buffer.

  align(diff) {
    const string = diff[1];

    if (printDiffs.MULTILINE_REGEXP.test(string)) {
      const substrings = string.split('\n');
      const iLast = substrings.length - 1;
      substrings.forEach((substring, i) => {
        if (i < iLast) {
          // The first substring completes the current change line.
          // A middle substring is a change line.
          this.pushSubstring(substring);
          this.pushLine();
        } else if (substring.length !== 0) {
          // The last substring starts a change line, if it is not empty.
          // Important: This non-empty condition also automatically omits
          // the newline appended to the end of expected and received strings.
          this.pushSubstring(substring);
        }
      });
    } else {
      // Append non-multiline string to current change line.
      this.pushDiff(diff);
    }
  } // Output from buffer.

  moveLinesTo(lines) {
    if (!this.isLineEmpty()) {
      this.pushLine();
    }

    lines.push(...this.lines);
    this.lines.length = 0;
  }
} // Encapsulate common and change lines.

class CommonBuffer {
  constructor(deleteBuffer, insertBuffer) {
    _defineProperty(this, 'deleteBuffer', void 0);

    _defineProperty(this, 'insertBuffer', void 0);

    _defineProperty(this, 'lines', void 0);

    this.deleteBuffer = deleteBuffer;
    this.insertBuffer = insertBuffer;
    this.lines = [];
  }

  pushDiffCommonLine(diff) {
    this.lines.push(diff);
  }

  pushDiffChangeLines(diff) {
    const isDiffEmpty = diff[1].length === 0; // An empty diff string is redundant, unless a change line is empty.

    if (!isDiffEmpty || this.deleteBuffer.isLineEmpty()) {
      this.deleteBuffer.pushDiff(diff);
    }

    if (!isDiffEmpty || this.insertBuffer.isLineEmpty()) {
      this.insertBuffer.pushDiff(diff);
    }
  }

  flushChangeLines() {
    this.deleteBuffer.moveLinesTo(this.lines);
    this.insertBuffer.moveLinesTo(this.lines);
  } // Input to buffer.

  align(diff) {
    const op = diff[0];
    const string = diff[1];

    if (printDiffs.MULTILINE_REGEXP.test(string)) {
      const substrings = string.split('\n');
      const iLast = substrings.length - 1;
      substrings.forEach((substring, i) => {
        if (i === 0) {
          const subdiff = new cleanupSemantic.Diff(op, substring);

          if (
            this.deleteBuffer.isLineEmpty() &&
            this.insertBuffer.isLineEmpty()
          ) {
            // If both current change lines are empty,
            // then the first substring is a common line.
            this.flushChangeLines();
            this.pushDiffCommonLine(subdiff);
          } else {
            // If either current change line is non-empty,
            // then the first substring completes the change lines.
            this.pushDiffChangeLines(subdiff);
            this.flushChangeLines();
          }
        } else if (i < iLast) {
          // A middle substring is a common line.
          this.pushDiffCommonLine(new cleanupSemantic.Diff(op, substring));
        } else if (substring.length !== 0) {
          // The last substring starts a change line, if it is not empty.
          // Important: This non-empty condition also automatically omits
          // the newline appended to the end of expected and received strings.
          this.pushDiffChangeLines(new cleanupSemantic.Diff(op, substring));
        }
      });
    } else {
      // Append non-multiline string to current change lines.
      // Important: It cannot be at the end following empty change lines,
      // because newline appended to the end of expected and received strings.
      this.pushDiffChangeLines(diff);
    }
  } // Output from buffer.

  getLines() {
    this.flushChangeLines();
    return this.lines;
  }
} // Given diffs from expected and received strings,
// return new array of diffs split or joined into lines.
//
// To correctly align a change line at the end, the algorithm:
// * assumes that a newline was appended to the strings
// * omits the last newline from the output array
//
// Assume the function is not called:
// * if either expected or received is empty string
// * if neither expected nor received is multiline string

const getAlignedDiffs = diffs => {
  const deleteBuffer = new ChangeBuffer(cleanupSemantic.DIFF_DELETE);
  const insertBuffer = new ChangeBuffer(cleanupSemantic.DIFF_INSERT);
  const commonBuffer = new CommonBuffer(deleteBuffer, insertBuffer);
  diffs.forEach(diff => {
    switch (diff[0]) {
      case cleanupSemantic.DIFF_DELETE:
        deleteBuffer.align(diff);
        break;

      case cleanupSemantic.DIFF_INSERT:
        insertBuffer.align(diff);
        break;

      default:
        commonBuffer.align(diff);
    }
  });
  return commonBuffer.getLines();
};

var _default = getAlignedDiffs;
exports.default = _default;
});

/*@__PURE__*/getDefaultExportFromCjs(getAlignedDiffs_1);

var joinAlignedDiffs = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.joinAlignedDiffsExpand = exports.joinAlignedDiffsNoExpand = void 0;





/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const DIFF_CONTEXT_DEFAULT = 5; // same as diffLines
// jest --no-expand
//
// Given array of aligned strings with inverse highlight formatting,
// return joined lines with diff formatting (and patch marks, if needed).

const joinAlignedDiffsNoExpand = (
  diffs,
  nContextLines = DIFF_CONTEXT_DEFAULT
) => {
  const iLength = diffs.length;
  const nContextLines2 = nContextLines + nContextLines; // First pass: count output lines and see if it has patches.

  let jLength = iLength;
  let hasExcessAtStartOrEnd = false;
  let nExcessesBetweenChanges = 0;
  let i = 0;

  while (i !== iLength) {
    const iStart = i;

    while (i !== iLength && diffs[i][0] === cleanupSemantic.DIFF_EQUAL) {
      i += 1;
    }

    if (iStart !== i) {
      if (iStart === 0) {
        // at start
        if (i > nContextLines) {
          jLength -= i - nContextLines; // subtract excess common lines

          hasExcessAtStartOrEnd = true;
        }
      } else if (i === iLength) {
        // at end
        const n = i - iStart;

        if (n > nContextLines) {
          jLength -= n - nContextLines; // subtract excess common lines

          hasExcessAtStartOrEnd = true;
        }
      } else {
        // between changes
        const n = i - iStart;

        if (n > nContextLines2) {
          jLength -= n - nContextLines2; // subtract excess common lines

          nExcessesBetweenChanges += 1;
        }
      }
    }

    while (i !== iLength && diffs[i][0] !== cleanupSemantic.DIFF_EQUAL) {
      i += 1;
    }
  }

  const hasPatch = nExcessesBetweenChanges !== 0 || hasExcessAtStartOrEnd;

  if (nExcessesBetweenChanges !== 0) {
    jLength += nExcessesBetweenChanges + 1; // add patch lines
  } else if (hasExcessAtStartOrEnd) {
    jLength += 1; // add patch line
  }

  const jLast = jLength - 1;
  const lines = [];
  let jPatchMark = 0; // index of placeholder line for current patch mark

  if (hasPatch) {
    lines.push(''); // placeholder line for first patch mark
  } // Indexes of expected or received lines in current patch:

  let aStart = 0;
  let bStart = 0;
  let aEnd = 0;
  let bEnd = 0;

  const pushCommonLine = line => {
    const j = lines.length;
    lines.push((0, printDiffs.printCommonLine)(line, j === 0 || j === jLast));
    aEnd += 1;
    bEnd += 1;
  };

  const pushDeleteLine = line => {
    lines.push((0, printDiffs.printDeleteLine)(line));
    aEnd += 1;
  };

  const pushInsertLine = line => {
    lines.push((0, printDiffs.printInsertLine)(line));
    bEnd += 1;
  }; // Second pass: push lines with diff formatting (and patch marks, if needed).

  i = 0;

  while (i !== iLength) {
    let iStart = i;

    while (i !== iLength && diffs[i][0] === cleanupSemantic.DIFF_EQUAL) {
      i += 1;
    }

    if (iStart !== i) {
      if (iStart === 0) {
        // at beginning
        if (i > nContextLines) {
          iStart = i - nContextLines;
          aStart = iStart;
          bStart = iStart;
          aEnd = aStart;
          bEnd = bStart;
        }

        for (let iCommon = iStart; iCommon !== i; iCommon += 1) {
          pushCommonLine(diffs[iCommon][1]);
        }
      } else if (i === iLength) {
        // at end
        const iEnd = i - iStart > nContextLines ? iStart + nContextLines : i;

        for (let iCommon = iStart; iCommon !== iEnd; iCommon += 1) {
          pushCommonLine(diffs[iCommon][1]);
        }
      } else {
        // between changes
        const nCommon = i - iStart;

        if (nCommon > nContextLines2) {
          const iEnd = iStart + nContextLines;

          for (let iCommon = iStart; iCommon !== iEnd; iCommon += 1) {
            pushCommonLine(diffs[iCommon][1]);
          }

          lines[jPatchMark] = (0, printDiffs.createPatchMark)(
            aStart,
            aEnd,
            bStart,
            bEnd
          );
          jPatchMark = lines.length;
          lines.push(''); // placeholder line for next patch mark

          const nOmit = nCommon - nContextLines2;
          aStart = aEnd + nOmit;
          bStart = bEnd + nOmit;
          aEnd = aStart;
          bEnd = bStart;

          for (let iCommon = i - nContextLines; iCommon !== i; iCommon += 1) {
            pushCommonLine(diffs[iCommon][1]);
          }
        } else {
          for (let iCommon = iStart; iCommon !== i; iCommon += 1) {
            pushCommonLine(diffs[iCommon][1]);
          }
        }
      }
    }

    while (i !== iLength && diffs[i][0] === cleanupSemantic.DIFF_DELETE) {
      pushDeleteLine(diffs[i][1]);
      i += 1;
    }

    while (i !== iLength && diffs[i][0] === cleanupSemantic.DIFF_INSERT) {
      pushInsertLine(diffs[i][1]);
      i += 1;
    }
  }

  if (hasPatch) {
    lines[jPatchMark] = (0, printDiffs.createPatchMark)(
      aStart,
      aEnd,
      bStart,
      bEnd
    );
  }

  return lines.join('\n');
}; // jest --expand
//
// Given array of aligned strings with inverse highlight formatting,
// return joined lines with diff formatting.

exports.joinAlignedDiffsNoExpand = joinAlignedDiffsNoExpand;

const joinAlignedDiffsExpand = diffs =>
  diffs
    .map((diff, i, diffs) => {
      const line = diff[1];

      switch (diff[0]) {
        case cleanupSemantic.DIFF_DELETE:
          return (0, printDiffs.printDeleteLine)(line);

        case cleanupSemantic.DIFF_INSERT:
          return (0, printDiffs.printInsertLine)(line);

        default:
          return (0, printDiffs.printCommonLine)(
            line,
            i === 0 || i === diffs.length - 1
          );
      }
    })
    .join('\n');

exports.joinAlignedDiffsExpand = joinAlignedDiffsExpand;
});

var printDiffs = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.getStringDiff = exports.printMultilineStringDiffs = exports.createPatchMark = exports.printAnnotation = exports.hasCommonDiff = exports.computeStringDiffs = exports.printCommonLine = exports.printInsertLine = exports.printDeleteLine = exports.MULTILINE_REGEXP = exports.getReceivedString = exports.getExpectedString = exports.getHighlightedString = exports.RECEIVED_COLOR = exports.INVERTED_COLOR = exports.EXPECTED_COLOR = exports.DIM_COLOR = void 0;

var _chalk = _interopRequireDefault(chalk);



var _diffStrings = _interopRequireDefault(diffStrings_1);

var _getAlignedDiffs = _interopRequireDefault(getAlignedDiffs_1);



function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const DIM_COLOR = _chalk.default.dim;
exports.DIM_COLOR = DIM_COLOR;
const EXPECTED_COLOR = _chalk.default.green;
exports.EXPECTED_COLOR = EXPECTED_COLOR;
const INVERTED_COLOR = _chalk.default.inverse;
exports.INVERTED_COLOR = INVERTED_COLOR;
const RECEIVED_COLOR = _chalk.default.red;
exports.RECEIVED_COLOR = RECEIVED_COLOR;
const PATCH_COLOR = _chalk.default.yellow; // Given change op and array of diffs, return concatenated string:
// * include common strings
// * include change strings which have argument op (inverse highlight)
// * exclude change strings which have opposite op

const getHighlightedString = (op, diffs) =>
  diffs.reduce(
    (reduced, diff) =>
      reduced +
      (diff[0] === cleanupSemantic.DIFF_EQUAL
        ? diff[1]
        : diff[0] === op
        ? INVERTED_COLOR(diff[1])
        : ''),
    ''
  );

exports.getHighlightedString = getHighlightedString;

const getExpectedString = diffs =>
  getHighlightedString(cleanupSemantic.DIFF_DELETE, diffs);

exports.getExpectedString = getExpectedString;

const getReceivedString = diffs =>
  getHighlightedString(cleanupSemantic.DIFF_INSERT, diffs);

exports.getReceivedString = getReceivedString;
const MULTILINE_REGEXP = /\n/;
exports.MULTILINE_REGEXP = MULTILINE_REGEXP;
const NEWLINE_SYMBOL = '\u{21B5}'; // downwards arrow with corner leftwards

const SPACE_SYMBOL = '\u{00B7}'; // middle dot
// Instead of inverse highlight which now implies a change,
// replace common spaces with middle dot at the end of the line.

const replaceSpacesAtEnd = line =>
  line.replace(/\s+$/, spaces => SPACE_SYMBOL.repeat(spaces.length));

const printDeleteLine = line =>
  EXPECTED_COLOR(line.length !== 0 ? '- ' + replaceSpacesAtEnd(line) : '-');

exports.printDeleteLine = printDeleteLine;

const printInsertLine = line =>
  RECEIVED_COLOR(line.length !== 0 ? '+ ' + replaceSpacesAtEnd(line) : '+'); // Prevent visually ambiguous empty line as the first or the last.

exports.printInsertLine = printInsertLine;

const printCommonLine = (line, isFirstOrLast = false) =>
  line.length !== 0
    ? DIM_COLOR('  ' + replaceSpacesAtEnd(line))
    : isFirstOrLast
    ? DIM_COLOR('  ' + NEWLINE_SYMBOL)
    : '';

exports.printCommonLine = printCommonLine;

const computeStringDiffs = (expected, received) => {
  const isMultiline =
    MULTILINE_REGEXP.test(expected) || MULTILINE_REGEXP.test(received); // getAlignedDiffs assumes that a newline was appended to the strings.

  if (isMultiline) {
    expected += '\n';
    received += '\n';
  }

  const diffs = (0, _diffStrings.default)(expected, received);
  (0, cleanupSemantic.cleanupSemantic)(diffs); // impure function

  return {
    diffs,
    isMultiline
  };
};

exports.computeStringDiffs = computeStringDiffs;

const hasCommonDiff = (diffs, isMultiline) => {
  if (isMultiline) {
    // Important: Ignore common newline that was appended to multiline strings!
    const iLast = diffs.length - 1;
    return diffs.some(
      (diff, i) =>
        diff[0] === cleanupSemantic.DIFF_EQUAL &&
        (i !== iLast || diff[1] !== '\n')
    );
  }

  return diffs.some(diff => diff[0] === cleanupSemantic.DIFF_EQUAL);
};

exports.hasCommonDiff = hasCommonDiff;

const printAnnotation = options =>
  EXPECTED_COLOR('- ' + ((options && options.aAnnotation) || 'Expected')) +
  '\n' +
  RECEIVED_COLOR('+ ' + ((options && options.bAnnotation) || 'Received')) +
  '\n\n'; // In GNU diff format, indexes are one-based instead of zero-based.

exports.printAnnotation = printAnnotation;

const createPatchMark = (aStart, aEnd, bStart, bEnd) =>
  PATCH_COLOR(
    `@@ -${aStart + 1},${aEnd - aStart} +${bStart + 1},${bEnd - bStart} @@`
  ); // Return formatted diff lines without labels.

exports.createPatchMark = createPatchMark;

const printMultilineStringDiffs = (diffs, expand) => {
  const lines = (0, _getAlignedDiffs.default)(diffs);
  return expand
    ? (0, joinAlignedDiffs.joinAlignedDiffsExpand)(lines)
    : (0, joinAlignedDiffs.joinAlignedDiffsNoExpand)(lines);
};

exports.printMultilineStringDiffs = printMultilineStringDiffs;
const MAX_DIFF_STRING_LENGTH = 20000;

// Print specific substring diff for strings only:
// * if strings are not equal
// * if neither string is empty
// * if neither string is too long
// * if there is a common string after semantic cleanup
const getStringDiff = (expected, received, options) => {
  if (
    expected === received ||
    expected.length === 0 ||
    received.length === 0 ||
    expected.length > MAX_DIFF_STRING_LENGTH ||
    received.length > MAX_DIFF_STRING_LENGTH
  ) {
    return null;
  }

  const _computeStringDiffs = computeStringDiffs(expected, received),
    diffs = _computeStringDiffs.diffs,
    isMultiline = _computeStringDiffs.isMultiline;

  if (!hasCommonDiff(diffs, isMultiline)) {
    return null;
  }

  return isMultiline
    ? {
        annotatedDiff:
          printAnnotation(options) +
          printMultilineStringDiffs(
            diffs,
            options === undefined || options.expand !== false
          ),
        isMultiline
      }
    : {
        a: getExpectedString(diffs),
        b: getReceivedString(diffs),
        isMultiline
      };
};

exports.getStringDiff = getStringDiff;
});

var diffLines = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _chalk = _interopRequireDefault(chalk);

var _diffSequences = _interopRequireDefault(build$1);





function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const DIFF_CONTEXT_DEFAULT = 5;
const fgDelete = _chalk.default.green;
const fgInsert = _chalk.default.red;
const fgCommon = _chalk.default.dim; // common lines (even indentation same)

const fgIndent = _chalk.default.cyan; // common lines (only indentation different)

const bgCommon = _chalk.default.bgYellow; // edge spaces in common line (even indentation same)

const bgInverse = _chalk.default.inverse; // edge spaces in any other lines
// ONLY trailing if expected value is snapshot or multiline string.

const highlightTrailingSpaces = (line, bgColor) =>
  line.replace(/\s+$/, bgColor('$&')); // BOTH leading AND trailing if expected value is data structure.

const highlightLeadingTrailingSpaces = (
  line,
  bgColor // If line consists of ALL spaces: highlight all of them.
) =>
  highlightTrailingSpaces(line, bgColor).replace(
    // If line has an ODD length of leading spaces: highlight only the LAST.
    /^(\s\s)*(\s)(?=[^\s])/,
    '$1' + bgColor('$2')
  );

const getHighlightSpaces = bothEdges =>
  bothEdges ? highlightLeadingTrailingSpaces : highlightTrailingSpaces;

// Given index interval in expected lines, put formatted delete lines.
const formatDelete = (aStart, aEnd, aLinesUn, aLinesIn, put) => {
  const highlightSpaces = getHighlightSpaces(aLinesUn !== aLinesIn);

  for (let aIndex = aStart; aIndex !== aEnd; aIndex += 1) {
    const aLineUn = aLinesUn[aIndex];
    const aLineIn = aLinesIn[aIndex];
    const indentation = aLineIn.slice(0, aLineIn.length - aLineUn.length);
    put(fgDelete('- ' + indentation + highlightSpaces(aLineUn, bgInverse)));
  }
}; // Given index interval in received lines, put formatted insert lines.

const formatInsert = (bStart, bEnd, bLinesUn, bLinesIn, put) => {
  const highlightSpaces = getHighlightSpaces(bLinesUn !== bLinesIn);

  for (let bIndex = bStart; bIndex !== bEnd; bIndex += 1) {
    const bLineUn = bLinesUn[bIndex];
    const bLineIn = bLinesIn[bIndex];
    const indentation = bLineIn.slice(0, bLineIn.length - bLineUn.length);
    put(fgInsert('+ ' + indentation + highlightSpaces(bLineUn, bgInverse)));
  }
}; // Given the number of items and starting indexes of a common subsequence,
// put formatted common lines.

const formatCommon = (
  nCommon,
  aCommon,
  bCommon,
  aLinesIn,
  bLinesUn,
  bLinesIn,
  put
) => {
  const highlightSpaces = getHighlightSpaces(bLinesUn !== bLinesIn);

  for (; nCommon !== 0; nCommon -= 1, aCommon += 1, bCommon += 1) {
    const bLineUn = bLinesUn[bCommon];
    const bLineIn = bLinesIn[bCommon];
    const bLineInLength = bLineIn.length; // For common lines, received indentation seems more intuitive.

    const indentation = bLineIn.slice(0, bLineInLength - bLineUn.length); // Color shows whether expected and received line has same indentation.

    const hasSameIndentation = aLinesIn[aCommon].length === bLineInLength;
    const fg = hasSameIndentation ? fgCommon : fgIndent;
    const bg = hasSameIndentation ? bgCommon : bgInverse;
    put(fg('  ' + indentation + highlightSpaces(bLineUn, bg)));
  }
}; // jest --expand
// Return formatted diff as joined string of all lines.

const diffExpand = (aLinesUn, bLinesUn, aLinesIn, bLinesIn) => {
  const isCommon = (aIndex, bIndex) => aLinesUn[aIndex] === bLinesUn[bIndex];

  const array = [];

  const put = line => {
    array.push(line);
  };

  let aStart = 0;
  let bStart = 0;

  const foundSubsequence = (nCommon, aCommon, bCommon) => {
    formatDelete(aStart, aCommon, aLinesUn, aLinesIn, put);
    formatInsert(bStart, bCommon, bLinesUn, bLinesIn, put);
    formatCommon(nCommon, aCommon, bCommon, aLinesIn, bLinesUn, bLinesIn, put);
    aStart = aCommon + nCommon;
    bStart = bCommon + nCommon;
  };

  const aLength = aLinesUn.length;
  const bLength = bLinesUn.length;
  (0, _diffSequences.default)(aLength, bLength, isCommon, foundSubsequence); // After the last common subsequence, format remaining change lines.

  formatDelete(aStart, aLength, aLinesUn, aLinesIn, put);
  formatInsert(bStart, bLength, bLinesUn, bLinesIn, put);
  return array.join('\n');
};

const getContextLines = options =>
  options &&
  typeof options.contextLines === 'number' &&
  options.contextLines >= 0
    ? options.contextLines
    : DIFF_CONTEXT_DEFAULT; // jest --no-expand
// Return joined string of formatted diff for all change lines,
// but if some common lines are omitted because there are more than the context,
// then a “patch mark” precedes each set of adjacent changed and common lines.

const diffNoExpand = (
  aLinesUn,
  bLinesUn,
  aLinesIn,
  bLinesIn,
  nContextLines
) => {
  const isCommon = (aIndex, bIndex) => aLinesUn[aIndex] === bLinesUn[bIndex];

  let iPatchMark = 0; // index of placeholder line for patch mark

  const array = [''];

  const put = line => {
    array.push(line);
  };

  let isAtEnd = false;
  const aLength = aLinesUn.length;
  const bLength = bLinesUn.length;
  const nContextLines2 = nContextLines + nContextLines; // Initialize the first patch for changes at the start,
  // especially for edge case in which there is no common subsequence.

  let aStart = 0;
  let aEnd = 0;
  let bStart = 0;
  let bEnd = 0; // Given the number of items and starting indexes of each common subsequence,
  // format any preceding change lines, and then common context lines.

  const foundSubsequence = (nCommon, aStartCommon, bStartCommon) => {
    const aEndCommon = aStartCommon + nCommon;
    const bEndCommon = bStartCommon + nCommon;
    isAtEnd = aEndCommon === aLength && bEndCommon === bLength; // If common subsequence is at start, re-initialize the first patch.

    if (aStartCommon === 0 && bStartCommon === 0) {
      const nLines = nContextLines < nCommon ? nContextLines : nCommon;
      aStart = aEndCommon - nLines;
      bStart = bEndCommon - nLines;
      formatCommon(nLines, aStart, bStart, aLinesIn, bLinesUn, bLinesIn, put);
      aEnd = aEndCommon;
      bEnd = bEndCommon;
      return;
    } // Format preceding change lines.

    formatDelete(aEnd, aStartCommon, aLinesUn, aLinesIn, put);
    formatInsert(bEnd, bStartCommon, bLinesUn, bLinesIn, put);
    aEnd = aStartCommon;
    bEnd = bStartCommon; // If common subsequence is at end, then context follows preceding changes;
    // else context follows preceding changes AND precedes following changes.

    const maxContextLines = isAtEnd ? nContextLines : nContextLines2;

    if (nCommon <= maxContextLines) {
      // The patch includes all lines in the common subsequence.
      formatCommon(nCommon, aEnd, bEnd, aLinesIn, bLinesUn, bLinesIn, put);
      aEnd += nCommon;
      bEnd += nCommon;
      return;
    } // The patch ends because context is less than number of common lines.

    formatCommon(nContextLines, aEnd, bEnd, aLinesIn, bLinesUn, bLinesIn, put);
    aEnd += nContextLines;
    bEnd += nContextLines;
    array[iPatchMark] = (0, printDiffs.createPatchMark)(
      aStart,
      aEnd,
      bStart,
      bEnd
    ); // If common subsequence is not at end, another patch follows it.

    if (!isAtEnd) {
      iPatchMark = array.length; // index of placeholder line

      array[iPatchMark] = '';
      const nLines = nContextLines < nCommon ? nContextLines : nCommon;
      aStart = aEndCommon - nLines;
      bStart = bEndCommon - nLines;
      formatCommon(nLines, aStart, bStart, aLinesIn, bLinesUn, bLinesIn, put);
      aEnd = aEndCommon;
      bEnd = bEndCommon;
    }
  };

  (0, _diffSequences.default)(aLength, bLength, isCommon, foundSubsequence); // If no common subsequence or last was not at end, format remaining change lines.

  if (!isAtEnd) {
    formatDelete(aEnd, aLength, aLinesUn, aLinesIn, put);
    formatInsert(bEnd, bLength, bLinesUn, bLinesIn, put);
    aEnd = aLength;
    bEnd = bLength;
  }

  if (aStart === 0 && aEnd === aLength && bStart === 0 && bEnd === bLength) {
    array.splice(0, 1); // delete placeholder line for patch mark
  } else {
    array[iPatchMark] = (0, printDiffs.createPatchMark)(
      aStart,
      aEnd,
      bStart,
      bEnd
    );
  }

  return array.join('\n');
};

var _default = (a, b, options, original) => {
  if (a === b) {
    return constants.NO_DIFF_MESSAGE;
  }

  let aLinesUn = a.split('\n');
  let bLinesUn = b.split('\n'); // Indentation is unknown if expected value is snapshot or multiline string.

  let aLinesIn = aLinesUn;
  let bLinesIn = bLinesUn;

  if (original) {
    // Indentation is known if expected value is data structure:
    // Compare lines without indentation and format lines with indentation.
    aLinesIn = original.a.split('\n');
    bLinesIn = original.b.split('\n');

    if (
      aLinesUn.length !== aLinesIn.length ||
      bLinesUn.length !== bLinesIn.length
    ) {
      // Fall back if unindented and indented lines are inconsistent.
      aLinesUn = aLinesIn;
      bLinesUn = bLinesIn;
    }
  }

  return (
    (0, printDiffs.printAnnotation)(options) +
    (options && options.expand === false
      ? diffNoExpand(
          aLinesUn,
          bLinesUn,
          aLinesIn,
          bLinesIn,
          getContextLines(options)
        )
      : diffExpand(aLinesUn, bLinesUn, aLinesIn, bLinesIn))
  );
};

exports.default = _default;
});

var build$2 = createCommonjsModule(function (module) {

var _prettyFormat = _interopRequireDefault(buildEs5);

var _chalk = _interopRequireDefault(chalk);

var _jestGetType = _interopRequireDefault(build);

var _diffLines = _interopRequireDefault(diffLines);





function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

var Symbol = commonjsGlobal['jest-symbol-do-not-touch'] || commonjsGlobal.Symbol;

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(
        Object.getOwnPropertySymbols(source).filter(function(sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        })
      );
    }
    ownKeys.forEach(function(key) {
      _defineProperty(target, key, source[key]);
    });
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

const _prettyFormat$plugins = _prettyFormat.default.plugins,
  AsymmetricMatcher = _prettyFormat$plugins.AsymmetricMatcher,
  DOMCollection = _prettyFormat$plugins.DOMCollection,
  DOMElement = _prettyFormat$plugins.DOMElement,
  Immutable = _prettyFormat$plugins.Immutable,
  ReactElement = _prettyFormat$plugins.ReactElement,
  ReactTestComponent = _prettyFormat$plugins.ReactTestComponent;
const PLUGINS = [
  ReactTestComponent,
  ReactElement,
  DOMElement,
  DOMCollection,
  Immutable,
  AsymmetricMatcher
];
const FORMAT_OPTIONS = {
  plugins: PLUGINS
};

const FORMAT_OPTIONS_0 = _objectSpread({}, FORMAT_OPTIONS, {
  indent: 0
});

const FALLBACK_FORMAT_OPTIONS = {
  callToJSON: false,
  maxDepth: 10,
  plugins: PLUGINS
};

const FALLBACK_FORMAT_OPTIONS_0 = _objectSpread({}, FALLBACK_FORMAT_OPTIONS, {
  indent: 0
}); // Generate a string that will highlight the difference between two values
// with green and red. (similar to how github does code diffing)

function diff(a, b, options) {
  if (Object.is(a, b)) {
    return constants.NO_DIFF_MESSAGE;
  }

  const aType = (0, _jestGetType.default)(a);
  let expectedType = aType;
  let omitDifference = false;

  if (aType === 'object' && typeof a.asymmetricMatch === 'function') {
    if (a.$$typeof !== Symbol.for('jest.asymmetricMatcher')) {
      // Do not know expected type of user-defined asymmetric matcher.
      return null;
    }

    if (typeof a.getExpectedType !== 'function') {
      // For example, expect.anything() matches either null or undefined
      return null;
    }

    expectedType = a.getExpectedType(); // Primitive types boolean and number omit difference below.
    // For example, omit difference for expect.stringMatching(regexp)

    omitDifference = expectedType === 'string';
  }

  if (expectedType !== (0, _jestGetType.default)(b)) {
    return (
      '  Comparing two different types of values.' +
      ` Expected ${_chalk.default.green(expectedType)} but ` +
      `received ${_chalk.default.red((0, _jestGetType.default)(b))}.`
    );
  }

  if (omitDifference) {
    return null;
  }

  switch (aType) {
    case 'string':
      return (0, _diffLines.default)(a, b, options);

    case 'boolean':
    case 'number':
      return comparePrimitive(a, b, options);

    case 'map':
      return compareObjects(sortMap(a), sortMap(b), options);

    case 'set':
      return compareObjects(sortSet(a), sortSet(b), options);

    default:
      return compareObjects(a, b, options);
  }
}

function comparePrimitive(a, b, options) {
  return (0, _diffLines.default)(
    (0, _prettyFormat.default)(a, FORMAT_OPTIONS),
    (0, _prettyFormat.default)(b, FORMAT_OPTIONS),
    options
  );
}

function sortMap(map) {
  return new Map(Array.from(map.entries()).sort());
}

function sortSet(set) {
  return new Set(Array.from(set.values()).sort());
}

function compareObjects(a, b, options) {
  let diffMessage;
  let hasThrown = false;

  try {
    diffMessage = (0, _diffLines.default)(
      (0, _prettyFormat.default)(a, FORMAT_OPTIONS_0),
      (0, _prettyFormat.default)(b, FORMAT_OPTIONS_0),
      options,
      {
        a: (0, _prettyFormat.default)(a, FORMAT_OPTIONS),
        b: (0, _prettyFormat.default)(b, FORMAT_OPTIONS)
      }
    );
  } catch (e) {
    hasThrown = true;
  } // If the comparison yields no results, compare again but this time
  // without calling `toJSON`. It's also possible that toJSON might throw.

  if (!diffMessage || diffMessage === constants.NO_DIFF_MESSAGE) {
    diffMessage = (0, _diffLines.default)(
      (0, _prettyFormat.default)(a, FALLBACK_FORMAT_OPTIONS_0),
      (0, _prettyFormat.default)(b, FALLBACK_FORMAT_OPTIONS_0),
      options,
      {
        a: (0, _prettyFormat.default)(a, FALLBACK_FORMAT_OPTIONS),
        b: (0, _prettyFormat.default)(b, FALLBACK_FORMAT_OPTIONS)
      }
    );

    if (diffMessage !== constants.NO_DIFF_MESSAGE && !hasThrown) {
      diffMessage = constants.SIMILAR_MESSAGE + '\n\n' + diffMessage;
    }
  }

  return diffMessage;
} // eslint-disable-next-line no-redeclare

diff.getStringDiff = printDiffs.getStringDiff;
module.exports = diff;
});

var build$3 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', {
  value: true
});
Object.defineProperty(exports, 'DiffOptions', {
  enumerable: true,
  get: function get() {
    return _jestDiff.DiffOptions;
  }
});
exports.matcherHint = exports.matcherErrorMessage = exports.getLabelPrinter = exports.pluralize = exports.diff = exports.printDiffOrStringify = exports.ensureExpectedIsNonNegativeInteger = exports.ensureNumbers = exports.ensureExpectedIsNumber = exports.ensureActualIsNumber = exports.ensureNoExpected = exports.printWithType = exports.printExpected = exports.printReceived = exports.highlightTrailingWhitespace = exports.stringify = exports.SUGGEST_TO_CONTAIN_EQUAL = exports.DIM_COLOR = exports.BOLD_WEIGHT = exports.INVERTED_COLOR = exports.RECEIVED_COLOR = exports.EXPECTED_COLOR = void 0;

var _chalk = _interopRequireDefault(chalk);

var _jestDiff = _interopRequireWildcard(build$2);

var _jestGetType = _interopRequireWildcard(build);

var _prettyFormat = _interopRequireDefault(buildEs5);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc =
            Object.defineProperty && Object.getOwnPropertyDescriptor
              ? Object.getOwnPropertyDescriptor(obj, key)
              : {};
          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }
    newObj.default = obj;
    return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const _prettyFormat$plugins = _prettyFormat.default.plugins,
  AsymmetricMatcher = _prettyFormat$plugins.AsymmetricMatcher,
  DOMCollection = _prettyFormat$plugins.DOMCollection,
  DOMElement = _prettyFormat$plugins.DOMElement,
  Immutable = _prettyFormat$plugins.Immutable,
  ReactElement = _prettyFormat$plugins.ReactElement,
  ReactTestComponent = _prettyFormat$plugins.ReactTestComponent;
const PLUGINS = [
  ReactTestComponent,
  ReactElement,
  DOMElement,
  DOMCollection,
  Immutable,
  AsymmetricMatcher
];
const EXPECTED_COLOR = _chalk.default.green;
exports.EXPECTED_COLOR = EXPECTED_COLOR;
const RECEIVED_COLOR = _chalk.default.red;
exports.RECEIVED_COLOR = RECEIVED_COLOR;
const INVERTED_COLOR = _chalk.default.inverse;
exports.INVERTED_COLOR = INVERTED_COLOR;
const BOLD_WEIGHT = _chalk.default.bold;
exports.BOLD_WEIGHT = BOLD_WEIGHT;
const DIM_COLOR = _chalk.default.dim;
exports.DIM_COLOR = DIM_COLOR;
const MULTILINE_REGEXP = /\n/;
const SPACE_SYMBOL = '\u{00B7}'; // middle dot

const NUMBERS = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen'
];

const SUGGEST_TO_CONTAIN_EQUAL = _chalk.default.dim(
  'Looks like you wanted to test for object/array equality with the stricter `toContain` matcher. You probably need to use `toContainEqual` instead.'
);

exports.SUGGEST_TO_CONTAIN_EQUAL = SUGGEST_TO_CONTAIN_EQUAL;

const stringify = (object, maxDepth = 10) => {
  const MAX_LENGTH = 10000;
  let result;

  try {
    result = (0, _prettyFormat.default)(object, {
      maxDepth,
      min: true,
      plugins: PLUGINS
    });
  } catch (e) {
    result = (0, _prettyFormat.default)(object, {
      callToJSON: false,
      maxDepth,
      min: true,
      plugins: PLUGINS
    });
  }

  return result.length >= MAX_LENGTH && maxDepth > 1
    ? stringify(object, Math.floor(maxDepth / 2))
    : result;
};

exports.stringify = stringify;

const highlightTrailingWhitespace = text =>
  text.replace(/\s+$/gm, _chalk.default.inverse('$&')); // Instead of inverse highlight which now implies a change,
// replace common spaces with middle dot at the end of any line.

exports.highlightTrailingWhitespace = highlightTrailingWhitespace;

const replaceTrailingSpaces = text =>
  text.replace(/\s+$/gm, spaces => SPACE_SYMBOL.repeat(spaces.length));

const printReceived = object =>
  RECEIVED_COLOR(replaceTrailingSpaces(stringify(object)));

exports.printReceived = printReceived;

const printExpected = value =>
  EXPECTED_COLOR(replaceTrailingSpaces(stringify(value)));

exports.printExpected = printExpected;

const printWithType = (
  name,
  value,
  print // printExpected or printReceived
) => {
  const type = (0, _jestGetType.default)(value);
  const hasType =
    type !== 'null' && type !== 'undefined'
      ? `${name} has type:  ${type}\n`
      : '';
  const hasValue = `${name} has value: ${print(value)}`;
  return hasType + hasValue;
};

exports.printWithType = printWithType;

const ensureNoExpected = (expected, matcherName, options) => {
  if (typeof expected !== 'undefined') {
    // Prepend maybe not only for backward compatibility.
    const matcherString = (options ? '' : '[.not]') + matcherName;
    throw new Error(
      matcherErrorMessage(
        matcherHint(matcherString, undefined, '', options), // Because expected is omitted in hint above,
        'this matcher must not have an expected argument',
        printWithType('Expected', expected, printExpected)
      )
    );
  }
};

exports.ensureNoExpected = ensureNoExpected;

const ensureActualIsNumber = (actual, matcherName, options) => {
  if (typeof actual !== 'number') {
    // Prepend maybe not only for backward compatibility.
    const matcherString = (options ? '' : '[.not]') + matcherName;
    throw new Error(
      matcherErrorMessage(
        matcherHint(matcherString, undefined, undefined, options),
        `${RECEIVED_COLOR('received')} value must be a number`,
        printWithType('Received', actual, printReceived)
      )
    );
  }
};

exports.ensureActualIsNumber = ensureActualIsNumber;

const ensureExpectedIsNumber = (expected, matcherName, options) => {
  if (typeof expected !== 'number') {
    // Prepend maybe not only for backward compatibility.
    const matcherString = (options ? '' : '[.not]') + matcherName;
    throw new Error(
      matcherErrorMessage(
        matcherHint(matcherString, undefined, undefined, options),
        `${EXPECTED_COLOR('expected')} value must be a number`,
        printWithType('Expected', expected, printExpected)
      )
    );
  }
};

exports.ensureExpectedIsNumber = ensureExpectedIsNumber;

const ensureNumbers = (actual, expected, matcherName, options) => {
  ensureActualIsNumber(actual, matcherName, options);
  ensureExpectedIsNumber(expected, matcherName, options);
};

exports.ensureNumbers = ensureNumbers;

const ensureExpectedIsNonNegativeInteger = (expected, matcherName, options) => {
  if (
    typeof expected !== 'number' ||
    !Number.isSafeInteger(expected) ||
    expected < 0
  ) {
    // Prepend maybe not only for backward compatibility.
    const matcherString = (options ? '' : '[.not]') + matcherName;
    throw new Error(
      matcherErrorMessage(
        matcherHint(matcherString, undefined, undefined, options),
        `${EXPECTED_COLOR('expected')} value must be a non-negative integer`,
        printWithType('Expected', expected, printExpected)
      )
    );
  }
};

exports.ensureExpectedIsNonNegativeInteger = ensureExpectedIsNonNegativeInteger;

const isLineDiffable = (expected, received) => {
  const expectedType = (0, _jestGetType.default)(expected);
  const receivedType = (0, _jestGetType.default)(received);

  if (expectedType !== receivedType) {
    return false;
  }

  if ((0, _jestGetType.isPrimitive)(expected)) {
    // Print generic line diff for strings only:
    // * if neither string is empty
    return (
      typeof expected === 'string' &&
      typeof received === 'string' &&
      expected.length !== 0 &&
      received.length !== 0 &&
      (MULTILINE_REGEXP.test(expected) || MULTILINE_REGEXP.test(received))
    );
  }

  if (
    expectedType === 'date' ||
    expectedType === 'function' ||
    expectedType === 'regexp'
  ) {
    return false;
  }

  if (expected instanceof Error && received instanceof Error) {
    return false;
  }

  if (
    expectedType === 'object' &&
    typeof expected.asymmetricMatch === 'function'
  ) {
    return false;
  }

  if (
    receivedType === 'object' &&
    typeof received.asymmetricMatch === 'function'
  ) {
    return false;
  }

  return true;
};

const printDiffOrStringify = (
  expected,
  received,
  expectedLabel,
  receivedLabel,
  expand
) => {
  if (typeof expected === 'string' && typeof received === 'string') {
    const result = (0, _jestDiff.getStringDiff)(expected, received, {
      aAnnotation: expectedLabel,
      bAnnotation: receivedLabel,
      expand
    });

    if (result !== null) {
      if (result.isMultiline) {
        return result.annotatedDiff;
      }

      const printLabel = getLabelPrinter(expectedLabel, receivedLabel);
      const expectedLine = printLabel(expectedLabel) + printExpected(result.a);
      const receivedLine = printLabel(receivedLabel) + printReceived(result.b);
      return expectedLine + '\n' + receivedLine;
    }
  }

  if (isLineDiffable(expected, received)) {
    const difference = (0, _jestDiff.default)(expected, received, {
      aAnnotation: expectedLabel,
      bAnnotation: receivedLabel,
      expand
    });

    if (
      typeof difference === 'string' &&
      difference.includes('- ' + expectedLabel) &&
      difference.includes('+ ' + receivedLabel)
    ) {
      return difference;
    }
  }

  const printLabel = getLabelPrinter(expectedLabel, receivedLabel);
  const expectedLine = printLabel(expectedLabel) + printExpected(expected);
  const receivedLine =
    printLabel(receivedLabel) +
    (stringify(expected) === stringify(received)
      ? 'serializes to the same string'
      : printReceived(received));
  return expectedLine + '\n' + receivedLine;
}; // Sometimes, e.g. when comparing two numbers, the output from jest-diff
// does not contain more information than the `Expected:` / `Received:` already gives.
// In those cases, we do not print a diff to make the output shorter and not redundant.

exports.printDiffOrStringify = printDiffOrStringify;

const shouldPrintDiff = (actual, expected) => {
  if (typeof actual === 'number' && typeof expected === 'number') {
    return false;
  }

  if (typeof actual === 'boolean' && typeof expected === 'boolean') {
    return false;
  }

  return true;
};

const diff = (a, b, options) =>
  shouldPrintDiff(a, b) ? (0, _jestDiff.default)(a, b, options) : null;

exports.diff = diff;

const pluralize = (word, count) =>
  (NUMBERS[count] || count) + ' ' + word + (count === 1 ? '' : 's'); // To display lines of labeled values as two columns with monospace alignment:
// given the strings which will describe the values,
// return function which given each string, returns the label:
// string, colon, space, and enough padding spaces to align the value.

exports.pluralize = pluralize;

const getLabelPrinter = (...strings) => {
  const maxLength = strings.reduce(
    (max, string) => (string.length > max ? string.length : max),
    0
  );
  return string => `${string}: ${' '.repeat(maxLength - string.length)}`;
};

exports.getLabelPrinter = getLabelPrinter;

const matcherErrorMessage = (
  hint,
  generic,
  specific // incorrect value returned from call to printWithType
) =>
  `${hint}\n\n${_chalk.default.bold(
    'Matcher error'
  )}: ${generic}\n\n${specific}`; // Display assertion for the report when a test fails.
// New format: rejects/resolves, not, and matcher name have black color
// Old format: matcher name has dim color

exports.matcherErrorMessage = matcherErrorMessage;

const matcherHint = (
  matcherName,
  received = 'received',
  expected = 'expected',
  options = {}
) => {
  const _options$comment = options.comment,
    comment = _options$comment === void 0 ? '' : _options$comment,
    _options$expectedColo = options.expectedColor,
    expectedColor =
      _options$expectedColo === void 0 ? EXPECTED_COLOR : _options$expectedColo,
    _options$isDirectExpe = options.isDirectExpectCall,
    isDirectExpectCall =
      _options$isDirectExpe === void 0 ? false : _options$isDirectExpe,
    _options$isNot = options.isNot,
    isNot = _options$isNot === void 0 ? false : _options$isNot,
    _options$promise = options.promise,
    promise = _options$promise === void 0 ? '' : _options$promise,
    _options$receivedColo = options.receivedColor,
    receivedColor =
      _options$receivedColo === void 0 ? RECEIVED_COLOR : _options$receivedColo,
    _options$secondArgume = options.secondArgument,
    secondArgument =
      _options$secondArgume === void 0 ? '' : _options$secondArgume,
    _options$secondArgume2 = options.secondArgumentColor,
    secondArgumentColor =
      _options$secondArgume2 === void 0
        ? EXPECTED_COLOR
        : _options$secondArgume2;
  let hint = '';
  let dimString = 'expect'; // concatenate adjacent dim substrings

  if (!isDirectExpectCall && received !== '') {
    hint += DIM_COLOR(dimString + '(') + receivedColor(received);
    dimString = ')';
  }

  if (promise !== '') {
    hint += DIM_COLOR(dimString + '.') + promise;
    dimString = '';
  }

  if (isNot) {
    hint += DIM_COLOR(dimString + '.') + 'not';
    dimString = '';
  }

  if (matcherName.includes('.')) {
    // Old format: for backward compatibility,
    // especially without promise or isNot options
    dimString += matcherName;
  } else {
    // New format: omit period from matcherName arg
    hint += DIM_COLOR(dimString + '.') + matcherName;
    dimString = '';
  }

  if (expected === '') {
    dimString += '()';
  } else {
    hint += DIM_COLOR(dimString + '(') + expectedColor(expected);

    if (secondArgument) {
      hint += DIM_COLOR(', ') + secondArgumentColor(secondArgument);
    }

    dimString = ')';
  }

  if (comment !== '') {
    dimString += ' // ' + comment;
  }

  if (dimString !== '') {
    hint += DIM_COLOR(dimString);
  }

  return hint;
};

exports.matcherHint = matcherHint;
});

var minIndent = string => {
	const match = string.match(/^[ \t]*(?=\S)/gm);

	if (!match) {
		return 0;
	}

	return match.reduce((r, a) => Math.min(r, a.length), Infinity);
};

var stripIndent = string => {
	const indent = minIndent(string);

	if (indent === 0) {
		return string;
	}

	const regex = new RegExp(`^[ \\t]{${indent}}`, 'gm');

	return string.replace(regex, '');
};

var indentString = (string, count = 1, options) => {
	options = {
		indent: ' ',
		includeEmptyLines: false,
		...options
	};

	if (typeof string !== 'string') {
		throw new TypeError(
			`Expected \`input\` to be a \`string\`, got \`${typeof string}\``
		);
	}

	if (typeof count !== 'number') {
		throw new TypeError(
			`Expected \`count\` to be a \`number\`, got \`${typeof count}\``
		);
	}

	if (typeof options.indent !== 'string') {
		throw new TypeError(
			`Expected \`options.indent\` to be a \`string\`, got \`${typeof options.indent}\``
		);
	}

	if (count === 0) {
		return string;
	}

	const regex = options.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;

	return string.replace(regex, options.indent.repeat(count));
};

var redent = (string, count = 0, options) => indentString(stripIndent(string), count, options);

// http://www.w3.org/TR/CSS21/grammar.html
// https://github.com/visionmedia/css-parse/pull/49#issuecomment-30088027
var commentre = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;

var parse = function(css, options){
  options = options || {};

  /**
   * Positional.
   */

  var lineno = 1;
  var column = 1;

  /**
   * Update lineno and column based on `str`.
   */

  function updatePosition(str) {
    var lines = str.match(/\n/g);
    if (lines) lineno += lines.length;
    var i = str.lastIndexOf('\n');
    column = ~i ? str.length - i : column + str.length;
  }

  /**
   * Mark position and patch `node.position`.
   */

  function position() {
    var start = { line: lineno, column: column };
    return function(node){
      node.position = new Position(start);
      whitespace();
      return node;
    };
  }

  /**
   * Store position information for a node
   */

  function Position(start) {
    this.start = start;
    this.end = { line: lineno, column: column };
    this.source = options.source;
  }

  /**
   * Non-enumerable source string
   */

  Position.prototype.content = css;

  /**
   * Error `msg`.
   */

  var errorsList = [];

  function error(msg) {
    var err = new Error(options.source + ':' + lineno + ':' + column + ': ' + msg);
    err.reason = msg;
    err.filename = options.source;
    err.line = lineno;
    err.column = column;
    err.source = css;

    if (options.silent) {
      errorsList.push(err);
    } else {
      throw err;
    }
  }

  /**
   * Parse stylesheet.
   */

  function stylesheet() {
    var rulesList = rules();

    return {
      type: 'stylesheet',
      stylesheet: {
        source: options.source,
        rules: rulesList,
        parsingErrors: errorsList
      }
    };
  }

  /**
   * Opening brace.
   */

  function open() {
    return match(/^{\s*/);
  }

  /**
   * Closing brace.
   */

  function close() {
    return match(/^}/);
  }

  /**
   * Parse ruleset.
   */

  function rules() {
    var node;
    var rules = [];
    whitespace();
    comments(rules);
    while (css.length && css.charAt(0) != '}' && (node = atrule() || rule())) {
      if (node !== false) {
        rules.push(node);
        comments(rules);
      }
    }
    return rules;
  }

  /**
   * Match `re` and return captures.
   */

  function match(re) {
    var m = re.exec(css);
    if (!m) return;
    var str = m[0];
    updatePosition(str);
    css = css.slice(str.length);
    return m;
  }

  /**
   * Parse whitespace.
   */

  function whitespace() {
    match(/^\s*/);
  }

  /**
   * Parse comments;
   */

  function comments(rules) {
    var c;
    rules = rules || [];
    while (c = comment()) {
      if (c !== false) {
        rules.push(c);
      }
    }
    return rules;
  }

  /**
   * Parse comment.
   */

  function comment() {
    var pos = position();
    if ('/' != css.charAt(0) || '*' != css.charAt(1)) return;

    var i = 2;
    while ("" != css.charAt(i) && ('*' != css.charAt(i) || '/' != css.charAt(i + 1))) ++i;
    i += 2;

    if ("" === css.charAt(i-1)) {
      return error('End of comment missing');
    }

    var str = css.slice(2, i - 2);
    column += 2;
    updatePosition(str);
    css = css.slice(i);
    column += 2;

    return pos({
      type: 'comment',
      comment: str
    });
  }

  /**
   * Parse selector.
   */

  function selector() {
    var m = match(/^([^{]+)/);
    if (!m) return;
    /* @fix Remove all comments from selectors
     * http://ostermiller.org/findcomment.html */
    return trim(m[0])
      .replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*\/+/g, '')
      .replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g, function(m) {
        return m.replace(/,/g, '\u200C');
      })
      .split(/\s*(?![^(]*\)),\s*/)
      .map(function(s) {
        return s.replace(/\u200C/g, ',');
      });
  }

  /**
   * Parse declaration.
   */

  function declaration() {
    var pos = position();

    // prop
    var prop = match(/^(\*?[-#\/\*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);
    if (!prop) return;
    prop = trim(prop[0]);

    // :
    if (!match(/^:\s*/)) return error("property missing ':'");

    // val
    var val = match(/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^\)]*?\)|[^};])+)/);

    var ret = pos({
      type: 'declaration',
      property: prop.replace(commentre, ''),
      value: val ? trim(val[0]).replace(commentre, '') : ''
    });

    // ;
    match(/^[;\s]*/);

    return ret;
  }

  /**
   * Parse declarations.
   */

  function declarations() {
    var decls = [];

    if (!open()) return error("missing '{'");
    comments(decls);

    // declarations
    var decl;
    while (decl = declaration()) {
      if (decl !== false) {
        decls.push(decl);
        comments(decls);
      }
    }

    if (!close()) return error("missing '}'");
    return decls;
  }

  /**
   * Parse keyframe.
   */

  function keyframe() {
    var m;
    var vals = [];
    var pos = position();

    while (m = match(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/)) {
      vals.push(m[1]);
      match(/^,\s*/);
    }

    if (!vals.length) return;

    return pos({
      type: 'keyframe',
      values: vals,
      declarations: declarations()
    });
  }

  /**
   * Parse keyframes.
   */

  function atkeyframes() {
    var pos = position();
    var m = match(/^@([-\w]+)?keyframes\s*/);

    if (!m) return;
    var vendor = m[1];

    // identifier
    var m = match(/^([-\w]+)\s*/);
    if (!m) return error("@keyframes missing name");
    var name = m[1];

    if (!open()) return error("@keyframes missing '{'");

    var frame;
    var frames = comments();
    while (frame = keyframe()) {
      frames.push(frame);
      frames = frames.concat(comments());
    }

    if (!close()) return error("@keyframes missing '}'");

    return pos({
      type: 'keyframes',
      name: name,
      vendor: vendor,
      keyframes: frames
    });
  }

  /**
   * Parse supports.
   */

  function atsupports() {
    var pos = position();
    var m = match(/^@supports *([^{]+)/);

    if (!m) return;
    var supports = trim(m[1]);

    if (!open()) return error("@supports missing '{'");

    var style = comments().concat(rules());

    if (!close()) return error("@supports missing '}'");

    return pos({
      type: 'supports',
      supports: supports,
      rules: style
    });
  }

  /**
   * Parse host.
   */

  function athost() {
    var pos = position();
    var m = match(/^@host\s*/);

    if (!m) return;

    if (!open()) return error("@host missing '{'");

    var style = comments().concat(rules());

    if (!close()) return error("@host missing '}'");

    return pos({
      type: 'host',
      rules: style
    });
  }

  /**
   * Parse media.
   */

  function atmedia() {
    var pos = position();
    var m = match(/^@media *([^{]+)/);

    if (!m) return;
    var media = trim(m[1]);

    if (!open()) return error("@media missing '{'");

    var style = comments().concat(rules());

    if (!close()) return error("@media missing '}'");

    return pos({
      type: 'media',
      media: media,
      rules: style
    });
  }


  /**
   * Parse custom-media.
   */

  function atcustommedia() {
    var pos = position();
    var m = match(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);
    if (!m) return;

    return pos({
      type: 'custom-media',
      name: trim(m[1]),
      media: trim(m[2])
    });
  }

  /**
   * Parse paged media.
   */

  function atpage() {
    var pos = position();
    var m = match(/^@page */);
    if (!m) return;

    var sel = selector() || [];

    if (!open()) return error("@page missing '{'");
    var decls = comments();

    // declarations
    var decl;
    while (decl = declaration()) {
      decls.push(decl);
      decls = decls.concat(comments());
    }

    if (!close()) return error("@page missing '}'");

    return pos({
      type: 'page',
      selectors: sel,
      declarations: decls
    });
  }

  /**
   * Parse document.
   */

  function atdocument() {
    var pos = position();
    var m = match(/^@([-\w]+)?document *([^{]+)/);
    if (!m) return;

    var vendor = trim(m[1]);
    var doc = trim(m[2]);

    if (!open()) return error("@document missing '{'");

    var style = comments().concat(rules());

    if (!close()) return error("@document missing '}'");

    return pos({
      type: 'document',
      document: doc,
      vendor: vendor,
      rules: style
    });
  }

  /**
   * Parse font-face.
   */

  function atfontface() {
    var pos = position();
    var m = match(/^@font-face\s*/);
    if (!m) return;

    if (!open()) return error("@font-face missing '{'");
    var decls = comments();

    // declarations
    var decl;
    while (decl = declaration()) {
      decls.push(decl);
      decls = decls.concat(comments());
    }

    if (!close()) return error("@font-face missing '}'");

    return pos({
      type: 'font-face',
      declarations: decls
    });
  }

  /**
   * Parse import
   */

  var atimport = _compileAtrule('import');

  /**
   * Parse charset
   */

  var atcharset = _compileAtrule('charset');

  /**
   * Parse namespace
   */

  var atnamespace = _compileAtrule('namespace');

  /**
   * Parse non-block at-rules
   */


  function _compileAtrule(name) {
    var re = new RegExp('^@' + name + '\\s*([^;]+);');
    return function() {
      var pos = position();
      var m = match(re);
      if (!m) return;
      var ret = { type: name };
      ret[name] = m[1].trim();
      return pos(ret);
    }
  }

  /**
   * Parse at rule.
   */

  function atrule() {
    if (css[0] != '@') return;

    return atkeyframes()
      || atmedia()
      || atcustommedia()
      || atsupports()
      || atimport()
      || atcharset()
      || atnamespace()
      || atdocument()
      || atpage()
      || athost()
      || atfontface();
  }

  /**
   * Parse rule.
   */

  function rule() {
    var pos = position();
    var sel = selector();

    if (!sel) return error('selector missing');
    comments();

    return pos({
      type: 'rule',
      selectors: sel,
      declarations: declarations()
    });
  }

  return addParent(stylesheet());
};

/**
 * Trim `str`.
 */

function trim(str) {
  return str ? str.replace(/^\s+|\s+$/g, '') : '';
}

/**
 * Adds non-enumerable parent node reference to each node.
 */

function addParent(obj, parent) {
  var isNode = obj && typeof obj.type === 'string';
  var childParent = isNode ? obj : parent;

  for (var k in obj) {
    var value = obj[k];
    if (Array.isArray(value)) {
      value.forEach(function(v) { addParent(v, childParent); });
    } else if (value && typeof value === 'object') {
      addParent(value, childParent);
    }
  }

  if (isNode) {
    Object.defineProperty(obj, 'parent', {
      configurable: true,
      writable: true,
      enumerable: false,
      value: parent || null
    });
  }

  return obj;
}

/**
 * Expose `Compiler`.
 */

var compiler = Compiler;

/**
 * Initialize a compiler.
 *
 * @param {Type} name
 * @return {Type}
 * @api public
 */

function Compiler(opts) {
  this.options = opts || {};
}

/**
 * Emit `str`
 */

Compiler.prototype.emit = function(str) {
  return str;
};

/**
 * Visit `node`.
 */

Compiler.prototype.visit = function(node){
  return this[node.type](node);
};

/**
 * Map visit over array of `nodes`, optionally using a `delim`
 */

Compiler.prototype.mapVisit = function(nodes, delim){
  var buf = '';
  delim = delim || '';

  for (var i = 0, length = nodes.length; i < length; i++) {
    buf += this.visit(nodes[i]);
    if (delim && i < length - 1) buf += this.emit(delim);
  }

  return buf;
};

var inherits_browser = createCommonjsModule(function (module) {
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor;
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
    }
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor;
      var TempCtor = function () {};
      TempCtor.prototype = superCtor.prototype;
      ctor.prototype = new TempCtor();
      ctor.prototype.constructor = ctor;
    }
  };
}
});

/**
 * Module dependencies.
 */




/**
 * Expose compiler.
 */

var compress = Compiler$1;

/**
 * Initialize a new `Compiler`.
 */

function Compiler$1(options) {
  compiler.call(this, options);
}

/**
 * Inherit from `Base.prototype`.
 */

inherits_browser(Compiler$1, compiler);

/**
 * Compile `node`.
 */

Compiler$1.prototype.compile = function(node){
  return node.stylesheet
    .rules.map(this.visit, this)
    .join('');
};

/**
 * Visit comment node.
 */

Compiler$1.prototype.comment = function(node){
  return this.emit('', node.position);
};

/**
 * Visit import node.
 */

Compiler$1.prototype.import = function(node){
  return this.emit('@import ' + node.import + ';', node.position);
};

/**
 * Visit media node.
 */

Compiler$1.prototype.media = function(node){
  return this.emit('@media ' + node.media, node.position)
    + this.emit('{')
    + this.mapVisit(node.rules)
    + this.emit('}');
};

/**
 * Visit document node.
 */

Compiler$1.prototype.document = function(node){
  var doc = '@' + (node.vendor || '') + 'document ' + node.document;

  return this.emit(doc, node.position)
    + this.emit('{')
    + this.mapVisit(node.rules)
    + this.emit('}');
};

/**
 * Visit charset node.
 */

Compiler$1.prototype.charset = function(node){
  return this.emit('@charset ' + node.charset + ';', node.position);
};

/**
 * Visit namespace node.
 */

Compiler$1.prototype.namespace = function(node){
  return this.emit('@namespace ' + node.namespace + ';', node.position);
};

/**
 * Visit supports node.
 */

Compiler$1.prototype.supports = function(node){
  return this.emit('@supports ' + node.supports, node.position)
    + this.emit('{')
    + this.mapVisit(node.rules)
    + this.emit('}');
};

/**
 * Visit keyframes node.
 */

Compiler$1.prototype.keyframes = function(node){
  return this.emit('@'
    + (node.vendor || '')
    + 'keyframes '
    + node.name, node.position)
    + this.emit('{')
    + this.mapVisit(node.keyframes)
    + this.emit('}');
};

/**
 * Visit keyframe node.
 */

Compiler$1.prototype.keyframe = function(node){
  var decls = node.declarations;

  return this.emit(node.values.join(','), node.position)
    + this.emit('{')
    + this.mapVisit(decls)
    + this.emit('}');
};

/**
 * Visit page node.
 */

Compiler$1.prototype.page = function(node){
  var sel = node.selectors.length
    ? node.selectors.join(', ')
    : '';

  return this.emit('@page ' + sel, node.position)
    + this.emit('{')
    + this.mapVisit(node.declarations)
    + this.emit('}');
};

/**
 * Visit font-face node.
 */

Compiler$1.prototype['font-face'] = function(node){
  return this.emit('@font-face', node.position)
    + this.emit('{')
    + this.mapVisit(node.declarations)
    + this.emit('}');
};

/**
 * Visit host node.
 */

Compiler$1.prototype.host = function(node){
  return this.emit('@host', node.position)
    + this.emit('{')
    + this.mapVisit(node.rules)
    + this.emit('}');
};

/**
 * Visit custom-media node.
 */

Compiler$1.prototype['custom-media'] = function(node){
  return this.emit('@custom-media ' + node.name + ' ' + node.media + ';', node.position);
};

/**
 * Visit rule node.
 */

Compiler$1.prototype.rule = function(node){
  var decls = node.declarations;
  if (!decls.length) return '';

  return this.emit(node.selectors.join(','), node.position)
    + this.emit('{')
    + this.mapVisit(decls)
    + this.emit('}');
};

/**
 * Visit declaration node.
 */

Compiler$1.prototype.declaration = function(node){
  return this.emit(node.property + ':' + node.value, node.position) + this.emit(';');
};

/**
 * Module dependencies.
 */




/**
 * Expose compiler.
 */

var identity = Compiler$2;

/**
 * Initialize a new `Compiler`.
 */

function Compiler$2(options) {
  options = options || {};
  compiler.call(this, options);
  this.indentation = options.indent;
}

/**
 * Inherit from `Base.prototype`.
 */

inherits_browser(Compiler$2, compiler);

/**
 * Compile `node`.
 */

Compiler$2.prototype.compile = function(node){
  return this.stylesheet(node);
};

/**
 * Visit stylesheet node.
 */

Compiler$2.prototype.stylesheet = function(node){
  return this.mapVisit(node.stylesheet.rules, '\n\n');
};

/**
 * Visit comment node.
 */

Compiler$2.prototype.comment = function(node){
  return this.emit(this.indent() + '/*' + node.comment + '*/', node.position);
};

/**
 * Visit import node.
 */

Compiler$2.prototype.import = function(node){
  return this.emit('@import ' + node.import + ';', node.position);
};

/**
 * Visit media node.
 */

Compiler$2.prototype.media = function(node){
  return this.emit('@media ' + node.media, node.position)
    + this.emit(
        ' {\n'
        + this.indent(1))
    + this.mapVisit(node.rules, '\n\n')
    + this.emit(
        this.indent(-1)
        + '\n}');
};

/**
 * Visit document node.
 */

Compiler$2.prototype.document = function(node){
  var doc = '@' + (node.vendor || '') + 'document ' + node.document;

  return this.emit(doc, node.position)
    + this.emit(
        ' '
      + ' {\n'
      + this.indent(1))
    + this.mapVisit(node.rules, '\n\n')
    + this.emit(
        this.indent(-1)
        + '\n}');
};

/**
 * Visit charset node.
 */

Compiler$2.prototype.charset = function(node){
  return this.emit('@charset ' + node.charset + ';', node.position);
};

/**
 * Visit namespace node.
 */

Compiler$2.prototype.namespace = function(node){
  return this.emit('@namespace ' + node.namespace + ';', node.position);
};

/**
 * Visit supports node.
 */

Compiler$2.prototype.supports = function(node){
  return this.emit('@supports ' + node.supports, node.position)
    + this.emit(
      ' {\n'
      + this.indent(1))
    + this.mapVisit(node.rules, '\n\n')
    + this.emit(
        this.indent(-1)
        + '\n}');
};

/**
 * Visit keyframes node.
 */

Compiler$2.prototype.keyframes = function(node){
  return this.emit('@' + (node.vendor || '') + 'keyframes ' + node.name, node.position)
    + this.emit(
      ' {\n'
      + this.indent(1))
    + this.mapVisit(node.keyframes, '\n')
    + this.emit(
        this.indent(-1)
        + '}');
};

/**
 * Visit keyframe node.
 */

Compiler$2.prototype.keyframe = function(node){
  var decls = node.declarations;

  return this.emit(this.indent())
    + this.emit(node.values.join(', '), node.position)
    + this.emit(
      ' {\n'
      + this.indent(1))
    + this.mapVisit(decls, '\n')
    + this.emit(
      this.indent(-1)
      + '\n'
      + this.indent() + '}\n');
};

/**
 * Visit page node.
 */

Compiler$2.prototype.page = function(node){
  var sel = node.selectors.length
    ? node.selectors.join(', ') + ' '
    : '';

  return this.emit('@page ' + sel, node.position)
    + this.emit('{\n')
    + this.emit(this.indent(1))
    + this.mapVisit(node.declarations, '\n')
    + this.emit(this.indent(-1))
    + this.emit('\n}');
};

/**
 * Visit font-face node.
 */

Compiler$2.prototype['font-face'] = function(node){
  return this.emit('@font-face ', node.position)
    + this.emit('{\n')
    + this.emit(this.indent(1))
    + this.mapVisit(node.declarations, '\n')
    + this.emit(this.indent(-1))
    + this.emit('\n}');
};

/**
 * Visit host node.
 */

Compiler$2.prototype.host = function(node){
  return this.emit('@host', node.position)
    + this.emit(
        ' {\n'
        + this.indent(1))
    + this.mapVisit(node.rules, '\n\n')
    + this.emit(
        this.indent(-1)
        + '\n}');
};

/**
 * Visit custom-media node.
 */

Compiler$2.prototype['custom-media'] = function(node){
  return this.emit('@custom-media ' + node.name + ' ' + node.media + ';', node.position);
};

/**
 * Visit rule node.
 */

Compiler$2.prototype.rule = function(node){
  var indent = this.indent();
  var decls = node.declarations;
  if (!decls.length) return '';

  return this.emit(node.selectors.map(function(s){ return indent + s }).join(',\n'), node.position)
    + this.emit(' {\n')
    + this.emit(this.indent(1))
    + this.mapVisit(decls, '\n')
    + this.emit(this.indent(-1))
    + this.emit('\n' + this.indent() + '}');
};

/**
 * Visit declaration node.
 */

Compiler$2.prototype.declaration = function(node){
  return this.emit(this.indent())
    + this.emit(node.property + ': ' + node.value, node.position)
    + this.emit(';');
};

/**
 * Increase, decrease or return current indentation.
 */

Compiler$2.prototype.indent = function(level) {
  this.level = this.level || 1;

  if (null != level) {
    this.level += level;
    return '';
  }

  return Array(this.level).join(this.indentation || '  ');
};

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var intToCharMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');

/**
 * Encode an integer in the range of 0 to 63 to a single base 64 digit.
 */
var encode = function (number) {
  if (0 <= number && number < intToCharMap.length) {
    return intToCharMap[number];
  }
  throw new TypeError("Must be between 0 and 63: " + number);
};

/**
 * Decode a single base 64 character code digit to an integer. Returns -1 on
 * failure.
 */
var decode = function (charCode) {
  var bigA = 65;     // 'A'
  var bigZ = 90;     // 'Z'

  var littleA = 97;  // 'a'
  var littleZ = 122; // 'z'

  var zero = 48;     // '0'
  var nine = 57;     // '9'

  var plus = 43;     // '+'
  var slash = 47;    // '/'

  var littleOffset = 26;
  var numberOffset = 52;

  // 0 - 25: ABCDEFGHIJKLMNOPQRSTUVWXYZ
  if (bigA <= charCode && charCode <= bigZ) {
    return (charCode - bigA);
  }

  // 26 - 51: abcdefghijklmnopqrstuvwxyz
  if (littleA <= charCode && charCode <= littleZ) {
    return (charCode - littleA + littleOffset);
  }

  // 52 - 61: 0123456789
  if (zero <= charCode && charCode <= nine) {
    return (charCode - zero + numberOffset);
  }

  // 62: +
  if (charCode == plus) {
    return 62;
  }

  // 63: /
  if (charCode == slash) {
    return 63;
  }

  // Invalid base64 digit.
  return -1;
};

var base64 = {
	encode: encode,
	decode: decode
};

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 *
 * Based on the Base 64 VLQ implementation in Closure Compiler:
 * https://code.google.com/p/closure-compiler/source/browse/trunk/src/com/google/debugging/sourcemap/Base64VLQ.java
 *
 * Copyright 2011 The Closure Compiler Authors. All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *  * Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above
 *    copyright notice, this list of conditions and the following
 *    disclaimer in the documentation and/or other materials provided
 *    with the distribution.
 *  * Neither the name of Google Inc. nor the names of its
 *    contributors may be used to endorse or promote products derived
 *    from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */



// A single base 64 digit can contain 6 bits of data. For the base 64 variable
// length quantities we use in the source map spec, the first bit is the sign,
// the next four bits are the actual value, and the 6th bit is the
// continuation bit. The continuation bit tells us whether there are more
// digits in this value following this digit.
//
//   Continuation
//   |    Sign
//   |    |
//   V    V
//   101011

var VLQ_BASE_SHIFT = 5;

// binary: 100000
var VLQ_BASE = 1 << VLQ_BASE_SHIFT;

// binary: 011111
var VLQ_BASE_MASK = VLQ_BASE - 1;

// binary: 100000
var VLQ_CONTINUATION_BIT = VLQ_BASE;

/**
 * Converts from a two-complement value to a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   1 becomes 2 (10 binary), -1 becomes 3 (11 binary)
 *   2 becomes 4 (100 binary), -2 becomes 5 (101 binary)
 */
function toVLQSigned(aValue) {
  return aValue < 0
    ? ((-aValue) << 1) + 1
    : (aValue << 1) + 0;
}

/**
 * Converts to a two-complement value from a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   2 (10 binary) becomes 1, 3 (11 binary) becomes -1
 *   4 (100 binary) becomes 2, 5 (101 binary) becomes -2
 */
function fromVLQSigned(aValue) {
  var isNegative = (aValue & 1) === 1;
  var shifted = aValue >> 1;
  return isNegative
    ? -shifted
    : shifted;
}

/**
 * Returns the base 64 VLQ encoded value.
 */
var encode$1 = function base64VLQ_encode(aValue) {
  var encoded = "";
  var digit;

  var vlq = toVLQSigned(aValue);

  do {
    digit = vlq & VLQ_BASE_MASK;
    vlq >>>= VLQ_BASE_SHIFT;
    if (vlq > 0) {
      // There are still more digits in this value, so we must make sure the
      // continuation bit is marked.
      digit |= VLQ_CONTINUATION_BIT;
    }
    encoded += base64.encode(digit);
  } while (vlq > 0);

  return encoded;
};

/**
 * Decodes the next base 64 VLQ value from the given string and returns the
 * value and the rest of the string via the out parameter.
 */
var decode$1 = function base64VLQ_decode(aStr, aIndex, aOutParam) {
  var strLen = aStr.length;
  var result = 0;
  var shift = 0;
  var continuation, digit;

  do {
    if (aIndex >= strLen) {
      throw new Error("Expected more digits in base 64 VLQ value.");
    }

    digit = base64.decode(aStr.charCodeAt(aIndex++));
    if (digit === -1) {
      throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
    }

    continuation = !!(digit & VLQ_CONTINUATION_BIT);
    digit &= VLQ_BASE_MASK;
    result = result + (digit << shift);
    shift += VLQ_BASE_SHIFT;
  } while (continuation);

  aOutParam.value = fromVLQSigned(result);
  aOutParam.rest = aIndex;
};

var base64Vlq = {
	encode: encode$1,
	decode: decode$1
};

var util = createCommonjsModule(function (module, exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

/**
 * This is a helper function for getting values from parameter/options
 * objects.
 *
 * @param args The object we are extracting values from
 * @param name The name of the property we are getting.
 * @param defaultValue An optional value to return if the property is missing
 * from the object. If this is not specified and the property is missing, an
 * error will be thrown.
 */
function getArg(aArgs, aName, aDefaultValue) {
  if (aName in aArgs) {
    return aArgs[aName];
  } else if (arguments.length === 3) {
    return aDefaultValue;
  } else {
    throw new Error('"' + aName + '" is a required argument.');
  }
}
exports.getArg = getArg;

var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/;
var dataUrlRegexp = /^data:.+\,.+$/;

function urlParse(aUrl) {
  var match = aUrl.match(urlRegexp);
  if (!match) {
    return null;
  }
  return {
    scheme: match[1],
    auth: match[2],
    host: match[3],
    port: match[4],
    path: match[5]
  };
}
exports.urlParse = urlParse;

function urlGenerate(aParsedUrl) {
  var url = '';
  if (aParsedUrl.scheme) {
    url += aParsedUrl.scheme + ':';
  }
  url += '//';
  if (aParsedUrl.auth) {
    url += aParsedUrl.auth + '@';
  }
  if (aParsedUrl.host) {
    url += aParsedUrl.host;
  }
  if (aParsedUrl.port) {
    url += ":" + aParsedUrl.port;
  }
  if (aParsedUrl.path) {
    url += aParsedUrl.path;
  }
  return url;
}
exports.urlGenerate = urlGenerate;

/**
 * Normalizes a path, or the path portion of a URL:
 *
 * - Replaces consecutive slashes with one slash.
 * - Removes unnecessary '.' parts.
 * - Removes unnecessary '<dir>/..' parts.
 *
 * Based on code in the Node.js 'path' core module.
 *
 * @param aPath The path or url to normalize.
 */
function normalize(aPath) {
  var path = aPath;
  var url = urlParse(aPath);
  if (url) {
    if (!url.path) {
      return aPath;
    }
    path = url.path;
  }
  var isAbsolute = exports.isAbsolute(path);

  var parts = path.split(/\/+/);
  for (var part, up = 0, i = parts.length - 1; i >= 0; i--) {
    part = parts[i];
    if (part === '.') {
      parts.splice(i, 1);
    } else if (part === '..') {
      up++;
    } else if (up > 0) {
      if (part === '') {
        // The first part is blank if the path is absolute. Trying to go
        // above the root is a no-op. Therefore we can remove all '..' parts
        // directly after the root.
        parts.splice(i + 1, up);
        up = 0;
      } else {
        parts.splice(i, 2);
        up--;
      }
    }
  }
  path = parts.join('/');

  if (path === '') {
    path = isAbsolute ? '/' : '.';
  }

  if (url) {
    url.path = path;
    return urlGenerate(url);
  }
  return path;
}
exports.normalize = normalize;

/**
 * Joins two paths/URLs.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be joined with the root.
 *
 * - If aPath is a URL or a data URI, aPath is returned, unless aPath is a
 *   scheme-relative URL: Then the scheme of aRoot, if any, is prepended
 *   first.
 * - Otherwise aPath is a path. If aRoot is a URL, then its path portion
 *   is updated with the result and aRoot is returned. Otherwise the result
 *   is returned.
 *   - If aPath is absolute, the result is aPath.
 *   - Otherwise the two paths are joined with a slash.
 * - Joining for example 'http://' and 'www.example.com' is also supported.
 */
function join(aRoot, aPath) {
  if (aRoot === "") {
    aRoot = ".";
  }
  if (aPath === "") {
    aPath = ".";
  }
  var aPathUrl = urlParse(aPath);
  var aRootUrl = urlParse(aRoot);
  if (aRootUrl) {
    aRoot = aRootUrl.path || '/';
  }

  // `join(foo, '//www.example.org')`
  if (aPathUrl && !aPathUrl.scheme) {
    if (aRootUrl) {
      aPathUrl.scheme = aRootUrl.scheme;
    }
    return urlGenerate(aPathUrl);
  }

  if (aPathUrl || aPath.match(dataUrlRegexp)) {
    return aPath;
  }

  // `join('http://', 'www.example.com')`
  if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
    aRootUrl.host = aPath;
    return urlGenerate(aRootUrl);
  }

  var joined = aPath.charAt(0) === '/'
    ? aPath
    : normalize(aRoot.replace(/\/+$/, '') + '/' + aPath);

  if (aRootUrl) {
    aRootUrl.path = joined;
    return urlGenerate(aRootUrl);
  }
  return joined;
}
exports.join = join;

exports.isAbsolute = function (aPath) {
  return aPath.charAt(0) === '/' || urlRegexp.test(aPath);
};

/**
 * Make a path relative to a URL or another path.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be made relative to aRoot.
 */
function relative(aRoot, aPath) {
  if (aRoot === "") {
    aRoot = ".";
  }

  aRoot = aRoot.replace(/\/$/, '');

  // It is possible for the path to be above the root. In this case, simply
  // checking whether the root is a prefix of the path won't work. Instead, we
  // need to remove components from the root one by one, until either we find
  // a prefix that fits, or we run out of components to remove.
  var level = 0;
  while (aPath.indexOf(aRoot + '/') !== 0) {
    var index = aRoot.lastIndexOf("/");
    if (index < 0) {
      return aPath;
    }

    // If the only part of the root that is left is the scheme (i.e. http://,
    // file:///, etc.), one or more slashes (/), or simply nothing at all, we
    // have exhausted all components, so the path is not relative to the root.
    aRoot = aRoot.slice(0, index);
    if (aRoot.match(/^([^\/]+:\/)?\/*$/)) {
      return aPath;
    }

    ++level;
  }

  // Make sure we add a "../" for each component we removed from the root.
  return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
}
exports.relative = relative;

var supportsNullProto = (function () {
  var obj = Object.create(null);
  return !('__proto__' in obj);
}());

function identity (s) {
  return s;
}

/**
 * Because behavior goes wacky when you set `__proto__` on objects, we
 * have to prefix all the strings in our set with an arbitrary character.
 *
 * See https://github.com/mozilla/source-map/pull/31 and
 * https://github.com/mozilla/source-map/issues/30
 *
 * @param String aStr
 */
function toSetString(aStr) {
  if (isProtoString(aStr)) {
    return '$' + aStr;
  }

  return aStr;
}
exports.toSetString = supportsNullProto ? identity : toSetString;

function fromSetString(aStr) {
  if (isProtoString(aStr)) {
    return aStr.slice(1);
  }

  return aStr;
}
exports.fromSetString = supportsNullProto ? identity : fromSetString;

function isProtoString(s) {
  if (!s) {
    return false;
  }

  var length = s.length;

  if (length < 9 /* "__proto__".length */) {
    return false;
  }

  if (s.charCodeAt(length - 1) !== 95  /* '_' */ ||
      s.charCodeAt(length - 2) !== 95  /* '_' */ ||
      s.charCodeAt(length - 3) !== 111 /* 'o' */ ||
      s.charCodeAt(length - 4) !== 116 /* 't' */ ||
      s.charCodeAt(length - 5) !== 111 /* 'o' */ ||
      s.charCodeAt(length - 6) !== 114 /* 'r' */ ||
      s.charCodeAt(length - 7) !== 112 /* 'p' */ ||
      s.charCodeAt(length - 8) !== 95  /* '_' */ ||
      s.charCodeAt(length - 9) !== 95  /* '_' */) {
    return false;
  }

  for (var i = length - 10; i >= 0; i--) {
    if (s.charCodeAt(i) !== 36 /* '$' */) {
      return false;
    }
  }

  return true;
}

/**
 * Comparator between two mappings where the original positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same original source/line/column, but different generated
 * line and column the same. Useful when searching for a mapping with a
 * stubbed out mapping.
 */
function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
  var cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0 || onlyCompareOriginal) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByOriginalPositions = compareByOriginalPositions;

/**
 * Comparator between two mappings with deflated source and name indices where
 * the generated positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same generated line and column, but different
 * source/name/original line and column the same. Useful when searching for a
 * mapping with a stubbed out mapping.
 */
function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
  var cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0 || onlyCompareGenerated) {
    return cmp;
  }

  cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;

function strcmp(aStr1, aStr2) {
  if (aStr1 === aStr2) {
    return 0;
  }

  if (aStr1 === null) {
    return 1; // aStr2 !== null
  }

  if (aStr2 === null) {
    return -1; // aStr1 !== null
  }

  if (aStr1 > aStr2) {
    return 1;
  }

  return -1;
}

/**
 * Comparator between two mappings with inflated source and name strings where
 * the generated positions are compared.
 */
function compareByGeneratedPositionsInflated(mappingA, mappingB) {
  var cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;

/**
 * Strip any JSON XSSI avoidance prefix from the string (as documented
 * in the source maps specification), and then parse the string as
 * JSON.
 */
function parseSourceMapInput(str) {
  return JSON.parse(str.replace(/^\)]}'[^\n]*\n/, ''));
}
exports.parseSourceMapInput = parseSourceMapInput;

/**
 * Compute the URL of a source given the the source root, the source's
 * URL, and the source map's URL.
 */
function computeSourceURL(sourceRoot, sourceURL, sourceMapURL) {
  sourceURL = sourceURL || '';

  if (sourceRoot) {
    // This follows what Chrome does.
    if (sourceRoot[sourceRoot.length - 1] !== '/' && sourceURL[0] !== '/') {
      sourceRoot += '/';
    }
    // The spec says:
    //   Line 4: An optional source root, useful for relocating source
    //   files on a server or removing repeated values in the
    //   “sources” entry.  This value is prepended to the individual
    //   entries in the “source” field.
    sourceURL = sourceRoot + sourceURL;
  }

  // Historically, SourceMapConsumer did not take the sourceMapURL as
  // a parameter.  This mode is still somewhat supported, which is why
  // this code block is conditional.  However, it's preferable to pass
  // the source map URL to SourceMapConsumer, so that this function
  // can implement the source URL resolution algorithm as outlined in
  // the spec.  This block is basically the equivalent of:
  //    new URL(sourceURL, sourceMapURL).toString()
  // ... except it avoids using URL, which wasn't available in the
  // older releases of node still supported by this library.
  //
  // The spec says:
  //   If the sources are not absolute URLs after prepending of the
  //   “sourceRoot”, the sources are resolved relative to the
  //   SourceMap (like resolving script src in a html document).
  if (sourceMapURL) {
    var parsed = urlParse(sourceMapURL);
    if (!parsed) {
      throw new Error("sourceMapURL could not be parsed");
    }
    if (parsed.path) {
      // Strip the last path component, but keep the "/".
      var index = parsed.path.lastIndexOf('/');
      if (index >= 0) {
        parsed.path = parsed.path.substring(0, index + 1);
      }
    }
    sourceURL = join(urlGenerate(parsed), sourceURL);
  }

  return normalize(sourceURL);
}
exports.computeSourceURL = computeSourceURL;
});

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */


var has = Object.prototype.hasOwnProperty;
var hasNativeMap = typeof Map !== "undefined";

/**
 * A data structure which is a combination of an array and a set. Adding a new
 * member is O(1), testing for membership is O(1), and finding the index of an
 * element is O(1). Removing elements from the set is not supported. Only
 * strings are supported for membership.
 */
function ArraySet() {
  this._array = [];
  this._set = hasNativeMap ? new Map() : Object.create(null);
}

/**
 * Static method for creating ArraySet instances from an existing array.
 */
ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
  var set = new ArraySet();
  for (var i = 0, len = aArray.length; i < len; i++) {
    set.add(aArray[i], aAllowDuplicates);
  }
  return set;
};

/**
 * Return how many unique items are in this ArraySet. If duplicates have been
 * added, than those do not count towards the size.
 *
 * @returns Number
 */
ArraySet.prototype.size = function ArraySet_size() {
  return hasNativeMap ? this._set.size : Object.getOwnPropertyNames(this._set).length;
};

/**
 * Add the given string to this set.
 *
 * @param String aStr
 */
ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
  var sStr = hasNativeMap ? aStr : util.toSetString(aStr);
  var isDuplicate = hasNativeMap ? this.has(aStr) : has.call(this._set, sStr);
  var idx = this._array.length;
  if (!isDuplicate || aAllowDuplicates) {
    this._array.push(aStr);
  }
  if (!isDuplicate) {
    if (hasNativeMap) {
      this._set.set(aStr, idx);
    } else {
      this._set[sStr] = idx;
    }
  }
};

/**
 * Is the given string a member of this set?
 *
 * @param String aStr
 */
ArraySet.prototype.has = function ArraySet_has(aStr) {
  if (hasNativeMap) {
    return this._set.has(aStr);
  } else {
    var sStr = util.toSetString(aStr);
    return has.call(this._set, sStr);
  }
};

/**
 * What is the index of the given string in the array?
 *
 * @param String aStr
 */
ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
  if (hasNativeMap) {
    var idx = this._set.get(aStr);
    if (idx >= 0) {
        return idx;
    }
  } else {
    var sStr = util.toSetString(aStr);
    if (has.call(this._set, sStr)) {
      return this._set[sStr];
    }
  }

  throw new Error('"' + aStr + '" is not in the set.');
};

/**
 * What is the element at the given index?
 *
 * @param Number aIdx
 */
ArraySet.prototype.at = function ArraySet_at(aIdx) {
  if (aIdx >= 0 && aIdx < this._array.length) {
    return this._array[aIdx];
  }
  throw new Error('No element indexed by ' + aIdx);
};

/**
 * Returns the array representation of this set (which has the proper indices
 * indicated by indexOf). Note that this is a copy of the internal array used
 * for storing the members so that no one can mess with internal state.
 */
ArraySet.prototype.toArray = function ArraySet_toArray() {
  return this._array.slice();
};

var ArraySet_1 = ArraySet;

var arraySet = {
	ArraySet: ArraySet_1
};

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2014 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */



/**
 * Determine whether mappingB is after mappingA with respect to generated
 * position.
 */
function generatedPositionAfter(mappingA, mappingB) {
  // Optimized for most common case
  var lineA = mappingA.generatedLine;
  var lineB = mappingB.generatedLine;
  var columnA = mappingA.generatedColumn;
  var columnB = mappingB.generatedColumn;
  return lineB > lineA || lineB == lineA && columnB >= columnA ||
         util.compareByGeneratedPositionsInflated(mappingA, mappingB) <= 0;
}

/**
 * A data structure to provide a sorted view of accumulated mappings in a
 * performance conscious manner. It trades a neglibable overhead in general
 * case for a large speedup in case of mappings being added in order.
 */
function MappingList() {
  this._array = [];
  this._sorted = true;
  // Serves as infimum
  this._last = {generatedLine: -1, generatedColumn: 0};
}

/**
 * Iterate through internal items. This method takes the same arguments that
 * `Array.prototype.forEach` takes.
 *
 * NOTE: The order of the mappings is NOT guaranteed.
 */
MappingList.prototype.unsortedForEach =
  function MappingList_forEach(aCallback, aThisArg) {
    this._array.forEach(aCallback, aThisArg);
  };

/**
 * Add the given source mapping.
 *
 * @param Object aMapping
 */
MappingList.prototype.add = function MappingList_add(aMapping) {
  if (generatedPositionAfter(this._last, aMapping)) {
    this._last = aMapping;
    this._array.push(aMapping);
  } else {
    this._sorted = false;
    this._array.push(aMapping);
  }
};

/**
 * Returns the flat, sorted array of mappings. The mappings are sorted by
 * generated position.
 *
 * WARNING: This method returns internal data without copying, for
 * performance. The return value must NOT be mutated, and should be treated as
 * an immutable borrow. If you want to take ownership, you must make your own
 * copy.
 */
MappingList.prototype.toArray = function MappingList_toArray() {
  if (!this._sorted) {
    this._array.sort(util.compareByGeneratedPositionsInflated);
    this._sorted = true;
  }
  return this._array;
};

var MappingList_1 = MappingList;

var mappingList = {
	MappingList: MappingList_1
};

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */



var ArraySet$1 = arraySet.ArraySet;
var MappingList$1 = mappingList.MappingList;

/**
 * An instance of the SourceMapGenerator represents a source map which is
 * being built incrementally. You may pass an object with the following
 * properties:
 *
 *   - file: The filename of the generated source.
 *   - sourceRoot: A root for all relative URLs in this source map.
 */
function SourceMapGenerator(aArgs) {
  if (!aArgs) {
    aArgs = {};
  }
  this._file = util.getArg(aArgs, 'file', null);
  this._sourceRoot = util.getArg(aArgs, 'sourceRoot', null);
  this._skipValidation = util.getArg(aArgs, 'skipValidation', false);
  this._sources = new ArraySet$1();
  this._names = new ArraySet$1();
  this._mappings = new MappingList$1();
  this._sourcesContents = null;
}

SourceMapGenerator.prototype._version = 3;

/**
 * Creates a new SourceMapGenerator based on a SourceMapConsumer
 *
 * @param aSourceMapConsumer The SourceMap.
 */
SourceMapGenerator.fromSourceMap =
  function SourceMapGenerator_fromSourceMap(aSourceMapConsumer) {
    var sourceRoot = aSourceMapConsumer.sourceRoot;
    var generator = new SourceMapGenerator({
      file: aSourceMapConsumer.file,
      sourceRoot: sourceRoot
    });
    aSourceMapConsumer.eachMapping(function (mapping) {
      var newMapping = {
        generated: {
          line: mapping.generatedLine,
          column: mapping.generatedColumn
        }
      };

      if (mapping.source != null) {
        newMapping.source = mapping.source;
        if (sourceRoot != null) {
          newMapping.source = util.relative(sourceRoot, newMapping.source);
        }

        newMapping.original = {
          line: mapping.originalLine,
          column: mapping.originalColumn
        };

        if (mapping.name != null) {
          newMapping.name = mapping.name;
        }
      }

      generator.addMapping(newMapping);
    });
    aSourceMapConsumer.sources.forEach(function (sourceFile) {
      var sourceRelative = sourceFile;
      if (sourceRoot !== null) {
        sourceRelative = util.relative(sourceRoot, sourceFile);
      }

      if (!generator._sources.has(sourceRelative)) {
        generator._sources.add(sourceRelative);
      }

      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
      if (content != null) {
        generator.setSourceContent(sourceFile, content);
      }
    });
    return generator;
  };

/**
 * Add a single mapping from original source line and column to the generated
 * source's line and column for this source map being created. The mapping
 * object should have the following properties:
 *
 *   - generated: An object with the generated line and column positions.
 *   - original: An object with the original line and column positions.
 *   - source: The original source file (relative to the sourceRoot).
 *   - name: An optional original token name for this mapping.
 */
SourceMapGenerator.prototype.addMapping =
  function SourceMapGenerator_addMapping(aArgs) {
    var generated = util.getArg(aArgs, 'generated');
    var original = util.getArg(aArgs, 'original', null);
    var source = util.getArg(aArgs, 'source', null);
    var name = util.getArg(aArgs, 'name', null);

    if (!this._skipValidation) {
      this._validateMapping(generated, original, source, name);
    }

    if (source != null) {
      source = String(source);
      if (!this._sources.has(source)) {
        this._sources.add(source);
      }
    }

    if (name != null) {
      name = String(name);
      if (!this._names.has(name)) {
        this._names.add(name);
      }
    }

    this._mappings.add({
      generatedLine: generated.line,
      generatedColumn: generated.column,
      originalLine: original != null && original.line,
      originalColumn: original != null && original.column,
      source: source,
      name: name
    });
  };

/**
 * Set the source content for a source file.
 */
SourceMapGenerator.prototype.setSourceContent =
  function SourceMapGenerator_setSourceContent(aSourceFile, aSourceContent) {
    var source = aSourceFile;
    if (this._sourceRoot != null) {
      source = util.relative(this._sourceRoot, source);
    }

    if (aSourceContent != null) {
      // Add the source content to the _sourcesContents map.
      // Create a new _sourcesContents map if the property is null.
      if (!this._sourcesContents) {
        this._sourcesContents = Object.create(null);
      }
      this._sourcesContents[util.toSetString(source)] = aSourceContent;
    } else if (this._sourcesContents) {
      // Remove the source file from the _sourcesContents map.
      // If the _sourcesContents map is empty, set the property to null.
      delete this._sourcesContents[util.toSetString(source)];
      if (Object.keys(this._sourcesContents).length === 0) {
        this._sourcesContents = null;
      }
    }
  };

/**
 * Applies the mappings of a sub-source-map for a specific source file to the
 * source map being generated. Each mapping to the supplied source file is
 * rewritten using the supplied source map. Note: The resolution for the
 * resulting mappings is the minimium of this map and the supplied map.
 *
 * @param aSourceMapConsumer The source map to be applied.
 * @param aSourceFile Optional. The filename of the source file.
 *        If omitted, SourceMapConsumer's file property will be used.
 * @param aSourceMapPath Optional. The dirname of the path to the source map
 *        to be applied. If relative, it is relative to the SourceMapConsumer.
 *        This parameter is needed when the two source maps aren't in the same
 *        directory, and the source map to be applied contains relative source
 *        paths. If so, those relative source paths need to be rewritten
 *        relative to the SourceMapGenerator.
 */
SourceMapGenerator.prototype.applySourceMap =
  function SourceMapGenerator_applySourceMap(aSourceMapConsumer, aSourceFile, aSourceMapPath) {
    var sourceFile = aSourceFile;
    // If aSourceFile is omitted, we will use the file property of the SourceMap
    if (aSourceFile == null) {
      if (aSourceMapConsumer.file == null) {
        throw new Error(
          'SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, ' +
          'or the source map\'s "file" property. Both were omitted.'
        );
      }
      sourceFile = aSourceMapConsumer.file;
    }
    var sourceRoot = this._sourceRoot;
    // Make "sourceFile" relative if an absolute Url is passed.
    if (sourceRoot != null) {
      sourceFile = util.relative(sourceRoot, sourceFile);
    }
    // Applying the SourceMap can add and remove items from the sources and
    // the names array.
    var newSources = new ArraySet$1();
    var newNames = new ArraySet$1();

    // Find mappings for the "sourceFile"
    this._mappings.unsortedForEach(function (mapping) {
      if (mapping.source === sourceFile && mapping.originalLine != null) {
        // Check if it can be mapped by the source map, then update the mapping.
        var original = aSourceMapConsumer.originalPositionFor({
          line: mapping.originalLine,
          column: mapping.originalColumn
        });
        if (original.source != null) {
          // Copy mapping
          mapping.source = original.source;
          if (aSourceMapPath != null) {
            mapping.source = util.join(aSourceMapPath, mapping.source);
          }
          if (sourceRoot != null) {
            mapping.source = util.relative(sourceRoot, mapping.source);
          }
          mapping.originalLine = original.line;
          mapping.originalColumn = original.column;
          if (original.name != null) {
            mapping.name = original.name;
          }
        }
      }

      var source = mapping.source;
      if (source != null && !newSources.has(source)) {
        newSources.add(source);
      }

      var name = mapping.name;
      if (name != null && !newNames.has(name)) {
        newNames.add(name);
      }

    }, this);
    this._sources = newSources;
    this._names = newNames;

    // Copy sourcesContents of applied map.
    aSourceMapConsumer.sources.forEach(function (sourceFile) {
      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
      if (content != null) {
        if (aSourceMapPath != null) {
          sourceFile = util.join(aSourceMapPath, sourceFile);
        }
        if (sourceRoot != null) {
          sourceFile = util.relative(sourceRoot, sourceFile);
        }
        this.setSourceContent(sourceFile, content);
      }
    }, this);
  };

/**
 * A mapping can have one of the three levels of data:
 *
 *   1. Just the generated position.
 *   2. The Generated position, original position, and original source.
 *   3. Generated and original position, original source, as well as a name
 *      token.
 *
 * To maintain consistency, we validate that any new mapping being added falls
 * in to one of these categories.
 */
SourceMapGenerator.prototype._validateMapping =
  function SourceMapGenerator_validateMapping(aGenerated, aOriginal, aSource,
                                              aName) {
    // When aOriginal is truthy but has empty values for .line and .column,
    // it is most likely a programmer error. In this case we throw a very
    // specific error message to try to guide them the right way.
    // For example: https://github.com/Polymer/polymer-bundler/pull/519
    if (aOriginal && typeof aOriginal.line !== 'number' && typeof aOriginal.column !== 'number') {
        throw new Error(
            'original.line and original.column are not numbers -- you probably meant to omit ' +
            'the original mapping entirely and only map the generated position. If so, pass ' +
            'null for the original mapping instead of an object with empty or null values.'
        );
    }

    if (aGenerated && 'line' in aGenerated && 'column' in aGenerated
        && aGenerated.line > 0 && aGenerated.column >= 0
        && !aOriginal && !aSource && !aName) {
      // Case 1.
      return;
    }
    else if (aGenerated && 'line' in aGenerated && 'column' in aGenerated
             && aOriginal && 'line' in aOriginal && 'column' in aOriginal
             && aGenerated.line > 0 && aGenerated.column >= 0
             && aOriginal.line > 0 && aOriginal.column >= 0
             && aSource) {
      // Cases 2 and 3.
      return;
    }
    else {
      throw new Error('Invalid mapping: ' + JSON.stringify({
        generated: aGenerated,
        source: aSource,
        original: aOriginal,
        name: aName
      }));
    }
  };

/**
 * Serialize the accumulated mappings in to the stream of base 64 VLQs
 * specified by the source map format.
 */
SourceMapGenerator.prototype._serializeMappings =
  function SourceMapGenerator_serializeMappings() {
    var previousGeneratedColumn = 0;
    var previousGeneratedLine = 1;
    var previousOriginalColumn = 0;
    var previousOriginalLine = 0;
    var previousName = 0;
    var previousSource = 0;
    var result = '';
    var next;
    var mapping;
    var nameIdx;
    var sourceIdx;

    var mappings = this._mappings.toArray();
    for (var i = 0, len = mappings.length; i < len; i++) {
      mapping = mappings[i];
      next = '';

      if (mapping.generatedLine !== previousGeneratedLine) {
        previousGeneratedColumn = 0;
        while (mapping.generatedLine !== previousGeneratedLine) {
          next += ';';
          previousGeneratedLine++;
        }
      }
      else {
        if (i > 0) {
          if (!util.compareByGeneratedPositionsInflated(mapping, mappings[i - 1])) {
            continue;
          }
          next += ',';
        }
      }

      next += base64Vlq.encode(mapping.generatedColumn
                                 - previousGeneratedColumn);
      previousGeneratedColumn = mapping.generatedColumn;

      if (mapping.source != null) {
        sourceIdx = this._sources.indexOf(mapping.source);
        next += base64Vlq.encode(sourceIdx - previousSource);
        previousSource = sourceIdx;

        // lines are stored 0-based in SourceMap spec version 3
        next += base64Vlq.encode(mapping.originalLine - 1
                                   - previousOriginalLine);
        previousOriginalLine = mapping.originalLine - 1;

        next += base64Vlq.encode(mapping.originalColumn
                                   - previousOriginalColumn);
        previousOriginalColumn = mapping.originalColumn;

        if (mapping.name != null) {
          nameIdx = this._names.indexOf(mapping.name);
          next += base64Vlq.encode(nameIdx - previousName);
          previousName = nameIdx;
        }
      }

      result += next;
    }

    return result;
  };

SourceMapGenerator.prototype._generateSourcesContent =
  function SourceMapGenerator_generateSourcesContent(aSources, aSourceRoot) {
    return aSources.map(function (source) {
      if (!this._sourcesContents) {
        return null;
      }
      if (aSourceRoot != null) {
        source = util.relative(aSourceRoot, source);
      }
      var key = util.toSetString(source);
      return Object.prototype.hasOwnProperty.call(this._sourcesContents, key)
        ? this._sourcesContents[key]
        : null;
    }, this);
  };

/**
 * Externalize the source map.
 */
SourceMapGenerator.prototype.toJSON =
  function SourceMapGenerator_toJSON() {
    var map = {
      version: this._version,
      sources: this._sources.toArray(),
      names: this._names.toArray(),
      mappings: this._serializeMappings()
    };
    if (this._file != null) {
      map.file = this._file;
    }
    if (this._sourceRoot != null) {
      map.sourceRoot = this._sourceRoot;
    }
    if (this._sourcesContents) {
      map.sourcesContent = this._generateSourcesContent(map.sources, map.sourceRoot);
    }

    return map;
  };

/**
 * Render the source map being generated to a string.
 */
SourceMapGenerator.prototype.toString =
  function SourceMapGenerator_toString() {
    return JSON.stringify(this.toJSON());
  };

var SourceMapGenerator_1 = SourceMapGenerator;

var sourceMapGenerator = {
	SourceMapGenerator: SourceMapGenerator_1
};

var binarySearch = createCommonjsModule(function (module, exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

exports.GREATEST_LOWER_BOUND = 1;
exports.LEAST_UPPER_BOUND = 2;

/**
 * Recursive implementation of binary search.
 *
 * @param aLow Indices here and lower do not contain the needle.
 * @param aHigh Indices here and higher do not contain the needle.
 * @param aNeedle The element being searched for.
 * @param aHaystack The non-empty array being searched.
 * @param aCompare Function which takes two elements and returns -1, 0, or 1.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 */
function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
  // This function terminates when one of the following is true:
  //
  //   1. We find the exact element we are looking for.
  //
  //   2. We did not find the exact element, but we can return the index of
  //      the next-closest element.
  //
  //   3. We did not find the exact element, and there is no next-closest
  //      element than the one we are searching for, so we return -1.
  var mid = Math.floor((aHigh - aLow) / 2) + aLow;
  var cmp = aCompare(aNeedle, aHaystack[mid], true);
  if (cmp === 0) {
    // Found the element we are looking for.
    return mid;
  }
  else if (cmp > 0) {
    // Our needle is greater than aHaystack[mid].
    if (aHigh - mid > 1) {
      // The element is in the upper half.
      return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
    }

    // The exact needle element was not found in this haystack. Determine if
    // we are in termination case (3) or (2) and return the appropriate thing.
    if (aBias == exports.LEAST_UPPER_BOUND) {
      return aHigh < aHaystack.length ? aHigh : -1;
    } else {
      return mid;
    }
  }
  else {
    // Our needle is less than aHaystack[mid].
    if (mid - aLow > 1) {
      // The element is in the lower half.
      return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
    }

    // we are in termination case (3) or (2) and return the appropriate thing.
    if (aBias == exports.LEAST_UPPER_BOUND) {
      return mid;
    } else {
      return aLow < 0 ? -1 : aLow;
    }
  }
}

/**
 * This is an implementation of binary search which will always try and return
 * the index of the closest element if there is no exact hit. This is because
 * mappings between original and generated line/col pairs are single points,
 * and there is an implicit region between each of them, so a miss just means
 * that you aren't on the very start of a region.
 *
 * @param aNeedle The element you are looking for.
 * @param aHaystack The array that is being searched.
 * @param aCompare A function which takes the needle and an element in the
 *     array and returns -1, 0, or 1 depending on whether the needle is less
 *     than, equal to, or greater than the element, respectively.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'binarySearch.GREATEST_LOWER_BOUND'.
 */
exports.search = function search(aNeedle, aHaystack, aCompare, aBias) {
  if (aHaystack.length === 0) {
    return -1;
  }

  var index = recursiveSearch(-1, aHaystack.length, aNeedle, aHaystack,
                              aCompare, aBias || exports.GREATEST_LOWER_BOUND);
  if (index < 0) {
    return -1;
  }

  // We have found either the exact element, or the next-closest element than
  // the one we are searching for. However, there may be more than one such
  // element. Make sure we always return the smallest of these.
  while (index - 1 >= 0) {
    if (aCompare(aHaystack[index], aHaystack[index - 1], true) !== 0) {
      break;
    }
    --index;
  }

  return index;
};
});

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

// It turns out that some (most?) JavaScript engines don't self-host
// `Array.prototype.sort`. This makes sense because C++ will likely remain
// faster than JS when doing raw CPU-intensive sorting. However, when using a
// custom comparator function, calling back and forth between the VM's C++ and
// JIT'd JS is rather slow *and* loses JIT type information, resulting in
// worse generated code for the comparator function than would be optimal. In
// fact, when sorting with a comparator, these costs outweigh the benefits of
// sorting in C++. By using our own JS-implemented Quick Sort (below), we get
// a ~3500ms mean speed-up in `bench/bench.html`.

/**
 * Swap the elements indexed by `x` and `y` in the array `ary`.
 *
 * @param {Array} ary
 *        The array.
 * @param {Number} x
 *        The index of the first item.
 * @param {Number} y
 *        The index of the second item.
 */
function swap(ary, x, y) {
  var temp = ary[x];
  ary[x] = ary[y];
  ary[y] = temp;
}

/**
 * Returns a random integer within the range `low .. high` inclusive.
 *
 * @param {Number} low
 *        The lower bound on the range.
 * @param {Number} high
 *        The upper bound on the range.
 */
function randomIntInRange(low, high) {
  return Math.round(low + (Math.random() * (high - low)));
}

/**
 * The Quick Sort algorithm.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 * @param {Number} p
 *        Start index of the array
 * @param {Number} r
 *        End index of the array
 */
function doQuickSort(ary, comparator, p, r) {
  // If our lower bound is less than our upper bound, we (1) partition the
  // array into two pieces and (2) recurse on each half. If it is not, this is
  // the empty array and our base case.

  if (p < r) {
    // (1) Partitioning.
    //
    // The partitioning chooses a pivot between `p` and `r` and moves all
    // elements that are less than or equal to the pivot to the before it, and
    // all the elements that are greater than it after it. The effect is that
    // once partition is done, the pivot is in the exact place it will be when
    // the array is put in sorted order, and it will not need to be moved
    // again. This runs in O(n) time.

    // Always choose a random pivot so that an input array which is reverse
    // sorted does not cause O(n^2) running time.
    var pivotIndex = randomIntInRange(p, r);
    var i = p - 1;

    swap(ary, pivotIndex, r);
    var pivot = ary[r];

    // Immediately after `j` is incremented in this loop, the following hold
    // true:
    //
    //   * Every element in `ary[p .. i]` is less than or equal to the pivot.
    //
    //   * Every element in `ary[i+1 .. j-1]` is greater than the pivot.
    for (var j = p; j < r; j++) {
      if (comparator(ary[j], pivot) <= 0) {
        i += 1;
        swap(ary, i, j);
      }
    }

    swap(ary, i + 1, j);
    var q = i + 1;

    // (2) Recurse on each half.

    doQuickSort(ary, comparator, p, q - 1);
    doQuickSort(ary, comparator, q + 1, r);
  }
}

/**
 * Sort the given array in-place with the given comparator function.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 */
var quickSort_1 = function (ary, comparator) {
  doQuickSort(ary, comparator, 0, ary.length - 1);
};

var quickSort = {
	quickSort: quickSort_1
};

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */



var ArraySet$2 = arraySet.ArraySet;

var quickSort$1 = quickSort.quickSort;

function SourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  return sourceMap.sections != null
    ? new IndexedSourceMapConsumer(sourceMap, aSourceMapURL)
    : new BasicSourceMapConsumer(sourceMap, aSourceMapURL);
}

SourceMapConsumer.fromSourceMap = function(aSourceMap, aSourceMapURL) {
  return BasicSourceMapConsumer.fromSourceMap(aSourceMap, aSourceMapURL);
};

/**
 * The version of the source mapping spec that we are consuming.
 */
SourceMapConsumer.prototype._version = 3;

// `__generatedMappings` and `__originalMappings` are arrays that hold the
// parsed mapping coordinates from the source map's "mappings" attribute. They
// are lazily instantiated, accessed via the `_generatedMappings` and
// `_originalMappings` getters respectively, and we only parse the mappings
// and create these arrays once queried for a source location. We jump through
// these hoops because there can be many thousands of mappings, and parsing
// them is expensive, so we only want to do it if we must.
//
// Each object in the arrays is of the form:
//
//     {
//       generatedLine: The line number in the generated code,
//       generatedColumn: The column number in the generated code,
//       source: The path to the original source file that generated this
//               chunk of code,
//       originalLine: The line number in the original source that
//                     corresponds to this chunk of generated code,
//       originalColumn: The column number in the original source that
//                       corresponds to this chunk of generated code,
//       name: The name of the original symbol which generated this chunk of
//             code.
//     }
//
// All properties except for `generatedLine` and `generatedColumn` can be
// `null`.
//
// `_generatedMappings` is ordered by the generated positions.
//
// `_originalMappings` is ordered by the original positions.

SourceMapConsumer.prototype.__generatedMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_generatedMappings', {
  configurable: true,
  enumerable: true,
  get: function () {
    if (!this.__generatedMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }

    return this.__generatedMappings;
  }
});

SourceMapConsumer.prototype.__originalMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_originalMappings', {
  configurable: true,
  enumerable: true,
  get: function () {
    if (!this.__originalMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }

    return this.__originalMappings;
  }
});

SourceMapConsumer.prototype._charIsMappingSeparator =
  function SourceMapConsumer_charIsMappingSeparator(aStr, index) {
    var c = aStr.charAt(index);
    return c === ";" || c === ",";
  };

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
SourceMapConsumer.prototype._parseMappings =
  function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    throw new Error("Subclasses must implement _parseMappings");
  };

SourceMapConsumer.GENERATED_ORDER = 1;
SourceMapConsumer.ORIGINAL_ORDER = 2;

SourceMapConsumer.GREATEST_LOWER_BOUND = 1;
SourceMapConsumer.LEAST_UPPER_BOUND = 2;

/**
 * Iterate over each mapping between an original source/line/column and a
 * generated line/column in this source map.
 *
 * @param Function aCallback
 *        The function that is called with each mapping.
 * @param Object aContext
 *        Optional. If specified, this object will be the value of `this` every
 *        time that `aCallback` is called.
 * @param aOrder
 *        Either `SourceMapConsumer.GENERATED_ORDER` or
 *        `SourceMapConsumer.ORIGINAL_ORDER`. Specifies whether you want to
 *        iterate over the mappings sorted by the generated file's line/column
 *        order or the original's source/line/column order, respectively. Defaults to
 *        `SourceMapConsumer.GENERATED_ORDER`.
 */
SourceMapConsumer.prototype.eachMapping =
  function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
    var context = aContext || null;
    var order = aOrder || SourceMapConsumer.GENERATED_ORDER;

    var mappings;
    switch (order) {
    case SourceMapConsumer.GENERATED_ORDER:
      mappings = this._generatedMappings;
      break;
    case SourceMapConsumer.ORIGINAL_ORDER:
      mappings = this._originalMappings;
      break;
    default:
      throw new Error("Unknown order of iteration.");
    }

    var sourceRoot = this.sourceRoot;
    mappings.map(function (mapping) {
      var source = mapping.source === null ? null : this._sources.at(mapping.source);
      source = util.computeSourceURL(sourceRoot, source, this._sourceMapURL);
      return {
        source: source,
        generatedLine: mapping.generatedLine,
        generatedColumn: mapping.generatedColumn,
        originalLine: mapping.originalLine,
        originalColumn: mapping.originalColumn,
        name: mapping.name === null ? null : this._names.at(mapping.name)
      };
    }, this).forEach(aCallback, context);
  };

/**
 * Returns all generated line and column information for the original source,
 * line, and column provided. If no column is provided, returns all mappings
 * corresponding to a either the line we are searching for or the next
 * closest line that has any mappings. Otherwise, returns all mappings
 * corresponding to the given line and either the column we are searching for
 * or the next closest column that has any offsets.
 *
 * The only argument is an object with the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number is 1-based.
 *   - column: Optional. the column number in the original source.
 *    The column number is 0-based.
 *
 * and an array of objects is returned, each with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *    line number is 1-based.
 *   - column: The column number in the generated source, or null.
 *    The column number is 0-based.
 */
SourceMapConsumer.prototype.allGeneratedPositionsFor =
  function SourceMapConsumer_allGeneratedPositionsFor(aArgs) {
    var line = util.getArg(aArgs, 'line');

    // When there is no exact match, BasicSourceMapConsumer.prototype._findMapping
    // returns the index of the closest mapping less than the needle. By
    // setting needle.originalColumn to 0, we thus find the last mapping for
    // the given line, provided such a mapping exists.
    var needle = {
      source: util.getArg(aArgs, 'source'),
      originalLine: line,
      originalColumn: util.getArg(aArgs, 'column', 0)
    };

    needle.source = this._findSourceIndex(needle.source);
    if (needle.source < 0) {
      return [];
    }

    var mappings = [];

    var index = this._findMapping(needle,
                                  this._originalMappings,
                                  "originalLine",
                                  "originalColumn",
                                  util.compareByOriginalPositions,
                                  binarySearch.LEAST_UPPER_BOUND);
    if (index >= 0) {
      var mapping = this._originalMappings[index];

      if (aArgs.column === undefined) {
        var originalLine = mapping.originalLine;

        // Iterate until either we run out of mappings, or we run into
        // a mapping for a different line than the one we found. Since
        // mappings are sorted, this is guaranteed to find all mappings for
        // the line we found.
        while (mapping && mapping.originalLine === originalLine) {
          mappings.push({
            line: util.getArg(mapping, 'generatedLine', null),
            column: util.getArg(mapping, 'generatedColumn', null),
            lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
          });

          mapping = this._originalMappings[++index];
        }
      } else {
        var originalColumn = mapping.originalColumn;

        // Iterate until either we run out of mappings, or we run into
        // a mapping for a different line than the one we were searching for.
        // Since mappings are sorted, this is guaranteed to find all mappings for
        // the line we are searching for.
        while (mapping &&
               mapping.originalLine === line &&
               mapping.originalColumn == originalColumn) {
          mappings.push({
            line: util.getArg(mapping, 'generatedLine', null),
            column: util.getArg(mapping, 'generatedColumn', null),
            lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
          });

          mapping = this._originalMappings[++index];
        }
      }
    }

    return mappings;
  };

var SourceMapConsumer_1 = SourceMapConsumer;

/**
 * A BasicSourceMapConsumer instance represents a parsed source map which we can
 * query for information about the original file positions by giving it a file
 * position in the generated source.
 *
 * The first parameter is the raw source map (either as a JSON string, or
 * already parsed to an object). According to the spec, source maps have the
 * following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - sources: An array of URLs to the original source files.
 *   - names: An array of identifiers which can be referrenced by individual mappings.
 *   - sourceRoot: Optional. The URL root from which all sources are relative.
 *   - sourcesContent: Optional. An array of contents of the original source files.
 *   - mappings: A string of base64 VLQs which contain the actual mappings.
 *   - file: Optional. The generated file this source map is associated with.
 *
 * Here is an example source map, taken from the source map spec[0]:
 *
 *     {
 *       version : 3,
 *       file: "out.js",
 *       sourceRoot : "",
 *       sources: ["foo.js", "bar.js"],
 *       names: ["src", "maps", "are", "fun"],
 *       mappings: "AA,AB;;ABCDE;"
 *     }
 *
 * The second parameter, if given, is a string whose value is the URL
 * at which the source map was found.  This URL is used to compute the
 * sources array.
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit?pli=1#
 */
function BasicSourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  var version = util.getArg(sourceMap, 'version');
  var sources = util.getArg(sourceMap, 'sources');
  // Sass 3.3 leaves out the 'names' array, so we deviate from the spec (which
  // requires the array) to play nice here.
  var names = util.getArg(sourceMap, 'names', []);
  var sourceRoot = util.getArg(sourceMap, 'sourceRoot', null);
  var sourcesContent = util.getArg(sourceMap, 'sourcesContent', null);
  var mappings = util.getArg(sourceMap, 'mappings');
  var file = util.getArg(sourceMap, 'file', null);

  // Once again, Sass deviates from the spec and supplies the version as a
  // string rather than a number, so we use loose equality checking here.
  if (version != this._version) {
    throw new Error('Unsupported version: ' + version);
  }

  if (sourceRoot) {
    sourceRoot = util.normalize(sourceRoot);
  }

  sources = sources
    .map(String)
    // Some source maps produce relative source paths like "./foo.js" instead of
    // "foo.js".  Normalize these first so that future comparisons will succeed.
    // See bugzil.la/1090768.
    .map(util.normalize)
    // Always ensure that absolute sources are internally stored relative to
    // the source root, if the source root is absolute. Not doing this would
    // be particularly problematic when the source root is a prefix of the
    // source (valid, but why??). See github issue #199 and bugzil.la/1188982.
    .map(function (source) {
      return sourceRoot && util.isAbsolute(sourceRoot) && util.isAbsolute(source)
        ? util.relative(sourceRoot, source)
        : source;
    });

  // Pass `true` below to allow duplicate names and sources. While source maps
  // are intended to be compressed and deduplicated, the TypeScript compiler
  // sometimes generates source maps with duplicates in them. See Github issue
  // #72 and bugzil.la/889492.
  this._names = ArraySet$2.fromArray(names.map(String), true);
  this._sources = ArraySet$2.fromArray(sources, true);

  this._absoluteSources = this._sources.toArray().map(function (s) {
    return util.computeSourceURL(sourceRoot, s, aSourceMapURL);
  });

  this.sourceRoot = sourceRoot;
  this.sourcesContent = sourcesContent;
  this._mappings = mappings;
  this._sourceMapURL = aSourceMapURL;
  this.file = file;
}

BasicSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
BasicSourceMapConsumer.prototype.consumer = SourceMapConsumer;

/**
 * Utility function to find the index of a source.  Returns -1 if not
 * found.
 */
BasicSourceMapConsumer.prototype._findSourceIndex = function(aSource) {
  var relativeSource = aSource;
  if (this.sourceRoot != null) {
    relativeSource = util.relative(this.sourceRoot, relativeSource);
  }

  if (this._sources.has(relativeSource)) {
    return this._sources.indexOf(relativeSource);
  }

  // Maybe aSource is an absolute URL as returned by |sources|.  In
  // this case we can't simply undo the transform.
  var i;
  for (i = 0; i < this._absoluteSources.length; ++i) {
    if (this._absoluteSources[i] == aSource) {
      return i;
    }
  }

  return -1;
};

/**
 * Create a BasicSourceMapConsumer from a SourceMapGenerator.
 *
 * @param SourceMapGenerator aSourceMap
 *        The source map that will be consumed.
 * @param String aSourceMapURL
 *        The URL at which the source map can be found (optional)
 * @returns BasicSourceMapConsumer
 */
BasicSourceMapConsumer.fromSourceMap =
  function SourceMapConsumer_fromSourceMap(aSourceMap, aSourceMapURL) {
    var smc = Object.create(BasicSourceMapConsumer.prototype);

    var names = smc._names = ArraySet$2.fromArray(aSourceMap._names.toArray(), true);
    var sources = smc._sources = ArraySet$2.fromArray(aSourceMap._sources.toArray(), true);
    smc.sourceRoot = aSourceMap._sourceRoot;
    smc.sourcesContent = aSourceMap._generateSourcesContent(smc._sources.toArray(),
                                                            smc.sourceRoot);
    smc.file = aSourceMap._file;
    smc._sourceMapURL = aSourceMapURL;
    smc._absoluteSources = smc._sources.toArray().map(function (s) {
      return util.computeSourceURL(smc.sourceRoot, s, aSourceMapURL);
    });

    // Because we are modifying the entries (by converting string sources and
    // names to indices into the sources and names ArraySets), we have to make
    // a copy of the entry or else bad things happen. Shared mutable state
    // strikes again! See github issue #191.

    var generatedMappings = aSourceMap._mappings.toArray().slice();
    var destGeneratedMappings = smc.__generatedMappings = [];
    var destOriginalMappings = smc.__originalMappings = [];

    for (var i = 0, length = generatedMappings.length; i < length; i++) {
      var srcMapping = generatedMappings[i];
      var destMapping = new Mapping;
      destMapping.generatedLine = srcMapping.generatedLine;
      destMapping.generatedColumn = srcMapping.generatedColumn;

      if (srcMapping.source) {
        destMapping.source = sources.indexOf(srcMapping.source);
        destMapping.originalLine = srcMapping.originalLine;
        destMapping.originalColumn = srcMapping.originalColumn;

        if (srcMapping.name) {
          destMapping.name = names.indexOf(srcMapping.name);
        }

        destOriginalMappings.push(destMapping);
      }

      destGeneratedMappings.push(destMapping);
    }

    quickSort$1(smc.__originalMappings, util.compareByOriginalPositions);

    return smc;
  };

/**
 * The version of the source mapping spec that we are consuming.
 */
BasicSourceMapConsumer.prototype._version = 3;

/**
 * The list of original sources.
 */
Object.defineProperty(BasicSourceMapConsumer.prototype, 'sources', {
  get: function () {
    return this._absoluteSources.slice();
  }
});

/**
 * Provide the JIT with a nice shape / hidden class.
 */
function Mapping() {
  this.generatedLine = 0;
  this.generatedColumn = 0;
  this.source = null;
  this.originalLine = null;
  this.originalColumn = null;
  this.name = null;
}

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
BasicSourceMapConsumer.prototype._parseMappings =
  function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    var generatedLine = 1;
    var previousGeneratedColumn = 0;
    var previousOriginalLine = 0;
    var previousOriginalColumn = 0;
    var previousSource = 0;
    var previousName = 0;
    var length = aStr.length;
    var index = 0;
    var cachedSegments = {};
    var temp = {};
    var originalMappings = [];
    var generatedMappings = [];
    var mapping, str, segment, end, value;

    while (index < length) {
      if (aStr.charAt(index) === ';') {
        generatedLine++;
        index++;
        previousGeneratedColumn = 0;
      }
      else if (aStr.charAt(index) === ',') {
        index++;
      }
      else {
        mapping = new Mapping();
        mapping.generatedLine = generatedLine;

        // Because each offset is encoded relative to the previous one,
        // many segments often have the same encoding. We can exploit this
        // fact by caching the parsed variable length fields of each segment,
        // allowing us to avoid a second parse if we encounter the same
        // segment again.
        for (end = index; end < length; end++) {
          if (this._charIsMappingSeparator(aStr, end)) {
            break;
          }
        }
        str = aStr.slice(index, end);

        segment = cachedSegments[str];
        if (segment) {
          index += str.length;
        } else {
          segment = [];
          while (index < end) {
            base64Vlq.decode(aStr, index, temp);
            value = temp.value;
            index = temp.rest;
            segment.push(value);
          }

          if (segment.length === 2) {
            throw new Error('Found a source, but no line and column');
          }

          if (segment.length === 3) {
            throw new Error('Found a source and line, but no column');
          }

          cachedSegments[str] = segment;
        }

        // Generated column.
        mapping.generatedColumn = previousGeneratedColumn + segment[0];
        previousGeneratedColumn = mapping.generatedColumn;

        if (segment.length > 1) {
          // Original source.
          mapping.source = previousSource + segment[1];
          previousSource += segment[1];

          // Original line.
          mapping.originalLine = previousOriginalLine + segment[2];
          previousOriginalLine = mapping.originalLine;
          // Lines are stored 0-based
          mapping.originalLine += 1;

          // Original column.
          mapping.originalColumn = previousOriginalColumn + segment[3];
          previousOriginalColumn = mapping.originalColumn;

          if (segment.length > 4) {
            // Original name.
            mapping.name = previousName + segment[4];
            previousName += segment[4];
          }
        }

        generatedMappings.push(mapping);
        if (typeof mapping.originalLine === 'number') {
          originalMappings.push(mapping);
        }
      }
    }

    quickSort$1(generatedMappings, util.compareByGeneratedPositionsDeflated);
    this.__generatedMappings = generatedMappings;

    quickSort$1(originalMappings, util.compareByOriginalPositions);
    this.__originalMappings = originalMappings;
  };

/**
 * Find the mapping that best matches the hypothetical "needle" mapping that
 * we are searching for in the given "haystack" of mappings.
 */
BasicSourceMapConsumer.prototype._findMapping =
  function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName,
                                         aColumnName, aComparator, aBias) {
    // To return the position we are searching for, we must first find the
    // mapping for the given position and then return the opposite position it
    // points to. Because the mappings are sorted, we can use binary search to
    // find the best mapping.

    if (aNeedle[aLineName] <= 0) {
      throw new TypeError('Line must be greater than or equal to 1, got '
                          + aNeedle[aLineName]);
    }
    if (aNeedle[aColumnName] < 0) {
      throw new TypeError('Column must be greater than or equal to 0, got '
                          + aNeedle[aColumnName]);
    }

    return binarySearch.search(aNeedle, aMappings, aComparator, aBias);
  };

/**
 * Compute the last column for each generated mapping. The last column is
 * inclusive.
 */
BasicSourceMapConsumer.prototype.computeColumnSpans =
  function SourceMapConsumer_computeColumnSpans() {
    for (var index = 0; index < this._generatedMappings.length; ++index) {
      var mapping = this._generatedMappings[index];

      // Mappings do not contain a field for the last generated columnt. We
      // can come up with an optimistic estimate, however, by assuming that
      // mappings are contiguous (i.e. given two consecutive mappings, the
      // first mapping ends where the second one starts).
      if (index + 1 < this._generatedMappings.length) {
        var nextMapping = this._generatedMappings[index + 1];

        if (mapping.generatedLine === nextMapping.generatedLine) {
          mapping.lastGeneratedColumn = nextMapping.generatedColumn - 1;
          continue;
        }
      }

      // The last mapping for each line spans the entire line.
      mapping.lastGeneratedColumn = Infinity;
    }
  };

/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.  The line number
 *     is 1-based.
 *   - column: The column number in the generated source.  The column
 *     number is 0-based.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the original source, or null.  The
 *     column number is 0-based.
 *   - name: The original identifier, or null.
 */
BasicSourceMapConsumer.prototype.originalPositionFor =
  function SourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
      generatedLine: util.getArg(aArgs, 'line'),
      generatedColumn: util.getArg(aArgs, 'column')
    };

    var index = this._findMapping(
      needle,
      this._generatedMappings,
      "generatedLine",
      "generatedColumn",
      util.compareByGeneratedPositionsDeflated,
      util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND)
    );

    if (index >= 0) {
      var mapping = this._generatedMappings[index];

      if (mapping.generatedLine === needle.generatedLine) {
        var source = util.getArg(mapping, 'source', null);
        if (source !== null) {
          source = this._sources.at(source);
          source = util.computeSourceURL(this.sourceRoot, source, this._sourceMapURL);
        }
        var name = util.getArg(mapping, 'name', null);
        if (name !== null) {
          name = this._names.at(name);
        }
        return {
          source: source,
          line: util.getArg(mapping, 'originalLine', null),
          column: util.getArg(mapping, 'originalColumn', null),
          name: name
        };
      }
    }

    return {
      source: null,
      line: null,
      column: null,
      name: null
    };
  };

/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */
BasicSourceMapConsumer.prototype.hasContentsOfAllSources =
  function BasicSourceMapConsumer_hasContentsOfAllSources() {
    if (!this.sourcesContent) {
      return false;
    }
    return this.sourcesContent.length >= this._sources.size() &&
      !this.sourcesContent.some(function (sc) { return sc == null; });
  };

/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */
BasicSourceMapConsumer.prototype.sourceContentFor =
  function SourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    if (!this.sourcesContent) {
      return null;
    }

    var index = this._findSourceIndex(aSource);
    if (index >= 0) {
      return this.sourcesContent[index];
    }

    var relativeSource = aSource;
    if (this.sourceRoot != null) {
      relativeSource = util.relative(this.sourceRoot, relativeSource);
    }

    var url;
    if (this.sourceRoot != null
        && (url = util.urlParse(this.sourceRoot))) {
      // XXX: file:// URIs and absolute paths lead to unexpected behavior for
      // many users. We can help them out when they expect file:// URIs to
      // behave like it would if they were running a local HTTP server. See
      // https://bugzilla.mozilla.org/show_bug.cgi?id=885597.
      var fileUriAbsPath = relativeSource.replace(/^file:\/\//, "");
      if (url.scheme == "file"
          && this._sources.has(fileUriAbsPath)) {
        return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)]
      }

      if ((!url.path || url.path == "/")
          && this._sources.has("/" + relativeSource)) {
        return this.sourcesContent[this._sources.indexOf("/" + relativeSource)];
      }
    }

    // This function is used recursively from
    // IndexedSourceMapConsumer.prototype.sourceContentFor. In that case, we
    // don't want to throw if we can't find the source - we just want to
    // return null, so we provide a flag to exit gracefully.
    if (nullOnMissing) {
      return null;
    }
    else {
      throw new Error('"' + relativeSource + '" is not in the SourceMap.');
    }
  };

/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number
 *     is 1-based.
 *   - column: The column number in the original source.  The column
 *     number is 0-based.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the generated source, or null.
 *     The column number is 0-based.
 */
BasicSourceMapConsumer.prototype.generatedPositionFor =
  function SourceMapConsumer_generatedPositionFor(aArgs) {
    var source = util.getArg(aArgs, 'source');
    source = this._findSourceIndex(source);
    if (source < 0) {
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    }

    var needle = {
      source: source,
      originalLine: util.getArg(aArgs, 'line'),
      originalColumn: util.getArg(aArgs, 'column')
    };

    var index = this._findMapping(
      needle,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      util.compareByOriginalPositions,
      util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND)
    );

    if (index >= 0) {
      var mapping = this._originalMappings[index];

      if (mapping.source === needle.source) {
        return {
          line: util.getArg(mapping, 'generatedLine', null),
          column: util.getArg(mapping, 'generatedColumn', null),
          lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
        };
      }
    }

    return {
      line: null,
      column: null,
      lastColumn: null
    };
  };

var BasicSourceMapConsumer_1 = BasicSourceMapConsumer;

/**
 * An IndexedSourceMapConsumer instance represents a parsed source map which
 * we can query for information. It differs from BasicSourceMapConsumer in
 * that it takes "indexed" source maps (i.e. ones with a "sections" field) as
 * input.
 *
 * The first parameter is a raw source map (either as a JSON string, or already
 * parsed to an object). According to the spec for indexed source maps, they
 * have the following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - file: Optional. The generated file this source map is associated with.
 *   - sections: A list of section definitions.
 *
 * Each value under the "sections" field has two fields:
 *   - offset: The offset into the original specified at which this section
 *       begins to apply, defined as an object with a "line" and "column"
 *       field.
 *   - map: A source map definition. This source map could also be indexed,
 *       but doesn't have to be.
 *
 * Instead of the "map" field, it's also possible to have a "url" field
 * specifying a URL to retrieve a source map from, but that's currently
 * unsupported.
 *
 * Here's an example source map, taken from the source map spec[0], but
 * modified to omit a section which uses the "url" field.
 *
 *  {
 *    version : 3,
 *    file: "app.js",
 *    sections: [{
 *      offset: {line:100, column:10},
 *      map: {
 *        version : 3,
 *        file: "section.js",
 *        sources: ["foo.js", "bar.js"],
 *        names: ["src", "maps", "are", "fun"],
 *        mappings: "AAAA,E;;ABCDE;"
 *      }
 *    }],
 *  }
 *
 * The second parameter, if given, is a string whose value is the URL
 * at which the source map was found.  This URL is used to compute the
 * sources array.
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit#heading=h.535es3xeprgt
 */
function IndexedSourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  var version = util.getArg(sourceMap, 'version');
  var sections = util.getArg(sourceMap, 'sections');

  if (version != this._version) {
    throw new Error('Unsupported version: ' + version);
  }

  this._sources = new ArraySet$2();
  this._names = new ArraySet$2();

  var lastOffset = {
    line: -1,
    column: 0
  };
  this._sections = sections.map(function (s) {
    if (s.url) {
      // The url field will require support for asynchronicity.
      // See https://github.com/mozilla/source-map/issues/16
      throw new Error('Support for url field in sections not implemented.');
    }
    var offset = util.getArg(s, 'offset');
    var offsetLine = util.getArg(offset, 'line');
    var offsetColumn = util.getArg(offset, 'column');

    if (offsetLine < lastOffset.line ||
        (offsetLine === lastOffset.line && offsetColumn < lastOffset.column)) {
      throw new Error('Section offsets must be ordered and non-overlapping.');
    }
    lastOffset = offset;

    return {
      generatedOffset: {
        // The offset fields are 0-based, but we use 1-based indices when
        // encoding/decoding from VLQ.
        generatedLine: offsetLine + 1,
        generatedColumn: offsetColumn + 1
      },
      consumer: new SourceMapConsumer(util.getArg(s, 'map'), aSourceMapURL)
    }
  });
}

IndexedSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
IndexedSourceMapConsumer.prototype.constructor = SourceMapConsumer;

/**
 * The version of the source mapping spec that we are consuming.
 */
IndexedSourceMapConsumer.prototype._version = 3;

/**
 * The list of original sources.
 */
Object.defineProperty(IndexedSourceMapConsumer.prototype, 'sources', {
  get: function () {
    var sources = [];
    for (var i = 0; i < this._sections.length; i++) {
      for (var j = 0; j < this._sections[i].consumer.sources.length; j++) {
        sources.push(this._sections[i].consumer.sources[j]);
      }
    }
    return sources;
  }
});

/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.  The line number
 *     is 1-based.
 *   - column: The column number in the generated source.  The column
 *     number is 0-based.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the original source, or null.  The
 *     column number is 0-based.
 *   - name: The original identifier, or null.
 */
IndexedSourceMapConsumer.prototype.originalPositionFor =
  function IndexedSourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
      generatedLine: util.getArg(aArgs, 'line'),
      generatedColumn: util.getArg(aArgs, 'column')
    };

    // Find the section containing the generated position we're trying to map
    // to an original position.
    var sectionIndex = binarySearch.search(needle, this._sections,
      function(needle, section) {
        var cmp = needle.generatedLine - section.generatedOffset.generatedLine;
        if (cmp) {
          return cmp;
        }

        return (needle.generatedColumn -
                section.generatedOffset.generatedColumn);
      });
    var section = this._sections[sectionIndex];

    if (!section) {
      return {
        source: null,
        line: null,
        column: null,
        name: null
      };
    }

    return section.consumer.originalPositionFor({
      line: needle.generatedLine -
        (section.generatedOffset.generatedLine - 1),
      column: needle.generatedColumn -
        (section.generatedOffset.generatedLine === needle.generatedLine
         ? section.generatedOffset.generatedColumn - 1
         : 0),
      bias: aArgs.bias
    });
  };

/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */
IndexedSourceMapConsumer.prototype.hasContentsOfAllSources =
  function IndexedSourceMapConsumer_hasContentsOfAllSources() {
    return this._sections.every(function (s) {
      return s.consumer.hasContentsOfAllSources();
    });
  };

/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */
IndexedSourceMapConsumer.prototype.sourceContentFor =
  function IndexedSourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];

      var content = section.consumer.sourceContentFor(aSource, true);
      if (content) {
        return content;
      }
    }
    if (nullOnMissing) {
      return null;
    }
    else {
      throw new Error('"' + aSource + '" is not in the SourceMap.');
    }
  };

/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number
 *     is 1-based.
 *   - column: The column number in the original source.  The column
 *     number is 0-based.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *     line number is 1-based. 
 *   - column: The column number in the generated source, or null.
 *     The column number is 0-based.
 */
IndexedSourceMapConsumer.prototype.generatedPositionFor =
  function IndexedSourceMapConsumer_generatedPositionFor(aArgs) {
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];

      // Only consider this section if the requested source is in the list of
      // sources of the consumer.
      if (section.consumer._findSourceIndex(util.getArg(aArgs, 'source')) === -1) {
        continue;
      }
      var generatedPosition = section.consumer.generatedPositionFor(aArgs);
      if (generatedPosition) {
        var ret = {
          line: generatedPosition.line +
            (section.generatedOffset.generatedLine - 1),
          column: generatedPosition.column +
            (section.generatedOffset.generatedLine === generatedPosition.line
             ? section.generatedOffset.generatedColumn - 1
             : 0)
        };
        return ret;
      }
    }

    return {
      line: null,
      column: null
    };
  };

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
IndexedSourceMapConsumer.prototype._parseMappings =
  function IndexedSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    this.__generatedMappings = [];
    this.__originalMappings = [];
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];
      var sectionMappings = section.consumer._generatedMappings;
      for (var j = 0; j < sectionMappings.length; j++) {
        var mapping = sectionMappings[j];

        var source = section.consumer._sources.at(mapping.source);
        source = util.computeSourceURL(section.consumer.sourceRoot, source, this._sourceMapURL);
        this._sources.add(source);
        source = this._sources.indexOf(source);

        var name = null;
        if (mapping.name) {
          name = section.consumer._names.at(mapping.name);
          this._names.add(name);
          name = this._names.indexOf(name);
        }

        // The mappings coming from the consumer for the section have
        // generated positions relative to the start of the section, so we
        // need to offset them to be relative to the start of the concatenated
        // generated file.
        var adjustedMapping = {
          source: source,
          generatedLine: mapping.generatedLine +
            (section.generatedOffset.generatedLine - 1),
          generatedColumn: mapping.generatedColumn +
            (section.generatedOffset.generatedLine === mapping.generatedLine
            ? section.generatedOffset.generatedColumn - 1
            : 0),
          originalLine: mapping.originalLine,
          originalColumn: mapping.originalColumn,
          name: name
        };

        this.__generatedMappings.push(adjustedMapping);
        if (typeof adjustedMapping.originalLine === 'number') {
          this.__originalMappings.push(adjustedMapping);
        }
      }
    }

    quickSort$1(this.__generatedMappings, util.compareByGeneratedPositionsDeflated);
    quickSort$1(this.__originalMappings, util.compareByOriginalPositions);
  };

var IndexedSourceMapConsumer_1 = IndexedSourceMapConsumer;

var sourceMapConsumer = {
	SourceMapConsumer: SourceMapConsumer_1,
	BasicSourceMapConsumer: BasicSourceMapConsumer_1,
	IndexedSourceMapConsumer: IndexedSourceMapConsumer_1
};

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var SourceMapGenerator$1 = sourceMapGenerator.SourceMapGenerator;


// Matches a Windows-style `\r\n` newline or a `\n` newline used by all other
// operating systems these days (capturing the result).
var REGEX_NEWLINE = /(\r?\n)/;

// Newline character code for charCodeAt() comparisons
var NEWLINE_CODE = 10;

// Private symbol for identifying `SourceNode`s when multiple versions of
// the source-map library are loaded. This MUST NOT CHANGE across
// versions!
var isSourceNode = "$$$isSourceNode$$$";

/**
 * SourceNodes provide a way to abstract over interpolating/concatenating
 * snippets of generated JavaScript source code while maintaining the line and
 * column information associated with the original source code.
 *
 * @param aLine The original line number.
 * @param aColumn The original column number.
 * @param aSource The original source's filename.
 * @param aChunks Optional. An array of strings which are snippets of
 *        generated JS, or other SourceNodes.
 * @param aName The original identifier.
 */
function SourceNode(aLine, aColumn, aSource, aChunks, aName) {
  this.children = [];
  this.sourceContents = {};
  this.line = aLine == null ? null : aLine;
  this.column = aColumn == null ? null : aColumn;
  this.source = aSource == null ? null : aSource;
  this.name = aName == null ? null : aName;
  this[isSourceNode] = true;
  if (aChunks != null) this.add(aChunks);
}

/**
 * Creates a SourceNode from generated code and a SourceMapConsumer.
 *
 * @param aGeneratedCode The generated code
 * @param aSourceMapConsumer The SourceMap for the generated code
 * @param aRelativePath Optional. The path that relative sources in the
 *        SourceMapConsumer should be relative to.
 */
SourceNode.fromStringWithSourceMap =
  function SourceNode_fromStringWithSourceMap(aGeneratedCode, aSourceMapConsumer, aRelativePath) {
    // The SourceNode we want to fill with the generated code
    // and the SourceMap
    var node = new SourceNode();

    // All even indices of this array are one line of the generated code,
    // while all odd indices are the newlines between two adjacent lines
    // (since `REGEX_NEWLINE` captures its match).
    // Processed fragments are accessed by calling `shiftNextLine`.
    var remainingLines = aGeneratedCode.split(REGEX_NEWLINE);
    var remainingLinesIndex = 0;
    var shiftNextLine = function() {
      var lineContents = getNextLine();
      // The last line of a file might not have a newline.
      var newLine = getNextLine() || "";
      return lineContents + newLine;

      function getNextLine() {
        return remainingLinesIndex < remainingLines.length ?
            remainingLines[remainingLinesIndex++] : undefined;
      }
    };

    // We need to remember the position of "remainingLines"
    var lastGeneratedLine = 1, lastGeneratedColumn = 0;

    // The generate SourceNodes we need a code range.
    // To extract it current and last mapping is used.
    // Here we store the last mapping.
    var lastMapping = null;

    aSourceMapConsumer.eachMapping(function (mapping) {
      if (lastMapping !== null) {
        // We add the code from "lastMapping" to "mapping":
        // First check if there is a new line in between.
        if (lastGeneratedLine < mapping.generatedLine) {
          // Associate first line with "lastMapping"
          addMappingWithCode(lastMapping, shiftNextLine());
          lastGeneratedLine++;
          lastGeneratedColumn = 0;
          // The remaining code is added without mapping
        } else {
          // There is no new line in between.
          // Associate the code between "lastGeneratedColumn" and
          // "mapping.generatedColumn" with "lastMapping"
          var nextLine = remainingLines[remainingLinesIndex] || '';
          var code = nextLine.substr(0, mapping.generatedColumn -
                                        lastGeneratedColumn);
          remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn -
                                              lastGeneratedColumn);
          lastGeneratedColumn = mapping.generatedColumn;
          addMappingWithCode(lastMapping, code);
          // No more remaining code, continue
          lastMapping = mapping;
          return;
        }
      }
      // We add the generated code until the first mapping
      // to the SourceNode without any mapping.
      // Each line is added as separate string.
      while (lastGeneratedLine < mapping.generatedLine) {
        node.add(shiftNextLine());
        lastGeneratedLine++;
      }
      if (lastGeneratedColumn < mapping.generatedColumn) {
        var nextLine = remainingLines[remainingLinesIndex] || '';
        node.add(nextLine.substr(0, mapping.generatedColumn));
        remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn);
        lastGeneratedColumn = mapping.generatedColumn;
      }
      lastMapping = mapping;
    }, this);
    // We have processed all mappings.
    if (remainingLinesIndex < remainingLines.length) {
      if (lastMapping) {
        // Associate the remaining code in the current line with "lastMapping"
        addMappingWithCode(lastMapping, shiftNextLine());
      }
      // and add the remaining lines without any mapping
      node.add(remainingLines.splice(remainingLinesIndex).join(""));
    }

    // Copy sourcesContent into SourceNode
    aSourceMapConsumer.sources.forEach(function (sourceFile) {
      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
      if (content != null) {
        if (aRelativePath != null) {
          sourceFile = util.join(aRelativePath, sourceFile);
        }
        node.setSourceContent(sourceFile, content);
      }
    });

    return node;

    function addMappingWithCode(mapping, code) {
      if (mapping === null || mapping.source === undefined) {
        node.add(code);
      } else {
        var source = aRelativePath
          ? util.join(aRelativePath, mapping.source)
          : mapping.source;
        node.add(new SourceNode(mapping.originalLine,
                                mapping.originalColumn,
                                source,
                                code,
                                mapping.name));
      }
    }
  };

/**
 * Add a chunk of generated JS to this source node.
 *
 * @param aChunk A string snippet of generated JS code, another instance of
 *        SourceNode, or an array where each member is one of those things.
 */
SourceNode.prototype.add = function SourceNode_add(aChunk) {
  if (Array.isArray(aChunk)) {
    aChunk.forEach(function (chunk) {
      this.add(chunk);
    }, this);
  }
  else if (aChunk[isSourceNode] || typeof aChunk === "string") {
    if (aChunk) {
      this.children.push(aChunk);
    }
  }
  else {
    throw new TypeError(
      "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
    );
  }
  return this;
};

/**
 * Add a chunk of generated JS to the beginning of this source node.
 *
 * @param aChunk A string snippet of generated JS code, another instance of
 *        SourceNode, or an array where each member is one of those things.
 */
SourceNode.prototype.prepend = function SourceNode_prepend(aChunk) {
  if (Array.isArray(aChunk)) {
    for (var i = aChunk.length-1; i >= 0; i--) {
      this.prepend(aChunk[i]);
    }
  }
  else if (aChunk[isSourceNode] || typeof aChunk === "string") {
    this.children.unshift(aChunk);
  }
  else {
    throw new TypeError(
      "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
    );
  }
  return this;
};

/**
 * Walk over the tree of JS snippets in this node and its children. The
 * walking function is called once for each snippet of JS and is passed that
 * snippet and the its original associated source's line/column location.
 *
 * @param aFn The traversal function.
 */
SourceNode.prototype.walk = function SourceNode_walk(aFn) {
  var chunk;
  for (var i = 0, len = this.children.length; i < len; i++) {
    chunk = this.children[i];
    if (chunk[isSourceNode]) {
      chunk.walk(aFn);
    }
    else {
      if (chunk !== '') {
        aFn(chunk, { source: this.source,
                     line: this.line,
                     column: this.column,
                     name: this.name });
      }
    }
  }
};

/**
 * Like `String.prototype.join` except for SourceNodes. Inserts `aStr` between
 * each of `this.children`.
 *
 * @param aSep The separator.
 */
SourceNode.prototype.join = function SourceNode_join(aSep) {
  var newChildren;
  var i;
  var len = this.children.length;
  if (len > 0) {
    newChildren = [];
    for (i = 0; i < len-1; i++) {
      newChildren.push(this.children[i]);
      newChildren.push(aSep);
    }
    newChildren.push(this.children[i]);
    this.children = newChildren;
  }
  return this;
};

/**
 * Call String.prototype.replace on the very right-most source snippet. Useful
 * for trimming whitespace from the end of a source node, etc.
 *
 * @param aPattern The pattern to replace.
 * @param aReplacement The thing to replace the pattern with.
 */
SourceNode.prototype.replaceRight = function SourceNode_replaceRight(aPattern, aReplacement) {
  var lastChild = this.children[this.children.length - 1];
  if (lastChild[isSourceNode]) {
    lastChild.replaceRight(aPattern, aReplacement);
  }
  else if (typeof lastChild === 'string') {
    this.children[this.children.length - 1] = lastChild.replace(aPattern, aReplacement);
  }
  else {
    this.children.push(''.replace(aPattern, aReplacement));
  }
  return this;
};

/**
 * Set the source content for a source file. This will be added to the SourceMapGenerator
 * in the sourcesContent field.
 *
 * @param aSourceFile The filename of the source file
 * @param aSourceContent The content of the source file
 */
SourceNode.prototype.setSourceContent =
  function SourceNode_setSourceContent(aSourceFile, aSourceContent) {
    this.sourceContents[util.toSetString(aSourceFile)] = aSourceContent;
  };

/**
 * Walk over the tree of SourceNodes. The walking function is called for each
 * source file content and is passed the filename and source content.
 *
 * @param aFn The traversal function.
 */
SourceNode.prototype.walkSourceContents =
  function SourceNode_walkSourceContents(aFn) {
    for (var i = 0, len = this.children.length; i < len; i++) {
      if (this.children[i][isSourceNode]) {
        this.children[i].walkSourceContents(aFn);
      }
    }

    var sources = Object.keys(this.sourceContents);
    for (var i = 0, len = sources.length; i < len; i++) {
      aFn(util.fromSetString(sources[i]), this.sourceContents[sources[i]]);
    }
  };

/**
 * Return the string representation of this source node. Walks over the tree
 * and concatenates all the various snippets together to one string.
 */
SourceNode.prototype.toString = function SourceNode_toString() {
  var str = "";
  this.walk(function (chunk) {
    str += chunk;
  });
  return str;
};

/**
 * Returns the string representation of this source node along with a source
 * map.
 */
SourceNode.prototype.toStringWithSourceMap = function SourceNode_toStringWithSourceMap(aArgs) {
  var generated = {
    code: "",
    line: 1,
    column: 0
  };
  var map = new SourceMapGenerator$1(aArgs);
  var sourceMappingActive = false;
  var lastOriginalSource = null;
  var lastOriginalLine = null;
  var lastOriginalColumn = null;
  var lastOriginalName = null;
  this.walk(function (chunk, original) {
    generated.code += chunk;
    if (original.source !== null
        && original.line !== null
        && original.column !== null) {
      if(lastOriginalSource !== original.source
         || lastOriginalLine !== original.line
         || lastOriginalColumn !== original.column
         || lastOriginalName !== original.name) {
        map.addMapping({
          source: original.source,
          original: {
            line: original.line,
            column: original.column
          },
          generated: {
            line: generated.line,
            column: generated.column
          },
          name: original.name
        });
      }
      lastOriginalSource = original.source;
      lastOriginalLine = original.line;
      lastOriginalColumn = original.column;
      lastOriginalName = original.name;
      sourceMappingActive = true;
    } else if (sourceMappingActive) {
      map.addMapping({
        generated: {
          line: generated.line,
          column: generated.column
        }
      });
      lastOriginalSource = null;
      sourceMappingActive = false;
    }
    for (var idx = 0, length = chunk.length; idx < length; idx++) {
      if (chunk.charCodeAt(idx) === NEWLINE_CODE) {
        generated.line++;
        generated.column = 0;
        // Mappings end at eol
        if (idx + 1 === length) {
          lastOriginalSource = null;
          sourceMappingActive = false;
        } else if (sourceMappingActive) {
          map.addMapping({
            source: original.source,
            original: {
              line: original.line,
              column: original.column
            },
            generated: {
              line: generated.line,
              column: generated.column
            },
            name: original.name
          });
        }
      } else {
        generated.column++;
      }
    }
  });
  this.walkSourceContents(function (sourceFile, sourceContent) {
    map.setSourceContent(sourceFile, sourceContent);
  });

  return { code: generated.code, map: map };
};

var SourceNode_1 = SourceNode;

var sourceNode = {
	SourceNode: SourceNode_1
};

/*
 * Copyright 2009-2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE.txt or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
var SourceMapGenerator$2 = sourceMapGenerator.SourceMapGenerator;
var SourceMapConsumer$1 = sourceMapConsumer.SourceMapConsumer;
var SourceNode$1 = sourceNode.SourceNode;

var sourceMap = {
	SourceMapGenerator: SourceMapGenerator$2,
	SourceMapConsumer: SourceMapConsumer$1,
	SourceNode: SourceNode$1
};

var sourceMapUrl = createCommonjsModule(function (module, exports) {
// Copyright 2014 Simon Lydell
// X11 (“MIT”) Licensed. (See LICENSE.)

void (function(root, factory) {
  {
    module.exports = factory();
  }
}(commonjsGlobal, function() {

  var innerRegex = /[#@] sourceMappingURL=([^\s'"]*)/;

  var regex = RegExp(
    "(?:" +
      "/\\*" +
      "(?:\\s*\r?\n(?://)?)?" +
      "(?:" + innerRegex.source + ")" +
      "\\s*" +
      "\\*/" +
      "|" +
      "//(?:" + innerRegex.source + ")" +
    ")" +
    "\\s*"
  );

  return {

    regex: regex,
    _innerRegex: innerRegex,

    getFrom: function(code) {
      var match = code.match(regex);
      return (match ? match[1] || match[2] || "" : null)
    },

    existsIn: function(code) {
      return regex.test(code)
    },

    removeFrom: function(code) {
      return code.replace(regex, "")
    },

    insertBefore: function(code, string) {
      var match = code.match(regex);
      if (match) {
        return code.slice(0, match.index) + string + code.slice(match.index)
      } else {
        return code + string
      }
    }
  }

}));
});

var resolveUrl = createCommonjsModule(function (module, exports) {
// Copyright 2014 Simon Lydell
// X11 (“MIT”) Licensed. (See LICENSE.)

void (function(root, factory) {
  {
    module.exports = factory();
  }
}(commonjsGlobal, function() {

  function resolveUrl(/* ...urls */) {
    var numUrls = arguments.length;

    if (numUrls === 0) {
      throw new Error("resolveUrl requires at least one argument; got none.")
    }

    var base = document.createElement("base");
    base.href = arguments[0];

    if (numUrls === 1) {
      return base.href
    }

    var head = document.getElementsByTagName("head")[0];
    head.insertBefore(base, head.firstChild);

    var a = document.createElement("a");
    var resolved;

    for (var index = 1; index < numUrls; index++) {
      a.href = arguments[index];
      resolved = a.href;
      base.href = resolved;
    }

    head.removeChild(base);

    return resolved
  }

  return resolveUrl

}));
});

var sourceMapResolve = createCommonjsModule(function (module, exports) {
// Note: source-map-resolve.js is generated from source-map-resolve-node.js and
// source-map-resolve-template.js. Only edit the two latter files, _not_
// source-map-resolve.js!

void (function(root, factory) {
  {
    var sourceMappingURL = sourceMapUrl;
    var resolveUrl$1 = resolveUrl;
    module.exports = factory(sourceMappingURL, resolveUrl$1);
  }
}(commonjsGlobal, function(sourceMappingURL, resolveUrl) {

  function callbackAsync(callback, error, result) {
    setImmediate(function() { callback(error, result); });
  }

  function parseMapToJSON(string, data) {
    try {
      return JSON.parse(string.replace(/^\)\]\}'/, ""))
    } catch (error) {
      error.sourceMapData = data;
      throw error
    }
  }

  function readSync(read, url, data) {
    var readUrl = url;
    try {
      return String(read(readUrl))
    } catch (error) {
      error.sourceMapData = data;
      throw error
    }
  }



  function resolveSourceMap(code, codeUrl, read, callback) {
    var mapData;
    try {
      mapData = resolveSourceMapHelper(code, codeUrl);
    } catch (error) {
      return callbackAsync(callback, error)
    }
    if (!mapData || mapData.map) {
      return callbackAsync(callback, null, mapData)
    }
    var readUrl = mapData.url;
    read(readUrl, function(error, result) {
      if (error) {
        error.sourceMapData = mapData;
        return callback(error)
      }
      mapData.map = String(result);
      try {
        mapData.map = parseMapToJSON(mapData.map, mapData);
      } catch (error) {
        return callback(error)
      }
      callback(null, mapData);
    });
  }

  function resolveSourceMapSync(code, codeUrl, read) {
    var mapData = resolveSourceMapHelper(code, codeUrl);
    if (!mapData || mapData.map) {
      return mapData
    }
    mapData.map = readSync(read, mapData.url, mapData);
    mapData.map = parseMapToJSON(mapData.map, mapData);
    return mapData
  }

  var dataUriRegex = /^data:([^,;]*)(;[^,;]*)*(?:,(.*))?$/;

  /**
   * The media type for JSON text is application/json.
   *
   * {@link https://tools.ietf.org/html/rfc8259#section-11 | IANA Considerations }
   *
   * `text/json` is non-standard media type
   */
  var jsonMimeTypeRegex = /^(?:application|text)\/json$/;

  /**
   * JSON text exchanged between systems that are not part of a closed ecosystem
   * MUST be encoded using UTF-8.
   *
   * {@link https://tools.ietf.org/html/rfc8259#section-8.1 | Character Encoding}
   */
  var jsonCharacterEncoding = "utf-8";

  function base64ToBuf(b64) {
    var binStr = atob(b64);
    var len = binStr.length;
    var arr = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
      arr[i] = binStr.charCodeAt(i);
    }
    return arr
  }

  function decodeBase64String(b64) {
    if (typeof TextDecoder === "undefined" || typeof Uint8Array === "undefined") {
      return atob(b64)
    }
    var buf = base64ToBuf(b64);
    // Note: `decoder.decode` method will throw a `DOMException` with the
    // `"EncodingError"` value when an coding error is found.
    var decoder = new TextDecoder(jsonCharacterEncoding, {fatal: true});
    return decoder.decode(buf);
  }

  function resolveSourceMapHelper(code, codeUrl) {
    var url = sourceMappingURL.getFrom(code);
    if (!url) {
      return null
    }

    var dataUri = url.match(dataUriRegex);
    if (dataUri) {
      var mimeType = dataUri[1] || "text/plain";
      var lastParameter = dataUri[2] || "";
      var encoded = dataUri[3] || "";
      var data = {
        sourceMappingURL: url,
        url: null,
        sourcesRelativeTo: codeUrl,
        map: encoded
      };
      if (!jsonMimeTypeRegex.test(mimeType)) {
        var error = new Error("Unuseful data uri mime type: " + mimeType);
        error.sourceMapData = data;
        throw error
      }
      try {
        data.map = parseMapToJSON(
          lastParameter === ";base64" ? decodeBase64String(encoded) : decodeURIComponent(encoded),
          data
        );
      } catch (error) {
        error.sourceMapData = data;
        throw error
      }
      return data
    }

    var mapUrl = resolveUrl(codeUrl, url);
    return {
      sourceMappingURL: url,
      url: mapUrl,
      sourcesRelativeTo: mapUrl,
      map: null
    }
  }



  function resolveSources(map, mapUrl, read, options, callback) {
    if (typeof options === "function") {
      callback = options;
      options = {};
    }
    var pending = map.sources ? map.sources.length : 0;
    var result = {
      sourcesResolved: [],
      sourcesContent:  []
    };

    if (pending === 0) {
      callbackAsync(callback, null, result);
      return
    }

    var done = function() {
      pending--;
      if (pending === 0) {
        callback(null, result);
      }
    };

    resolveSourcesHelper(map, mapUrl, options, function(fullUrl, sourceContent, index) {
      result.sourcesResolved[index] = fullUrl;
      if (typeof sourceContent === "string") {
        result.sourcesContent[index] = sourceContent;
        callbackAsync(done, null);
      } else {
        var readUrl = fullUrl;
        read(readUrl, function(error, source) {
          result.sourcesContent[index] = error ? error : String(source);
          done();
        });
      }
    });
  }

  function resolveSourcesSync(map, mapUrl, read, options) {
    var result = {
      sourcesResolved: [],
      sourcesContent:  []
    };

    if (!map.sources || map.sources.length === 0) {
      return result
    }

    resolveSourcesHelper(map, mapUrl, options, function(fullUrl, sourceContent, index) {
      result.sourcesResolved[index] = fullUrl;
      if (read !== null) {
        if (typeof sourceContent === "string") {
          result.sourcesContent[index] = sourceContent;
        } else {
          var readUrl = fullUrl;
          try {
            result.sourcesContent[index] = String(read(readUrl));
          } catch (error) {
            result.sourcesContent[index] = error;
          }
        }
      }
    });

    return result
  }

  var endingSlash = /\/?$/;

  function resolveSourcesHelper(map, mapUrl, options, fn) {
    options = options || {};
    var fullUrl;
    var sourceContent;
    var sourceRoot;
    for (var index = 0, len = map.sources.length; index < len; index++) {
      sourceRoot = null;
      if (typeof options.sourceRoot === "string") {
        sourceRoot = options.sourceRoot;
      } else if (typeof map.sourceRoot === "string" && options.sourceRoot !== false) {
        sourceRoot = map.sourceRoot;
      }
      // If the sourceRoot is the empty string, it is equivalent to not setting
      // the property at all.
      if (sourceRoot === null || sourceRoot === '') {
        fullUrl = resolveUrl(mapUrl, map.sources[index]);
      } else {
        // Make sure that the sourceRoot ends with a slash, so that `/scripts/subdir` becomes
        // `/scripts/subdir/<source>`, not `/scripts/<source>`. Pointing to a file as source root
        // does not make sense.
        fullUrl = resolveUrl(mapUrl, sourceRoot.replace(endingSlash, "/"), map.sources[index]);
      }
      sourceContent = (map.sourcesContent || [])[index];
      fn(fullUrl, sourceContent, index);
    }
  }



  function resolve(code, codeUrl, read, options, callback) {
    if (typeof options === "function") {
      callback = options;
      options = {};
    }
    if (code === null) {
      var mapUrl = codeUrl;
      var data = {
        sourceMappingURL: null,
        url: mapUrl,
        sourcesRelativeTo: mapUrl,
        map: null
      };
      var readUrl = mapUrl;
      read(readUrl, function(error, result) {
        if (error) {
          error.sourceMapData = data;
          return callback(error)
        }
        data.map = String(result);
        try {
          data.map = parseMapToJSON(data.map, data);
        } catch (error) {
          return callback(error)
        }
        _resolveSources(data);
      });
    } else {
      resolveSourceMap(code, codeUrl, read, function(error, mapData) {
        if (error) {
          return callback(error)
        }
        if (!mapData) {
          return callback(null, null)
        }
        _resolveSources(mapData);
      });
    }

    function _resolveSources(mapData) {
      resolveSources(mapData.map, mapData.sourcesRelativeTo, read, options, function(error, result) {
        if (error) {
          return callback(error)
        }
        mapData.sourcesResolved = result.sourcesResolved;
        mapData.sourcesContent  = result.sourcesContent;
        callback(null, mapData);
      });
    }
  }

  function resolveSync(code, codeUrl, read, options) {
    var mapData;
    if (code === null) {
      var mapUrl = codeUrl;
      mapData = {
        sourceMappingURL: null,
        url: mapUrl,
        sourcesRelativeTo: mapUrl,
        map: null
      };
      mapData.map = readSync(read, mapUrl, mapData);
      mapData.map = parseMapToJSON(mapData.map, mapData);
    } else {
      mapData = resolveSourceMapSync(code, codeUrl, read);
      if (!mapData) {
        return null
      }
    }
    var result = resolveSourcesSync(mapData.map, mapData.sourcesRelativeTo, read, options);
    mapData.sourcesResolved = result.sourcesResolved;
    mapData.sourcesContent  = result.sourcesContent;
    return mapData
  }



  return {
    resolveSourceMap:     resolveSourceMap,
    resolveSourceMapSync: resolveSourceMapSync,
    resolveSources:       resolveSources,
    resolveSourcesSync:   resolveSourcesSync,
    resolve:              resolve,
    resolveSync:          resolveSync,
    parseMapToJSON:       parseMapToJSON
  }

}));
});

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
function resolve() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : '/';

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
}
// path.normalize(path)
// posix version
function normalize(path) {
  var isPathAbsolute = isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isPathAbsolute).join('/');

  if (!path && !isPathAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isPathAbsolute ? '/' : '') + path;
}
// posix version
function isAbsolute(path) {
  return path.charAt(0) === '/';
}

// posix version
function join() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
}


// path.relative(from, to)
// posix version
function relative(from, to) {
  from = resolve(from).substr(1);
  to = resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
}

var sep = '/';
var delimiter = ':';

function dirname(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
}

function basename(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
}


function extname(path) {
  return splitPath(path)[3];
}
var path = {
  extname: extname,
  basename: basename,
  dirname: dirname,
  sep: sep,
  delimiter: delimiter,
  relative: relative,
  join: join,
  isAbsolute: isAbsolute,
  normalize: normalize,
  resolve: resolve
};
function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b' ?
    function (str, start, len) { return str.substr(start, len) } :
    function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

var path$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  resolve: resolve,
  normalize: normalize,
  isAbsolute: isAbsolute,
  join: join,
  relative: relative,
  sep: sep,
  delimiter: delimiter,
  dirname: dirname,
  basename: basename,
  extname: extname,
  'default': path
});

function urix(aPath) {
  if (path$1.sep === "\\") {
    return aPath
      .replace(/\\/g, "/")
      .replace(/^[a-z]:\/?/i, "/")
  }
  return aPath
}

var urix_1 = urix;

var fs = {};

var sourceMapSupport = createCommonjsModule(function (module, exports) {
/**
 * Module dependencies.
 */

var SourceMap = sourceMap.SourceMapGenerator;
var SourceMapConsumer = sourceMap.SourceMapConsumer;





/**
 * Expose `mixin()`.
 */

module.exports = mixin;

/**
 * Mixin source map support into `compiler`.
 *
 * @param {Compiler} compiler
 * @api public
 */

function mixin(compiler) {
  compiler._comment = compiler.comment;
  compiler.map = new SourceMap();
  compiler.position = { line: 1, column: 1 };
  compiler.files = {};
  for (var k in exports) compiler[k] = exports[k];
}

/**
 * Update position.
 *
 * @param {String} str
 * @api private
 */

exports.updatePosition = function(str) {
  var lines = str.match(/\n/g);
  if (lines) this.position.line += lines.length;
  var i = str.lastIndexOf('\n');
  this.position.column = ~i ? str.length - i : this.position.column + str.length;
};

/**
 * Emit `str`.
 *
 * @param {String} str
 * @param {Object} [pos]
 * @return {String}
 * @api private
 */

exports.emit = function(str, pos) {
  if (pos) {
    var sourceFile = urix_1(pos.source || 'source.css');

    this.map.addMapping({
      source: sourceFile,
      generated: {
        line: this.position.line,
        column: Math.max(this.position.column - 1, 0)
      },
      original: {
        line: pos.start.line,
        column: pos.start.column - 1
      }
    });

    this.addFile(sourceFile, pos);
  }

  this.updatePosition(str);

  return str;
};

/**
 * Adds a file to the source map output if it has not already been added
 * @param {String} file
 * @param {Object} pos
 */

exports.addFile = function(file, pos) {
  if (typeof pos.content !== 'string') return;
  if (Object.prototype.hasOwnProperty.call(this.files, file)) return;

  this.files[file] = pos.content;
};

/**
 * Applies any original source maps to the output and embeds the source file
 * contents in the source map.
 */

exports.applySourceMaps = function() {
  Object.keys(this.files).forEach(function(file) {
    var content = this.files[file];
    this.map.setSourceContent(file, content);

    if (this.options.inputSourcemaps !== false) {
      var originalMap = sourceMapResolve.resolveSync(
        content, file, fs.readFileSync);
      if (originalMap) {
        var map = new SourceMapConsumer(originalMap.map);
        var relativeTo = originalMap.sourcesRelativeTo;
        this.map.applySourceMap(map, file, urix_1(path$1.dirname(relativeTo)));
      }
    }
  }, this);
};

/**
 * Process comments, drops sourceMap comments.
 * @param {Object} node
 */

exports.comment = function(node) {
  if (/^# sourceMappingURL=/.test(node.comment))
    return this.emit('', node.position);
  else
    return this._comment(node);
};
});

/**
 * Module dependencies.
 */




/**
 * Stringfy the given AST `node`.
 *
 * Options:
 *
 *  - `compress` space-optimized output
 *  - `sourcemap` return an object with `.code` and `.map`
 *
 * @param {Object} node
 * @param {Object} [options]
 * @return {String}
 * @api public
 */

var stringify = function(node, options){
  options = options || {};

  var compiler = options.compress
    ? new compress(options)
    : new identity(options);

  // source maps
  if (options.sourcemap) {
    var sourcemaps = sourceMapSupport;
    sourcemaps(compiler);

    var code = compiler.compile(node);
    compiler.applySourceMaps();

    var map = options.sourcemap === 'generator'
      ? compiler.map
      : compiler.map.toJSON();

    return { code: code, map: map };
  }

  var code = compiler.compile(node);
  return code;
};

var parse$1 = parse;
var stringify$1 = stringify;

var css = {
	parse: parse$1,
	stringify: stringify$1
};

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

var _listCacheClear = listCacheClear;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

var eq_1 = eq;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq_1(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

var _assocIndexOf = assocIndexOf;

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

var _listCacheDelete = listCacheDelete;

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

var _listCacheGet = listCacheGet;

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return _assocIndexOf(this.__data__, key) > -1;
}

var _listCacheHas = listCacheHas;

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

var _listCacheSet = listCacheSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = _listCacheClear;
ListCache.prototype['delete'] = _listCacheDelete;
ListCache.prototype.get = _listCacheGet;
ListCache.prototype.has = _listCacheHas;
ListCache.prototype.set = _listCacheSet;

var _ListCache = ListCache;

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new _ListCache;
  this.size = 0;
}

var _stackClear = stackClear;

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

var _stackDelete = stackDelete;

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

var _stackGet = stackGet;

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

var _stackHas = stackHas;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();

var _root = root;

/** Built-in value references. */
var Symbol$1 = _root.Symbol;

var _Symbol = Symbol$1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

var _getRawTag = getRawTag;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

var _objectToString = objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag$1 && symToStringTag$1 in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

var _baseGetTag = baseGetTag;

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject;

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject_1(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = _baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction;

/** Used to detect overreaching core-js shims. */
var coreJsData = _root['__core-js_shared__'];

var _coreJsData = coreJsData;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

var _isMasked = isMasked;

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

var _toSource = toSource;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto$1 = Function.prototype,
    objectProto$2 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString$1.call(hasOwnProperty$1).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject_1(value) || _isMasked(value)) {
    return false;
  }
  var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(_toSource(value));
}

var _baseIsNative = baseIsNative;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

var _getValue = getValue;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = _getValue(object, key);
  return _baseIsNative(value) ? value : undefined;
}

var _getNative = getNative;

/* Built-in method references that are verified to be native. */
var Map$1 = _getNative(_root, 'Map');

var _Map = Map$1;

/* Built-in method references that are verified to be native. */
var nativeCreate = _getNative(Object, 'create');

var _nativeCreate = nativeCreate;

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
  this.size = 0;
}

var _hashClear = hashClear;

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

var _hashDelete = hashDelete;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (_nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty$2.call(data, key) ? data[key] : undefined;
}

var _hashGet = hashGet;

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return _nativeCreate ? (data[key] !== undefined) : hasOwnProperty$3.call(data, key);
}

var _hashHas = hashHas;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (_nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
  return this;
}

var _hashSet = hashSet;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = _hashClear;
Hash.prototype['delete'] = _hashDelete;
Hash.prototype.get = _hashGet;
Hash.prototype.has = _hashHas;
Hash.prototype.set = _hashSet;

var _Hash = Hash;

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new _Hash,
    'map': new (_Map || _ListCache),
    'string': new _Hash
  };
}

var _mapCacheClear = mapCacheClear;

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

var _isKeyable = isKeyable;

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return _isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

var _getMapData = getMapData;

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = _getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

var _mapCacheDelete = mapCacheDelete;

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return _getMapData(this, key).get(key);
}

var _mapCacheGet = mapCacheGet;

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return _getMapData(this, key).has(key);
}

var _mapCacheHas = mapCacheHas;

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = _getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

var _mapCacheSet = mapCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = _mapCacheClear;
MapCache.prototype['delete'] = _mapCacheDelete;
MapCache.prototype.get = _mapCacheGet;
MapCache.prototype.has = _mapCacheHas;
MapCache.prototype.set = _mapCacheSet;

var _MapCache = MapCache;

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof _ListCache) {
    var pairs = data.__data__;
    if (!_Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new _MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

var _stackSet = stackSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new _ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = _stackClear;
Stack.prototype['delete'] = _stackDelete;
Stack.prototype.get = _stackGet;
Stack.prototype.has = _stackHas;
Stack.prototype.set = _stackSet;

var _Stack = Stack;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED$2);
  return this;
}

var _setCacheAdd = setCacheAdd;

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

var _setCacheHas = setCacheHas;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new _MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = _setCacheAdd;
SetCache.prototype.has = _setCacheHas;

var _SetCache = SetCache;

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

var _arraySome = arraySome;

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

var _cacheHas = cacheHas;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new _SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!_arraySome(other, function(othValue, othIndex) {
            if (!_cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

var _equalArrays = equalArrays;

/** Built-in value references. */
var Uint8Array$1 = _root.Uint8Array;

var _Uint8Array = Uint8Array$1;

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

var _mapToArray = mapToArray;

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

var _setToArray = setToArray;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$1 = 1,
    COMPARE_UNORDERED_FLAG$1 = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new _Uint8Array(object), new _Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq_1(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = _mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1;
      convert || (convert = _setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG$1;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = _equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

var _equalByTag = equalByTag;

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

var _arrayPush = arrayPush;

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

var isArray_1 = isArray;

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray_1(object) ? result : _arrayPush(result, symbolsFunc(object));
}

var _baseGetAllKeys = baseGetAllKeys;

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

var _arrayFilter = arrayFilter;

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

var stubArray_1 = stubArray;

/** Used for built-in method references. */
var objectProto$5 = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$5.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray_1 : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return _arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

var _getSymbols = getSymbols;

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

var _baseTimes = baseTimes;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike_1(value) && _baseGetTag(value) == argsTag;
}

var _baseIsArguments = baseIsArguments;

/** Used for built-in method references. */
var objectProto$6 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$4 = objectProto$6.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable$1 = objectProto$6.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = _baseIsArguments(function() { return arguments; }()) ? _baseIsArguments : function(value) {
  return isObjectLike_1(value) && hasOwnProperty$4.call(value, 'callee') &&
    !propertyIsEnumerable$1.call(value, 'callee');
};

var isArguments_1 = isArguments;

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

var stubFalse_1 = stubFalse;

var isBuffer_1 = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports =  exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse_1;

module.exports = isBuffer;
});

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

var _isIndex = isIndex;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
}

var isLength_1 = isLength;

/** `Object#toString` result references. */
var argsTag$1 = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag$1 = '[object Boolean]',
    dateTag$1 = '[object Date]',
    errorTag$1 = '[object Error]',
    funcTag$1 = '[object Function]',
    mapTag$1 = '[object Map]',
    numberTag$1 = '[object Number]',
    objectTag = '[object Object]',
    regexpTag$1 = '[object RegExp]',
    setTag$1 = '[object Set]',
    stringTag$1 = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag$1 = '[object ArrayBuffer]',
    dataViewTag$1 = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag$1] = typedArrayTags[boolTag$1] =
typedArrayTags[dataViewTag$1] = typedArrayTags[dateTag$1] =
typedArrayTags[errorTag$1] = typedArrayTags[funcTag$1] =
typedArrayTags[mapTag$1] = typedArrayTags[numberTag$1] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag$1] =
typedArrayTags[setTag$1] = typedArrayTags[stringTag$1] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike_1(value) &&
    isLength_1(value.length) && !!typedArrayTags[_baseGetTag(value)];
}

var _baseIsTypedArray = baseIsTypedArray;

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

var _baseUnary = baseUnary;

var _nodeUtil = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports =  exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && _freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;
});

/* Node.js helper references. */
var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;

var isTypedArray_1 = isTypedArray;

/** Used for built-in method references. */
var objectProto$7 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$5 = objectProto$7.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray_1(value),
      isArg = !isArr && isArguments_1(value),
      isBuff = !isArr && !isArg && isBuffer_1(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray_1(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? _baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$5.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           _isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

var _arrayLikeKeys = arrayLikeKeys;

/** Used for built-in method references. */
var objectProto$8 = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$8;

  return value === proto;
}

var _isPrototype = isPrototype;

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

var _overArg = overArg;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = _overArg(Object.keys, Object);

var _nativeKeys = nativeKeys;

/** Used for built-in method references. */
var objectProto$9 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$6 = objectProto$9.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!_isPrototype(object)) {
    return _nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$6.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

var _baseKeys = baseKeys;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength_1(value.length) && !isFunction_1(value);
}

var isArrayLike_1 = isArrayLike;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike_1(object) ? _arrayLikeKeys(object) : _baseKeys(object);
}

var keys_1 = keys;

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return _baseGetAllKeys(object, keys_1, _getSymbols);
}

var _getAllKeys = getAllKeys;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$2 = 1;

/** Used for built-in method references. */
var objectProto$a = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$7 = objectProto$a.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2,
      objProps = _getAllKeys(object),
      objLength = objProps.length,
      othProps = _getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty$7.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

var _equalObjects = equalObjects;

/* Built-in method references that are verified to be native. */
var DataView = _getNative(_root, 'DataView');

var _DataView = DataView;

/* Built-in method references that are verified to be native. */
var Promise = _getNative(_root, 'Promise');

var _Promise = Promise;

/* Built-in method references that are verified to be native. */
var Set$1 = _getNative(_root, 'Set');

var _Set = Set$1;

/* Built-in method references that are verified to be native. */
var WeakMap$1 = _getNative(_root, 'WeakMap');

var _WeakMap = WeakMap$1;

/** `Object#toString` result references. */
var mapTag$2 = '[object Map]',
    objectTag$1 = '[object Object]',
    promiseTag = '[object Promise]',
    setTag$2 = '[object Set]',
    weakMapTag$1 = '[object WeakMap]';

var dataViewTag$2 = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = _toSource(_DataView),
    mapCtorString = _toSource(_Map),
    promiseCtorString = _toSource(_Promise),
    setCtorString = _toSource(_Set),
    weakMapCtorString = _toSource(_WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = _baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((_DataView && getTag(new _DataView(new ArrayBuffer(1))) != dataViewTag$2) ||
    (_Map && getTag(new _Map) != mapTag$2) ||
    (_Promise && getTag(_Promise.resolve()) != promiseTag) ||
    (_Set && getTag(new _Set) != setTag$2) ||
    (_WeakMap && getTag(new _WeakMap) != weakMapTag$1)) {
  getTag = function(value) {
    var result = _baseGetTag(value),
        Ctor = result == objectTag$1 ? value.constructor : undefined,
        ctorString = Ctor ? _toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag$2;
        case mapCtorString: return mapTag$2;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag$2;
        case weakMapCtorString: return weakMapTag$1;
      }
    }
    return result;
  };
}

var _getTag = getTag;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$3 = 1;

/** `Object#toString` result references. */
var argsTag$2 = '[object Arguments]',
    arrayTag$1 = '[object Array]',
    objectTag$2 = '[object Object]';

/** Used for built-in method references. */
var objectProto$b = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$8 = objectProto$b.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray_1(object),
      othIsArr = isArray_1(other),
      objTag = objIsArr ? arrayTag$1 : _getTag(object),
      othTag = othIsArr ? arrayTag$1 : _getTag(other);

  objTag = objTag == argsTag$2 ? objectTag$2 : objTag;
  othTag = othTag == argsTag$2 ? objectTag$2 : othTag;

  var objIsObj = objTag == objectTag$2,
      othIsObj = othTag == objectTag$2,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer_1(object)) {
    if (!isBuffer_1(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new _Stack);
    return (objIsArr || isTypedArray_1(object))
      ? _equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : _equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG$3)) {
    var objIsWrapped = objIsObj && hasOwnProperty$8.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty$8.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new _Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new _Stack);
  return _equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

var _baseIsEqualDeep = baseIsEqualDeep;

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike_1(value) && !isObjectLike_1(other))) {
    return value !== value && other !== other;
  }
  return _baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

var _baseIsEqual = baseIsEqual;

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return _baseIsEqual(value, other);
}

var isEqual_1 = isEqual;

var utils = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkHtmlElement = checkHtmlElement;
exports.parseCSS = parseCSS;
exports.deprecate = deprecate;
exports.getMessage = getMessage;
exports.matches = matches;
exports.normalize = normalize;
exports.getTag = getTag;
exports.getSingleElementValue = getSingleElementValue;
exports.compareArraysAsSet = compareArraysAsSet;
exports.HtmlElementTypeError = void 0;

var _redent = interopRequireDefault(redent);





var _isEqual = interopRequireDefault(isEqual_1);

class HtmlElementTypeError extends Error {
  constructor(received, matcherFn, context) {
    super();
    /* istanbul ignore next */

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, matcherFn);
    }

    let withType = '';

    try {
      withType = (0, build$3.printWithType)('Received', received, build$3.printReceived);
    } catch (e) {// Can throw for Document:
      // https://github.com/jsdom/jsdom/issues/2304
    }

    this.message = [(0, build$3.matcherHint)(`${context.isNot ? '.not' : ''}.${matcherFn.name}`, 'received', ''), '', `${(0, build$3.RECEIVED_COLOR)('received')} value must be an HTMLElement or an SVGElement.`, withType].join('\n');
  }

}

exports.HtmlElementTypeError = HtmlElementTypeError;

function checkHasWindow(htmlElement, ...args) {
  if (!htmlElement || !htmlElement.ownerDocument || !htmlElement.ownerDocument.defaultView) {
    throw new HtmlElementTypeError(htmlElement, ...args);
  }
}

function checkHtmlElement(htmlElement, ...args) {
  checkHasWindow(htmlElement, ...args);
  const window = htmlElement.ownerDocument.defaultView;

  if (!(htmlElement instanceof window.HTMLElement) && !(htmlElement instanceof window.SVGElement)) {
    throw new HtmlElementTypeError(htmlElement, ...args);
  }
}

class InvalidCSSError extends Error {
  constructor(received, matcherFn) {
    super();
    /* istanbul ignore next */

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, matcherFn);
    }

    this.message = [received.message, '', (0, build$3.RECEIVED_COLOR)(`Failing css:`), (0, build$3.RECEIVED_COLOR)(`${received.css}`)].join('\n');
  }

}

function parseCSS(css$1, ...args) {
  const ast = (0, css.parse)(`selector { ${css$1} }`, {
    silent: true
  }).stylesheet;

  if (ast.parsingErrors && ast.parsingErrors.length > 0) {
    const {
      reason,
      line
    } = ast.parsingErrors[0];
    throw new InvalidCSSError({
      css: css$1,
      message: `Syntax error parsing expected css: ${reason} on line: ${line}`
    }, ...args);
  }

  const parsedRules = ast.rules[0].declarations.filter(d => d.type === 'declaration').reduce((obj, {
    property,
    value
  }) => Object.assign(obj, {
    [property]: value
  }), {});
  return parsedRules;
}

function display(value) {
  return typeof value === 'string' ? value : (0, build$3.stringify)(value);
}

function getMessage(matcher, expectedLabel, expectedValue, receivedLabel, receivedValue) {
  return [`${matcher}\n`, `${expectedLabel}:\n${(0, build$3.EXPECTED_COLOR)((0, _redent.default)(display(expectedValue), 2))}`, `${receivedLabel}:\n${(0, build$3.RECEIVED_COLOR)((0, _redent.default)(display(receivedValue), 2))}`].join('\n');
}

function matches(textToMatch, matcher) {
  if (matcher instanceof RegExp) {
    return matcher.test(textToMatch);
  } else {
    return textToMatch.includes(String(matcher));
  }
}

function deprecate(name, replacementText) {
  // Notify user that they are using deprecated functionality.
  // eslint-disable-next-line no-console
  console.warn(`Warning: ${name} has been deprecated and will be removed in future updates.`, replacementText);
}

function normalize(text) {
  return text.replace(/\s+/g, ' ').trim();
}

function getTag(element) {
  return element.tagName && element.tagName.toLowerCase();
}

function getSelectValue({
  multiple,
  options
}) {
  const selectedOptions = [...options].filter(option => option.selected);

  if (multiple) {
    return [...selectedOptions].map(opt => opt.value);
  }
  /* istanbul ignore if */


  if (selectedOptions.length === 0) {
    return undefined; // Couldn't make this happen, but just in case
  }

  return selectedOptions[0].value;
}

function getInputValue(inputElement) {
  switch (inputElement.type) {
    case 'number':
      return inputElement.value === '' ? null : Number(inputElement.value);

    case 'checkbox':
      return inputElement.checked;

    default:
      return inputElement.value;
  }
}

function getSingleElementValue(element) {
  /* istanbul ignore if */
  if (!element) {
    return undefined;
  }

  switch (element.tagName.toLowerCase()) {
    case 'input':
      return getInputValue(element);

    case 'select':
      return getSelectValue(element);

    default:
      return element.value;
  }
}

function compareArraysAsSet(a, b) {
  if (Array.isArray(a) && Array.isArray(b)) {
    return (0, _isEqual.default)(new Set(a), new Set(b));
  }

  return undefined;
}
});

var toBeInTheDom = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toBeInTheDOM = toBeInTheDOM;





function toBeInTheDOM(element, container) {
  (0, utils.deprecate)('toBeInTheDOM', 'Please use toBeInTheDocument for searching the entire document and toContainElement for searching a specific container.');

  if (element) {
    (0, utils.checkHtmlElement)(element, toBeInTheDOM, this);
  }

  if (container) {
    (0, utils.checkHtmlElement)(container, toBeInTheDOM, this);
  }

  return {
    pass: container ? container.contains(element) : !!element,
    message: () => {
      return [(0, build$3.matcherHint)(`${this.isNot ? '.not' : ''}.toBeInTheDOM`, 'element', ''), '', 'Received:', `  ${(0, build$3.printReceived)(element ? element.cloneNode(false) : element)}`].join('\n');
    }
  };
}
});

var toBeInTheDocument_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toBeInTheDocument = toBeInTheDocument;





function toBeInTheDocument(element) {
  if (element !== null || !this.isNot) {
    (0, utils.checkHtmlElement)(element, toBeInTheDocument, this);
  }

  const pass = element === null ? false : element.ownerDocument.contains(element);

  const errorFound = () => {
    return `expected document not to contain element, found ${(0, build$3.stringify)(element.cloneNode(true))} instead`;
  };

  const errorNotFound = () => {
    return `element could not be found in the document`;
  };

  return {
    pass,
    message: () => {
      return [(0, build$3.matcherHint)(`${this.isNot ? '.not' : ''}.toBeInTheDocument`, 'element', ''), '', (0, build$3.RECEIVED_COLOR)(this.isNot ? errorFound() : errorNotFound())].join('\n');
    }
  };
}
});

var toBeEmpty_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toBeEmpty = toBeEmpty;





function toBeEmpty(element) {
  (0, utils.checkHtmlElement)(element, toBeEmpty, this);
  return {
    pass: element.innerHTML === '',
    message: () => {
      return [(0, build$3.matcherHint)(`${this.isNot ? '.not' : ''}.toBeEmpty`, 'element', ''), '', 'Received:', `  ${(0, build$3.printReceived)(element.innerHTML)}`].join('\n');
    }
  };
}
});

var toContainElement_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toContainElement = toContainElement;





function toContainElement(container, element) {
  (0, utils.checkHtmlElement)(container, toContainElement, this);

  if (element !== null) {
    (0, utils.checkHtmlElement)(element, toContainElement, this);
  }

  return {
    pass: container.contains(element),
    message: () => {
      return [(0, build$3.matcherHint)(`${this.isNot ? '.not' : ''}.toContainElement`, 'element', 'element'), '', (0, build$3.RECEIVED_COLOR)(`${(0, build$3.stringify)(container.cloneNode(false))} ${this.isNot ? 'contains:' : 'does not contain:'} ${(0, build$3.stringify)(element ? element.cloneNode(false) : element)}
        `)].join('\n');
    }
  };
}
});

var toContainHtml = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toContainHTML = toContainHTML;





function toContainHTML(container, htmlText) {
  (0, utils.checkHtmlElement)(container, toContainHTML, this);
  return {
    pass: container.outerHTML.includes(htmlText),
    message: () => {
      return [(0, build$3.matcherHint)(`${this.isNot ? '.not' : ''}.toContainHTML`, 'element', ''), '', 'Received:', `  ${(0, build$3.printReceived)(container.cloneNode(true))}`].join('\n');
    }
  };
}
});

var toHaveTextContent_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toHaveTextContent = toHaveTextContent;





function toHaveTextContent(htmlElement, checkWith, options = {
  normalizeWhitespace: true
}) {
  (0, utils.checkHtmlElement)(htmlElement, toHaveTextContent, this);
  const textContent = options.normalizeWhitespace ? (0, utils.normalize)(htmlElement.textContent) : htmlElement.textContent.replace(/\u00a0/g, ' '); // Replace &nbsp; with normal spaces

  const checkingWithEmptyString = textContent !== '' && checkWith === '';
  return {
    pass: !checkingWithEmptyString && (0, utils.matches)(textContent, checkWith),
    message: () => {
      const to = this.isNot ? 'not to' : 'to';
      return (0, utils.getMessage)((0, build$3.matcherHint)(`${this.isNot ? '.not' : ''}.toHaveTextContent`, 'element', ''), checkingWithEmptyString ? `Checking with empty string will always match, use .toBeEmpty() instead` : `Expected element ${to} have text content`, checkWith, 'Received', textContent);
    }
  };
}
});

var toHaveAttribute_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toHaveAttribute = toHaveAttribute;





function printAttribute(name, value) {
  return value === undefined ? name : `${name}=${(0, build$3.stringify)(value)}`;
}

function getAttributeComment(name, value) {
  return value === undefined ? `element.hasAttribute(${(0, build$3.stringify)(name)})` : `element.getAttribute(${(0, build$3.stringify)(name)}) === ${(0, build$3.stringify)(value)}`;
}

function toHaveAttribute(htmlElement, name, expectedValue) {
  (0, utils.checkHtmlElement)(htmlElement, toHaveAttribute, this);
  const isExpectedValuePresent = expectedValue !== undefined;
  const hasAttribute = htmlElement.hasAttribute(name);
  const receivedValue = htmlElement.getAttribute(name);
  return {
    pass: isExpectedValuePresent ? hasAttribute && this.equals(receivedValue, expectedValue) : hasAttribute,
    message: () => {
      const to = this.isNot ? 'not to' : 'to';
      const receivedAttribute = hasAttribute ? printAttribute(name, receivedValue) : null;
      const matcher = (0, build$3.matcherHint)(`${this.isNot ? '.not' : ''}.toHaveAttribute`, 'element', (0, build$3.printExpected)(name), {
        secondArgument: isExpectedValuePresent ? (0, build$3.printExpected)(expectedValue) : undefined,
        comment: getAttributeComment(name, expectedValue)
      });
      return (0, utils.getMessage)(matcher, `Expected the element ${to} have attribute`, printAttribute(name, expectedValue), 'Received', receivedAttribute);
    }
  };
}
});

var toHaveClass_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toHaveClass = toHaveClass;





function splitClassNames(str) {
  if (!str) {
    return [];
  }

  return str.split(/\s+/).filter(s => s.length > 0);
}

function isSubset(subset, superset) {
  return subset.every(item => superset.includes(item));
}

function toHaveClass(htmlElement, ...expectedClassNames) {
  (0, utils.checkHtmlElement)(htmlElement, toHaveClass, this);
  const received = splitClassNames(htmlElement.getAttribute('class'));
  const expected = expectedClassNames.reduce((acc, className) => acc.concat(splitClassNames(className)), []);
  return expected.length > 0 ? {
    pass: isSubset(expected, received),
    message: () => {
      const to = this.isNot ? 'not to' : 'to';
      return (0, utils.getMessage)((0, build$3.matcherHint)(`${this.isNot ? '.not' : ''}.toHaveClass`, 'element', (0, build$3.printExpected)(expected.join(' '))), `Expected the element ${to} have class`, expected.join(' '), 'Received', received.join(' '));
    }
  } : {
    pass: this.isNot ? received.length > 0 : false,
    message: () => this.isNot ? (0, utils.getMessage)((0, build$3.matcherHint)('.not.toHaveClass', 'element', ''), 'Expected the element to have classes', '(none)', 'Received', received.join(' ')) : [(0, build$3.matcherHint)(`.toHaveClass`, 'element'), 'At least one expected class must be provided.'].join('\n')
  };
}
});

var constants$1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.SIMILAR_MESSAGE = exports.NO_DIFF_MESSAGE = void 0;

var _chalk = _interopRequireDefault(chalk);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const NO_DIFF_MESSAGE = _chalk.default.dim(
  'Compared values have no visual difference.'
);

exports.NO_DIFF_MESSAGE = NO_DIFF_MESSAGE;

const SIMILAR_MESSAGE = _chalk.default.dim(
  'Compared values serialize to the same structure.\n' +
    'Printing internal object structure without calling `toJSON` instead.'
);

exports.SIMILAR_MESSAGE = SIMILAR_MESSAGE;
});

var cleanupSemantic$1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.cleanupSemantic = exports.DIFF_INSERT = exports.DIFF_DELETE = exports.DIFF_EQUAL = exports.Diff = void 0;

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

/**
 * Diff Match and Patch
 * Copyright 2018 The diff-match-patch Authors.
 * https://github.com/google/diff-match-patch
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Computes the difference between two texts to create a patch.
 * Applies the patch onto another text, allowing for errors.
 * @author fraser@google.com (Neil Fraser)
 */

/**
 * CHANGES by pedrottimark to diff_match_patch_uncompressed.ts file:
 *
 * 1. Delete anything not needed to use diff_cleanupSemantic method
 * 2. Convert from prototype properties to var declarations
 * 3. Convert Diff to class from constructor and prototype
 * 4. Add type annotations for arguments and return values
 * 5. Add exports
 */

/**
 * The data structure representing a diff is an array of tuples:
 * [[DIFF_DELETE, 'Hello'], [DIFF_INSERT, 'Goodbye'], [DIFF_EQUAL, ' world.']]
 * which means: delete 'Hello', add 'Goodbye' and keep ' world.'
 */
var DIFF_DELETE = -1;
exports.DIFF_DELETE = DIFF_DELETE;
var DIFF_INSERT = 1;
exports.DIFF_INSERT = DIFF_INSERT;
var DIFF_EQUAL = 0;
/**
 * Class representing one diff tuple.
 * Attempts to look like a two-element array (which is what this used to be).
 * @param {number} op Operation, one of: DIFF_DELETE, DIFF_INSERT, DIFF_EQUAL.
 * @param {string} text Text to be deleted, inserted, or retained.
 * @constructor
 */

exports.DIFF_EQUAL = DIFF_EQUAL;

class Diff {
  constructor(op, text) {
    _defineProperty(this, 0, void 0);

    _defineProperty(this, 1, void 0);

    this[0] = op;
    this[1] = text;
  }
}
/**
 * Determine the common prefix of two strings.
 * @param {string} text1 First string.
 * @param {string} text2 Second string.
 * @return {number} The number of characters common to the start of each
 *     string.
 */

exports.Diff = Diff;

var diff_commonPrefix = function diff_commonPrefix(text1, text2) {
  // Quick check for common null cases.
  if (!text1 || !text2 || text1.charAt(0) != text2.charAt(0)) {
    return 0;
  } // Binary search.
  // Performance analysis: https://neil.fraser.name/news/2007/10/09/

  var pointermin = 0;
  var pointermax = Math.min(text1.length, text2.length);
  var pointermid = pointermax;
  var pointerstart = 0;

  while (pointermin < pointermid) {
    if (
      text1.substring(pointerstart, pointermid) ==
      text2.substring(pointerstart, pointermid)
    ) {
      pointermin = pointermid;
      pointerstart = pointermin;
    } else {
      pointermax = pointermid;
    }

    pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
  }

  return pointermid;
};
/**
 * Determine the common suffix of two strings.
 * @param {string} text1 First string.
 * @param {string} text2 Second string.
 * @return {number} The number of characters common to the end of each string.
 */

var diff_commonSuffix = function diff_commonSuffix(text1, text2) {
  // Quick check for common null cases.
  if (
    !text1 ||
    !text2 ||
    text1.charAt(text1.length - 1) != text2.charAt(text2.length - 1)
  ) {
    return 0;
  } // Binary search.
  // Performance analysis: https://neil.fraser.name/news/2007/10/09/

  var pointermin = 0;
  var pointermax = Math.min(text1.length, text2.length);
  var pointermid = pointermax;
  var pointerend = 0;

  while (pointermin < pointermid) {
    if (
      text1.substring(text1.length - pointermid, text1.length - pointerend) ==
      text2.substring(text2.length - pointermid, text2.length - pointerend)
    ) {
      pointermin = pointermid;
      pointerend = pointermin;
    } else {
      pointermax = pointermid;
    }

    pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
  }

  return pointermid;
};
/**
 * Determine if the suffix of one string is the prefix of another.
 * @param {string} text1 First string.
 * @param {string} text2 Second string.
 * @return {number} The number of characters common to the end of the first
 *     string and the start of the second string.
 * @private
 */

var diff_commonOverlap_ = function diff_commonOverlap_(text1, text2) {
  // Cache the text lengths to prevent multiple calls.
  var text1_length = text1.length;
  var text2_length = text2.length; // Eliminate the null case.

  if (text1_length == 0 || text2_length == 0) {
    return 0;
  } // Truncate the longer string.

  if (text1_length > text2_length) {
    text1 = text1.substring(text1_length - text2_length);
  } else if (text1_length < text2_length) {
    text2 = text2.substring(0, text1_length);
  }

  var text_length = Math.min(text1_length, text2_length); // Quick check for the worst case.

  if (text1 == text2) {
    return text_length;
  } // Start by looking for a single character match
  // and increase length until no match is found.
  // Performance analysis: https://neil.fraser.name/news/2010/11/04/

  var best = 0;
  var length = 1;

  while (true) {
    var pattern = text1.substring(text_length - length);
    var found = text2.indexOf(pattern);

    if (found == -1) {
      return best;
    }

    length += found;

    if (
      found == 0 ||
      text1.substring(text_length - length) == text2.substring(0, length)
    ) {
      best = length;
      length++;
    }
  }
};
/**
 * Reduce the number of edits by eliminating semantically trivial equalities.
 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
 */

var diff_cleanupSemantic = function diff_cleanupSemantic(diffs) {
  var changes = false;
  var equalities = []; // Stack of indices where equalities are found.

  var equalitiesLength = 0; // Keeping our own length var is faster in JS.

  /** @type {?string} */

  var lastEquality = null; // Always equal to diffs[equalities[equalitiesLength - 1]][1]

  var pointer = 0; // Index of current position.
  // Number of characters that changed prior to the equality.

  var length_insertions1 = 0;
  var length_deletions1 = 0; // Number of characters that changed after the equality.

  var length_insertions2 = 0;
  var length_deletions2 = 0;

  while (pointer < diffs.length) {
    if (diffs[pointer][0] == DIFF_EQUAL) {
      // Equality found.
      equalities[equalitiesLength++] = pointer;
      length_insertions1 = length_insertions2;
      length_deletions1 = length_deletions2;
      length_insertions2 = 0;
      length_deletions2 = 0;
      lastEquality = diffs[pointer][1];
    } else {
      // An insertion or deletion.
      if (diffs[pointer][0] == DIFF_INSERT) {
        length_insertions2 += diffs[pointer][1].length;
      } else {
        length_deletions2 += diffs[pointer][1].length;
      } // Eliminate an equality that is smaller or equal to the edits on both
      // sides of it.

      if (
        lastEquality &&
        lastEquality.length <=
          Math.max(length_insertions1, length_deletions1) &&
        lastEquality.length <= Math.max(length_insertions2, length_deletions2)
      ) {
        // Duplicate record.
        diffs.splice(
          equalities[equalitiesLength - 1],
          0,
          new Diff(DIFF_DELETE, lastEquality)
        ); // Change second copy to insert.

        diffs[equalities[equalitiesLength - 1] + 1][0] = DIFF_INSERT; // Throw away the equality we just deleted.

        equalitiesLength--; // Throw away the previous equality (it needs to be reevaluated).

        equalitiesLength--;
        pointer = equalitiesLength > 0 ? equalities[equalitiesLength - 1] : -1;
        length_insertions1 = 0; // Reset the counters.

        length_deletions1 = 0;
        length_insertions2 = 0;
        length_deletions2 = 0;
        lastEquality = null;
        changes = true;
      }
    }

    pointer++;
  } // Normalize the diff.

  if (changes) {
    diff_cleanupMerge(diffs);
  }

  diff_cleanupSemanticLossless(diffs); // Find any overlaps between deletions and insertions.
  // e.g: <del>abcxxx</del><ins>xxxdef</ins>
  //   -> <del>abc</del>xxx<ins>def</ins>
  // e.g: <del>xxxabc</del><ins>defxxx</ins>
  //   -> <ins>def</ins>xxx<del>abc</del>
  // Only extract an overlap if it is as big as the edit ahead or behind it.

  pointer = 1;

  while (pointer < diffs.length) {
    if (
      diffs[pointer - 1][0] == DIFF_DELETE &&
      diffs[pointer][0] == DIFF_INSERT
    ) {
      var deletion = diffs[pointer - 1][1];
      var insertion = diffs[pointer][1];
      var overlap_length1 = diff_commonOverlap_(deletion, insertion);
      var overlap_length2 = diff_commonOverlap_(insertion, deletion);

      if (overlap_length1 >= overlap_length2) {
        if (
          overlap_length1 >= deletion.length / 2 ||
          overlap_length1 >= insertion.length / 2
        ) {
          // Overlap found.  Insert an equality and trim the surrounding edits.
          diffs.splice(
            pointer,
            0,
            new Diff(DIFF_EQUAL, insertion.substring(0, overlap_length1))
          );
          diffs[pointer - 1][1] = deletion.substring(
            0,
            deletion.length - overlap_length1
          );
          diffs[pointer + 1][1] = insertion.substring(overlap_length1);
          pointer++;
        }
      } else {
        if (
          overlap_length2 >= deletion.length / 2 ||
          overlap_length2 >= insertion.length / 2
        ) {
          // Reverse overlap found.
          // Insert an equality and swap and trim the surrounding edits.
          diffs.splice(
            pointer,
            0,
            new Diff(DIFF_EQUAL, deletion.substring(0, overlap_length2))
          );
          diffs[pointer - 1][0] = DIFF_INSERT;
          diffs[pointer - 1][1] = insertion.substring(
            0,
            insertion.length - overlap_length2
          );
          diffs[pointer + 1][0] = DIFF_DELETE;
          diffs[pointer + 1][1] = deletion.substring(overlap_length2);
          pointer++;
        }
      }

      pointer++;
    }

    pointer++;
  }
};
/**
 * Look for single edits surrounded on both sides by equalities
 * which can be shifted sideways to align the edit to a word boundary.
 * e.g: The c<ins>at c</ins>ame. -> The <ins>cat </ins>came.
 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
 */

exports.cleanupSemantic = diff_cleanupSemantic;

var diff_cleanupSemanticLossless = function diff_cleanupSemanticLossless(
  diffs
) {
  /**
   * Given two strings, compute a score representing whether the internal
   * boundary falls on logical boundaries.
   * Scores range from 6 (best) to 0 (worst).
   * Closure, but does not reference any external variables.
   * @param {string} one First string.
   * @param {string} two Second string.
   * @return {number} The score.
   * @private
   */
  function diff_cleanupSemanticScore_(one, two) {
    if (!one || !two) {
      // Edges are the best.
      return 6;
    } // Each port of this function behaves slightly differently due to
    // subtle differences in each language's definition of things like
    // 'whitespace'.  Since this function's purpose is largely cosmetic,
    // the choice has been made to use each language's native features
    // rather than force total conformity.

    var char1 = one.charAt(one.length - 1);
    var char2 = two.charAt(0);
    var nonAlphaNumeric1 = char1.match(nonAlphaNumericRegex_);
    var nonAlphaNumeric2 = char2.match(nonAlphaNumericRegex_);
    var whitespace1 = nonAlphaNumeric1 && char1.match(whitespaceRegex_);
    var whitespace2 = nonAlphaNumeric2 && char2.match(whitespaceRegex_);
    var lineBreak1 = whitespace1 && char1.match(linebreakRegex_);
    var lineBreak2 = whitespace2 && char2.match(linebreakRegex_);
    var blankLine1 = lineBreak1 && one.match(blanklineEndRegex_);
    var blankLine2 = lineBreak2 && two.match(blanklineStartRegex_);

    if (blankLine1 || blankLine2) {
      // Five points for blank lines.
      return 5;
    } else if (lineBreak1 || lineBreak2) {
      // Four points for line breaks.
      return 4;
    } else if (nonAlphaNumeric1 && !whitespace1 && whitespace2) {
      // Three points for end of sentences.
      return 3;
    } else if (whitespace1 || whitespace2) {
      // Two points for whitespace.
      return 2;
    } else if (nonAlphaNumeric1 || nonAlphaNumeric2) {
      // One point for non-alphanumeric.
      return 1;
    }

    return 0;
  }

  var pointer = 1; // Intentionally ignore the first and last element (don't need checking).

  while (pointer < diffs.length - 1) {
    if (
      diffs[pointer - 1][0] == DIFF_EQUAL &&
      diffs[pointer + 1][0] == DIFF_EQUAL
    ) {
      // This is a single edit surrounded by equalities.
      var equality1 = diffs[pointer - 1][1];
      var edit = diffs[pointer][1];
      var equality2 = diffs[pointer + 1][1]; // First, shift the edit as far left as possible.

      var commonOffset = diff_commonSuffix(equality1, edit);

      if (commonOffset) {
        var commonString = edit.substring(edit.length - commonOffset);
        equality1 = equality1.substring(0, equality1.length - commonOffset);
        edit = commonString + edit.substring(0, edit.length - commonOffset);
        equality2 = commonString + equality2;
      } // Second, step character by character right, looking for the best fit.

      var bestEquality1 = equality1;
      var bestEdit = edit;
      var bestEquality2 = equality2;
      var bestScore =
        diff_cleanupSemanticScore_(equality1, edit) +
        diff_cleanupSemanticScore_(edit, equality2);

      while (edit.charAt(0) === equality2.charAt(0)) {
        equality1 += edit.charAt(0);
        edit = edit.substring(1) + equality2.charAt(0);
        equality2 = equality2.substring(1);
        var score =
          diff_cleanupSemanticScore_(equality1, edit) +
          diff_cleanupSemanticScore_(edit, equality2); // The >= encourages trailing rather than leading whitespace on edits.

        if (score >= bestScore) {
          bestScore = score;
          bestEquality1 = equality1;
          bestEdit = edit;
          bestEquality2 = equality2;
        }
      }

      if (diffs[pointer - 1][1] != bestEquality1) {
        // We have an improvement, save it back to the diff.
        if (bestEquality1) {
          diffs[pointer - 1][1] = bestEquality1;
        } else {
          diffs.splice(pointer - 1, 1);
          pointer--;
        }

        diffs[pointer][1] = bestEdit;

        if (bestEquality2) {
          diffs[pointer + 1][1] = bestEquality2;
        } else {
          diffs.splice(pointer + 1, 1);
          pointer--;
        }
      }
    }

    pointer++;
  }
}; // Define some regex patterns for matching boundaries.

var nonAlphaNumericRegex_ = /[^a-zA-Z0-9]/;
var whitespaceRegex_ = /\s/;
var linebreakRegex_ = /[\r\n]/;
var blanklineEndRegex_ = /\n\r?\n$/;
var blanklineStartRegex_ = /^\r?\n\r?\n/;
/**
 * Reorder and merge like edit sections.  Merge equalities.
 * Any edit section can move as long as it doesn't cross an equality.
 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
 */

var diff_cleanupMerge = function diff_cleanupMerge(diffs) {
  // Add a dummy entry at the end.
  diffs.push(new Diff(DIFF_EQUAL, ''));
  var pointer = 0;
  var count_delete = 0;
  var count_insert = 0;
  var text_delete = '';
  var text_insert = '';
  var commonlength;

  while (pointer < diffs.length) {
    switch (diffs[pointer][0]) {
      case DIFF_INSERT:
        count_insert++;
        text_insert += diffs[pointer][1];
        pointer++;
        break;

      case DIFF_DELETE:
        count_delete++;
        text_delete += diffs[pointer][1];
        pointer++;
        break;

      case DIFF_EQUAL:
        // Upon reaching an equality, check for prior redundancies.
        if (count_delete + count_insert > 1) {
          if (count_delete !== 0 && count_insert !== 0) {
            // Factor out any common prefixies.
            commonlength = diff_commonPrefix(text_insert, text_delete);

            if (commonlength !== 0) {
              if (
                pointer - count_delete - count_insert > 0 &&
                diffs[pointer - count_delete - count_insert - 1][0] ==
                  DIFF_EQUAL
              ) {
                diffs[
                  pointer - count_delete - count_insert - 1
                ][1] += text_insert.substring(0, commonlength);
              } else {
                diffs.splice(
                  0,
                  0,
                  new Diff(DIFF_EQUAL, text_insert.substring(0, commonlength))
                );
                pointer++;
              }

              text_insert = text_insert.substring(commonlength);
              text_delete = text_delete.substring(commonlength);
            } // Factor out any common suffixies.

            commonlength = diff_commonSuffix(text_insert, text_delete);

            if (commonlength !== 0) {
              diffs[pointer][1] =
                text_insert.substring(text_insert.length - commonlength) +
                diffs[pointer][1];
              text_insert = text_insert.substring(
                0,
                text_insert.length - commonlength
              );
              text_delete = text_delete.substring(
                0,
                text_delete.length - commonlength
              );
            }
          } // Delete the offending records and add the merged ones.

          pointer -= count_delete + count_insert;
          diffs.splice(pointer, count_delete + count_insert);

          if (text_delete.length) {
            diffs.splice(pointer, 0, new Diff(DIFF_DELETE, text_delete));
            pointer++;
          }

          if (text_insert.length) {
            diffs.splice(pointer, 0, new Diff(DIFF_INSERT, text_insert));
            pointer++;
          }

          pointer++;
        } else if (pointer !== 0 && diffs[pointer - 1][0] == DIFF_EQUAL) {
          // Merge this equality with the previous one.
          diffs[pointer - 1][1] += diffs[pointer][1];
          diffs.splice(pointer, 1);
        } else {
          pointer++;
        }

        count_insert = 0;
        count_delete = 0;
        text_delete = '';
        text_insert = '';
        break;
    }
  }

  if (diffs[diffs.length - 1][1] === '') {
    diffs.pop(); // Remove the dummy entry at the end.
  } // Second pass: look for single edits surrounded on both sides by equalities
  // which can be shifted sideways to eliminate an equality.
  // e.g: A<ins>BA</ins>C -> <ins>AB</ins>AC

  var changes = false;
  pointer = 1; // Intentionally ignore the first and last element (don't need checking).

  while (pointer < diffs.length - 1) {
    if (
      diffs[pointer - 1][0] == DIFF_EQUAL &&
      diffs[pointer + 1][0] == DIFF_EQUAL
    ) {
      // This is a single edit surrounded by equalities.
      if (
        diffs[pointer][1].substring(
          diffs[pointer][1].length - diffs[pointer - 1][1].length
        ) == diffs[pointer - 1][1]
      ) {
        // Shift the edit over the previous equality.
        diffs[pointer][1] =
          diffs[pointer - 1][1] +
          diffs[pointer][1].substring(
            0,
            diffs[pointer][1].length - diffs[pointer - 1][1].length
          );
        diffs[pointer + 1][1] = diffs[pointer - 1][1] + diffs[pointer + 1][1];
        diffs.splice(pointer - 1, 1);
        changes = true;
      } else if (
        diffs[pointer][1].substring(0, diffs[pointer + 1][1].length) ==
        diffs[pointer + 1][1]
      ) {
        // Shift the edit over the next equality.
        diffs[pointer - 1][1] += diffs[pointer + 1][1];
        diffs[pointer][1] =
          diffs[pointer][1].substring(diffs[pointer + 1][1].length) +
          diffs[pointer + 1][1];
        diffs.splice(pointer + 1, 1);
        changes = true;
      }
    }

    pointer++;
  } // If shifts were made, the diff needs reordering and another shift sweep.

  if (changes) {
    diff_cleanupMerge(diffs);
  }
};
});

var diffStrings_1$1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _diffSequences = _interopRequireDefault(build$1);



function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const diffStrings = (a, b) => {
  const isCommon = (aIndex, bIndex) => a[aIndex] === b[bIndex];

  let aIndex = 0;
  let bIndex = 0;
  const diffs = [];

  const foundSubsequence = (nCommon, aCommon, bCommon) => {
    if (aIndex !== aCommon) {
      diffs.push(
        new cleanupSemantic$1.Diff(
          cleanupSemantic$1.DIFF_DELETE,
          a.slice(aIndex, aCommon)
        )
      );
    }

    if (bIndex !== bCommon) {
      diffs.push(
        new cleanupSemantic$1.Diff(
          cleanupSemantic$1.DIFF_INSERT,
          b.slice(bIndex, bCommon)
        )
      );
    }

    aIndex = aCommon + nCommon; // number of characters compared in a

    bIndex = bCommon + nCommon; // number of characters compared in b

    diffs.push(
      new cleanupSemantic$1.Diff(
        cleanupSemantic$1.DIFF_EQUAL,
        b.slice(bCommon, bIndex)
      )
    );
  };

  (0, _diffSequences.default)(a.length, b.length, isCommon, foundSubsequence); // After the last common subsequence, push remaining change items.

  if (aIndex !== a.length) {
    diffs.push(
      new cleanupSemantic$1.Diff(cleanupSemantic$1.DIFF_DELETE, a.slice(aIndex))
    );
  }

  if (bIndex !== b.length) {
    diffs.push(
      new cleanupSemantic$1.Diff(cleanupSemantic$1.DIFF_INSERT, b.slice(bIndex))
    );
  }

  return diffs;
};

var _default = diffStrings;
exports.default = _default;
});

var getAlignedDiffs_1$1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;





function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

// Encapsulate change lines until either a common newline or the end.
class ChangeBuffer {
  // incomplete line
  // complete lines
  constructor(op) {
    _defineProperty(this, 'op', void 0);

    _defineProperty(this, 'line', void 0);

    _defineProperty(this, 'lines', void 0);

    this.op = op;
    this.line = [];
    this.lines = [];
  }

  pushSubstring(substring) {
    this.pushDiff(new cleanupSemantic$1.Diff(this.op, substring));
  }

  pushLine() {
    // Assume call only if line has at least one diff,
    // therefore an empty line must have a diff which has an empty string.
    this.lines.push(
      new cleanupSemantic$1.Diff(
        this.op,
        (0, printDiffs$1.getHighlightedString)(this.op, this.line)
      )
    );
    this.line.length = 0;
  }

  isLineEmpty() {
    return this.line.length === 0;
  } // Minor input to buffer.

  pushDiff(diff) {
    this.line.push(diff);
  } // Main input to buffer.

  align(diff) {
    const string = diff[1];

    if (printDiffs$1.MULTILINE_REGEXP.test(string)) {
      const substrings = string.split('\n');
      const iLast = substrings.length - 1;
      substrings.forEach((substring, i) => {
        if (i < iLast) {
          // The first substring completes the current change line.
          // A middle substring is a change line.
          this.pushSubstring(substring);
          this.pushLine();
        } else if (substring.length !== 0) {
          // The last substring starts a change line, if it is not empty.
          // Important: This non-empty condition also automatically omits
          // the newline appended to the end of expected and received strings.
          this.pushSubstring(substring);
        }
      });
    } else {
      // Append non-multiline string to current change line.
      this.pushDiff(diff);
    }
  } // Output from buffer.

  moveLinesTo(lines) {
    if (!this.isLineEmpty()) {
      this.pushLine();
    }

    lines.push(...this.lines);
    this.lines.length = 0;
  }
} // Encapsulate common and change lines.

class CommonBuffer {
  constructor(deleteBuffer, insertBuffer) {
    _defineProperty(this, 'deleteBuffer', void 0);

    _defineProperty(this, 'insertBuffer', void 0);

    _defineProperty(this, 'lines', void 0);

    this.deleteBuffer = deleteBuffer;
    this.insertBuffer = insertBuffer;
    this.lines = [];
  }

  pushDiffCommonLine(diff) {
    this.lines.push(diff);
  }

  pushDiffChangeLines(diff) {
    const isDiffEmpty = diff[1].length === 0; // An empty diff string is redundant, unless a change line is empty.

    if (!isDiffEmpty || this.deleteBuffer.isLineEmpty()) {
      this.deleteBuffer.pushDiff(diff);
    }

    if (!isDiffEmpty || this.insertBuffer.isLineEmpty()) {
      this.insertBuffer.pushDiff(diff);
    }
  }

  flushChangeLines() {
    this.deleteBuffer.moveLinesTo(this.lines);
    this.insertBuffer.moveLinesTo(this.lines);
  } // Input to buffer.

  align(diff) {
    const op = diff[0];
    const string = diff[1];

    if (printDiffs$1.MULTILINE_REGEXP.test(string)) {
      const substrings = string.split('\n');
      const iLast = substrings.length - 1;
      substrings.forEach((substring, i) => {
        if (i === 0) {
          const subdiff = new cleanupSemantic$1.Diff(op, substring);

          if (
            this.deleteBuffer.isLineEmpty() &&
            this.insertBuffer.isLineEmpty()
          ) {
            // If both current change lines are empty,
            // then the first substring is a common line.
            this.flushChangeLines();
            this.pushDiffCommonLine(subdiff);
          } else {
            // If either current change line is non-empty,
            // then the first substring completes the change lines.
            this.pushDiffChangeLines(subdiff);
            this.flushChangeLines();
          }
        } else if (i < iLast) {
          // A middle substring is a common line.
          this.pushDiffCommonLine(new cleanupSemantic$1.Diff(op, substring));
        } else if (substring.length !== 0) {
          // The last substring starts a change line, if it is not empty.
          // Important: This non-empty condition also automatically omits
          // the newline appended to the end of expected and received strings.
          this.pushDiffChangeLines(new cleanupSemantic$1.Diff(op, substring));
        }
      });
    } else {
      // Append non-multiline string to current change lines.
      // Important: It cannot be at the end following empty change lines,
      // because newline appended to the end of expected and received strings.
      this.pushDiffChangeLines(diff);
    }
  } // Output from buffer.

  getLines() {
    this.flushChangeLines();
    return this.lines;
  }
} // Given diffs from expected and received strings,
// return new array of diffs split or joined into lines.
//
// To correctly align a change line at the end, the algorithm:
// * assumes that a newline was appended to the strings
// * omits the last newline from the output array
//
// Assume the function is not called:
// * if either expected or received is empty string
// * if neither expected nor received is multiline string

const getAlignedDiffs = diffs => {
  const deleteBuffer = new ChangeBuffer(cleanupSemantic$1.DIFF_DELETE);
  const insertBuffer = new ChangeBuffer(cleanupSemantic$1.DIFF_INSERT);
  const commonBuffer = new CommonBuffer(deleteBuffer, insertBuffer);
  diffs.forEach(diff => {
    switch (diff[0]) {
      case cleanupSemantic$1.DIFF_DELETE:
        deleteBuffer.align(diff);
        break;

      case cleanupSemantic$1.DIFF_INSERT:
        insertBuffer.align(diff);
        break;

      default:
        commonBuffer.align(diff);
    }
  });
  return commonBuffer.getLines();
};

var _default = getAlignedDiffs;
exports.default = _default;
});

/*@__PURE__*/getDefaultExportFromCjs(getAlignedDiffs_1$1);

var joinAlignedDiffs$1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.joinAlignedDiffsExpand = exports.joinAlignedDiffsNoExpand = void 0;





/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const DIFF_CONTEXT_DEFAULT = 5; // same as diffLines
// jest --no-expand
//
// Given array of aligned strings with inverse highlight formatting,
// return joined lines with diff formatting (and patch marks, if needed).

const joinAlignedDiffsNoExpand = (
  diffs,
  nContextLines = DIFF_CONTEXT_DEFAULT
) => {
  const iLength = diffs.length;
  const nContextLines2 = nContextLines + nContextLines; // First pass: count output lines and see if it has patches.

  let jLength = iLength;
  let hasExcessAtStartOrEnd = false;
  let nExcessesBetweenChanges = 0;
  let i = 0;

  while (i !== iLength) {
    const iStart = i;

    while (i !== iLength && diffs[i][0] === cleanupSemantic$1.DIFF_EQUAL) {
      i += 1;
    }

    if (iStart !== i) {
      if (iStart === 0) {
        // at start
        if (i > nContextLines) {
          jLength -= i - nContextLines; // subtract excess common lines

          hasExcessAtStartOrEnd = true;
        }
      } else if (i === iLength) {
        // at end
        const n = i - iStart;

        if (n > nContextLines) {
          jLength -= n - nContextLines; // subtract excess common lines

          hasExcessAtStartOrEnd = true;
        }
      } else {
        // between changes
        const n = i - iStart;

        if (n > nContextLines2) {
          jLength -= n - nContextLines2; // subtract excess common lines

          nExcessesBetweenChanges += 1;
        }
      }
    }

    while (i !== iLength && diffs[i][0] !== cleanupSemantic$1.DIFF_EQUAL) {
      i += 1;
    }
  }

  const hasPatch = nExcessesBetweenChanges !== 0 || hasExcessAtStartOrEnd;

  if (nExcessesBetweenChanges !== 0) {
    jLength += nExcessesBetweenChanges + 1; // add patch lines
  } else if (hasExcessAtStartOrEnd) {
    jLength += 1; // add patch line
  }

  const jLast = jLength - 1;
  const lines = [];
  let jPatchMark = 0; // index of placeholder line for current patch mark

  if (hasPatch) {
    lines.push(''); // placeholder line for first patch mark
  } // Indexes of expected or received lines in current patch:

  let aStart = 0;
  let bStart = 0;
  let aEnd = 0;
  let bEnd = 0;

  const pushCommonLine = line => {
    const j = lines.length;
    lines.push((0, printDiffs$1.printCommonLine)(line, j === 0 || j === jLast));
    aEnd += 1;
    bEnd += 1;
  };

  const pushDeleteLine = line => {
    lines.push((0, printDiffs$1.printDeleteLine)(line));
    aEnd += 1;
  };

  const pushInsertLine = line => {
    lines.push((0, printDiffs$1.printInsertLine)(line));
    bEnd += 1;
  }; // Second pass: push lines with diff formatting (and patch marks, if needed).

  i = 0;

  while (i !== iLength) {
    let iStart = i;

    while (i !== iLength && diffs[i][0] === cleanupSemantic$1.DIFF_EQUAL) {
      i += 1;
    }

    if (iStart !== i) {
      if (iStart === 0) {
        // at beginning
        if (i > nContextLines) {
          iStart = i - nContextLines;
          aStart = iStart;
          bStart = iStart;
          aEnd = aStart;
          bEnd = bStart;
        }

        for (let iCommon = iStart; iCommon !== i; iCommon += 1) {
          pushCommonLine(diffs[iCommon][1]);
        }
      } else if (i === iLength) {
        // at end
        const iEnd = i - iStart > nContextLines ? iStart + nContextLines : i;

        for (let iCommon = iStart; iCommon !== iEnd; iCommon += 1) {
          pushCommonLine(diffs[iCommon][1]);
        }
      } else {
        // between changes
        const nCommon = i - iStart;

        if (nCommon > nContextLines2) {
          const iEnd = iStart + nContextLines;

          for (let iCommon = iStart; iCommon !== iEnd; iCommon += 1) {
            pushCommonLine(diffs[iCommon][1]);
          }

          lines[jPatchMark] = (0, printDiffs$1.createPatchMark)(
            aStart,
            aEnd,
            bStart,
            bEnd
          );
          jPatchMark = lines.length;
          lines.push(''); // placeholder line for next patch mark

          const nOmit = nCommon - nContextLines2;
          aStart = aEnd + nOmit;
          bStart = bEnd + nOmit;
          aEnd = aStart;
          bEnd = bStart;

          for (let iCommon = i - nContextLines; iCommon !== i; iCommon += 1) {
            pushCommonLine(diffs[iCommon][1]);
          }
        } else {
          for (let iCommon = iStart; iCommon !== i; iCommon += 1) {
            pushCommonLine(diffs[iCommon][1]);
          }
        }
      }
    }

    while (i !== iLength && diffs[i][0] === cleanupSemantic$1.DIFF_DELETE) {
      pushDeleteLine(diffs[i][1]);
      i += 1;
    }

    while (i !== iLength && diffs[i][0] === cleanupSemantic$1.DIFF_INSERT) {
      pushInsertLine(diffs[i][1]);
      i += 1;
    }
  }

  if (hasPatch) {
    lines[jPatchMark] = (0, printDiffs$1.createPatchMark)(
      aStart,
      aEnd,
      bStart,
      bEnd
    );
  }

  return lines.join('\n');
}; // jest --expand
//
// Given array of aligned strings with inverse highlight formatting,
// return joined lines with diff formatting.

exports.joinAlignedDiffsNoExpand = joinAlignedDiffsNoExpand;

const joinAlignedDiffsExpand = diffs =>
  diffs
    .map((diff, i, diffs) => {
      const line = diff[1];

      switch (diff[0]) {
        case cleanupSemantic$1.DIFF_DELETE:
          return (0, printDiffs$1.printDeleteLine)(line);

        case cleanupSemantic$1.DIFF_INSERT:
          return (0, printDiffs$1.printInsertLine)(line);

        default:
          return (0, printDiffs$1.printCommonLine)(
            line,
            i === 0 || i === diffs.length - 1
          );
      }
    })
    .join('\n');

exports.joinAlignedDiffsExpand = joinAlignedDiffsExpand;
});

var printDiffs$1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.getStringDiff = exports.printMultilineStringDiffs = exports.createPatchMark = exports.printAnnotation = exports.hasCommonDiff = exports.computeStringDiffs = exports.printCommonLine = exports.printInsertLine = exports.printDeleteLine = exports.MULTILINE_REGEXP = exports.getReceivedString = exports.getExpectedString = exports.getHighlightedString = exports.RECEIVED_COLOR = exports.INVERTED_COLOR = exports.EXPECTED_COLOR = exports.DIM_COLOR = void 0;

var _chalk = _interopRequireDefault(chalk);



var _diffStrings = _interopRequireDefault(diffStrings_1$1);

var _getAlignedDiffs = _interopRequireDefault(getAlignedDiffs_1$1);



function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const DIM_COLOR = _chalk.default.dim;
exports.DIM_COLOR = DIM_COLOR;
const EXPECTED_COLOR = _chalk.default.green;
exports.EXPECTED_COLOR = EXPECTED_COLOR;
const INVERTED_COLOR = _chalk.default.inverse;
exports.INVERTED_COLOR = INVERTED_COLOR;
const RECEIVED_COLOR = _chalk.default.red;
exports.RECEIVED_COLOR = RECEIVED_COLOR;
const PATCH_COLOR = _chalk.default.yellow; // Given change op and array of diffs, return concatenated string:
// * include common strings
// * include change strings which have argument op (inverse highlight)
// * exclude change strings which have opposite op

const getHighlightedString = (op, diffs) =>
  diffs.reduce(
    (reduced, diff) =>
      reduced +
      (diff[0] === cleanupSemantic$1.DIFF_EQUAL
        ? diff[1]
        : diff[0] === op
        ? INVERTED_COLOR(diff[1])
        : ''),
    ''
  );

exports.getHighlightedString = getHighlightedString;

const getExpectedString = diffs =>
  getHighlightedString(cleanupSemantic$1.DIFF_DELETE, diffs);

exports.getExpectedString = getExpectedString;

const getReceivedString = diffs =>
  getHighlightedString(cleanupSemantic$1.DIFF_INSERT, diffs);

exports.getReceivedString = getReceivedString;
const MULTILINE_REGEXP = /\n/;
exports.MULTILINE_REGEXP = MULTILINE_REGEXP;
const NEWLINE_SYMBOL = '\u{21B5}'; // downwards arrow with corner leftwards

const SPACE_SYMBOL = '\u{00B7}'; // middle dot
// Instead of inverse highlight which now implies a change,
// replace common spaces with middle dot at the end of the line.

const replaceSpacesAtEnd = line =>
  line.replace(/\s+$/, spaces => SPACE_SYMBOL.repeat(spaces.length));

const printDeleteLine = line =>
  EXPECTED_COLOR(line.length !== 0 ? '- ' + replaceSpacesAtEnd(line) : '-');

exports.printDeleteLine = printDeleteLine;

const printInsertLine = line =>
  RECEIVED_COLOR(line.length !== 0 ? '+ ' + replaceSpacesAtEnd(line) : '+'); // Prevent visually ambiguous empty line as the first or the last.

exports.printInsertLine = printInsertLine;

const printCommonLine = (line, isFirstOrLast = false) =>
  line.length !== 0
    ? DIM_COLOR('  ' + replaceSpacesAtEnd(line))
    : isFirstOrLast
    ? DIM_COLOR('  ' + NEWLINE_SYMBOL)
    : '';

exports.printCommonLine = printCommonLine;

const computeStringDiffs = (expected, received) => {
  const isMultiline =
    MULTILINE_REGEXP.test(expected) || MULTILINE_REGEXP.test(received); // getAlignedDiffs assumes that a newline was appended to the strings.

  if (isMultiline) {
    expected += '\n';
    received += '\n';
  }

  const diffs = (0, _diffStrings.default)(expected, received);
  (0, cleanupSemantic$1.cleanupSemantic)(diffs); // impure function

  return {
    diffs,
    isMultiline
  };
};

exports.computeStringDiffs = computeStringDiffs;

const hasCommonDiff = (diffs, isMultiline) => {
  if (isMultiline) {
    // Important: Ignore common newline that was appended to multiline strings!
    const iLast = diffs.length - 1;
    return diffs.some(
      (diff, i) =>
        diff[0] === cleanupSemantic$1.DIFF_EQUAL &&
        (i !== iLast || diff[1] !== '\n')
    );
  }

  return diffs.some(diff => diff[0] === cleanupSemantic$1.DIFF_EQUAL);
};

exports.hasCommonDiff = hasCommonDiff;

const printAnnotation = options =>
  EXPECTED_COLOR('- ' + ((options && options.aAnnotation) || 'Expected')) +
  '\n' +
  RECEIVED_COLOR('+ ' + ((options && options.bAnnotation) || 'Received')) +
  '\n\n'; // In GNU diff format, indexes are one-based instead of zero-based.

exports.printAnnotation = printAnnotation;

const createPatchMark = (aStart, aEnd, bStart, bEnd) =>
  PATCH_COLOR(
    `@@ -${aStart + 1},${aEnd - aStart} +${bStart + 1},${bEnd - bStart} @@`
  ); // Return formatted diff lines without labels.

exports.createPatchMark = createPatchMark;

const printMultilineStringDiffs = (diffs, expand) => {
  const lines = (0, _getAlignedDiffs.default)(diffs);
  return expand
    ? (0, joinAlignedDiffs$1.joinAlignedDiffsExpand)(lines)
    : (0, joinAlignedDiffs$1.joinAlignedDiffsNoExpand)(lines);
};

exports.printMultilineStringDiffs = printMultilineStringDiffs;
const MAX_DIFF_STRING_LENGTH = 20000;

// Print specific substring diff for strings only:
// * if strings are not equal
// * if neither string is empty
// * if neither string is too long
// * if there is a common string after semantic cleanup
const getStringDiff = (expected, received, options) => {
  if (
    expected === received ||
    expected.length === 0 ||
    received.length === 0 ||
    expected.length > MAX_DIFF_STRING_LENGTH ||
    received.length > MAX_DIFF_STRING_LENGTH
  ) {
    return null;
  }

  const _computeStringDiffs = computeStringDiffs(expected, received),
    diffs = _computeStringDiffs.diffs,
    isMultiline = _computeStringDiffs.isMultiline;

  if (!hasCommonDiff(diffs, isMultiline)) {
    return null;
  }

  return isMultiline
    ? {
        annotatedDiff:
          printAnnotation(options) +
          printMultilineStringDiffs(
            diffs,
            options === undefined || options.expand !== false
          ),
        isMultiline
      }
    : {
        a: getExpectedString(diffs),
        b: getReceivedString(diffs),
        isMultiline
      };
};

exports.getStringDiff = getStringDiff;
});

var diffLines$1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _chalk = _interopRequireDefault(chalk);

var _diffSequences = _interopRequireDefault(build$1);





function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const DIFF_CONTEXT_DEFAULT = 5;
const fgDelete = _chalk.default.green;
const fgInsert = _chalk.default.red;
const fgCommon = _chalk.default.dim; // common lines (even indentation same)

const fgIndent = _chalk.default.cyan; // common lines (only indentation different)

const bgCommon = _chalk.default.bgYellow; // edge spaces in common line (even indentation same)

const bgInverse = _chalk.default.inverse; // edge spaces in any other lines
// ONLY trailing if expected value is snapshot or multiline string.

const highlightTrailingSpaces = (line, bgColor) =>
  line.replace(/\s+$/, bgColor('$&')); // BOTH leading AND trailing if expected value is data structure.

const highlightLeadingTrailingSpaces = (
  line,
  bgColor // If line consists of ALL spaces: highlight all of them.
) =>
  highlightTrailingSpaces(line, bgColor).replace(
    // If line has an ODD length of leading spaces: highlight only the LAST.
    /^(\s\s)*(\s)(?=[^\s])/,
    '$1' + bgColor('$2')
  );

const getHighlightSpaces = bothEdges =>
  bothEdges ? highlightLeadingTrailingSpaces : highlightTrailingSpaces;

// Given index interval in expected lines, put formatted delete lines.
const formatDelete = (aStart, aEnd, aLinesUn, aLinesIn, put) => {
  const highlightSpaces = getHighlightSpaces(aLinesUn !== aLinesIn);

  for (let aIndex = aStart; aIndex !== aEnd; aIndex += 1) {
    const aLineUn = aLinesUn[aIndex];
    const aLineIn = aLinesIn[aIndex];
    const indentation = aLineIn.slice(0, aLineIn.length - aLineUn.length);
    put(fgDelete('- ' + indentation + highlightSpaces(aLineUn, bgInverse)));
  }
}; // Given index interval in received lines, put formatted insert lines.

const formatInsert = (bStart, bEnd, bLinesUn, bLinesIn, put) => {
  const highlightSpaces = getHighlightSpaces(bLinesUn !== bLinesIn);

  for (let bIndex = bStart; bIndex !== bEnd; bIndex += 1) {
    const bLineUn = bLinesUn[bIndex];
    const bLineIn = bLinesIn[bIndex];
    const indentation = bLineIn.slice(0, bLineIn.length - bLineUn.length);
    put(fgInsert('+ ' + indentation + highlightSpaces(bLineUn, bgInverse)));
  }
}; // Given the number of items and starting indexes of a common subsequence,
// put formatted common lines.

const formatCommon = (
  nCommon,
  aCommon,
  bCommon,
  aLinesIn,
  bLinesUn,
  bLinesIn,
  put
) => {
  const highlightSpaces = getHighlightSpaces(bLinesUn !== bLinesIn);

  for (; nCommon !== 0; nCommon -= 1, aCommon += 1, bCommon += 1) {
    const bLineUn = bLinesUn[bCommon];
    const bLineIn = bLinesIn[bCommon];
    const bLineInLength = bLineIn.length; // For common lines, received indentation seems more intuitive.

    const indentation = bLineIn.slice(0, bLineInLength - bLineUn.length); // Color shows whether expected and received line has same indentation.

    const hasSameIndentation = aLinesIn[aCommon].length === bLineInLength;
    const fg = hasSameIndentation ? fgCommon : fgIndent;
    const bg = hasSameIndentation ? bgCommon : bgInverse;
    put(fg('  ' + indentation + highlightSpaces(bLineUn, bg)));
  }
}; // jest --expand
// Return formatted diff as joined string of all lines.

const diffExpand = (aLinesUn, bLinesUn, aLinesIn, bLinesIn) => {
  const isCommon = (aIndex, bIndex) => aLinesUn[aIndex] === bLinesUn[bIndex];

  const array = [];

  const put = line => {
    array.push(line);
  };

  let aStart = 0;
  let bStart = 0;

  const foundSubsequence = (nCommon, aCommon, bCommon) => {
    formatDelete(aStart, aCommon, aLinesUn, aLinesIn, put);
    formatInsert(bStart, bCommon, bLinesUn, bLinesIn, put);
    formatCommon(nCommon, aCommon, bCommon, aLinesIn, bLinesUn, bLinesIn, put);
    aStart = aCommon + nCommon;
    bStart = bCommon + nCommon;
  };

  const aLength = aLinesUn.length;
  const bLength = bLinesUn.length;
  (0, _diffSequences.default)(aLength, bLength, isCommon, foundSubsequence); // After the last common subsequence, format remaining change lines.

  formatDelete(aStart, aLength, aLinesUn, aLinesIn, put);
  formatInsert(bStart, bLength, bLinesUn, bLinesIn, put);
  return array.join('\n');
};

const getContextLines = options =>
  options &&
  typeof options.contextLines === 'number' &&
  options.contextLines >= 0
    ? options.contextLines
    : DIFF_CONTEXT_DEFAULT; // jest --no-expand
// Return joined string of formatted diff for all change lines,
// but if some common lines are omitted because there are more than the context,
// then a “patch mark” precedes each set of adjacent changed and common lines.

const diffNoExpand = (
  aLinesUn,
  bLinesUn,
  aLinesIn,
  bLinesIn,
  nContextLines
) => {
  const isCommon = (aIndex, bIndex) => aLinesUn[aIndex] === bLinesUn[bIndex];

  let iPatchMark = 0; // index of placeholder line for patch mark

  const array = [''];

  const put = line => {
    array.push(line);
  };

  let isAtEnd = false;
  const aLength = aLinesUn.length;
  const bLength = bLinesUn.length;
  const nContextLines2 = nContextLines + nContextLines; // Initialize the first patch for changes at the start,
  // especially for edge case in which there is no common subsequence.

  let aStart = 0;
  let aEnd = 0;
  let bStart = 0;
  let bEnd = 0; // Given the number of items and starting indexes of each common subsequence,
  // format any preceding change lines, and then common context lines.

  const foundSubsequence = (nCommon, aStartCommon, bStartCommon) => {
    const aEndCommon = aStartCommon + nCommon;
    const bEndCommon = bStartCommon + nCommon;
    isAtEnd = aEndCommon === aLength && bEndCommon === bLength; // If common subsequence is at start, re-initialize the first patch.

    if (aStartCommon === 0 && bStartCommon === 0) {
      const nLines = nContextLines < nCommon ? nContextLines : nCommon;
      aStart = aEndCommon - nLines;
      bStart = bEndCommon - nLines;
      formatCommon(nLines, aStart, bStart, aLinesIn, bLinesUn, bLinesIn, put);
      aEnd = aEndCommon;
      bEnd = bEndCommon;
      return;
    } // Format preceding change lines.

    formatDelete(aEnd, aStartCommon, aLinesUn, aLinesIn, put);
    formatInsert(bEnd, bStartCommon, bLinesUn, bLinesIn, put);
    aEnd = aStartCommon;
    bEnd = bStartCommon; // If common subsequence is at end, then context follows preceding changes;
    // else context follows preceding changes AND precedes following changes.

    const maxContextLines = isAtEnd ? nContextLines : nContextLines2;

    if (nCommon <= maxContextLines) {
      // The patch includes all lines in the common subsequence.
      formatCommon(nCommon, aEnd, bEnd, aLinesIn, bLinesUn, bLinesIn, put);
      aEnd += nCommon;
      bEnd += nCommon;
      return;
    } // The patch ends because context is less than number of common lines.

    formatCommon(nContextLines, aEnd, bEnd, aLinesIn, bLinesUn, bLinesIn, put);
    aEnd += nContextLines;
    bEnd += nContextLines;
    array[iPatchMark] = (0, printDiffs$1.createPatchMark)(
      aStart,
      aEnd,
      bStart,
      bEnd
    ); // If common subsequence is not at end, another patch follows it.

    if (!isAtEnd) {
      iPatchMark = array.length; // index of placeholder line

      array[iPatchMark] = '';
      const nLines = nContextLines < nCommon ? nContextLines : nCommon;
      aStart = aEndCommon - nLines;
      bStart = bEndCommon - nLines;
      formatCommon(nLines, aStart, bStart, aLinesIn, bLinesUn, bLinesIn, put);
      aEnd = aEndCommon;
      bEnd = bEndCommon;
    }
  };

  (0, _diffSequences.default)(aLength, bLength, isCommon, foundSubsequence); // If no common subsequence or last was not at end, format remaining change lines.

  if (!isAtEnd) {
    formatDelete(aEnd, aLength, aLinesUn, aLinesIn, put);
    formatInsert(bEnd, bLength, bLinesUn, bLinesIn, put);
    aEnd = aLength;
    bEnd = bLength;
  }

  if (aStart === 0 && aEnd === aLength && bStart === 0 && bEnd === bLength) {
    array.splice(0, 1); // delete placeholder line for patch mark
  } else {
    array[iPatchMark] = (0, printDiffs$1.createPatchMark)(
      aStart,
      aEnd,
      bStart,
      bEnd
    );
  }

  return array.join('\n');
};

var _default = (a, b, options, original) => {
  if (a === b) {
    return constants$1.NO_DIFF_MESSAGE;
  }

  let aLinesUn = a.split('\n');
  let bLinesUn = b.split('\n'); // Indentation is unknown if expected value is snapshot or multiline string.

  let aLinesIn = aLinesUn;
  let bLinesIn = bLinesUn;

  if (original) {
    // Indentation is known if expected value is data structure:
    // Compare lines without indentation and format lines with indentation.
    aLinesIn = original.a.split('\n');
    bLinesIn = original.b.split('\n');

    if (
      aLinesUn.length !== aLinesIn.length ||
      bLinesUn.length !== bLinesIn.length
    ) {
      // Fall back if unindented and indented lines are inconsistent.
      aLinesUn = aLinesIn;
      bLinesUn = bLinesIn;
    }
  }

  return (
    (0, printDiffs$1.printAnnotation)(options) +
    (options && options.expand === false
      ? diffNoExpand(
          aLinesUn,
          bLinesUn,
          aLinesIn,
          bLinesIn,
          getContextLines(options)
        )
      : diffExpand(aLinesUn, bLinesUn, aLinesIn, bLinesIn))
  );
};

exports.default = _default;
});

var build$4 = createCommonjsModule(function (module) {

var _prettyFormat = _interopRequireDefault(buildEs5);

var _chalk = _interopRequireDefault(chalk);

var _jestGetType = _interopRequireDefault(build);

var _diffLines = _interopRequireDefault(diffLines$1);





function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

var Symbol = commonjsGlobal['jest-symbol-do-not-touch'] || commonjsGlobal.Symbol;

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(
        Object.getOwnPropertySymbols(source).filter(function(sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        })
      );
    }
    ownKeys.forEach(function(key) {
      _defineProperty(target, key, source[key]);
    });
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

const _prettyFormat$plugins = _prettyFormat.default.plugins,
  AsymmetricMatcher = _prettyFormat$plugins.AsymmetricMatcher,
  DOMCollection = _prettyFormat$plugins.DOMCollection,
  DOMElement = _prettyFormat$plugins.DOMElement,
  Immutable = _prettyFormat$plugins.Immutable,
  ReactElement = _prettyFormat$plugins.ReactElement,
  ReactTestComponent = _prettyFormat$plugins.ReactTestComponent;
const PLUGINS = [
  ReactTestComponent,
  ReactElement,
  DOMElement,
  DOMCollection,
  Immutable,
  AsymmetricMatcher
];
const FORMAT_OPTIONS = {
  plugins: PLUGINS
};

const FORMAT_OPTIONS_0 = _objectSpread({}, FORMAT_OPTIONS, {
  indent: 0
});

const FALLBACK_FORMAT_OPTIONS = {
  callToJSON: false,
  maxDepth: 10,
  plugins: PLUGINS
};

const FALLBACK_FORMAT_OPTIONS_0 = _objectSpread({}, FALLBACK_FORMAT_OPTIONS, {
  indent: 0
}); // Generate a string that will highlight the difference between two values
// with green and red. (similar to how github does code diffing)

function diff(a, b, options) {
  if (Object.is(a, b)) {
    return constants$1.NO_DIFF_MESSAGE;
  }

  const aType = (0, _jestGetType.default)(a);
  let expectedType = aType;
  let omitDifference = false;

  if (aType === 'object' && typeof a.asymmetricMatch === 'function') {
    if (a.$$typeof !== Symbol.for('jest.asymmetricMatcher')) {
      // Do not know expected type of user-defined asymmetric matcher.
      return null;
    }

    if (typeof a.getExpectedType !== 'function') {
      // For example, expect.anything() matches either null or undefined
      return null;
    }

    expectedType = a.getExpectedType(); // Primitive types boolean and number omit difference below.
    // For example, omit difference for expect.stringMatching(regexp)

    omitDifference = expectedType === 'string';
  }

  if (expectedType !== (0, _jestGetType.default)(b)) {
    return (
      '  Comparing two different types of values.' +
      ` Expected ${_chalk.default.green(expectedType)} but ` +
      `received ${_chalk.default.red((0, _jestGetType.default)(b))}.`
    );
  }

  if (omitDifference) {
    return null;
  }

  switch (aType) {
    case 'string':
      return (0, _diffLines.default)(a, b, options);

    case 'boolean':
    case 'number':
      return comparePrimitive(a, b, options);

    case 'map':
      return compareObjects(sortMap(a), sortMap(b), options);

    case 'set':
      return compareObjects(sortSet(a), sortSet(b), options);

    default:
      return compareObjects(a, b, options);
  }
}

function comparePrimitive(a, b, options) {
  return (0, _diffLines.default)(
    (0, _prettyFormat.default)(a, FORMAT_OPTIONS),
    (0, _prettyFormat.default)(b, FORMAT_OPTIONS),
    options
  );
}

function sortMap(map) {
  return new Map(Array.from(map.entries()).sort());
}

function sortSet(set) {
  return new Set(Array.from(set.values()).sort());
}

function compareObjects(a, b, options) {
  let diffMessage;
  let hasThrown = false;

  try {
    diffMessage = (0, _diffLines.default)(
      (0, _prettyFormat.default)(a, FORMAT_OPTIONS_0),
      (0, _prettyFormat.default)(b, FORMAT_OPTIONS_0),
      options,
      {
        a: (0, _prettyFormat.default)(a, FORMAT_OPTIONS),
        b: (0, _prettyFormat.default)(b, FORMAT_OPTIONS)
      }
    );
  } catch (e) {
    hasThrown = true;
  } // If the comparison yields no results, compare again but this time
  // without calling `toJSON`. It's also possible that toJSON might throw.

  if (!diffMessage || diffMessage === constants$1.NO_DIFF_MESSAGE) {
    diffMessage = (0, _diffLines.default)(
      (0, _prettyFormat.default)(a, FALLBACK_FORMAT_OPTIONS_0),
      (0, _prettyFormat.default)(b, FALLBACK_FORMAT_OPTIONS_0),
      options,
      {
        a: (0, _prettyFormat.default)(a, FALLBACK_FORMAT_OPTIONS),
        b: (0, _prettyFormat.default)(b, FALLBACK_FORMAT_OPTIONS)
      }
    );

    if (diffMessage !== constants$1.NO_DIFF_MESSAGE && !hasThrown) {
      diffMessage = constants$1.SIMILAR_MESSAGE + '\n\n' + diffMessage;
    }
  }

  return diffMessage;
} // eslint-disable-next-line no-redeclare

diff.getStringDiff = printDiffs$1.getStringDiff;
module.exports = diff;
});

var toHaveStyle_1 = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toHaveStyle = toHaveStyle;



var _jestDiff = interopRequireDefault(build$4);

var _chalk = interopRequireDefault(chalk);



function getStyleDeclaration(document, css) {
  const styles = {}; // The next block is necessary to normalize colors

  const copy = document.createElement('div');
  Object.keys(css).forEach(property => {
    copy.style[property] = css[property];
    styles[property] = copy.style[property];
  });
  return styles;
}

function isSubset(styles, computedStyle) {
  return Object.entries(styles).every(([prop, value]) => computedStyle.getPropertyValue(prop.toLowerCase()) === value);
}

function printoutStyles(styles) {
  return Object.keys(styles).sort().map(prop => `${prop}: ${styles[prop]};`).join('\n');
} // Highlights only style rules that were expected but were not found in the
// received computed styles


function expectedDiff(expected, computedStyles) {
  const received = Array.from(computedStyles).filter(prop => expected[prop]).reduce((obj, prop) => Object.assign(obj, {
    [prop]: computedStyles.getPropertyValue(prop)
  }), {});
  const diffOutput = (0, _jestDiff.default)(printoutStyles(expected), printoutStyles(received)); // Remove the "+ Received" annotation because this is a one-way diff

  return diffOutput.replace(`${_chalk.default.red('+ Received')}\n`, '');
}

function toHaveStyle(htmlElement, css) {
  (0, utils.checkHtmlElement)(htmlElement, toHaveStyle, this);
  const parsedCSS = (0, utils.parseCSS)(css, toHaveStyle, this);
  const {
    getComputedStyle
  } = htmlElement.ownerDocument.defaultView;
  const expected = getStyleDeclaration(htmlElement.ownerDocument, parsedCSS);
  const received = getComputedStyle(htmlElement);
  return {
    pass: isSubset(expected, received),
    message: () => {
      const matcher = `${this.isNot ? '.not' : ''}.toHaveStyle`;
      return [(0, build$3.matcherHint)(matcher, 'element', ''), expectedDiff(expected, received)].join('\n\n');
    }
  };
}
});

var toHaveFocus_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toHaveFocus = toHaveFocus;





function toHaveFocus(element) {
  (0, utils.checkHtmlElement)(element, toHaveFocus, this);
  return {
    pass: element.ownerDocument.activeElement === element,
    message: () => {
      return [(0, build$3.matcherHint)(`${this.isNot ? '.not' : ''}.toHaveFocus`, 'element', ''), '', 'Expected', `  ${(0, build$3.printExpected)(element)}`, 'Received:', `  ${(0, build$3.printReceived)(element.ownerDocument.activeElement)}`].join('\n');
    }
  };
}
});

/**
 * This method is like `_.isEqual` except that it accepts `customizer` which
 * is invoked to compare values. If `customizer` returns `undefined`, comparisons
 * are handled by the method instead. The `customizer` is invoked with up to
 * six arguments: (objValue, othValue [, index|key, object, other, stack]).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * function isGreeting(value) {
 *   return /^h(?:i|ello)$/.test(value);
 * }
 *
 * function customizer(objValue, othValue) {
 *   if (isGreeting(objValue) && isGreeting(othValue)) {
 *     return true;
 *   }
 * }
 *
 * var array = ['hello', 'goodbye'];
 * var other = ['hi', 'goodbye'];
 *
 * _.isEqualWith(array, other, customizer);
 * // => true
 */
function isEqualWith(value, other, customizer) {
  customizer = typeof customizer == 'function' ? customizer : undefined;
  var result = customizer ? customizer(value, other) : undefined;
  return result === undefined ? _baseIsEqual(value, other, undefined, customizer) : !!result;
}

var isEqualWith_1 = isEqualWith;

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

var _baseFindIndex = baseFindIndex;

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

var _baseIsNaN = baseIsNaN;

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

var _strictIndexOf = strictIndexOf;

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? _strictIndexOf(array, value, fromIndex)
    : _baseFindIndex(array, _baseIsNaN, fromIndex);
}

var _baseIndexOf = baseIndexOf;

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && _baseIndexOf(array, value, 0) > -1;
}

var _arrayIncludes = arrayIncludes;

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

var _arrayIncludesWith = arrayIncludesWith;

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

var noop_1 = noop;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(_Set && (1 / _setToArray(new _Set([,-0]))[1]) == INFINITY) ? noop_1 : function(values) {
  return new _Set(values);
};

var _createSet = createSet;

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE$1 = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = _arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = _arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE$1) {
    var set = iteratee ? null : _createSet(array);
    if (set) {
      return _setToArray(set);
    }
    isCommon = false;
    includes = _cacheHas;
    seen = new _SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

var _baseUniq = baseUniq;

/**
 * Creates a duplicate-free version of an array, using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons, in which only the first occurrence of each element
 * is kept. The order of result values is determined by the order they occur
 * in the array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniq([2, 1, 2]);
 * // => [2, 1]
 */
function uniq(array) {
  return (array && array.length) ? _baseUniq(array) : [];
}

var uniq_1 = uniq;

var css_escape = createCommonjsModule(function (module, exports) {
(function(root, factory) {
	// https://github.com/umdjs/umd/blob/master/returnExports.js
	{
		// For Node.js.
		module.exports = factory(root);
	}
}(typeof commonjsGlobal != 'undefined' ? commonjsGlobal : commonjsGlobal, function(root) {

	if (root.CSS && root.CSS.escape) {
		return root.CSS.escape;
	}

	// https://drafts.csswg.org/cssom/#serialize-an-identifier
	var cssEscape = function(value) {
		if (arguments.length == 0) {
			throw new TypeError('`CSS.escape` requires an argument.');
		}
		var string = String(value);
		var length = string.length;
		var index = -1;
		var codeUnit;
		var result = '';
		var firstCodeUnit = string.charCodeAt(0);
		while (++index < length) {
			codeUnit = string.charCodeAt(index);
			// Note: there’s no need to special-case astral symbols, surrogate
			// pairs, or lone surrogates.

			// If the character is NULL (U+0000), then the REPLACEMENT CHARACTER
			// (U+FFFD).
			if (codeUnit == 0x0000) {
				result += '\uFFFD';
				continue;
			}

			if (
				// If the character is in the range [\1-\1F] (U+0001 to U+001F) or is
				// U+007F, […]
				(codeUnit >= 0x0001 && codeUnit <= 0x001F) || codeUnit == 0x007F ||
				// If the character is the first character and is in the range [0-9]
				// (U+0030 to U+0039), […]
				(index == 0 && codeUnit >= 0x0030 && codeUnit <= 0x0039) ||
				// If the character is the second character and is in the range [0-9]
				// (U+0030 to U+0039) and the first character is a `-` (U+002D), […]
				(
					index == 1 &&
					codeUnit >= 0x0030 && codeUnit <= 0x0039 &&
					firstCodeUnit == 0x002D
				)
			) {
				// https://drafts.csswg.org/cssom/#escape-a-character-as-code-point
				result += '\\' + codeUnit.toString(16) + ' ';
				continue;
			}

			if (
				// If the character is the first character and is a `-` (U+002D), and
				// there is no second character, […]
				index == 0 &&
				length == 1 &&
				codeUnit == 0x002D
			) {
				result += '\\' + string.charAt(index);
				continue;
			}

			// If the character is not handled by one of the above rules and is
			// greater than or equal to U+0080, is `-` (U+002D) or `_` (U+005F), or
			// is in one of the ranges [0-9] (U+0030 to U+0039), [A-Z] (U+0041 to
			// U+005A), or [a-z] (U+0061 to U+007A), […]
			if (
				codeUnit >= 0x0080 ||
				codeUnit == 0x002D ||
				codeUnit == 0x005F ||
				codeUnit >= 0x0030 && codeUnit <= 0x0039 ||
				codeUnit >= 0x0041 && codeUnit <= 0x005A ||
				codeUnit >= 0x0061 && codeUnit <= 0x007A
			) {
				// the character itself
				result += string.charAt(index);
				continue;
			}

			// Otherwise, the escaped character.
			// https://drafts.csswg.org/cssom/#escape-a-character
			result += '\\' + string.charAt(index);

		}
		return result;
	};

	if (!root.CSS) {
		root.CSS = {};
	}

	root.CSS.escape = cssEscape;
	return cssEscape;

}));
});

var toHaveFormValues_1 = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toHaveFormValues = toHaveFormValues;

var _extends2 = interopRequireDefault(_extends_1);



var _jestDiff = interopRequireDefault(build$4);

var _isEqualWith = interopRequireDefault(isEqualWith_1);

var _uniq = interopRequireDefault(uniq_1);

var _css = interopRequireDefault(css_escape);



// Returns the combined value of several elements that have the same name
// e.g. radio buttons or groups of checkboxes
function getMultiElementValue(elements) {
  const types = (0, _uniq.default)(elements.map(element => element.type));

  if (types.length !== 1) {
    throw new Error('Multiple form elements with the same name must be of the same type');
  }

  switch (types[0]) {
    case 'radio':
      {
        const theChosenOne = elements.find(radio => radio.checked);
        return theChosenOne ? theChosenOne.value : undefined;
      }

    case 'checkbox':
      return elements.filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);

    default:
      // NOTE: Not even sure this is a valid use case, but just in case...
      return elements.map(element => element.value);
  }
}

function getFormValue(container, name) {
  const elements = [...container.querySelectorAll(`[name="${(0, _css.default)(name)}"]`)];
  /* istanbul ignore if */

  if (elements.length === 0) {
    return undefined; // shouldn't happen, but just in case
  }

  switch (elements.length) {
    case 1:
      return (0, utils.getSingleElementValue)(elements[0]);

    default:
      return getMultiElementValue(elements);
  }
} // Strips the `[]` suffix off a form value name


function getPureName(name) {
  return /\[\]$/.test(name) ? name.slice(0, -2) : name;
}

function getAllFormValues(container) {
  const names = Array.from(container.elements).map(element => element.name);
  return names.reduce((obj, name) => (0, _extends2.default)({}, obj, {
    [getPureName(name)]: getFormValue(container, name)
  }), {});
}

function toHaveFormValues(formElement, expectedValues) {
  (0, utils.checkHtmlElement)(formElement, toHaveFormValues, this);

  if (!formElement.elements) {
    // TODO: Change condition to use instanceof against the appropriate element classes instead
    throw new Error('toHaveFormValues must be called on a form or a fieldset');
  }

  const formValues = getAllFormValues(formElement);
  return {
    pass: Object.entries(expectedValues).every(([name, expectedValue]) => (0, _isEqualWith.default)(formValues[name], expectedValue, utils.compareArraysAsSet)),
    message: () => {
      const to = this.isNot ? 'not to' : 'to';
      const matcher = `${this.isNot ? '.not' : ''}.toHaveFormValues`;
      const commonKeyValues = Object.keys(formValues).filter(key => expectedValues.hasOwnProperty(key)).reduce((obj, key) => (0, _extends2.default)({}, obj, {
        [key]: formValues[key]
      }), {});
      return [(0, build$3.matcherHint)(matcher, 'element', ''), `Expected the element ${to} have form values`, (0, _jestDiff.default)(expectedValues, commonKeyValues)].join('\n\n');
    }
  };
}
});

var toBeVisible_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toBeVisible = toBeVisible;





function isStyleVisible(element) {
  const {
    getComputedStyle
  } = element.ownerDocument.defaultView;
  const {
    display,
    visibility,
    opacity
  } = getComputedStyle(element);
  return display !== 'none' && visibility !== 'hidden' && visibility !== 'collapse' && opacity !== '0' && opacity !== 0;
}

function isElementVisible(element) {
  return isStyleVisible(element) && !element.hasAttribute('hidden') && (!element.parentElement || isElementVisible(element.parentElement));
}

function toBeVisible(element) {
  (0, utils.checkHtmlElement)(element, toBeVisible, this);
  const isVisible = isElementVisible(element);
  return {
    pass: isVisible,
    message: () => {
      const is = isVisible ? 'is' : 'is not';
      return [(0, build$3.matcherHint)(`${this.isNot ? '.not' : ''}.toBeVisible`, 'element', ''), '', `Received element ${is} visible:`, `  ${(0, build$3.printReceived)(element.cloneNode(false))}`].join('\n');
    }
  };
}
});

var toBeDisabled_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toBeDisabled = toBeDisabled;
exports.toBeEnabled = toBeEnabled;





// form elements that support 'disabled'
const FORM_TAGS = ['fieldset', 'input', 'select', 'optgroup', 'option', 'button', 'textarea'];
/*
 * According to specification:
 * If <fieldset> is disabled, the form controls that are its descendants,
 * except descendants of its first optional <legend> element, are disabled
 *
 * https://html.spec.whatwg.org/multipage/form-elements.html#concept-fieldset-disabled
 *
 * This method tests whether element is first legend child of fieldset parent
 */

function isFirstLegendChildOfFieldset(element, parent) {
  return (0, utils.getTag)(element) === 'legend' && (0, utils.getTag)(parent) === 'fieldset' && element.isSameNode(Array.from(parent.children).find(child => (0, utils.getTag)(child) === 'legend'));
}

function isElementDisabledByParent(element, parent) {
  return isElementDisabled(parent) && !isFirstLegendChildOfFieldset(element, parent);
}

function isElementDisabled(element) {
  return FORM_TAGS.includes((0, utils.getTag)(element)) && element.hasAttribute('disabled');
}

function isAncestorDisabled(element) {
  const parent = element.parentElement;
  return Boolean(parent) && (isElementDisabledByParent(element, parent) || isAncestorDisabled(parent));
}

function toBeDisabled(element) {
  (0, utils.checkHtmlElement)(element, toBeDisabled, this);
  const isDisabled = isElementDisabled(element) || isAncestorDisabled(element);
  return {
    pass: isDisabled,
    message: () => {
      const is = isDisabled ? 'is' : 'is not';
      return [(0, build$3.matcherHint)(`${this.isNot ? '.not' : ''}.toBeDisabled`, 'element', ''), '', `Received element ${is} disabled:`, `  ${(0, build$3.printReceived)(element.cloneNode(false))}`].join('\n');
    }
  };
}

function toBeEnabled(element) {
  (0, utils.checkHtmlElement)(element, toBeEnabled, this);
  const isEnabled = !(isElementDisabled(element) || isAncestorDisabled(element));
  return {
    pass: isEnabled,
    message: () => {
      const is = isEnabled ? 'is' : 'is not';
      return [(0, build$3.matcherHint)(`${this.isNot ? '.not' : ''}.toBeEnabled`, 'element', ''), '', `Received element ${is} enabled:`, `  ${(0, build$3.printReceived)(element.cloneNode(false))}`].join('\n');
    }
  };
}
});

var toBeRequired_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toBeRequired = toBeRequired;





// form elements that support 'required'
const FORM_TAGS = ['select', 'textarea'];
const ARIA_FORM_TAGS = ['input', 'select', 'textarea'];
const UNSUPPORTED_INPUT_TYPES = ['color', 'hidden', 'range', 'submit', 'image', 'reset'];
const SUPPORTED_ARIA_ROLES = ['combobox', 'gridcell', 'radiogroup', 'spinbutton', 'tree'];

function isRequiredOnFormTagsExceptInput(element) {
  return FORM_TAGS.includes((0, utils.getTag)(element)) && element.hasAttribute('required');
}

function isRequiredOnSupportedInput(element) {
  return (0, utils.getTag)(element) === 'input' && element.hasAttribute('required') && (element.hasAttribute('type') && !UNSUPPORTED_INPUT_TYPES.includes(element.getAttribute('type')) || !element.hasAttribute('type'));
}

function isElementRequiredByARIA(element) {
  return element.hasAttribute('aria-required') && element.getAttribute('aria-required') === 'true' && (ARIA_FORM_TAGS.includes((0, utils.getTag)(element)) || element.hasAttribute('role') && SUPPORTED_ARIA_ROLES.includes(element.getAttribute('role')));
}

function toBeRequired(element) {
  (0, utils.checkHtmlElement)(element, toBeRequired, this);
  const isRequired = isRequiredOnFormTagsExceptInput(element) || isRequiredOnSupportedInput(element) || isElementRequiredByARIA(element);
  return {
    pass: isRequired,
    message: () => {
      const is = isRequired ? 'is' : 'is not';
      return [(0, build$3.matcherHint)(`${this.isNot ? '.not' : ''}.toBeRequired`, 'element', ''), '', `Received element ${is} required:`, `  ${(0, build$3.printReceived)(element.cloneNode(false))}`].join('\n');
    }
  };
}
});

var toBeInvalid_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toBeInvalid = toBeInvalid;
exports.toBeValid = toBeValid;





const FORM_TAGS = ['form', 'input', 'select', 'textarea'];

function isElementHavingAriaInvalid(element) {
  return element.hasAttribute('aria-invalid') && element.getAttribute('aria-invalid') !== 'false';
}

function isElementInvalid(element) {
  return !element.checkValidity();
}

function toBeInvalid(element) {
  (0, utils.checkHtmlElement)(element, toBeInvalid, this);
  const isInvalid = isElementHavingAriaInvalid(element) || isElementInvalid(element);
  return {
    pass: isInvalid,
    message: () => {
      const is = isInvalid ? 'is' : 'is not';
      return [(0, build$3.matcherHint)(`${this.isNot ? '.not' : ''}.toBeInvalid`, 'element', ''), '', `Received element ${is} currently invalid:`, `  ${(0, build$3.printReceived)(element.cloneNode(false))}`].join('\n');
    }
  };
}

function toBeValid(element) {
  (0, utils.checkHtmlElement)(element, toBeValid, this);
  const isValid = !isElementHavingAriaInvalid(element) && FORM_TAGS.includes((0, utils.getTag)(element)) && !isElementInvalid(element);
  return {
    pass: isValid,
    message: () => {
      const is = isValid ? 'is' : 'is not';
      return [(0, build$3.matcherHint)(`${this.isNot ? '.not' : ''}.toBeValid`, 'element', ''), '', `Received element ${is} currently valid:`, `  ${(0, build$3.printReceived)(element.cloneNode(false))}`].join('\n');
    }
  };
}
});

var toHaveValue_1 = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toHaveValue = toHaveValue;



var _isEqualWith = interopRequireDefault(isEqualWith_1);



function toHaveValue(htmlElement, expectedValue) {
  (0, utils.checkHtmlElement)(htmlElement, toHaveValue, this);

  if (htmlElement.tagName.toLowerCase() === 'input' && ['checkbox', 'radio'].includes(htmlElement.type)) {
    throw new Error('input with type=checkbox or type=radio cannot be used with .toHaveValue(). Use .toBeChecked() for type=checkbox or .toHaveFormValues() instead');
  }

  const receivedValue = (0, utils.getSingleElementValue)(htmlElement);
  const expectsValue = expectedValue !== undefined;
  return {
    pass: expectsValue ? (0, _isEqualWith.default)(receivedValue, expectedValue, utils.compareArraysAsSet) : Boolean(receivedValue),
    message: () => {
      const to = this.isNot ? 'not to' : 'to';
      const matcher = (0, build$3.matcherHint)(`${this.isNot ? '.not' : ''}.toHaveValue`, 'element', expectedValue);
      return (0, utils.getMessage)(matcher, `Expected the element ${to} have value`, expectsValue ? expectedValue : '(any)', 'Received', receivedValue);
    }
  };
}
});

var toBeChecked_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toBeChecked = toBeChecked;





function toBeChecked(element) {
  (0, utils.checkHtmlElement)(element, toBeChecked, this);

  const isValidInput = () => {
    return element.tagName.toLowerCase() === 'input' && ['checkbox', 'radio'].includes(element.type);
  };

  if (!isValidInput() && !(() => {
    return ['checkbox', 'radio'].includes(element.getAttribute('role')) && ['true', 'false'].includes(element.getAttribute('aria-checked'));
  })()) {
    return {
      pass: false,
      message: () => 'only inputs with type="checkbox" or type="radio" or elements with role="checkbox" or role="radio" and a valid aria-checked attribute can be used with .toBeChecked(). Use .toHaveValue() instead'
    };
  }

  const isChecked = () => {
    if (isValidInput()) return element.checked;
    return element.getAttribute('aria-checked') === 'true';
  };

  return {
    pass: isChecked(),
    message: () => {
      const is = isChecked() ? 'is' : 'is not';
      return [(0, build$3.matcherHint)(`${this.isNot ? '.not' : ''}.toBeChecked`, 'element', ''), '', `Received element ${is} checked:`, `  ${(0, build$3.printReceived)(element.cloneNode(false))}`].join('\n');
    }
  };
}
});

var dist = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "toBeInTheDOM", {
  enumerable: true,
  get: function () {
    return toBeInTheDom.toBeInTheDOM;
  }
});
Object.defineProperty(exports, "toBeInTheDocument", {
  enumerable: true,
  get: function () {
    return toBeInTheDocument_1.toBeInTheDocument;
  }
});
Object.defineProperty(exports, "toBeEmpty", {
  enumerable: true,
  get: function () {
    return toBeEmpty_1.toBeEmpty;
  }
});
Object.defineProperty(exports, "toContainElement", {
  enumerable: true,
  get: function () {
    return toContainElement_1.toContainElement;
  }
});
Object.defineProperty(exports, "toContainHTML", {
  enumerable: true,
  get: function () {
    return toContainHtml.toContainHTML;
  }
});
Object.defineProperty(exports, "toHaveTextContent", {
  enumerable: true,
  get: function () {
    return toHaveTextContent_1.toHaveTextContent;
  }
});
Object.defineProperty(exports, "toHaveAttribute", {
  enumerable: true,
  get: function () {
    return toHaveAttribute_1.toHaveAttribute;
  }
});
Object.defineProperty(exports, "toHaveClass", {
  enumerable: true,
  get: function () {
    return toHaveClass_1.toHaveClass;
  }
});
Object.defineProperty(exports, "toHaveStyle", {
  enumerable: true,
  get: function () {
    return toHaveStyle_1.toHaveStyle;
  }
});
Object.defineProperty(exports, "toHaveFocus", {
  enumerable: true,
  get: function () {
    return toHaveFocus_1.toHaveFocus;
  }
});
Object.defineProperty(exports, "toHaveFormValues", {
  enumerable: true,
  get: function () {
    return toHaveFormValues_1.toHaveFormValues;
  }
});
Object.defineProperty(exports, "toBeVisible", {
  enumerable: true,
  get: function () {
    return toBeVisible_1.toBeVisible;
  }
});
Object.defineProperty(exports, "toBeDisabled", {
  enumerable: true,
  get: function () {
    return toBeDisabled_1.toBeDisabled;
  }
});
Object.defineProperty(exports, "toBeEnabled", {
  enumerable: true,
  get: function () {
    return toBeDisabled_1.toBeEnabled;
  }
});
Object.defineProperty(exports, "toBeRequired", {
  enumerable: true,
  get: function () {
    return toBeRequired_1.toBeRequired;
  }
});
Object.defineProperty(exports, "toBeInvalid", {
  enumerable: true,
  get: function () {
    return toBeInvalid_1.toBeInvalid;
  }
});
Object.defineProperty(exports, "toBeValid", {
  enumerable: true,
  get: function () {
    return toBeInvalid_1.toBeValid;
  }
});
Object.defineProperty(exports, "toHaveValue", {
  enumerable: true,
  get: function () {
    return toHaveValue_1.toHaveValue;
  }
});
Object.defineProperty(exports, "toBeChecked", {
  enumerable: true,
  get: function () {
    return toBeChecked_1.toBeChecked;
  }
});
});

var extensions = interopRequireWildcard(dist);

expect.extend(extensions);

// eslint-disable-next-line

var extendExpect = {

};

export default extendExpect;
