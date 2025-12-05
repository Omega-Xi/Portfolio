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