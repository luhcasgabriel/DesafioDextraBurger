


class Order {

    id = "";
    clientName = "";
    orderNumber = "";
    price = 0;
    discount = 0;
    menus = [];

    constructor(id, clientName, orderNumber, price, discount, menus) {
        this.id = id;
        this.clientName = clientName;
        this.orderNumber = orderNumber;
        this.price = price;
        this.discount = discount;
        this.menus = menus;
    }
    





}

export { Order }