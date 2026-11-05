/* Deep Roots site helpers */
(function () {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Mailto form builder: packs fields into a prefilled email body
  function buildMailto(form) {
    const to = form.getAttribute("data-mailto") || "rbsledmuseum@gmail.com";
    const subject = form.getAttribute("data-subject") || "Deep Roots inquiry";
    const lines = [];
    const fd = new FormData(form);
    // Checkboxes with same name
    const handled = new Set();
    for (const el of form.elements) {
      if (!el.name || el.disabled) continue;
      if (handled.has(el.name)) continue;
      handled.add(el.name);
      if (el.type === "checkbox") {
        const checked = [...form.querySelectorAll('input[name="' + el.name + '"]:checked')].map(c => c.value);
        if (checked.length) lines.push(el.name + ": " + checked.join(", "));
      } else if (el.type === "radio") {
        const checked = form.querySelector('input[name="' + el.name + '"]:checked');
        if (checked) lines.push(el.name + ": " + checked.value);
      } else if (el.value) {
        lines.push(el.name + ": " + el.value);
      }
    }
    const body = lines.join("\n");
    const href =
      "mailto:" + encodeURIComponent(to) +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);
    return href;
  }

  document.querySelectorAll("form[data-mailto]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;
      const href = buildMailto(form);
      // Prefer opening mail client; also show copyable fallback
      window.location.href = href;
      const note = form.querySelector(".form-sent-note");
      if (note) {
        note.hidden = false;
        note.textContent =
          "If your email app did not open, copy this message and send it to rbsledmuseum@gmail.com — or wire the form to Formspree (see README).";
      }
    });
  });
})();
