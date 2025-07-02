 
        document.addEventListener('DOMContentLoaded', function() {
            // Mobile menu toggle
              const mobileMenuBtn = document.getElementById('mobileMenuBtn');
            const navLinks = document.getElementById('navLinks');
            
            mobileMenuBtn.addEventListener('click', function() {
                navLinks.classList.toggle('active');
                const icon = mobileMenuBtn.querySelector('i');
                if (navLinks.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });

            // Theme toggle
            const themeToggle = document.getElementById('themeToggle');
            const html = document.documentElement;
            
            // Check for saved theme preference or use preferred color scheme
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) {
                html.classList.add(savedTheme);
            } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                html.classList.add('dark');
            }
            
            themeToggle.addEventListener('click', function() {
                html.classList.toggle('dark');
                const theme = html.classList.contains('dark') ? 'dark' : 'light';
                localStorage.setItem('theme', theme);
            });
          });