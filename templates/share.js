function shareOnSocialMedia() {
    var urlToShare = window.location.href;
    
    // LinkedIn
    window.open('https://www.linkedin.com/shareArticle?url=' + encodeURIComponent(urlToShare), '_blank');
    
    // WhatsApp
    window.open('https://api.whatsapp.com/send?text=' + encodeURIComponent(urlToShare), '_blank');
    
    // Twitter
    window.open('https://twitter.com/intent/tweet?url=' + encodeURIComponent(urlToShare), '_blank');
    
    // Add more social media sharing options as needed
    
    // Prevent default action of the <a> tag (if it's inside an <a> tag)
    return false;
}

