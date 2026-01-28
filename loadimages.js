function loadImages(folder, imageList) {
    const content = document.getElementById("content")
    imagelist.forEach(images => {
        const c = document.createElement("div")
        images.forEach(image => {
            let i = document.createElement('img')
            i.src = `${folder}/${image}.jpg`
            if (images.length > 1) {
                i.classList.add('r43')
            }
            c.appendChild(i)
        })
        content.appendChild(c)
    });
}
