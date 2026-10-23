
/* Quantumult X GEO 自定义显示 - V3 */

var data = {};

try {
  if (typeof $response !== "undefined" && $response.body) {
    data = JSON.parse($response.body);
  }
} catch (e) {
  data = {};
}

var ip = data.query || data.ip || "";
var org = data.org || data.isp || "未知";
var city = data.city || data.regionName || data.region || "未知";

var description =
  "出口 IP: " + (ip || "未知") +
  "\n实际运营商: " + org +
  "\n实际地区: " + city;

$done({
  title: "搬瓦工 · CN2 GIA",
  subtitle: "IT7 Networks Inc.",
  ip: ip,
  description: description
});
