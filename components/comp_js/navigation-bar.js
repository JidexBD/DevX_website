fetch("/components/comp_html/navigation-bar.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("mynav-bar").innerHTML = data;
  })
  .catch((err) => console.error("Failed to load navbar:", err));
