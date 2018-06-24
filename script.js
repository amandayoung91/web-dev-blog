// в div toggles отслеживаем нажатие на клавишу
// у нажатой клавиши забираем data-id
// в div posts  отображаем div с классом из data-id

const posts = document.getElementById("posts");
const toggles = document.getElementById("toggles"); // Element
const allPosts = posts.getElementsByClassName("post"); //HtmlCollection

toggles.addEventListener('click', function (e) {
    const target = e.target || e.srcElement;
    const condition = target.dataset.id;
    if (typeof(condition) === "undefined")
        return;

    if (condition === "showall") {
        for (let post of allPosts) {
            post.style.display = "grid";
        }
    } else {
        for (let post of allPosts) {
            if (post.className.includes(condition)) {
                post.style.display = "grid";
            } else {
                post.style.display = "none";
            }
        }
    }
});