const KERALA_FOODS = {
    breakfast: [
        {
            name: "Puttu (1 pc) & Kadala Curry (1/2 cup)",
            calories: 260,
            nonVeg: false,
            ingredients: { grains: ["Rice flour"], protein: ["Black chickpeas (Kadala)"], veg: ["Coconut", "Onion", "Ginger"], pantry: ["Coconut oil", "Spices"] }
        },
        {
            name: "Appam (2 pcs) & Mutta (Egg) Roast (1 egg)",
            calories: 250,
            nonVeg: true,
            ingredients: { grains: ["Rice", "Yeast"], protein: ["Eggs"], veg: ["Coconut", "Onion", "Tomato"], pantry: ["Coconut oil", "Spices"] }
        },
        {
            name: "Idli (3 pcs) & Sambar",
            calories: 210,
            nonVeg: false,
            ingredients: { grains: ["Rice", "Urad Dal"], protein: ["Toor Dal"], veg: ["Drumstick", "Carrot", "Pumpkin"], pantry: ["Tamarind", "Spices"] }
        },
        {
            name: "Ragi Dosa (2 pcs) & Sambar",
            calories: 230,
            nonVeg: false,
            ingredients: { grains: ["Ragi flour", "Rice"], protein: ["Toor Dal"], veg: ["Drumstick", "Vegetables"], pantry: ["Spices"] }
        },
        {
            name: "Kappa (Steamed Tapioca) & Fish Curry",
            calories: 300,
            nonVeg: true,
            ingredients: { grains: ["Tapioca"], protein: ["Fish"], veg: ["Coconut", "Green chili"], pantry: ["Kudampuli (Gamboge)", "Spices"] }
        },
        {
            name: "Vegetable Upma & Chutney",
            calories: 220,
            nonVeg: false,
            ingredients: { grains: ["Rava (Semolina)"], protein: [], veg: ["Carrot", "Beans", "Onion", "Coconut"], pantry: ["Coconut oil", "Spices"] }
        },
        {
            name: "Wheat Dosa (2 pcs) & Tomato Chutney",
            calories: 200,
            nonVeg: false,
            ingredients: { grains: ["Wheat flour"], protein: [], veg: ["Tomato", "Onion", "Ginger"], pantry: ["Coconut oil"] }
        }
    ],
    lunch: [
        {
            name: "Red Rice (1/2 cup), Sambar, Cabbage Thoran",
            calories: 280,
            nonVeg: false,
            ingredients: { grains: ["Matta Rice"], protein: ["Toor Dal"], veg: ["Cabbage", "Coconut", "Sambar Veg"], pantry: ["Coconut oil", "Tamarind"] }
        },
        {
            name: "Matta Rice, Fish Curry (Meen Mulakithu), Beans Thoran",
            calories: 350,
            nonVeg: true,
            ingredients: { grains: ["Matta Rice"], protein: ["Fish"], veg: ["Beans", "Coconut", "Garlic"], pantry: ["Kudampuli", "Coconut oil"] }
        },
        {
            name: "Rice, Avial (Mixed Veg), Buttermilk (Moru)",
            calories: 300,
            nonVeg: false,
            ingredients: { grains: ["Rice"], protein: ["Curd"], veg: ["Yam", "Raw Banana", "Drumstick", "Carrot", "Coconut"], pantry: ["Coconut oil", "Jeera"] }
        },
        {
            name: "Rice, Beetroot Pachadi, Moong Dal Curry",
            calories: 310,
            nonVeg: false,
            ingredients: { grains: ["Rice"], protein: ["Moong Dal"], veg: ["Beetroot", "Curd", "Coconut"], pantry: ["Coconut oil", "Mustard"] }
        },
        {
            name: "Rice, Chicken Curry (Less oil), Cucumber Salad",
            calories: 380,
            nonVeg: true,
            ingredients: { grains: ["Rice"], protein: ["Chicken"], veg: ["Cucumber", "Onion", "Tomato"], pantry: ["Coconut oil", "Spices"] }
        }
    ],
    dinner: [
        {
            name: "Wheat Chapati (2 pcs) & Vegetable Kurma",
            calories: 260,
            nonVeg: false,
            ingredients: { grains: ["Wheat flour"], protein: [], veg: ["Potato", "Carrot", "Green Peas", "Coconut"], pantry: ["Spices", "Coconut oil"] }
        },
        {
            name: "Pathiri (2 pcs) & Fish Curry",
            calories: 300,
            nonVeg: true,
            ingredients: { grains: ["Rice flour"], protein: ["Fish"], veg: ["Coconut", "Onion"], pantry: ["Coconut oil", "Spices"] }
        },
        {
            name: "Oats Upma with plenty of Vegetables",
            calories: 220,
            nonVeg: false,
            ingredients: { grains: ["Oats"], protein: [], veg: ["Mixed Veg", "Onion", "Green chili"], pantry: ["Coconut oil", "Mustard"] }
        },
        {
            name: "Wheat Chapati (2 pcs) & Egg Curry (1 egg)",
            calories: 280,
            nonVeg: true,
            ingredients: { grains: ["Wheat flour"], protein: ["Eggs"], veg: ["Onion", "Tomato", "Coconut"], pantry: ["Spices", "Coconut oil"] }
        },
        {
            name: "Kanji (Rice Gruel) & Green Gram (Payar) Puzhukku",
            calories: 250,
            nonVeg: false,
            ingredients: { grains: ["Red Rice"], protein: ["Green Gram"], veg: ["Coconut", "Raw Banana"], pantry: ["Coconut oil", "Jeera"] }
        },
        {
            name: "Steamed Fish & Large Green Salad",
            calories: 200,
            nonVeg: true,
            ingredients: { grains: [], protein: ["Fish"], veg: ["Lettuce", "Cucumber", "Tomato", "Onion"], pantry: ["Lemon", "Pepper"] }
        }
    ]
};

