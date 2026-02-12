(() => {
  "use strict";

  const config = {
    linkedInUrl: "https://www.linkedin.com/in/odai-alqutami-873769221/",
    githubUrl: "https://github.com/OdaiAlqutami98",
    email: "odaialqutami98@gmail.com",
    phone: "+962799555726"
  };

  const $ = (id) => document.getElementById(id);

  function setText(id, value) {
    const el = $(id);
    if (el) el.textContent = value;
  }

  function setLink(id, url) {
    const el = $(id);
    if (!el) return;

    el.href = url;

    const isPlaceholder = url.includes("YOUR-USERNAME");
    el.style.opacity = isPlaceholder ? "0.7" : "1";
    el.title = isPlaceholder ? "Update URL in assets/js/app.js" : "";
  }

  function showToast(message) {
    const toast = $("toast");
    if (!toast) return;

    toast.textContent = message;
    toast.style.display = "block";

    clearTimeout(showToast._timer);
    showToast._timer = setTimeout(() => {
      toast.style.display = "none";
    }, 2200);
  }

  async function copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
      showToast("Copied ✅");
    } catch {
      // Fallback for older browsers
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.top = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
      showToast("Copied ✅");
    }
  }

  function init() {
    setText("year", String(new Date().getFullYear()));
    setText("emailText", config.email);
    setText("phoneText", config.phone);

    setLink("btnLinkedIn", config.linkedInUrl);
    setLink("linkLinkedIn", config.linkedInUrl);
    setLink("btnGitHub", config.githubUrl);
    setLink("linkGitHub", config.githubUrl);
const profileImage = $("profileImage");
const modal = $("imageModal");
const modalImg = $("modalImage");
const closeModal = $("closeModal");

if (profileImage) {
  profileImage.addEventListener("dblclick", () => {
    modal.style.display = "flex";
    modalImg.src = profileImage.src;
  });
}

if (closeModal) {
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });
}

if (modal) {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
}
    const btnMail = $("btnMail");
    if (btnMail) btnMail.href = `mailto:${config.email}`;

    const btnCopyEmail = $("btnCopyEmail");
    if (btnCopyEmail) btnCopyEmail.addEventListener("click", () => copyToClipboard(config.email));

    const btnCopyPhone = $("btnCopyPhone");
    if (btnCopyPhone) btnCopyPhone.addEventListener("click", () => copyToClipboard(config.phone));
  }

  document.addEventListener("DOMContentLoaded", init);
})();
