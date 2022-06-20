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
    Book.create({
      title: "Troubled Land",
      author: "Paul Graham",
      description:
        "An iconic project made at the height of the ‘Troubles’, Troubled Land deals with the small but insistent signs of political division embedded in the landscape of Northern Ireland. At the heart of the Irish conflict lays the land — who owns it, who controls it, whose history it expresses. Paul Graham’s quietly radical book keeps this material truth in mind as it uniquely combines landscape and conflict photography, seducing us with bucolic views in which telling details only gradually appear: painted kerbs, distant soldiers or helicopters, flags and graffiti, paint-splattered roads, each tacitly aligning that location to its Republican or Loyalist allegiance. Pastoral photographs of green fields and hedgerows reveal themselves to be images of conflict and dispute — despite the steadiness of the photographic frame and the clarity of Graham’s vision, this is unsettled land. Originally published in 1986, Troubled Land is reprinted here for the first time in thirty-five years. Controversial then for its use of colour and refusal to follow the clichéd tropes of photojournalism, the book was pivotal in providing a fresh perspective on Northern Ireland’s ‘Troubles’ and left a lasting impact on landscape photography, suggesting how it might engage with politics and society rather than escape from them. Together with A1 – The Great North Road and Beyond Caring, it completes a new edition of the remarkable trilogy of books Graham made in 1980s UK.",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0553/5950/4572/products/TroubledLandcopy_c766ff67-506d-4de2-a454-73c1bdabd285_1100x.jpg?v=1654639905",
      price: 65.0,
      inventory: 250,
      isRare: false,
    }),
    Book.create({
      title: "August",
      author: "Collier Schorr",
      description:
        "In the early 1990s Collier Schorr began working on and off in Southern Germany, compiling a documentary and fictional portrait of a small town inhabited by historical apparitions. Combining the overlapping roles of war photographer, traveling portraitist, anthropologist, and family historian, Schorr tells the interwoven stories of a place and time determined by memory, nationalism, war, emigration, and family.August employs Polaroids made by Schorr in Schwäbisch Gmünd and in this period to explore the liminal space of images that were never intended to persist beyond the immediate moment. Looking back some twenty years, August both historicises the work and examines the devices of making, revealing the mistakes in attempting to merge contemporary Germans into their past, implicitly exposing the distance between artist and subject, and between the subject and costumes. Aware of the demons and pitfalls of historical authority, Schorr probes at the space between identification and critique – a German boy in a feather boa, posed after Liliana Cavani’s The Night Porter, underscores her interest in the performative history of fetishism and uniform, and the way history shifts between documentary and fictionalization, distance and desire.August is the third volume in a series of books entitled Forests and Fields (Wald und Wiesen), following Neighbors/Nachbarn (2006) and Blumen (2010). Forests and Fields is intrinsically about book making, an ongoing suite of artists books that utilizes traditional notions of category to create different points of view. Each publication is part diary, photo annual, palimpsest, and scrapbook, and involves a process which constantly expands and contradicts the artist's oeuvre through re-edits of the work to create new views through the material. The books share similar dimensions but each is designed as an independent and unique work in itself. The final volume will be text based, a collection of commissioned and re-published writings inspired by the ideas explored in the pictures. A boxed, numbered and signed special edition of the complete set of the Forest and Fields series will be available once the project has been completed.",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0553/5950/4572/products/August_flat_1100x.jpg?v=1655228359",
      price: 55.0,
      inventory: 240,
      isRare: false,
    }),
    Book.create({
      title: "Gathered Leaves Annotated",
      author: "Alec Soth",
      description:
        "Following on from the bestselling box set Gathered Leaves, published to accompany Alec Soth’s touring exhibition which opened in London in 2015, this unique publication brings together five of Soth’s major books in their entirety in a single, compact, and densely detailed volume. Across more than 700 pages of newsprint, Soth updates and reimagines the original version of Gathered Leaves by reproducing every spread from these five books with detailed annotations in the form of notes, text extracts, and additional photographs. This new roadmap through Soth’s oeuvre also includes a new introduction by the artist. Soth’s meteoric rise to international acclaim began with his first book, Sleeping by the Mississippi (2004), an elegiac road trip down the ‘third coast’ of the United States, which has since has sold through numerous print runs and is widely acknowledged as a classic. The success of his subsequent volumes Niagara (2006), Broken Manual (2010), and Songbook (2015) elaborated Soth’s lyrical but unflinching approach and reinforced his position as a master of the book form. His most recent work, A Pound of Pictures (2022), brings a new, poetic perspective to the idiosyncrasies of American life and the practice of image-making, broached once again through Soth’s now-distinctive road trip format. This publication accompanies a solo exhibition at Versicherungskammer Kulturstiftung in Munich, May 2022 and at The Museum of Modern Art, Kamakura & Hayama, Japan, June 2022. ",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0553/5950/4572/products/GatheredLeaves_flat3_c7d01ecf-b9d3-410a-8764-f75e0c9628ea_1100x.jpg?v=1654628022",
      price: 60.0,
      inventory: 540,
      isRare: false,
    }),
    Book.create({
      title: "I Know How Furiously Your Heart Is Beating (Second Printing)",
      author: "Alec Soth",
      description:
        "Taking its name from a line in the Wallace Stevens’ poem “The Gray Room,” Alec Soth’s latest book is a lyrical exploration of the limitations of photographic representation. While these large-format color photographs are made all over the world, they aren’t about any particular place or population. By a process of intimate and often extended engagement, Soth’s portraits and images of his subject’s surroundings involve an enquiry into the extent to which a photographic likeness can depict more than the outer surface of an individual, and perhaps even plumb the depths of something unknowable about both the sitter and the photographer. “After the publication of my last book about social life in America, Songbook, and a retrospective of my four, large scale American projects, Gathered Leaves, I went through a long period of rethinking my creative process. For over a year I stopped traveling and photographing people. I barely took any pictures at all. When I returned to photography, I wanted to strip the medium down to its primary elements. Rather than trying to make some sort of epic narrative about America, I wanted to simply spend time looking at other people and, hopefully, briefly glimpse their interior life. In order to try and access these lives, I made all of the photographs in interior spaces. While these rooms often exist in far-flung places, it’s only to emphasize that these pictures aren’t about any place in particular. Whether a picture is made in Odessa or Minneapolis, my goal was the same: to simply spend time in the presence of another beating heart.” – Alec Soth Includes interview with Alec Soth by Hanya Yanagihara.",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0553/5950/4572/products/cover171_fdf1afa9-6f2a-41d8-8446-36b96d343df0_860x.jpg?v=1654641346",
      price: 70.0,
      inventory: 500,
      isRare: false,
    }),
    Book.create({
      title: "The Citadel: a trilogy",
      author: "Mame-Diarra Niang",
      description:
        "The Citadel is the story of an inner journey, told in three movements. It maps a route through discovery, loss, and renewal across landscapes equally real and imagined by the artist. In 2007, Mame-Diarra Niang returned to Senegal to bury her father after spending years away living in France. Her intimate interest in the notion of territory translates into a refracted representation of the landscapes she rediscovered on this visit. The places before Niang’s lens are at once forensically studied and transformed into fabular non-places. Sahel Gris depicts a no-man’s land where infrastructural projects lay abandoned to the dust. It holds the roots of The Citadel, its ‘ground zero’, where the continuous horizon line evokes a state of permanent suspension between movement and inertia. In At the Wall, Niang pauses at a place of rest and interrogation, an oracle, and the gate to The Citadel. In Metropolis, Niang steps finally into the belly of the beast, looking outwards from within the crowded urban superficies that constantly shift before her eyes, dazzling in the southern light. At the centre of Niang’s vision is the notion of ‘the plasticity of territory’, in which a personal investigation of place becomes indistinguishable from the photographer’s own metamorphosis, and landscape becomes a ‘material for producing many selves.’ In these works, collected here in an expansive and tactile three-volume edition, a personal but analytic relationship with place emerges. City names and geographic coordinates dissolve and become as irrelevant as the visions imposed on them across history and today.",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0553/5950/4572/products/cover509_860x.jpg?v=1654637395",
      price: 125.0,
      inventory: 80,
      isRare: true,
    }),
    Book.create({
      title: "Contact High",
      author: "D’Angelo Lovell Williams",
      description:
        "Both an artist’s book and comprehensive inquisition of D’Angelo Lovell Williams’s work to date, Contact High offers an expansive engagement with the visualisation of desire and depiction of the Black body. Williams’s narrative images reflect the many forms in which Black queer people exist and have existed historically within each other’s lives, picturing them as sitters, lovers, caregivers, or shadows. Williams’s work is guided by their life experience and an interrogation of their own perspective, as well as wider questions around the representation of race, class, sexuality, gender, and intimacy. The title Contact High references the importance of touch and gesture in Williams‘s work, and alludes to heightened senses and intuitive movement. From self-portraits to collaborations with community, Williams’s photographs visualise the Black body in performative scenes that are theatrical, dance-like, and occasionally mundane, pointing towards collective histories and Black ancestral practices. At the heart of these intimate, dialogic images are notions of kinship and spirituality interweaved with quietly political and radical gestures. Williams’s unfaltering gaze insists on visibility and deference, and creates scenes in which Black and queer voices are the authority. The dynamics that play out between families, cultures, friends, lovers, ancestors and descendants are visualised as a spectrum of care, tenderness, and vulnerability, speaking to the nuances of our complex lives often overlooked by historical depictions.",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0553/5950/4572/products/NewCover_860x.jpg?v=1654787770",
      price: 50.0,
      inventory: 480,
      isRare: false,
    }),
    Book.create({
      title: "SONATA",
      author: "Aaron Schuman",
      description:
        "SONATA is an extensive body of photographic work made by Aaron Schuman in Italy over the past four years. Rather than attempting to capture and convey an objective reality, these images are consciously filtered through the many ideas, fascinations, and fantasies associated with the country and what it has represented in the imaginations of those countless travellers who have visited it over the course of centuries. Drawing inspiration from Johann Wolfgang von Goethe’s Italian Journey (1786–1788), Schuman pursues and studies what Goethe described as ‘sense-impressions’, reiterating many of the introspective questions that Goethe asked himself during his own travels through Italy: ‘In putting my powers of observation to the test, I have found a new interest in life…Can I learn to look at things with clear, fresh eyes? How much can I take in at a single glance? Can the grooves of old mental habits be effaced?’ The resulting images are curious, quizzical, and entrancingly atmospheric, conveying a foreigner’s sensitivity to details, quirks, and mysteries: cracks that spider across ancient statues and museum walls, paths that have been shaped and trodden over millennia, the piercing eyes and looming presence of saints and gods all around, accumulations of dust, bones, sunlight, and lucky pennies. Using the classical sonata form – three movements moving through exposition, development, and recapitulation — as a guide, Schuman invites us to explore an Italy as much of the mind as of the world: one soaked in the euphoria and terror, harmony and dissonance of its cultural and historical legacies, and yet constantly new, invigorating, and resonant in its sensorial and psychological suggestions.",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0553/5950/4572/products/SONATA_860x.jpg?v=1654635618",
      price: 145.0,
      inventory: 40,
      isRare: true,
    }),
    Book.create({
      title: "Beautiful, Still.",
      author: "Colby Deal",
      description:
        "Beautiful, Still. is the first monograph from photographer Colby Deal, documenting the people, objects, and environments of everyday life in the Third Ward neighbourhood in Houston, Texas, where the artist grew up. In this ongoing project, currently consisting of over a thousand negatives, Deal sets out to provide a visual record of overlooked communities and the cultural characteristics gradually being erased by gentrification, as well as a depiction of communities of colour whose members are often portrayed with negative connotations. Through these instinctive black-and-white photographs, Deal’s down-to-earth approach to his subjects is made apparent; at times candid and blurred, other times poised and sharply focussed, the series builds to convey the dynamism and vibrancy of family, community, and individual life in the Third Ward. The scratches and dust left on the negatives reflect the marks of lived life and simultaneously suggest the fragility of these documents and the corresponding precarity of the fabrics of social life they often depict. Deal’s almost conversational tone — the antithesis of media portrayals of the neighbourhood — invites his viewers in with a sense of joy and intuitive playfulness. From these alternately staged and documentary images, a new narrative emerges about a reductively and oppressively narrativized place, celebrating the agency and freedom that the photographic medium can offer.",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0553/5950/4572/products/Beautiful_Still_860x.jpg?v=1654787798",
      price: 55.0,
      inventory: 440,
      isRare: false,
    }),
    Book.create({
      title: "Evidence",
      author: "James White",
      description:
        "This limited edition artist’s book brings together digital collages and manipulated photographs by painter James White based on the celebrated and hugely influential series Evidence by Mike Mandel and Larry Sultan. In Evidence, Sultan and Mandel drew on the archives of more than a hundred US government agencies, finding surreal narrative suggestions in deadpan images that were intended as functional documents, upending and interrogating the documentary natures they espoused. The book has been a continual reference for the grayscale photographic paintings for which James White has become known. In this volume, White pays tribute to Sultan and Mandel’s project by further undermining the evidentiary nature of the photographic medium through a process of intervention and painterly gesture which disrupts and reconstitutes the images’ mercurial surfaces.",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0553/5950/4572/products/Evidence_860x.jpg?v=1654627374",
      price: 200.0,
      inventory: 80,
      isRare: true,
    }),
    Book.create({
      title: "Indeterminacy: Thoughts on Time, the Image, and Race(ism)",
      author: "David Campany & Stanley Wolukau-Wanambwa",
      description:
        "In a series of written exchanges, David Campany and Stanley Wolukau-Wanambwa consider the options for photography in resisting the oppressive orthodoxies of racial capital, conservative history, and neoliberal visual culture. How does the essential indeterminacy of photography square with the need to work out alternative practices? How is visibility achieved beyond the consensual categories of the mass media and the commodification of art? What models are there for the making and reception of photographic books and exhibitions that might cultivate an active spectatorship beyond boutique consumerism? These urgent questions and more are discussed in a spirit of speculation and possibility, in the light of signal events that have shaped the recent past.",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0553/5950/4572/products/covers530_4961ec28-5068-433b-ad12-81b9171f1a2f_860x.jpg?v=1654630217",
      price: 20.0,
      inventory: 840,
      isRare: false,
    }),
    Book.create({
      title: "Uneasy Listening: Notes on Hearing and Being Heard",
      author: "Anouchka Grose & Robert Brewer Young",
      description:
        "What makes a good listener? There are a number of commonsensical ideas about what constitutes doing it well — patience, tolerance, availability, responsiveness, lack of moral judgement — but is it really so simple? Is it a skill one can easily learn or more of a quirk or talent? And why do some people seem to be so much better at it than others? Written by a psychoanalyst and a violin maker, Uneasy Listening is a dialogue between two very different kinds of professional listener: the former working with speech, the latter with musical instruments. Beginning as total strangers, Anouchka Grose and Robert Brewer Young embark on an engaging, entertaining, and winding meditation on communication that weaves together wide-ranging references from across psychoanalytic theory, philosophy, contemporary politics and culture. As they discuss the differences, similarities, and resonances between their practices, they run up against some of the illuminating difficulties of dialogue itself. The result is a kind of awkward duet in which two thinkers and practitioners accommodate, interrupt, and perplex each other in an attempt to say something about what listening means. ",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0553/5950/4572/products/UneasyListening_860x.jpg?v=1654640113",
      price: 18.0,
      inventory: 750,
      isRare: false,
    }),
    Book.create({
      title: "Huts, Temples, Castles",
      author: "Ursula Schulz-Dornburg",
      description:
        "In the wake of the Second World War, aiming to occupy the children rampaging streets and parks, the City of Amsterdam founded Jongensland, a space where boys (and the occasional, officially disallowed girl) could play, build, create, and destroy, largely without supervision. Located on an island accessible only by rowboat, Jongensland grew into a sprawling settlement built experimentally from scrap materials by its young inhabitants. Here, children would cook food, raise animals, build fires, and trade with each other. Without adult intervention, they relied on shared resourcefulness and collaborative ingenuity. In 1969, when the architectural photographer Ursula Schulz-Dornburg moved to Düsseldorf with her two young children, she discovered Jongensland the other side of the border from Germany’s strictly regulated playgrounds. Fas­cinated by the improvised buildings where her children would play, she made extensive photographs capturing them being constructed, used, demolished, and reshaped. Her images capture an intuitive architectural intelligence and capture a genre of vernacular construction with its own conventions and inno­vations, one which illuminates the role of imagination in defining a building’s identity and purpose. This book presents Schulz-Dornburg’s largely unseen series alongside an ex­tended alongside an extended essay by architectural historian Tom Wilkinson reflecting on the architectural themes and lessons Jongensland continues to offer.",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0553/5950/4572/products/web_UrsulaSchulz-Dornburg_cover_860x.jpg?v=1655142851",
      price: 50.0,
      inventory: 460,
      isRare: false,
    }),
    Book.create({
      title: "Tales of Estrangement",
      author: "Effie Paleologou",
      description:
        "This collection evokes a mysterious and fragmented cityscape of two places – London and Athens – both of which artist Effie Paleologou has come to regard as almost home. Working nocturnally, when identities become blurred and indeterminate, Paleologou conjures a third fictional staging that she has become all the more attached to. Her images are infused with a sense of the familiar but are equally beholden to the states of uncertainty and vulnerability that arise in alternative realities. Stripped of inhabitants this hybrid city appears silent yet strangely resonant. Paleologou offers a modern mapping of transitory and liminal spaces. She is drawn to train stations, hotels, carparks, seaports and airports, sites in which encounters, departures, disappearances, and endings unfold perpetually. Shadows and artificial light cast across urban geometries reveal phantasmagoric scenes and uncanny moods. If this is home, there is a restless theatre at play too. Alienation and belonging belong together here. With essays by Brian Dillon and Iain Sinclair.",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0553/5950/4572/products/TailesofEstrangement_1100x.jpg?v=1654636428",
      price: 275.0,
      inventory: 60,
      isRare: true,
    })
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
