window.addEventListener("scroll", () => {
    const profilePic = document.getElementById("profile-pic");

    // Safety check (prevents JS errors)
    if (!profilePic) return;

    // Trigger shrink after scrolling down
    if (window.scrollY > 160) {
        profilePic.classList.add("shrink");
    } else {
        profilePic.classList.remove("shrink");
    }
});
