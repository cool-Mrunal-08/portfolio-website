const themeToggle = document.querySelector('.theme-toggle');
const savedTheme = localStorage.getItem('portfolio-theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

function setTheme(isDark) {
	document.body.classList.toggle('dark-mode', isDark);

	if (themeToggle) {
		themeToggle.setAttribute('aria-pressed', String(isDark));
		themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
		themeToggle.innerHTML = isDark ? '☀ <span>Light mode</span>' : '☾ <span>Dark mode</span>';
	}
}

setTheme(savedTheme ? savedTheme === 'dark' : prefersDark);

themeToggle?.addEventListener('click', () => {
	const isDark = !document.body.classList.contains('dark-mode');
	localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
	setTheme(isDark);
});
