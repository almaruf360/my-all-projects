function ticketPrice (ticketQuantity){
    const first100rate = 100;
    const second100rate = 90;
    const restTicketRate = 70;

    if( ticketQuantity <= 100){
        const price = ticketQuantity*first100rate;
        return price;
    }
    else if (ticketQuantity > 100 && ticketQuantity <=200){
        const price = ticketQuantity*second100rate;
        return price;
    }
    else{
        const price = ticketQuantity *restTicketRate;
        return price;
    }
}

const price = ticketPrice(1000);
console.log('price',price)