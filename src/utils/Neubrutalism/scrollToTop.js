export const scrollToTop = () => {
    if (window.scrollY || document.documentElement.scrollTop || document.body.scrollTop) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
};
