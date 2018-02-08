exports.seed = function(knex, Promise) {
  return knex('items').del()
    .then(function() {
      return Promise.all([
        knex('items').insert({
         menu_section: 'salads',
         name: 'Buffalo Bleu',
         price: 7.99,
         description: 'Chopped romaine & iceberg blend, all-natural chicken, original buffalo new york spicy sauce, grape tomatoes, banana peppers, tortilla strips, bleu cheese, suggested dressing: chunky bleu cheese',
         pictures: '/pictures/10-Buffalo.png',
         likes: 11 }),
        knex('items').insert({
         menu_section: 'salads',
         name: 'Bently',
         price: 7.99,
         description: 'Chopped romaine & iceberg blend, baked ham, roasted turkey, chopped eggs, tomatoes, provolone cheese, suggested dressing: green goddess.',
         pictures: '/pictures/3-Bently_0.png',
         likes: 10 }),
        knex('items').insert({
         menu_section: 'salads',
         name: 'Chicken Caesar',
         price: 7.99,
         description: 'Chopped romaine & iceberg blend, all-natural chicken, chopped eggs, croutons, parmesan cheese, suggested dressing: parmesan Caesar',
         pictures: '/pictures/5-Caesar.png',
         likes: 2}),
        knex('items').insert({
         menu_section: 'salads',
         name: 'Cobb',
         price: 6.99,
         description: 'Chopped romaine & iceberg blend, breaded chicken, crispy bacon, tomatoes, avocado, chopped eggs, bleu cheese, suggested dressing: rustic thousand island',
         pictures: '/pictures/2-Cobb_0.png',
         likes: 2 }),
        knex('items').insert({
         menu_section: 'salads',
         name: 'Fore Roasted Cabo',
         price: 9.99,
         description: 'Chopped romaine & iceberg blend, all-natural chicken, corn bean blend, roasted red peppers, tomatoes, tortilla strips, spicy monterey jack, suggested dressing: tangy salsa ranch',
         pictures: '/pictures/8-Cabo.png',
         likes: 8 }),



        knex('items').insert({
         menu_section: 'Wraps',
         name: 'Mandarin Chicken Warp',
         price: 11.99,
         description: 'Spring mix, all-natural chicken, mandarin oranges, cucumbers, carrots, dried cranberries, chow mein noodles, suggested dressing: oriental sesame',
         pictures: '/pictures/Mandarin-Chicken-Warp.jpg',
         likes: 6 }),
        knex('items').insert({
         menu_section: 'Wraps',
         name: 'Nicoise Wrap',
         price: 11.99,
         description: 'Chopped romaine & iceberg blend, radiatorre pasta, tuna, tomatoes, chopped eggs, black olives, suggested dressing: balsamic vinaigrette',
         pictures: '/pictures/Nuevo-Nicoise-wrap.jpg',
         likes: 11 }),
        knex('items').insert({
         menu_section: 'Wraps',
         name: "Sophie's Salad Wrap",
         price: 13.99,
         description: 'Spring mix, all-natural chicken, green apples, dried cranberries, glazed pecans, bleu cheese, suggested dressing: lite raspberry vinaigrette',
         pictures: '/pictures/Sophie_s-wrap.jpg',
         likes: 9 }),
        knex('items').insert({
         menu_section: 'Wraps',
         name: "Greek Wrap",
         price: 13.99,
         description: 'Chopped romaine & iceberg blend, cucumbers, grape tomatoes, red onions, banana peppers, black olives, feta cheese, suggested dressing: balsamic vinaigrette',
         pictures: '/pictures/Greek-Wrap.jpg',
         likes: 4 }),


        knex('items').insert({
         menu_section: 'Soups',
         name: "Broccoli Cheddar",
         price: 5.99,
         description: 'Generous pieces of broccoli, creamy sharp cheddar cheese and a touch of spices',
         pictures: '/pictures/BroccoliCheeseHDR.jpg',
         likes: 2s }),
        knex('items').insert({
         menu_section: 'Soups',
         name: "Organic Harvest Bisque",
         price: 7.99,
         description: 'Butternut squash and carrots pureed with ginger, nutmeg, cinnamon, apples, sweet potatoes, and a hint of rosemary',
         pictures: '/pictures/Butternutjpg.jpg',
         likes: 4 }),
        knex('items').insert({
         menu_section: 'Soups',
         name: "Spring Veg",
         price: 4.99,
         description: 'A delicious medley of vegetables simmered to perfection in an herbed vegetable stock',
         pictures: '/pictures/Spring Vegetable2.jpg',
         likes: 4 }),

      ]);
    });
};
