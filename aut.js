netlifyIdentity.init();

const loginBtn = document.getElementById("login-btn");
const logoutBtn = document.getElementById("logout-btn");
const userEmailSpan = document.getElementById("user-email");

netlifyIdentity.on("login", (user) => {
  netlifyIdentity.close();
  window.location.href = "/dashboard.html";
});

netlifyIdentity.on("logout", () => {
  window.location.href = "/";
});

if (loginBtn) {
  loginBtn.addEventListener("click", () => {
    netlifyIdentity.open();
  });
}

if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    netlifyIdentity.logout();
  });
}

// Dashboard sayfasındaysak kullanıcı giriş durumunu kontrol et
if (window.location.pathname === "/dashboard.html") {
  const user = netlifyIdentity.currentUser();
  if (!user) {
    // Giriş yapılmamışsa anasayfaya yönlendir
    window.location.href = "/";
  } else {
    userEmailSpan.textContent = user.email;
  }
}
