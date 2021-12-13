let products = [
    {
        name: 'Kiyimlar',
        image1: './images/e9dba9f2af6606cb61e015997a5a07f1.jpg',
        image2: './images/tuat.jpg',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'Kiyimlar',
        image1: './images/sr_198520000_1.jpg',
        image2: './images/3-мужская-мода-стильные-мужчины-men-in-yellow-13.jpg',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'Shapkalar',
        image1: './images/rasm.jpg',
        image2: './images/shapka-ushanka-dlya-voennosluzhashih-tip-a-750x589.jpg',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'Kurtkalar',
        image1: './images/ja.jpg',
        image2: './images/6015660002.jpg',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'Tufliklar',
        image1: './images/Deerma-DEM-HX20-DEM-HX10.jpg_q50.jpg',
        image2: './images/-.jpg',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'Krasofkalar',
        image1: './images/166450-krossovki-versace-chain-serye-3.jpg',
        image2: './images/-.jpg_q50 (1).jpg',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'Quloqchinlar',
        image1: './images/JBL_Endurance-SPRINT_Product-Image_Red_front-1605x1605px.webp',
        image2: './images/JBL-Endurance-Sprint_Alt_Red-1605x1605px.webp',
        old_price: '400',
        curr_price: '300'
    },
]

let product_list = document.querySelector('#products')

renderProducts = (products) => {
    products.forEach(e => {
        let prod = `
            <div class="col-4 col-md-6 col-sm-12">
                <div class="product-card">
                    <div class="product-card-img">
                        <img src="${e.image1}" alt="">
                        <img src="${e.image2}" alt="">
                    </div>
                    <div class="product-card-info">
                        <div class="product-btn">
                            <a href="./product-detail.html" class="btn-flat btn-hover btn-shop-now">Ko'rish</a>
                            <button class="btn-flat btn-hover btn-cart-add">
                                <i class='bx bxs-cart-add'></i>
                            </button>
                            <button class="btn-flat btn-hover btn-cart-add">
                                <i class='bx bxs-heart'></i>
                            </button>
                        </div>
                        <div class="product-card-name">
                            ${e.name}
                        </div>
                        
                    </div>
                </div>
            </div>
        `
        product_list.insertAdjacentHTML("beforeend", prod)
    })
}

renderProducts(products)
renderProducts(products)

let filter_col = document.querySelector('#filter-col')

document.querySelector('#filter-toggle').addEventListener('click', () => filter_col.classList.toggle('active'))

document.querySelector('#filter-close').addEventListener('click', () => filter_col.classList.toggle('active'))