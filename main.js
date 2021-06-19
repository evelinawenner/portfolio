class Page {
    constructor(image, name, description, id) {
        this.image = image;
        this.name = name;
        this.description = description;
        this.id = id;
    }
}

let p1 = new Page('img/webshopgran.png', "Webshop", "using javascript", "p1");
let p2 = new Page('img/jstodolist.png', "Todo list", "using javascript", "p2");
let p3 = new Page('img/nodejstodo.png', "Todo list", "using nodeJS", "p3");

let pages = [p1, p2, p3];

$(function(){

    printPages();
})

function printPages() {
    $.each(pages, (i, page) =>{
        let contentContainer = $("#contentContainer");

        let listitem = $("<li>").attr("id", page.id);
        listitem.appendTo(contentContainer);
        console.log(listitem);

        if(listitem.is("#p1")) {
        $("<img>").addClass("image").attr('src', page.image).appendTo(listitem)
        .on("click", () => {
            window.location.href = "https://evelinawenner.github.io/Webshop";
        }).appendTo(listitem);  
    }
    
    if(listitem.is("#p2")) {
        $("<img>").addClass("image").attr('src', page.image).appendTo(listitem)
        .on("click", () => {
            window.location.href = "https://evelinawenner.github.io/Todo-list/";
        }).appendTo(listitem);
    }

    if(listitem.is("#p3")) {
        $("<img>").addClass("image").attr('src', page.image).appendTo(listitem)
        .on("click", () => {
            window.location.href = "https://github.com/evelinawenner/todo-node";
        }).appendTo(listitem);
    }
})
}