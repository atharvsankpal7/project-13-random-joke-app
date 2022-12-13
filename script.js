let type_arr = document.getElementsByClassName("category_type");
let flag_arr = document.querySelectorAll(".flags_type");
let button_ = Array.from(document.getElementsByTagName("button"))[0];
let category_checkbox = document.getElementsByClassName("category_checkbox");
let text_area = document.getElementsByTagName("textarea")[0];
let counter = 1;
let api_link = "https://v2.jokeapi.dev/joke/Any/split?type=single";
Array.from(flag_arr).forEach((e) => {
    e.addEventListener("click", () => {
        if (e.firstElementChild.checked == true) {
            e.firstElementChild.checked = false;
        } else {
            e.firstElementChild.checked = true;
            api_link.split("split")[0];
            api_link += e.lastElementChild.innerHTML;
            console.log(e.lastElementChild.innerHTML);
        }
    });
});
Array.from(type_arr).forEach((e) => {
    e.addEventListener("click", () => {
        if (e.firstElementChild.checked == true) {
            e.firstElementChild.checked = false;
        } else {
            e.firstElementChild.checked = true;
            console.log(e.lastElementChild.innerHTML);
        }
    });
});
button_.onclick = async () => {
    Array.from(type_arr).forEach((e) => {
        if (e.firstElementChild.checked == true) {
            // console.log(api_link.split("split")[1]);
            api_link += `${e.lastElementChild.innerHTML}`;
            counter = 2;
        }
    });
    if (counter == 2) {
    } else {
        api_link = "https://v2.jokeapi.dev/joke/Any?type=single";
    }
    console.log(api_link);
    let api_data = fetch(api_link)
        .then((response) => response.json())
        .then((data) => (text_area.innerHTML = data.joke));
    await api_data;
};
