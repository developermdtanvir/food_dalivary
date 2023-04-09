const product = document.getElementById('product');

fetch(`https://product-backend-mdtanvirgit.vercel.app/foods`)
    .then(res => res.json())
    .then(data => {
        displayFoods(data)
    })


const displayFoods = (data) => {
    data.forEach(element => {
        console.log(element)
        const div = document.createElement('div');

        product.appendChild(div);

        div.innerHTML = `
            <div class=' text-center border w-96 flex flex-col justify-center items-center p-4 space-y-2'>
                <img class="w-80" src=${element.image} />
                <h1 class="font-bold">${element.product_name}</h1>
            </div>
        `

    });
}



document.getElementById('search_btn').addEventListener('click', () => {
    const search = document.getElementById('search').value


    fetch(`https://product-backend-mdtanvirgit.vercel.app/foods?search=${search}`)
        .then(res => res.json())
        .then(data => {
            displayFoods(data)

        })

    // fetch(`http://localhost:5000/foods?search=${search}`)
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //     })
})
