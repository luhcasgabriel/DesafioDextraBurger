import { Item } from "./Item";


class Menu {

    id = "";
    name = "";
    price = 0.4;
    createdAt = Date();
    updatedAt = Date();
    items = [];

    constructor(id, name, price, createdAt, updatedAt, items) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.items = items;
    }
    




}

export { Menu }