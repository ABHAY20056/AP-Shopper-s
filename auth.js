// =============================================
//  AP-Shopper's — auth.js
// =============================================

/* ── Toast Utility ── */
function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const id = 'toast_' + Date.now();
  const icon = type === 'success'
    ? '<i class="bi bi-check-circle-fill text-success me-2"></i>'
    : '<i class="bi bi-exclamation-circle-fill text-danger me-2"></i>';

  const html = `
    <div id="${id}" class="toast ap-toast ${type} align-items-center border-0 mb-2" role="alert" aria-live="assertive" aria-atomic="true" data-bs-delay="3500">
      <div class="d-flex">
        <div class="toast-body d-flex align-items-center">
          ${icon} ${message}
        </div>
        <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
    </div>`;
  container.insertAdjacentHTML('beforeend', html);
  const toastEl = document.getElementById(id);
  const toast = new bootstrap.Toast(toastEl);
  toast.show();
  toastEl.addEventListener('hidden.bs.toast', () => toastEl.remove());
}

/* ── Registration ── */
function handleRegistration(event) {
  if (event) event.preventDefault();

  const name     = document.getElementById('reg-name')?.value.trim();
  const email    = document.getElementById('reg-email')?.value.trim();
  const password = document.getElementById('reg-password')?.value;

  if (!name || !email || !password) {
    showToast('Please fill in all fields.', 'error'); return;
  }
  if (password.length < 6) {
    showToast('Password must be at least 6 characters.', 'error'); return;
  }

  const users = JSON.parse(localStorage.getItem('users')) || [];
  if (users.find(u => u.email === email)) {
    showToast('Email already registered. Please login.', 'error'); return;
  }

  users.push({ name, email, password });
  localStorage.setItem('users', JSON.stringify(users));
  showToast(`Welcome, ${name}! Redirecting…`);
  setTimeout(() => window.location.href = 'Login.html', 1800);
}

/* ── Login ── */
function handleLogin(event) {
  if (event) event.preventDefault();

  const email    = document.getElementById('login-email')?.value.trim();
  const password = document.getElementById('login-password')?.value;

  if (!email || !password) {
    showToast('Please enter email and password.', 'error'); return;
  }

  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user  = users.find(u => u.email === email && u.password === password);

  if (!user) {
    showToast('Invalid credentials. Please try again.', 'error'); return;
  }

  localStorage.setItem('loggedInUser', JSON.stringify(user));
  showToast(`Welcome back, ${user.name}!`);
  setTimeout(() => window.location.href = 'index.html', 1500);
}

/* ── Auth Buttons UI ── */
function updateAuthUI() {
  const authButtons = document.getElementById('auth-Buttons');
  if (!authButtons) return;

  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

  if (loggedInUser) {
    authButtons.innerHTML = `
      <div class="d-flex align-items-center gap-3">
        <div class="dropdown">
          <button class="btn btn-ap-outline dropdown-toggle d-flex align-items-center gap-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="bi bi-person-circle fs-5"></i>
            <span class="d-none d-md-inline">${loggedInUser.name}</span>
          </button>
          <ul class="dropdown-menu dropdown-menu-end shadow border-0" style="border-radius:12px;">
            <li><span class="dropdown-item-text text-muted small px-3">${loggedInUser.email}</span></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#" onclick="handleLogout()"><i class="bi bi-box-arrow-right me-2"></i>Logout</a></li>
          </ul>
        </div>
      </div>`;
  } else {
    authButtons.innerHTML = `
      <a href="Login.html"    class="btn btn-ap-outline">Login</a>
      <a href="Register.html" class="btn btn-ap-primary">Register</a>`;
  }
}

/* ── Logout ── */
function handleLogout() {
  localStorage.removeItem('loggedInUser');
  showToast('Logged out successfully.');
  setTimeout(() => window.location.href = 'index.html', 1200);
}

/* ── Cart Badge sync ── */
function syncCartBadge() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const total = cart.reduce((acc, item) => acc + item.quantity, 0);
  document.querySelectorAll('#cartBadge').forEach(el => { el.textContent = total; });
}

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
  updateAuthUI();
  syncCartBadge();

  // Navbar scroll effect
  const navbar = document.querySelector('.ap-navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    });
  }

  // Back to top
  const btn = document.getElementById('backToTop');
  if (btn) {
    window.addEventListener('scroll', () => btn.classList.toggle('visible', window.scrollY > 300));
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }
});