"use strict";

const {
  db,
  models: { User, Book },
} = require("../server/db");

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  // Creating Users
  const users = await Promise.all([
    User.create({ username: "cody", password: "123" }),
    User.create({ username: "murphy", password: "123" }),
  ]);

  // Creating Books
  const books = await Promise.all([
    Book.create({
      title: "Songbook",
      author: "Alec Soth",
      description:
        "Known for his haunting portraits of solitary Americans in Sleeping by the Mississippi and Broken Manual, Alec Soth has recently turned his lens toward community life in the country. To aid in his search, Soth assumed the increasingly obsolescent role of community newspaper reporter. From 2012-2014, Soth traveled state by state while working on his self-published newspaper, The LBM Dispatch, as well as on assignment for the New York Times and others. From upstate New York to Silicon Valley, Soth attended hundreds of meetings, dances, festivals and communal gatherings in search of human interaction in an era of virtual social networks. With Songbook, Soth has stripped these pictures of their news context in order to highlight the longing for connection at their root. Fragmentary, funny and sad, Songbook is a lyrical depiction of the tension between American individualism and the desire to be united.",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0553/5950/4572/products/cover83_5cec1b6c-5811-41d0-9386-8ec740024de7_1100x.jpg?v=1654635695",
      price: 60.0,
      inventory: 100,
      isRare: false,
    }),
    Book.create({
      title: "Family",
      author: "Masahisa Fukase",
      description:
        "For three generations the Fukase family ran a photography studio in Bifuka, a small provincial town in the northern Japanese province of Hokkaido. In August 1971, at the age of 35, Masahisa Fukase returned home from Tokyo, where he had moved in the 1950s. He realised that the Fukase Photographic Studio, which his younger brother managed, combined with the growing family members, constituted the perfect subject for a series of portraits. Between 1971 and 1989, he returned regularly and used the family studio, the large-format Anthony view camera and the changing family line-up as the basis for the series. True to his style, Fukase often introduced third-party models and humorous elements to juxtapose the ineluctable reality of time passing and the dwindling family group. He continued the series through his father’s death in 1987, up until the closure of the Fukase studio due to bankruptcy in 1989, and the consequential dispersion of the family.",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0553/5950/4572/products/cover252_1100x.jpg?v=1654627484",
      price: 55.0,
      inventory: 100,
      isRare: false,
    }),
    Book.create({
      title: "Unnamed Road",
      author: "Jungjin Lee",
      description:
        "For Jungjin Lee, photographing the landscape is an exploration of her own mind - the introspective states of the artist, whose photographic gaze is insistent and transformative. Her latest project Unnamed Road approaches the contested territories of Israel and the West Bank by turning to the landscape. Her black-and-white images are self-contained worlds of stillness and wonder, as Lee searches for something constant in the life of the landscape. Her images suggest that despite the semblance of fluctuation, some fundamental truths do not alter: just as the surface of the ocean is constantly in flux, its depths in fact remain unchanged and enduring. Lee, who describes her photographic state as 'meditative', regards the act of photography as emotional and experiential, a moment when 'that absolute 'echo' within myself travels through time and space'. Yet she struggled to find neutrality in a charged territory that she describes as 'uncomfortable'; it was only in final trips to sites in 2011 that she found distance - thus opening out the work to signify more that Israel and its conflict. Lee's work is often concerned with the materiality of printing technique, and for twenty years she has utilised a liquid photo-sensitive emulsion brushed on handmade rice paper, a method akin to painting. In Unnamed Road, for the first time digital processes were employed; and yet the images remain explorations of chance and imperfection, drawing the viewer into a realm where fullness of vision is the subject matter.",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0553/5950/4572/products/covers201_1100x.jpg?v=1654640214",
      price: 415.0,
      inventory: 20,
      isRare: true,
    }),
    Book.create({
      title: "#nyc",
      author: "Jeff Mermelstein",
      description:
        "#nyc is Jeff Mermelstein's multifarious, comic and heartbreaking survey of contemporary life as learned through overseen text messages. Written in the new language of acronym and initialism, truncation and cipher wordplay, interrupted by the occasional longueur, people appear to have few inhibitions when faced only with their own reflection in a phone screen, such that they pour their heart-felt desire and lust and hate and vitriol in unfettered streams of text consciousness Chaucerian in its breadth and humor, this project reveals the complex inner lives of the city’s residents, and the intriguing richness of emotion that exists within the most innocuous moments of everyday life: on the train, a park bench, or in the street. Here, a short history of New York unfolds, as told directly by one resident to another.",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0553/5950/4572/products/cover384_1600x.jpg?v=1654621897",
      price: 200.0,
      inventory: 50,
      isRare: true,
    }),
  ]);

  console.log(`seeded ${users.length} users`);
  console.log(`seeded successfully`);
  console.log(`seeded ${books.length} books`);
  console.log(`seeded successfully`);
  // return {
  //   users: {
  //     cody: users[0],
  //     murphy: users[1]
  //   }

  // }
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
