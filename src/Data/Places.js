
const places = [
  {
    id: 1,
    name: 'Araku Valley',
    state:'Andhra Pradesh',
    image: 'https://i.pinimg.com/736x/3c/4e/ef/3c4eef563172840ab3f119c043a38db3.jpg',
    Description: 'Araku Valley is a picturesque hill station in Andhra Pradesh, famous for its lush greenery, tribal culture, waterfalls, and scenic train journey through tunnels and coffee plantations.',
    LongDescription: 'Araku Valley, often called the "Ooty of Andhra Pradesh," is a serene hill station nestled in the Eastern Ghats at an altitude of about 900–1,300 meters. Located roughly 110 km from Visakhapatnam, it is renowned for its cool climate, dense forests, sprawling coffee plantations, and a vibrant display of tribal heritage.A major highlight of visiting Araku is the scenic train ride from Visakhapatnam, which passes through over 50 tunnels, bridges, and breathtaking valleys — making the journey just as memorable as the destination.The valley is home to indigenous tribes, and visitors can explore their rich traditions, dances, and crafts at the Tribal Museum. Nature lovers are drawn to nearby attractions such as the Borra Caves, Katiki Waterfalls, and coffee estates, including Indias first tribal-run organic coffee plantation.The coffee here is world-famous, with unique flavors thanks to the high altitude and organic farming. Araku’s annual coffee festival also attracts tourists and coffee connoisseurs from across the country.',
  },
  {
    id: 2,
    name: 'Borra Caves',
    state:'Andhra Pradesh',
    image: 'https://images.cnbctv18.com/wp-content/uploads/2023/06/Borra-Caves.jpg',
    Description: 'Borra Caves are stunning limestone caves in Andhra Pradesh, known for their breathtaking stalactites and stalagmites formations deep inside the Araku Valley.',
    LongDescription: 'Borra Caves, located in the Ananthagiri hills of the Araku Valley in Andhra Pradesh, are one of the largest and deepest caves in India, formed over millions of years. Nestled at an elevation of about 705 meters, these natural limestone caves are believed to be more than 150 million years old.The caves feature extraordinary stalactites and stalagmites, shaped by the continuous flow of water through limestone, creating incredible formations that resemble animals, gods, and human shapes — all lit up with vibrant artificial lighting that enhances the magical atmosphere.A natural stream flows through the cave, adding to the mystique. According to local legend, a cow once fell into the caves, and upon rescue, a Shivalinga was discovered inside — making this spot sacred for many devotees.'

  },
   {
    id: 3,
    name: 'Lambasingi',
    state:'Andhra Pradesh',
    image:'https://www.noblehousetours.com/wp-content/uploads/2017/10/the-kashmir-of-south-india.jpg',
    Description: 'Lambasingi is a cool hill station in Andhra Pradesh, known as the “Kashmir of Andhra Pradesh” for its chilly climate and misty landscapes.',
    LongDescription: 'Lambasingi is a quaint village nestled in the Eastern Ghats of Andhra Pradesh, famous for being one of the few places in South India that experiences snowfall during winter. Often called the “Kashmir of Andhra Pradesh,” Lambasingi offers a serene escape with its dense forests, rolling hills, and cool climate.The region is rich in biodiversity, with many rare species of flora and fauna, making it a favorite spot for nature enthusiasts and bird watchers. Lambasingi’s peaceful environment, scenic trekking trails, and charming tribal culture add to its allure.Visitors can explore nearby waterfalls, coffee plantations, and the lush greenery that covers the hills, making it an ideal destination for eco-tourism and adventure.',


  },
  {
    id: 4,
    name: 'Ooty',
    state:'Tamil Nadu',
    image: 'https://s3.india.com/wp-content/uploads/2024/07/Historical-Places-To-Visit-In-Ooty.jpg',
    Description: 'Ooty, also known as Udhagamandalam, is a popular hill station in Tamil Nadu famed for its tea gardens, cool climate, and scenic beauty.',
    LongDescription: 'Ooty is one of the most famous hill stations in South India, located in the Nilgiri Hills of Tamil Nadu. Known as the “Queen of Hill Stations,” it attracts visitors with its sprawling tea plantations, rolling hills, and pleasant weather throughout the year.The town boasts attractions like the Ooty Botanical Gardens, which showcase exotic plants and flowers, and the Ooty Lake, perfect for boating and picnics. The Nilgiri Mountain Railway, a UNESCO World Heritage site, offers a charming train journey through misty hills and picturesque landscapes.Ooty’s charming colonial architecture, bustling markets, and delicious local cuisine add to the experience, making it a must-visit destination for nature lovers, honeymooners, and travelers seeking tranquility.',
  },
  {
    id: 5,
    name: 'Kodaikanal',
    state:'Tamil Nadu',
    image:'https://static.toiimg.com/photo/msid-91933435,width-96,height-65.cms',
    Description: ' Kodaikanal is a charming hill station in Tamil Nadu known for its cool climate, beautiful landscapes, and serene lakes.',
    LongDescription:'Kodaikanal, often called the “Princess of Hill Stations,” is a picturesque hill town located in the Palani Hills of Tamil Nadu. It’s famous for its misty valleys, lush greenery, and pleasant climate, making it a favorite getaway from the heat of the plains.The town offers a variety of attractions including the tranquil Kodaikanal Lake, where visitors can enjoy boating and cycling around its perimeter. The Coaker’s Walk offers breathtaking panoramic views of the valleys below, while the Pillar Rocks and Bear Shola Falls are popular nature spots. Kodaikanal is also known for its botanical gardens and star-gazing points, attracting nature lovers and adventure seekers alike.The local culture, cozy cafes, and vibrant markets add to the charm, making Kodaikanal a perfect blend of nature, adventure, and relaxation.'
  },
  {
    id: 6,
    name: 'Rameswaram',
    state:'Tamil Nadu',
    image:'https://www.ecorentacar.com/wp-content/uploads/2025/08/Rameshwaram-Temple.jpg',
    Description: 'Rameshwaram is a sacred pilgrimage town in Tamil Nadu, famous for the Ramanathaswamy Temple and its association with the epic Ramayana.',
    LongDescription: 'Rameshwaram is a revered temple town located on Pamban Island in Tamil Nadu. It holds immense religious significance in Hindu mythology as one of the Char Dham pilgrimage sites and is closely linked to the epic Ramayana. According to legend, Lord Rama built a bridge (Ram Setu) from Rameshwaram to Lanka to rescue his wife Sita from the demon king Ravana.The town is home to the magnificent Ramanathaswamy Temple, renowned for its long corridors, intricate architecture, and sacred water tanks where pilgrims perform ritual baths. The temple’s 22 holy wells are believed to have medicinal properties and are an essential part of the pilgrimage experience.Rameshwaram also offers beautiful coastal views, serene beaches, and spiritual calm, making it a unique blend of cultural, historical, and natural attractions.',
  },
  {
    id: 7,
    name: 'Adiyogi',
    state:'Tamil Nadu',
    image:'https://thumbs.dreamstime.com/b/statue-lord-shiva-adiyogi-temple-built-isha-foundation-coimbatore-india-metre-tall-designed-sadhguru-jaggi-107061157.jpg',
    Description: 'Adiyogi is a magnificent 112-foot statue of Lord Shiva located at the Isha Yoga Center in Coimbatore, Tamil Nadu, symbolizing the source of yoga.',
    LongDescription: 'The Adiyogi statue, situated at the Isha Yoga Center near Coimbatore, Tamil Nadu, is a breathtaking 112-foot tall sculpture dedicated to Lord Shiva, who is revered as the first yogi (Adi Yogi) and the originator of yoga. This iconic statue was unveiled by Sadhguru Jaggi Vasudev, founder of the Isha Foundation, to inspire people to embrace the science and spirit of yoga.The statue represents the profound philosophy of yoga and its transformative power for physical, mental, and spiritual wellbeing. The location around Adiyogi is serene and offers visitors a peaceful environment to meditate, participate in yoga programs, and explore the expansive Isha Yoga Center.Adiyogi is recognized by the Guinness World Records as the largest bust sculpture in the world and has become a significant pilgrimage and tourist spot for those interested in spirituality, yoga, and Indian culture.',
  },
   {
    id: 8,
    name: 'Marina Beach',
    state:'Tamil Nadu',
    image:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Chennai_-_bird%27s-eye_view.jpg/1200px-Chennai_-_bird%27s-eye_view.jpg',
    Description: 'Marina Beach is the longest urban beach in India, located in Chennai, Tamil Nadu, known for its vibrant atmosphere and beautiful sunrise views.',
    LongDescription:'Marina Beach stretches over 13 kilometers along the Bay of Bengal in Chennai, Tamil Nadu. It is the longest natural urban beach in India and the second longest in the world. This iconic beach is a favorite spot for locals and tourists alike, offering a lively blend of cultural events, street food stalls, and recreational activities.Visitors can enjoy early morning walks while watching spectacular sunrises or relax on the sandy shore during the day. The beach is also famous for landmarks such as the Lighthouse, Anna Memorial, and MGR Memorial which are located nearby.The promenade is dotted with vendors selling snacks like sundal, murukku, and fresh coconut water, adding to the lively atmosphere. Marina Beach is an ideal place for families, couples, and photography enthusiasts. It also hosts numerous festivals and celebrations throughout the year, making it a cultural hub in Chennai.',
  },
    {
    id:9,
    name: 'Coorg',
    state:'Karnataka',
    image:'https://www.shutterstock.com/image-photo/scenic-kote-abbe-falls-coorg-600nw-2439266775.jpg',
    Description:'Known as the "Scotland of India," Coorg is a scenic hill station in Karnataka famous for its coffee plantations, misty hills, and vibrant culture.',
    LongDescription: 'Coorg, officially called Kodagu, is a beautiful hill district in Karnataka, nestled amidst the Western Ghats. Often dubbed the "Scotland of India" for its lush greenery, rolling hills, and cool climate, Coorg is a top destination for nature lovers and adventure seekers alike.The region is renowned for its sprawling coffee plantations, which give the area a unique aroma and charm. Visitors can explore vast estates, learn about coffee processing, and enjoy freshly brewed local coffee.Coorg is also home to stunning waterfalls such as Abbey Falls and Iruppu Falls, scenic trekking trails in Tadiandamol (the highest peak in Kodagu), and the tranquil Nisargadhama Island on the Cauvery River. The area is rich in biodiversity with dense forests sheltering wildlife like elephants, deer, and exotic birds.The Kodava culture is distinct with vibrant traditional festivals, dance forms, and delicious cuisine that visitors get to experience. Coorg’s peaceful vibe, combined with its natural beauty and warm hospitality, makes it a perfect getaway.',
  },
   {
    id: 10,
    name: 'Munnar',
    state:'Kerala',
    image:'https://munnartourism.co.in/images/places-to-visit/headers/3-days-munnar-top-places-to-visit-header-munnar-tourism.jpg.jpg',
    Description: 'A breathtaking hill station nestled in Kerala’s Western Ghats, Munnar is famous for its endless tea plantations, cool climate, and tranquil landscapes.',
    LongDescription:'Munnar, located in the Idukki district of Kerala, is one of South India’s most beloved hill stations. Perched at about 1,600 meters (5,200 feet) above sea level in the Western Ghats, Munnar is renowned for its sprawling tea estates, rolling hills, and a climate that remains refreshingly cool throughout the year.Originally developed as a retreat for the British during colonial times, Munnar retains a nostalgic charm. The region is dotted with tea factories, scenic viewpoints, and lush valleys. Visitors are drawn to places like Eravikulam National Park, which shelters the endangered Nilgiri Tahr, and Anamudi Peak, the highest point in South India.Munnar is also home to Attukal, Lakkam, and Valara waterfalls, along with serene spots like Mattupetty Dam and Kundala Lake. The region blooms with color during the rare Neelakurinji flower season, which occurs once every 12 years, blanketing the hills in vibrant blue.',
  },
   {
    id: 11,
    name: 'Wayanad',
    state:'Kerala',
    image:'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQN0QLgXAG6FJNlk6sib3ZbNluA8olmPDQteKjU76bv5R8OrL8BfnNmu7I95fjTdE-dXiObsHNGMeI11LKeC-cd8Pw&s=19',
    Description: 'A lush hill district in Kerala, Wayanad is a blend of scenic landscapes, ancient history, wildlife, and spice plantations, offering a refreshing escape into nature.',
    LongDescription: 'Wayanad, located in the north-eastern part of Kerala, is a captivating hill station nestled amidst the Western Ghats. Known for its misty mountains, dense forests, and rich tribal heritage, Wayanad is a favorite destination for both nature lovers and adventure seekers.At an average altitude of 700 to 2100 meters, Wayanad boasts cool weather throughout the year and offers panoramic views, vibrant green tea and coffee estates, and gushing waterfalls. Among its major attractions are the Edakkal Caves, which feature prehistoric carvings dating back over 6,000 years, and Banasura Sagar Dam, the largest earthen dam in India.Wildlife lovers will enjoy the Wayanad Wildlife Sanctuary, which is part of the Nilgiri Biosphere Reserve and home to elephants, tigers, leopards, deer, and a variety of bird species. For those interested in trekking, the Chembra Peak trek, with its heart-shaped lake, is a must.',
    
  },
   {
    id: 12,
    name: 'Silent Valley National Park',
    state:'Kerala',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk9UriRKnrDy3Ittd4BG84zCs-FcCrR1QLfA&s',
    Description: 'Majestic waterfalls on the US-Canada border.',
    LongDescription: 'Silent Valley National Park, nestled in the Nilgiri Hills of Kerala’s Palakkad district, is one of the last remaining stretches of evergreen tropical rainforests in India. It forms part of the Western Ghats, a UNESCO World Heritage Site, and is known for its ecological purity, unspoiled wilderness, and unique biodiversity.The park spans over 89 square kilometers and is home to numerous endangered species, including the Lion-tailed Macaque, Nilgiri Langur, Malabar Giant Squirrel, and the elusive Tiger. It also hosts over 100 species of butterflies, 400 species of moths, and 292 species of birds including the Ceylon Frogmouth and the Great Indian Hornbill.The name “Silent Valley” comes from the perceived absence of the cicadas chirping, creating an unusual and profound silence in the forest. The Kunthi River, which originates from the Nilgiris, flows through the park with crystal-clear waters that have never been dammed, adding to the areas pristine appeal.',
  },
   {
    id: 13,
    name: 'Varkala Beach',
    state:'Kerala',
    image:'https://media.istockphoto.com/id/480488320/photo/varkala-beach.jpg?s=612x612&w=0&k=20&c=5SYA2c16CxBsFo_DHEM0nF21n3ZeUpImpYkqnGzHTUU=',
    Description: 'A pristine and untouched tropical rainforest in Kerala, Silent Valley National Park is a haven for biodiversity and a paradise for nature lovers and wildlife enthusiasts.',
    LongDescription: 'Varkala Beach, also known as Papanasam Beach, is a hidden gem located near Thiruvananthapuram in Kerala, India. It is the only beach in southern Kerala where cliffs are found adjacent to the Arabian Sea. These striking red laterite cliffs offer breathtaking views, making Varkala one of the most scenic and peaceful coastal destinations in India.The beach gets its name "Papanasam", meaning "wash away sins," due to the belief that a dip in its holy waters purifies the soul. A mix of spirituality and leisure, the beach is also home to the Janardana Swami Temple, a 2,000-year-old shrine perched above the cliff.Varkala Beach is not just for pilgrims or nature lovers—its also a hotspot for yoga retreats, Ayurvedic healing, and backpacker tourism. With cozy cliff-top cafés, surf schools, and souvenir shops lining the coast, it offers a perfect balance of relaxation and adventure.',
  },
   {
    id: 14,
    name: 'Charminar',
    state:'Telangana',
    image:'https://thumbs.dreamstime.com/b/famous-hyderabad-landmark-charminar-india-world-built-quli-qutb-shah-th-century-128124667.jpg',
    Description:'An iconic symbol of Hyderabad, the Charminar is a majestic 16th-century monument known for its four grand minarets and Indo-Islamic architecture.',
    LongDescription: 'Located in the heart of Hyderabad, Telangana, Charminar is one of the most recognized monuments in India, celebrated for its historical significance and stunning architecture. Built in 1591 by Sultan Muhammad Quli Qutb Shah, the founder of Hyderabad, the monument was erected to commemorate the end of a deadly plague and to mark the founding of the new city.The name "Charminar" literally means "Four Minarets" in Urdu, referring to the monuments four elegant towers rising 56 meters high. The structure is built in limestone and granite, showcasing a beautiful blend of Indo-Islamic and Persian architectural styles.Charminar is a square-shaped structure with four grand arches that open into four major streets, once the bustling center of commerce and culture. A spiral staircase within each minaret leads to the upper floors, offering a panoramic view of the old city of Hyderabad.Surrounded by vibrant markets like Laad Bazaar (famous for bangles and pearls), the area around Charminar is a sensory delight, teeming with food stalls, traditional shops, and cultural vibrance.',
  },
   {
    id: 15,
    name: 'Golconda Fort',
    state:'Telangana',
    image:'https://s7ap1.scene7.com/is/image/incredibleindia/golconda-fort-hyderabad-secunderabad-telangana-3-musthead-hero?qlt=82&ts=1726652909392',
    Description: 'A majestic citadel of South India, Golkonda Fort in Hyderabad is a remarkable blend of history, architecture, and acoustic marvels.',
    LongDescription: 'Located in the western part of Hyderabad, Telangana, Golkonda Fort is one of India’s most magnificent fortress complexes, known for its impressive architecture, military ingenuity, and rich history. Originally built during the Kakatiya dynasty in the 13th century, the fort rose to prominence under the Qutb Shahi dynasty in the 16th century.The name “Golkonda” is derived from "Golla Konda," meaning Shepherd’s Hill. The fort complex consists of massive granite walls, eight gateways, and 87 bastions, extending over 11 kilometers in circumference. It served as the capital of the Qutb Shahi kingdom and was once a flourishing center for diamond trade, especially famed for producing the world-renowned Koh-i-Noor and Hope diamonds.Golkonda is also famed for its acoustic system—a hand clap at the entrance can be heard clearly at the top of the hill nearly a kilometer away, a signal used to alert the royals in times of danger.',
  },
   {
    id: 16,
    name: 'Ramoji Film City',
    state:'Telangana',
    image:'https://i.pinimg.com/564x/aa/bf/7e/aabf7e9d294e584e4b1da69c2c0ce3e1.jpg',
    Description: 'A cinematic wonderland in Hyderabad, Ramoji Film City is the worlds largest integrated film studio complex, offering visitors a unique blend of filmmaking magic and entertainment.',
    LongDescription:'Situated in Hyderabad, Telangana, Ramoji Film City spans over 2,000 acres and holds the Guinness World Record as the largest film studio complex globally. Established in 1996 by media tycoon Ramoji Rao, this expansive facility serves as both a major film production hub and a popular tourist destination.Designed by art director Nitish Roy, the film city boasts over 500 sets, including replicas of historical monuments, urban landscapes, and diverse architectural styles. Visitors can explore themed attractions like the Eureka entertainment zone, enjoy live stunt shows, and take guided tours that showcase the behind-the-scenes of movie-making.Beyond its cinematic offerings, Ramoji Film City features lush gardens, amusement parks, and a variety of dining options, making it a comprehensive entertainment experience for all ages.',

  },
   {
    id: 17,
    name: 'Mysuru Palace',
    state:'Karnataka',
    image:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mysore_Palace_Morning.jpg/1200px-Mysore_Palace_Morning.jpg',
    Description: 'A grand royal residence in the heart of Mysuru, the Mysuru Palace is a majestic blend of Indo-Saracenic architecture and royal heritage, captivating millions with its opulence and history',
    LongDescription:'The Mysuru Palace, also known as the Amba Vilas Palace, is one of the most iconic landmarks in Karnataka and one of the most visited palaces in India. Located in the city center of Mysuru (Mysore), this architectural masterpiece was the seat of the Wadiyar dynasty, who ruled the Kingdom of Mysore for centuries.Rebuilt in 1912 after the previous wooden structure was destroyed by fire, the present palace is designed in the Indo-Saracenic style, incorporating elements of Hindu, Muslim, Rajput, and Gothic architecture. The palace is renowned for its intricate carvings, stained glass ceilings, marble floors, and massive Durbar Hall. Its grandeur is further elevated by the golden throne, ornate arches, and beautiful paintings depicting royal events and Hindu mythology.One of the palace’s most enchanting attractions is its illumination at night, where over 97,000 bulbs light up the façade every Sunday and during the Dasara festival, turning the entire structure into a dazzling spectacle.Visitors can explore royal halls, weapon collections, courtyards, temples, and lush gardens inside the palace premises.',
    },
   {
    id: 18,
    name: 'ISKON',
    state:'Karnataka',
    image:'https://cdn.abhibus.com/2024/06/Iskcon-Temple-Bangalore.jpg',
    Description:'A spiritual oasis in the heart of the city, ISKCON Temple Bangalore is a magnificent architectural marvel and one of the largest ISKCON temples in the world.',
    LongDescription:'Located in Rajajinagar, the ISKCON Sri Radha Krishna Temple in Bangalore is not only a place of worship but also a major cultural and spiritual hub. Built in 1997, it was inaugurated by then-President Dr. Shankar Dayal Sharma. The temple is dedicated to Lord Krishna and his consort Radha, and it is managed by the International Society for Krishna Consciousness (ISKCON).The temples architectural style is a beautiful fusion of traditional South Indian temple design and modern aesthetics, making it a unique landmark in the city. As you enter, youre welcomed by the soulful chants of the Hare Krishna mantra, spiritual music, and a serene atmosphere.Visitors can witness grand deity processions, attend enlightening lectures, and participate in bhajans and kirtans. The temple complex also features a Vedic museum, a cultural center, and a pure vegetarian restaurant named Higher Taste, known for its sattvic cuisine.',
  },
   {
    id: 19,
    name: 'Bandipur',
    state:'Karnataka',
    image: 'https://nijagunaresorts.com/wp-content/uploads/2024/08/Bandipur-Tiger-Reserve-Forest.jpg',
    Description: 'A pristine sanctuary in Karnataka, Bandipur National Park is a haven for wildlife enthusiasts and nature lovers, offering a glimpse into Indias rich biodiversity',
    LongDescription:'Located in the Chamarajanagar district of Karnataka, Bandipur National Park is one of Indias premier tiger reserves and forms a part of the Nilgiri Biosphere Reserve, alongside Nagarhole, Wayanad, and Mudumalai. Once a private hunting ground for the Mysore Maharajas, it was declared a national park in 1974 and is now a protected area under Project Tiger.Spread over 874 square kilometers, Bandipur is home to a wide variety of flora and fauna. It shelters endangered species like the Royal Bengal Tiger, Asian Elephant, Indian Gaur, Sloth Bear, and numerous species of deer, birds, and reptiles. The park’s landscape is dotted with deciduous forests, grassy meadows, and dry scrub, making it ideal for safari drives and photography.Visitors can explore the park via jeep safaris and minibus rides, which offer an immersive experience into the wild. The best time to visit is between October and March when the weather is pleasant and wildlife sightings are more frequent.Bandipur not only contributes to conservation but also allows tourists to connect with nature in its raw, untamed beauty.',
  },
   {
    id: 20,
    name: 'Jog Falls',
    state:'Karnataka',
    image: 'https://images.unsplash.com/photo-1553679813-b437b57c08f1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8am9nJTIwZmFsbHMlMkMlMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D',
    Description: 'One of India’s highest and most majestic waterfalls.',
    LongDescription: 'Jog Falls, located in the Shimoga district of Karnataka, is one of the highest plunge waterfalls in India, dropping from a height of 830 feet (253 meters). Formed by the Sharavathi River, the falls split into four distinct cascades—Raja, Rani, Roarer, and Rocket—each adding its own unique beauty to the spectacle. During the monsoon season, Jog Falls becomes a roaring torrent of water, creating a mesmerizing sight and a thunderous roar that echoes through the valley. The surrounding area offers viewpoints, trekking opportunities, and a deep gorge that adds to the dramatic landscape. Recognized as a major tourist attraction in South India, Jog Falls draws nature lovers, adventure seekers, and photographers who come to witness the sheer power and beauty of this natural marvel.',
  },

  
];

export default places;



