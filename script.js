function spoiler(contentItem, titleItem, iconItem) {
    const text = document.getElementById(contentItem);
    const title = document.getElementById(titleItem);
    const icon = document.getElementById(iconItem);
    if (text.className != "noneContent") {
        text.classList.remove("block")
        title.classList.remove("aсtive")
        icon.classList.remove("close")
    } else {
        text.classList.add("block")
        title.classList.add("aсtive")
        icon.classList.add("close")
    }
}

const contentText = "Cras vel nibh ac nisi dignissim molestie et sit amet dui. Quisque pulvinar vulputate mollis. Curabitur tempor risus turpis, ut condimentum arcu volutpat vitae. Curabitur in dolor eu justo viverra suscipit."

const data = [
    {id: '1', title: "1. Nullam tincidunt vestibulum porttitor", contentText,},
    {id: '2', title: "2. Class aptent taciti sociosqu ad litora", contentText,},
    {
        id: '3',
        title: "3. Nulla fringilla ligula elit, non laoreet ipsum rutrum eget",
        contentText,
    },
    {id: '4', title: "4. Mauris ut suscipit tellus", contentText,},
    {
        id: '5',
        title: "5. Nullam placerat porta libero, vel maximus augue euismod eget",
        contentText,
    },
]

const container = document.getElementById("container");

data.map(({id, title, contentText}) => {
    let itemContainer = document.createElement('div');
    itemContainer.className = "itemContainer";
    let titleContainer = document.createElement('div');
    titleContainer.className = "titleContainer";
    let h3Elem = document.createElement('h3');
    h3Elem.className = "titleItem";
    h3Elem.id = "titleItem" + id;
    h3Elem.innerHTML = title;
    let iconElem = document.createElement('div');
    iconElem.className = "open";
    iconElem.id = "iconItem" + id;
    iconElem.addEventListener('click', () => spoiler('contentItem' + id, 'titleItem' + id, 'iconItem' + id))
    let content = document.createElement('div');
    content.className = "noneContent";
    content.id = "contentItem" + id;
    let pElem = document.createElement('p');
    pElem.innerHTML = contentText;

    container.append(itemContainer);
    itemContainer.append(titleContainer);
    itemContainer.append(content);
    titleContainer.append(h3Elem);
    titleContainer.append(iconElem);
    content.append(pElem);
})
