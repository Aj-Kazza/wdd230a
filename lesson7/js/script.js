let imagesToLoad = document.querySelectorAll("img[data-src]");

const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
        image.removeAttribute("data-src");
    };
};

//from video
const imgOptions = {
    threshold: 0,
    rootMargin: '0px 0px 0px 0px'
};

/*if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {});
    }, imgOptions);

    imagesToLoad.forEach((img) => {
        imgObserver.observe(img);
    });
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}

imagesToLoad.forEach((img) => {
    loadImages(img);
});*/

let imgcheck = 0

//from mdn
if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    });
    imagesToLoad.forEach((img) => {
        observer.observe(img);
        imgcheck = imgcheck + 1
        console.log(`Loaded images = ${imgcheck}`)

    });
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}