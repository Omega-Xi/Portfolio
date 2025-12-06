document.querySelectorAll('.scroll-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    emailjs.sendForm("service_71g2zk3", "template_ubt22ld", this)
        .then(function() {
            alert("Message sent successfully!");
            location.reload(); 
        }, function(error) {
            alert("Failed to send message: " + JSON.stringify(error));
        });
});
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    body.setAttribute('data-theme', savedTheme);
    
    // Update icon based on saved theme
    updateThemeIcon(savedTheme);
    
    // Toggle theme on heading click
    themeToggle.addEventListener('click', function() {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        // Apply new theme
        body.setAttribute('data-theme', newTheme);
        
        // Save preference to localStorage
        localStorage.setItem('theme', newTheme);
        
        // Update icon
        updateThemeIcon(newTheme);
        
        // Add a subtle animation effect
        themeToggle.style.transform = 'scale(0.95)';
        setTimeout(() => {
            themeToggle.style.transform = 'scale(1)';
        }, 150);
    });
});
// Function to update theme icon
function updateThemeIcon(theme) {
    const darkIcon = document.getElementById('dark-icon');
    const lightIcon = document.getElementById('light-icon');
    
    if (theme === 'dark') {
        darkIcon.style.opacity = '1';
        darkIcon.style.transform = 'rotate(0)';
        lightIcon.style.opacity = '0';
        lightIcon.style.transform = 'rotate(-90deg)';
    } else {
        darkIcon.style.opacity = '0';
        darkIcon.style.transform = 'rotate(90deg)';
        lightIcon.style.opacity = '1';
        lightIcon.style.transform = 'rotate(0)';
    }
}
