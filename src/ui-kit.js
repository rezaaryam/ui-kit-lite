/* ui-kit-lite: fungsi bantu murni. Bisa dipakai di browser (window.UIKit)
   maupun di Node.js (require). */
(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.UIKit = factory();
  }
})(typeof self !== "undefined" ? self : this, function () {
  var ALERT_TYPES = ["info", "success", "warning", "danger"];
  var BADGE_VARIANTS = ["neutral", "accent", "success", "warning", "danger"];

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function renderAlert(options) {
    var opts = options || {};
    var type = ALERT_TYPES.indexOf(opts.type) >= 0 ? opts.type : "info";
    var title = opts.title
      ? '<strong class="uk-alert__title">' + escapeHtml(opts.title) + "</strong>"
      : "";
    return (
      '<div class="uk-alert uk-alert--' + type + '" role="status">' +
      title +
      '<span class="uk-alert__body">' + escapeHtml(opts.message || "") + "</span>" +
      "</div>"
    );
  }

  function renderBadge(text, variant) {
    var v = BADGE_VARIANTS.indexOf(variant) >= 0 ? variant : "neutral";
    return '<span class="uk-badge uk-badge--' + v + '">' + escapeHtml(text) + "</span>";
  }

  return {
    escapeHtml: escapeHtml,
    renderAlert: renderAlert,
    renderBadge: renderBadge,
    ALERT_TYPES: ALERT_TYPES,
    BADGE_VARIANTS: BADGE_VARIANTS
  };
});
