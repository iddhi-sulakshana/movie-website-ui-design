const cover =  document.getElementById('hero');
window.onload = () => {
    cover.style.height = (cover.scrollHeight - nav.scrollHeight) + 'px';
}