function changeLanguage(lang) {
    document.getElementById('footer-text-en').style.display = 'none';
    document.getElementById('footer-text-ru').style.display = 'none';
    document.getElementById('footer-text-kz').style.display = 'none';

    document.getElementById(`footer-text-${lang}`).style.display = 'block';
}
