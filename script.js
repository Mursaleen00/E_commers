fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => {
        let card = document.getElementById('card');
        for (let i = 0; i <= 29; i++) {
            card.innerHTML += `<div class="card">
                                    <img src="${data.products[i].images[1]}">
                                    <div class="c_d">
                                        <h2>${data.products[i].title}</h2>
                                        <h2>${data.products[i].price}$</h2>
                                    </div>
                                    <p class="c_p">${data.products[i].description}</p>
                                </div>`
        }
    });


    
 fetch('https://dummyjson.com/quotes')
        .then(res => res.json())
        .then(data1 => {
            quotes = document.getElementById('quotes')
            for (let i = 0; i <= 29; i++) {
                quotes.innerHTML += ` <div class="quotes_card" id="qts" >
                <h3>${data1.quotes[i].quote}</h3>
                <h1>${data1.quotes[i].author}</h1>
                </div> `
            }
            console.log(data1.quotes[0]);
        }); 



