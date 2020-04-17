const container = document.querySelector('body');
const itemsWrapper = document.querySelector('.home_projects_list');

// Preload images
const preloadImages = () => {
    return new Promise((resolve, reject) => {
        imagesLoaded(document.querySelectorAll('img'), resolve);
    });
};
// And then..
preloadImages().then(() => {
    // Remove the loader
    document.body.classList.remove('loading');
    const effect = new StretchEffect(container, itemsWrapper)
});