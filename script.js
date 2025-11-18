// 简单滚动动画示例
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");
    window.addEventListener("scroll", () => {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                section.style.opacity = 1;
                section.style.transform = "translateY(0)";
            }
        });
    });
});
