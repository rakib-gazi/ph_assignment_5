const navbarBlog = document.getElementById('blog-header');

window.addEventListener('scroll', function() {
    if (window.scrollY >= 2) {
        navbarBlog.classList.add('backdrop-blur-3xl', 'sticky', 'top-0', 'z-50','bg-opacity-60');
    } else {
        navbarBlog.classList.remove('backdrop-blur', 'sticky', 'top-0', 'z-50','bg-opacity-60');
        navbarBlog.classList.add('bg-nav');
    }
});


