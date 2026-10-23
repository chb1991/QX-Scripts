
/*
 * Quantumult X GEO 信息自定义
 * 搬瓦工 CN2 GIA 专用
 * 不显示国旗
 */

(function () {
  if (!$response || Number($response.statusCode) !== 200) {
    $done(null);
    return;
  }

  try {
    const obj = JSON.parse($response.body);

    if (obj.status === "fail") {
      $done(null);
      return;
    }

    const provider = [
      obj.org,
      obj.isp,
      obj.as
    ].filter(Boolean).join(" ");

    const isBWG = /IT7\s*Networks/i.test(provider);

    const title = isBWG
      ? "搬瓦工 · CN2 GIA"
      : (obj.city || obj.regionName || "未知地区");

    const subtitle = isBWG
      ? "IT7 Networks Inc."
      : (obj.org || obj.isp || "未知运营商");

    const ip = obj.query || "";

    const description = [
      "服务商: " + (obj.isp || obj.org || "未知"),
      "地区: " + (obj.regionName || "未知"),
      "IP: " + ip,
      "时区: " + (obj.timezone || "未知")
    ].join("\n");

    $done({
      title,
      subtitle,
      ip,
      description
    });

  } catch (e) {
    $done(null);
  }
})();
