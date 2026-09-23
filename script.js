// old mouse hover color change for the nav bar
// document.addEventListener('DOMContentLoaded', (event) => {
//     const colorBox = document.querySelectorAll('.color-box');

//     colorBox.forEach((colorBox) => {
//         colorBox.addEventListener('mouseover', () => {
//             colorBox.style.backgroundColor = 'lightcoral';
//         });
    
//         colorBox.addEventListener('mouseout', () => {
//             colorBox.style.backgroundColor = 'lightblue';
//         }); 
//     });
// });

document.addEventListener('DOMContentLoaded', () => {
    // Fade in the page when DOM is ready
    document.body.classList.add('page-loaded');

    // Attach click listeners to internal page links
    const links = document.querySelectorAll('a[href$=".html"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const destination = link.getAttribute('href');

            // Don't intercept if opening in a new tab
            if (link.target === '_blank') return;

            e.preventDefault();
            document.body.classList.remove('page-loaded');
            document.body.classList.add('page-fading-out');

            // Navigate after fade-out completes (400ms matching CSS timing)
            setTimeout(() => {
                window.location.href = destination;
            }, 400);
        });
    });
});