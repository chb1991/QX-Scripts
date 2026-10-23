
/*
 * Quantumult X GEO 自定义显示 V2
 * 搬瓦工 CN2 GIA 单节点专用
 * 无国旗、无城市、固定双行标题
 */

var info = {};

try {
  info = JSON.parse(($response && $response.body) || "{}");
} catch (e) {
  info = {};
}

var location = [
  info.country,
  info.regionName,
  info.city
].filter(Boolean).join(" / ") || "未知";

var description = [
  "服务商: " + (info.org || info.isp || "IT7 Networks Inc."),
  "地区: " + location,
  "IP: " + (info.query || "未知"),
  "时区: " + (info.timezone || "未知")
].join("\n");

$done({
  title: "搬瓦工 · CN2 GIA",
  subtitle: "IT7 Networks Inc.",
  ip: info.query || "",
  description: description
});
