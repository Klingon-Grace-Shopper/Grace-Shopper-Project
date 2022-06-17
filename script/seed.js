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
    User.create({
      username: "cody",
      password: "123",
      email: "tempemail2@gmail.com",
      isAdmin: true,
    }),
    User.create({
      username: "murphy",
      password: "123",
      email: "tempemail1@gmail.com",
      isAdmin: false,
    }),
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
    Book.create({
      title: "In Plain Air",
      author: "Irina Rozovsky",
      description:
        "In Plain Air is a lyrical portrait of Brooklyn’s Prospect Park as seen through Rozovsky’s studies of its visitors, each seeking escape from the din of the city beyond. The seed of the idea for the work was planted ten years ago when Rozovsky took a small motorboat around the park’s southern lake. Floating by the tree-lined shore, she saw what first felt like a mirage — families, lovers, friends, a multitude of cultures and ethnicities, all sharing the same land and moment. The quintessential American melting pot that stretched like a panorama in this equalising space was a visible reality. Rozovsky’s colour photographs capture the interplay between city and nature, creating a vision of the park as a democratic and nurturing public space, one where the landscape and seasons form a protean backdrop to a complex social reality.",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0553/5950/4572/products/cover461_860x.jpg?v=1654629913",
      price: 50.0,
      inventory: 200,
      isRare: false,
    }),
    Book.create({
      title: "Spirit is a Bone",
      author: "Oliver Chanarin & Adam Broomberg",
      description:
        "The series of portraits in this book, which include Pussy Riot member Yekaterina Samutsevic and many other Moscow citizens, were created by a machine: a facial recognition system recently developed in Moscow for public security and border control surveillance. The result is more akin to a digital life mask than a photograph; a three-dimensional facsimile of the face that can be easily rotated and closely scrutinised. What is significant about this camera is that it is designed to make portraits without the co-operation of the subject; four lenses operating in tandem to generate a full frontal image of the face, ostensibly looking directly into the camera, even if the subject himself is unaware of being photographed. The system was designed for facial recognition purposes in crowded areas such as subway stations, railroad stations, stadiums, concert halls or other public areas but also for photographing people who would normally resist being photographed. Indeed any subject encountering this type of camera is rendered passive, because no matter which direction he or she looks, the face is always rendered looking forward and stripped bare of shadows, make-up, disguises or even poise. Co-opting this device, Broomberg & Chanarin have constructed their own taxonomy of portraits in contemporary Russia. Echoing August Sander’s seminal work, Citizens of the Twentieth Century, Broomberg & Chanarin have made a series of portraits cast according to professions. But their portraits are produced with this new technology, with little if any human interaction. They are low resolution and fragmented. The success of these images is determined by how precisely this machine can identify its subject: the characteristics of the nose, the eyes, the chin, and how these three intersect. Nevertheless they cannot help being portraits of individuals, struggling and often failing to negotiate a civil contract with state power. This book is the result of a series of encounters, interactions and conversations between Broomberg & Chanarin and the photography collections at the Library of Birmingham made possible by a commission from GRAIN and the Library with support from the Arts Council of England.",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0553/5950/4572/products/cover67_860x.jpg?v=1654636077",
      price: 35.0,
      inventory: 500,
      isRare: false,
    }),
    Book.create({
      title: "Dark Mirrors",
      author: "Stanley Wolukau-Wanambwa",
      description:
        "Dark Mirrors assembles sixteen essays by photographer and critic Stanley Wolukau-Wanambwa focusing on contemporary fine art photographic and video practices that are principally, though not exclusively, rooted in the United States, written between 2015 and 2021. Wolukau-Wanambwa analyses the image’s relationship to the urgent and complex questions that define our era, through the lens of artistic practices and works which insightfully engage with the ongoing contemporaneity of disparate histories and the ever-changing status of the visual in social life. The book sets out an argument that one of the most dynamic sites of artistic invention in photographic practice over the past decade has been the photographic book, and thus many of the essays in the volume assess artistic works as they are bodied forth in that form. Among the recurrent themes that emerge from these rigorous, probing essays are the complex interrelationship of anti-blackness and visuality, the fragility and complexity of embodied difference in portraiture, the potency of verbal and visual media as social forms, and the politics of attention..",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0553/5950/4572/products/cover608_860x.jpg?v=1654625902",
      price: 35.0,
      inventory: 500,
      isRare: false,
    }),
    Book.create({
      title: "ZZYZX",
      author: "Gregory Halpern",
      description:
        "The early settlers dubbed California ‘The Golden State’ and ‘The Land of Milk and Honey’. Today there are the obvious ironies – sprawl, spaghetti junctions and skid row – but the place is not so easily distilled or visualised, either as a clichéd paradise or as its demise. There’s a strange kind of harmony when it’s all seen together – the sublime, the psychedelic, the self-destructive. Like all places, it’s unpredictable and contradictory, but to greater extremes. Cultures and histories coexist, the beautiful sits next to the ugly, the redemptive next to the despairing, and all under a strange and singular light, as transcendent as it is harsh. The pictures in this book begin in the desert east of Los Angeles and move west through the city, ending at the Pacific. This general westward movement alludes to a thirst for water, as well as the original expansion of America, which was born in the East and which hungrily drove itself West until reaching the Pacific, thereby fulfilling its ‘manifest’ destiny. The people, places, and animals in the book did exist before Halpern’s camera, but he has sewn these photographs into a work of fiction or fantasy – a structure, sequence, and edit which, like Los Angeles itself, teeters on the brink of collapsing under the weight of its own strangely-shaped mass.",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0553/5950/4572/products/cover50_c7d42186-68b0-4333-a71d-cb5e3c5aa2da_860x.jpg?v=1654641005",
      price: 50.0,
      inventory: 150,
      isRare: false,
    }),
    Book.create({
      title:
        "The Adventures of Guille and Belinda and The Illusion of an Everlasting Summer",
      author: "Alessandra Sanguinetti",
      description:
        "This book presents Alessandra Sanguinetti’s return to rural Argentina to continue her intimate collaboration with Belinda and Guillermina, two cousins who, as girls, were the subjects of the first book in her ongoing series, The Adventures of Guille and Belinda and The Enigmatic Meaning of Their Dreams. In this second volume, The Illusion of An Everlasting Summer, we follow Guillermina and Belinda from ages 14 to 24 as they negotiate the fluid territory between adolescence and young adulthood. Still surrounded by the animals and rural settings of their childhood, Everlasting Summer depicts the two cousins’ everyday lives as they experience young love, pregnancy, and motherhood - all of which, perhaps inevitably, results in an ever-increasing independence from their families and each other. Similarly, we can sense a shift in Sanguinetti's relationship to the cousins and the work they make: from insular childhood collaborators to three women with lives branching in different directions. Though the passage of time is one of the most palpable tensions at work in these photographs, An Everlasting Summer deepens Sanguinetti's exploration of the timeless, universal language of female intimacy and friendship.",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0553/5950/4572/products/cover398_e4bdd96f-0437-474c-b07b-06914f5028c3_860x.jpg?v=1654636749",
      price: 65.0,
      inventory: 100,
      isRare: false,
    }),
    Book.create({
      title: "A Civil Rights Journey",
      author: "Doris Derby",
      description:
        "A Civil Rights Journey presents the astonishing archive of Dr Doris Derby: photographer, activist, and professor of anthropology. Active throughout the Civil Rights Movements of the mid twentieth century in the southern United States, particularly Mississippi, Derby acted as a photographer, organiser and teacher, making photographs of the intimate and human side of the everyday struggle for survival and human rights. She photographed both the organisation of political events, meetings, and funerals, alongside the literacy, co-operative and community theatre programmes, many of which she founded, and encountered much danger and tragedy along the way. Here we see the speeches and protests that gave the movement its defining moments, as well as vital figures including Muhammad Ali, Alice Walker, Fannie Lou Hamer, and Jesse Jackson. We also see classrooms and church halls, doctors and secretaries: everyday scenes of joy, frustration, curiosity, and connection, in which the determination and collective actions and resolve and actions of the movement are equally expressed. This extensive volume presents Derby’s images in sequences that between them document rural and urban poverty, offer lucid ethnographies of particular streets and families, track the day-to-day lives of African American children growing up in the Mississippi Delta, and bear witness to such pivotal events as the Jackson State University shooting, the funeral of Martin Luther King Jr., and the 1968 Democratic Convention. Derby’s photographs offer us an invaluably rich portrait of a historical moment whose effects have defined today’s world and issues a vital reassertion of the work that remains to be done. Artist photographer Hannah Collins has worked with Doris Derby to recount the events photographed in extensive texts which accompany the images.",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0553/5950/4572/products/cover628_860x.jpg?v=1654622269",
      price: 40.0,
      inventory: 300,
      isRare: false,
    }),
    Book.create({
      title: "Deep Springs",
      author: "Sam Contis",
      description:
        "The images in Sam Contis's Deep Springs were made in a remote desert valley east of the Sierra Nevada. The work centres on a small, all-male liberal arts college, founded in 1917 by the educational pioneer L. L. Nunn. The college and its surroundings provide a stage on which Contis explores the construction of myth, place, and masculine identity. Bringing together new photographs with pictures made by the first students at the college a century ago, Deep Springs engages with the enduring image of the American West––one that Hollywood, mass media, and the history of American photography have imprinted into the collective psyche. Sam Contis lives and works in California. Her work is represented in the collections of LACMA, the Yale University Art Gallery, and the Whitney Museum of American Art and has recently been exhibited in solo shows at the Berkeley Art Museum and Pacific Film Archive and Klaus von Nichtssagend Gallery in New York. In 2018, her work will be on view in “Being: New Photography” at the Museum of Modern Art. Deep Springs is her first book.",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0553/5950/4572/products/cover42_860x.jpg?v=1654626288",
      price: 345.0,
      inventory: 40,
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
