var app = new Vue ({
    el:".content",
    data: {
        products: [
            {
                id:1, 
                title:"Cayenne pepper", 
                ShortText:'Packs fiery heat, widely used in global cuisine', 
                image:'../images/JSImages/CayennePepper.jpg', 
                description:"Cayenne pepper, derived from dried and ground cayenne chili peppers, is named after the city of Cayenne in French Guiana. These peppers are typically thin and long, ranging from 2 to 5 inches in length. While they are best known for their fiery heat, cayenne peppers also boast a rich nutritional profile. They are a good source of vitamins A, C, and E, as well as several minerals, including potassium and manganese. In addition to its culinary uses, cayenne pepper has a long history of medicinal use. Capsaicin, the compound responsible for its heat, has been studied for its potential health benefits. It is often used topically in creams and ointments to alleviate pain associated with conditions such as arthritis, neuropathy, and muscle soreness. Some research also suggests that capsaicin may help boost metabolism and aid in weight loss. Cayenne pepper is a versatile ingredient that can be used in both savory and sweet dishes. In addition to adding heat to spicy recipes like chili, curry, and salsa, it can also be used to enhance the flavor of chocolate desserts, fruit dishes, and even cocktails. Whether used sparingly to add a subtle kick or liberally for a fiery explosion of flavor, cayenne pepper adds depth and excitement to a wide range of culinary creations."
            },
            {
                id:2, 
                title:"Jalapeño", 
                ShortText:'Mild, versatile chili essential in Mexican dishes', 
                image:'../images/JSImages/Jalapeño.jpg', 
                description:"The Jalapeño pepper, originating from Mexico, holds a special place in culinary culture worldwide. Its popularity stems not only from its distinctive flavor but also from its versatility in various cuisines. These peppers typically measure around 2-3 inches in length and are known for their thick flesh and medium heat, ranging from 2,500 to 8,000 Scoville Heat Units (SHU). While they are commonly harvested while still green, they can ripen to a red hue, offering a slightly sweeter taste and a touch more heat. Jalapeños are prized for their ability to add depth and complexity to dishes without overwhelming them with spiciness. Their flavor profile includes a subtle fruitiness and a mild earthiness, making them suitable for a wide range of applications. In Mexican cuisine, Jalapeños are a staple ingredient in salsas, sauces, and marinades, contributing both heat and flavor. They are also frequently stuffed with cheese or meat, then grilled or baked, creating a delicious appetizer or side dish known as 'jalapeño poppers.' Outside of Mexican cuisine, Jalapeños have become popular in fusion dishes, including burgers, pizzas, and even cocktails. Their ability to complement both savory and sweet flavors makes them a versatile addition to dishes ranging from salads to desserts. Moreover, Jalapeños are not limited to fresh consumption; they can also be pickled, dried, or smoked to create distinct flavor profiles. Pickled Jalapeños are commonly used as a topping for nachos, tacos, and sandwiches, while smoked Jalapeños, known as chipotle peppers, are a key ingredient in many Mexican-inspired dishes. Overall, the Jalapeño pepper's unique combination of flavor, heat, and versatility has solidified its status as a beloved ingredient in kitchens around the world, appealing to both amateur cooks and professional chefs alike."
            },
            {
                id:3, 
                title:"Habanero", 
                ShortText:'Intensely hot with fruity notes, originating from the Amazon', 
                image:'../images/JSImages/Habanero.jpg', 
                description:"The Habanero pepper, originating from the Amazon region, has earned its place as one of the most iconic and sought-after chili peppers globally. Characterized by its lantern-like shape and vibrant colors, which range from bright orange to fiery red, the Habanero stands out in any culinary setting. Clocking in between 100,000 to 350,000 Scoville Heat Units (SHU), the Habanero's heat level is not for the faint of heart. In fact, it was once considered one of the hottest peppers in the world until surpassed by even hotter varieties. Despite its formidable heat, the Habanero also boasts a distinct fruity flavor, often described as citrusy or apricot-like, which sets it apart from other super-hot peppers. Cultivating Habanero peppers requires careful attention, as they thrive in warm, tropical climates with plenty of sunlight. They are typically grown as annuals, producing abundant yields of peppers throughout the growing season. In culinary applications, Habaneros are prized for their versatility. They can be used fresh, dried, or even pickled to add a potent kick to a wide range of dishes. From spicy salsas and hot sauces to fiery curries and marinades, the Habanero's intense heat and fruity notes complement a variety of cuisines, including Mexican, Caribbean, and South American. Beyond its culinary uses, the Habanero is also valued for its potential health benefits. Like other chili peppers, it contains capsaicin, a compound known for its anti-inflammatory and metabolism-boosting properties. Additionally, some studies suggest that capsaicin may help reduce pain and lower blood pressure. Despite its fiery reputation, the Habanero remains a beloved ingredient among spice enthusiasts and adventurous cooks alike, adding a thrilling dose of heat and flavor to any dish that dares to feature it."
            },
            {
                id:4, 
                title:"Scotch bonnet", 
                ShortText:'Caribbean favorite, fruity and fiery', 
                image:'../images/JSImages/ScotchBonnet.jpg', 
                description:"The Scotch Bonnet pepper is a beloved heirloom chili variety renowned for its bold flavor and fiery heat. These peppers are easily identifiable by their distinctive shape, resembling a small, squat bonnet or tam o' shanter hat. With their vibrant colors ranging from bright red to orange and even yellow, Scotch Bonnet peppers add a visually striking element to any dish. What sets Scotch Bonnet apart is its intense heat and fruity flavor profile. These peppers are loaded with capsaicin, delivering a fiery kick that can range from moderately spicy to searingly hot. Despite their heat, Scotch Bonnets also offer a unique fruity sweetness, making them a sought-after ingredient in Caribbean cuisine. Measuring about 1-2 inches in diameter, Scotch Bonnet peppers are relatively small but pack a punch in terms of flavor. Their thin flesh and abundant seeds contribute to their potent heat, while their wrinkled skin adds texture and character to dishes. Scotch Bonnet peppers are prized for their versatility in cooking. They are commonly used in spicy sauces, marinades, and salsas, where their heat and flavor can shine. Additionally, they are a key ingredient in traditional Caribbean dishes such as jerk chicken and pepper sauce, where their bold taste enhances the overall flavor profile. Despite their fiery reputation, Scotch Bonnet peppers are also valued for their nutritional benefits. They are rich in vitamins A and C, as well as antioxidants, making them not only flavorful but also healthful additions to meals. Widely celebrated for their intense flavor and heat, Scotch Bonnet peppers have earned a place of honor in culinary traditions around the world. Whether used sparingly to add a kick to a dish or incorporated boldly for a fiery flavor explosion, Scotch Bonnet peppers are cherished by chefs and home cooks alike for their ability to elevate any recipe."
            },
            {
                id:5, 
                title:"Tabasco pepper", 
                ShortText:'Provides balanced heat and tang, essential for Tabasco sauce', 
                image:'../images/JSImages/TabascoPepper.jpg', 
                description:"The Tabasco pepper, a beloved heirloom variety, is renowned for its distinctive flavor and fiery heat. These peppers boast a unique appearance, characterized by their small size and vibrant red color. Their pods are typically elongated, resembling slender cylinders with pointed ends, packed with intense heat. What sets Tabasco peppers apart is their exceptional spiciness, which is measured at around 30,000 to 50,000 Scoville Heat Units (SHU). Despite their intense heat, Tabasco peppers also offer a subtle fruity undertone, adding complexity to their flavor profile. Tabasco peppers are prized for their versatility in the kitchen. Whether used fresh, dried, or in sauce form, these peppers excel in adding a kick to a variety of dishes. They are particularly favored for their role in the iconic Tabasco sauce, a staple condiment known for its tangy flavor and fiery heat. Moreover, Tabasco peppers are valued for their ability to withstand both hot and humid climates, making them a popular choice for cultivation in regions like Louisiana, where the famous Tabasco sauce originates. Widely regarded as a culinary standard, Tabasco peppers enjoy popularity among chefs, home cooks, and hot sauce enthusiasts alike. Their reputation is built upon their consistent heat levels, distinctive flavor, and adaptability to different culinary applications. Whether used to spice up salsas, marinades, or even cocktails, Tabasco peppers remain a beloved choice for those who appreciate the bold flavor and fiery kick they bring to the table."
            }
        ],
        product:{},
        btnVisible: 0
    },
    mounted:function(){
        this.getProduct();
        this.checkInCart();
    },
    methods: {
        getProduct:function(){
            if(window.location.hash) {
                var id = window.location.hash.replace('#','');
                if(this.products && this.products.length>0) {
                    for(let i in this.products) {
                        if(this.products[i] && this.products[i].id && id==this.products[i].id) this.product = this.products[i];
                    }
                }
            }
        },
        addToCart:function(id) {
            var cart = [];
            if(window.localStorage.getItem('cart')) {
                cart = window.localStorage.getItem('cart').split(', ');
            }

            if(cart.indexOf(String(id))==-1) {
                cart.push(id);
                window.localStorage.setItem('cart',cart.join());
                this.btnVisible=1;
            }
        },
        checkInCart:function(){
            if(this.product && this.product.id && window.localStorage.getItem('cart').split(', ').indexOf(String(this.product.id))!=-1) this.btnVisible=1;
        }
    }
})