document.getElementById('diet-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const activity = parseFloat(document.getElementById('activity').value);
    const preference = document.getElementById('preference').value;
    const goal = parseFloat(document.getElementById('goal').value);

    let bmr;
    if (gender === 'male') {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }

    const tdee = bmr * activity;
    const deficit = goal === 0.5 ? 500 : 800;
    let targetCalories = Math.round(tdee - deficit);

    if (gender === 'female' && targetCalories < 1200) targetCalories = 1200;
    if (gender === 'male' && targetCalories < 1500) targetCalories = 1500;

    const waterIntake = (weight * 0.033).toFixed(1);

    displayResults(targetCalories, waterIntake, preference);
});

function displayResults(calories, water, preference) {
    document.getElementById('target-calories').textContent = calories;
    document.getElementById('water-target').textContent = water;

    const planContainer = document.getElementById('diet-plan-container');
    planContainer.innerHTML = '';

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    const filteredFoods = {
        breakfast: KERALA_FOODS.breakfast.filter(f => preference === 'non-veg' ? true : !f.nonVeg),
        lunch: KERALA_FOODS.lunch.filter(f => preference === 'non-veg' ? true : !f.nonVeg),
        dinner: KERALA_FOODS.dinner.filter(f => preference === 'non-veg' ? true : !f.nonVeg)
    };

    let weeklyIngredients = { grains: new Set(), protein: new Set(), veg: new Set(), pantry: new Set() };

    days.forEach((day) => {
        const b = filteredFoods.breakfast[Math.floor(Math.random() * filteredFoods.breakfast.length)];
        const l = filteredFoods.lunch[Math.floor(Math.random() * filteredFoods.lunch.length)];
        const d = filteredFoods.dinner[Math.floor(Math.random() * filteredFoods.dinner.length)];

        // Aggregate ingredients
        [b, l, d].forEach(meal => {
            if (meal.ingredients) {
                Object.keys(meal.ingredients).forEach(cat => {
                    meal.ingredients[cat].forEach(item => weeklyIngredients[cat].add(item));
                });
            }
        });

        const dayCard = document.createElement('div');
        dayCard.className = 'day-card';
        dayCard.innerHTML = `
            <h4>${day}</h4>
            <div class="meal">
                <span class="label">Breakfast</span>
                <span class="food">${b.name}</span>
            </div>
            <div class="meal">
                <span class="label">Lunch</span>
                <span class="food">${l.name}</span>
            </div>
            <div class="meal">
                <span class="label">Dinner</span>
                <span class="food">${d.name}</span>
            </div>
        `;
        planContainer.appendChild(dayCard);
    });

    displayGroceryList(weeklyIngredients);

    document.getElementById('input-section').classList.add('hidden');
    document.getElementById('results-section').classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function displayGroceryList(ingredients) {
    const groceryList = document.getElementById('grocery-list');
    groceryList.innerHTML = '';

    const categories = {
        grains: "Grains & Flours",
        protein: "Dals & Proteins",
        veg: "Vegetables & Fresh",
        pantry: "Pantry Staples"
    };

    Object.keys(categories).forEach(key => {
        if (ingredients[key].size > 0) {
            const catDiv = document.createElement('div');
            catDiv.className = 'grocery-category';
            catDiv.innerHTML = `
                <h5>${categories[key]}</h5>
                <ul class="grocery-items">
                    ${Array.from(ingredients[key]).map(item => `<li>${item}</li>`).join('')}
                </ul>
            `;
            groceryList.appendChild(catDiv);
        }
    });

    // Special category for the staple coconut oil if not present
    if (ingredients.pantry.size > 0 && !ingredients.pantry.has("Coconut oil")) {
        const oilItem = document.createElement('li');
        oilItem.textContent = "Coconut oil";
        groceryList.querySelector('.grocery-items').appendChild(oilItem);
    }
}

document.getElementById('regenerate-btn').addEventListener('click', function () {
    document.getElementById('results-section').classList.add('hidden');
    document.getElementById('input-section').classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
