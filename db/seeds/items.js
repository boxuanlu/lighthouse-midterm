exports.seed = function(knex, Promise) {
  return knex('items').del()
    .then(function() {
      return Promise.all([
        knex('items').insert({
         name: 'Buffalo Bleu',
         price: 7.99,
         description: 'chopped romaine & iceberg blend, all-natural chicken, original buffalo new york spicy sauce, grape tomatoes, banana peppers, tortilla strips, bleu cheese, suggested dressing: chunky bleu cheese',
         pictures: '/pictures/10-Buffalo.png',
         likes: 9 }),
        knex('items').insert({
         name: 'Bently',
         price: 7.99,
         description: 'chopped romaine & iceberg blend, baked ham, roasted turkey, chopped eggs, tomatoes, provolone cheese, suggested dressing: green goddess.',
         pictures: '/pictures/3-Bently_0.png',
         likes: 9 }),
        knex('items').insert({
         name: 'Chicken Caesar',
         price: 7.99,
         description: 'chopped romaine & iceberg blend, all-natural chicken, chopped eggs, croutons, parmesan cheese, suggested dressing: parmesan Caesar',
         pictures: '/pictures/5-Caesar.png',
         likes: 9 }),
        knex('items').insert({
         name: 'Cobb',
         price: 6.99,
         description: 'chopped romaine & iceberg blend, breaded chicken, crispy bacon, tomatoes, avocado, chopped eggs, bleu cheese, suggested dressing: rustic thousand island',
         pictures: '/pictures/8-Cabo.png',
         likes: 9 }),
        knex('items').insert({
         name: 'Fore Roasted Cabo',
         price: 9.99,
         description: 'chopped romaine & iceberg blend, all-natural chicken, corn bean blend, roasted red peppers, tomatoes, tortilla strips, spicy monterey jack, suggested dressing: tangy salsa ranch',
         pictures: '/pictures/8-Cabo.png',
         likes: 9 }),
        knex('items').insert({
         name: 'Mandarin Chicken Warp',
         price: 11.99,
         description: 'spring mix, all-natural chicken, mandarin oranges, cucumbers, carrots, dried cranberries, chow mein noodles, suggested dressing: oriental sesame',
         pictures: '/pictures/Mandarin-Chicken-Warp.png',
         likes: 9 }),
        knex('items').insert({
         name: 'Mandarin Chicken Warp',
         price: 11.99,
         description: 'spring mix, all-natural chicken, mandarin oranges, cucumbers, carrots, dried cranberries, chow mein noodles, suggested dressing: oriental sesame',
         pictures: '/pictures/Mandarin-Chicken-Warp.png',
         likes: 9 }),

      ]);
    });
};
