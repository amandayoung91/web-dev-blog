// в div toggles отслеживаем нажатие на клавишу
// у нажатой клавиши забираем data-id
// в div posts  отображаем div с классом из data-id


const toggles = document.getElementById("toggles"); // Element



toggles.addEventListener('click', function (e) {
    const posts = document.getElementById("posts");
    const allPosts = posts.getElementsByClassName("post"); //HtmlCollection
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

const main_menu_id = document.getElementById("main_menu_id");
const menu_show = document.getElementById("menu_show");
// const all_items = main_menu_id.getElementsByClassName("menu-item");


// menu_show.addEventListener('click', function () {
//     if (window.innerWidth <= 768) {
//         if (main_menu_id.style.display === "none" || main_menu_id.style.display === "") {
//
//             //     main_menu_id.style.display="flex";
//             // } else {
//             main_menu_id.style.display = "block";
//         } else {
//             main_menu_id.style.display = "none";
//         }
//     }
//
// });
// menu_show.onclick = function() {
//     if (main_menu_id.style.display === "none") {
//         main_menu_id.style.display = "block";
//     } else {
//         console.log(123);
//         main_menu_id.style.display = "none";
//     }
//
// };
