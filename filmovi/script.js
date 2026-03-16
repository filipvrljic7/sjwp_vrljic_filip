const movieData = {
  serije: [
    {
      title: "Breaking Bad",
      year: "2008",
      duration: "5 sezona",
      genre: "Krimi, Drama, Triler",
      director: "Vince Gilligan",
      actors: "Bryan Cranston, Aaron Paul, Anna Gunn",
      rating: "9.5",
      plot: "Profesor hemije Walter White ulazi u svijet proizvodnje metamfetamina nakon što sazna da boluje od raka.",
      description: "Jedna od najcjenjenijih serija svih vremena, poznata po vrhunskoj glumi, napetosti i razvoju likova.",
      image: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDItNWRlZS00N2Y4LWI2ZmYtNWQxOTM3NmUyY2U2XkEyXkFqcGc@._V1_.jpg"
    },
    {
      title: "Game of Thrones",
      year: "2011",
      duration: "8 sezona",
      genre: "Fantazija, Drama, Akcija",
      director: "David Benioff, D.B. Weiss",
      actors: "Emilia Clarke, Kit Harington, Peter Dinklage",
      rating: "9.2",
      plot: "Plemićke porodice vode krvave borbe za prijestolje u fantastičnom svijetu Westerosa.",
      description: "Epska fantasy serija puna političkih spletki, ratova, zmajeva i neočekivanih obrata.",
      image: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzItNzBjMy00NjYyLTlkOWQtODkzYzEzMTA3YmY0XkEyXkFqcGc@._V1_.jpg"
    },
    {
      title: "Stranger Things",
      year: "2016",
      duration: "4 sezone",
      genre: "Sci-Fi, Horor, Drama",
      director: "The Duffer Brothers",
      actors: "Millie Bobby Brown, Finn Wolfhard, David Harbour",
      rating: "8.7",
      plot: "Nestanak dječaka otkriva tajne eksperimente, natprirodne sile i paralelni svijet.",
      description: "Serija puna nostalgije 80-ih, misteriozne radnje i snažnog prijateljstva među likovima.",
      image: "https://m.media-amazon.com/images/M/MV5BZmQ4MzlkNGQtNmFlZi00ZjEzLWE2M2EtYzI5MjQ2MzgzNTQzXkEyXkFqcGc@._V1_.jpg"
    },
    {
      title: "The Walking Dead",
      year: "2010",
      duration: "11 sezona",
      genre: "Horor, Drama, Akcija",
      director: "Frank Darabont",
      actors: "Andrew Lincoln, Norman Reedus, Melissa McBride",
      rating: "8.1",
      plot: "Preživjeli pokušavaju opstati u svijetu uništenom zombi apokalipsom.",
      description: "Postapokaliptična serija fokusirana na borbu za preživljavanje i ljudske odnose pod pritiskom.",
      image: "https://m.media-amazon.com/images/M/MV5BM2NhZjU5ODEtNDA2Ni00NmE0LTk4M2UtOTM2MDZmYWQxMDc5XkEyXkFqcGc@._V1_.jpg"
    },
    {
      title: "Peaky Blinders",
      year: "2013",
      duration: "6 sezona",
      genre: "Krimi, Drama",
      director: "Steven Knight",
      actors: "Cillian Murphy, Paul Anderson, Sophie Rundle",
      rating: "8.8",
      plot: "Porodica Shelby širi svoj kriminalni imperij u Birminghamu nakon Prvog svjetskog rata.",
      description: "Stilski impresivna serija s odličnom atmosferom, muzikom i snažnim glavnim likom.",
      image: "https://m.media-amazon.com/images/M/MV5BMmIxNGRkYTEtOTRjOC00ZmQzLWE2ZjAtOTI3NDE1Mzk1ZWM3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },
    {
      title: "Sherlock",
      year: "2010",
      duration: "4 sezone",
      genre: "Krimi, Misterija, Drama",
      director: "Mark Gatiss, Steven Moffat",
      actors: "Benedict Cumberbatch, Martin Freeman",
      rating: "9.1",
      plot: "Moderna verzija slavnog detektiva Sherlocka Holmesa koji rješava složene slučajeve u Londonu.",
      description: "Brza, inteligentna i vizualno atraktivna serija s fantastičnim dijalozima.",
      image: "https://m.media-amazon.com/images/M/MV5BYzNiNzk4MTctZmMwYS00NjJiLWFlMmItZjM0MjQ0ZTUyNDQ1XkEyXkFqcGc@._V1_.jpg"
    },
    {
      title: "Dark",
      year: "2017",
      duration: "3 sezone",
      genre: "Sci-Fi, Misterija, Drama",
      director: "Baran bo Odar",
      actors: "Louis Hofmann, Lisa Vicari, Maja Schöne",
      rating: "8.7",
      plot: "Nestanak djece u malom gradu otkriva kompleksnu mrežu putovanja kroz vrijeme.",
      description: "Njemačka serija poznata po dubokoj priči, mračnoj atmosferi i složenim vremenskim linijama.",
      image: "https://m.media-amazon.com/images/M/MV5BZWMxZmQ4NzQtMzQyZS00Yjc5LWFmN2EtNWI0ZTA3Mzg3ZDNmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },
    {
      title: "The Crown",
      year: "2016",
      duration: "6 sezona",
      genre: "Biografija, Drama, Historija",
      director: "Peter Morgan",
      actors: "Claire Foy, Olivia Colman, Imelda Staunton",
      rating: "8.6",
      plot: "Prikaz života britanske kraljevske porodice kroz različite faze vladavine kraljice Elizabete II.",
      description: "Elegantna i raskošna serija s vrhunskom produkcijom i historijskim motivima.",
      image: "https://m.media-amazon.com/images/M/MV5BNDhlMThhZmMtNzNlMS00NjUxLWFjZjctZjA2ZmQ2NmUxNWE5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },
    {
      title: "Money Heist",
      year: "2017",
      duration: "5 sezona",
      genre: "Krimi, Drama, Triler",
      director: "Álex Pina",
      actors: "Úrsula Corberó, Álvaro Morte, Itziar Ituño",
      rating: "8.2",
      plot: "Genijalni Profesor okuplja tim za najveću pljačku u historiji Španije.",
      description: "Napeta serija puna obrata, emocionalnih scena i pametno osmišljene radnje.",
      image: "https://m.media-amazon.com/images/M/MV5BY2QzY2I4MGUtYjAxZS00MjQ5LTljMmEtNzlmOTFiYzQ0NjA5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },
    {
      title: "The Last of Us",
      year: "2023",
      duration: "1 sezona",
      genre: "Drama, Sci-Fi, Akcija",
      director: "Craig Mazin, Neil Druckmann",
      actors: "Pedro Pascal, Bella Ramsey",
      rating: "8.7",
      plot: "U postapokaliptičnom svijetu krijumčar Joel vodi djevojčicu Ellie kroz opasnu Ameriku.",
      description: "Emotivna i mračna serija bazirana na slavnoj videoigri, s jakom atmosferom i odličnom glumom.",
      image: "https://m.media-amazon.com/images/M/MV5BZjgwM2NlZDUtMjRiOS00MzAzLWI4NWMtMmQ4OTRiNWQ0M2U1XkEyXkFqcGc@._V1_.jpg"
    }
  ],

  filmovi: [
    {
      title: "Inception",
      year: "2010",
      duration: "148 min",
      genre: "Sci-Fi, Akcija, Triler",
      director: "Christopher Nolan",
      actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page",
      rating: "8.8",
      plot: "Lopov koji krade tajne iz snova dobiva zadatak da usadi ideju u nečiju podsvijest.",
      description: "Pametan i vizualno spektakularan film koji istražuje svijet snova i stvarnosti.",
      image: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjI5OF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg"
    },
    {
      title: "Interstellar",
      year: "2014",
      duration: "169 min",
      genre: "Sci-Fi, Drama, Avantura",
      director: "Christopher Nolan",
      actors: "Matthew McConaughey, Anne Hathaway, Jessica Chastain",
      rating: "8.7",
      plot: "Tim astronauta putuje kroz crvotočinu kako bi pronašao novi dom za čovječanstvo.",
      description: "Emotivna i epska svemirska avantura s jakom naučnom i porodičnom pričom.",
      image: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDItNWRlZS00N2Y4LWI2ZmYtNWQxOTM3NmUyY2U2XkEyXkFqcGc@._V1_.jpg"
    },
    {
      title: "The Dark Knight",
      year: "2008",
      duration: "152 min",
      genre: "Akcija, Krimi, Drama",
      director: "Christopher Nolan",
      actors: "Christian Bale, Heath Ledger, Aaron Eckhart",
      rating: "9.0",
      plot: "Batman se suočava s anarhičnim Jokerom koji prijeti da uništi Gotham.",
      description: "Jedan od najboljih superhero filmova ikad, poznat po legendarnoj Joker interpretaciji.",
      image: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg"
    },
    {
      title: "Fight Club",
      year: "1999",
      duration: "139 min",
      genre: "Drama",
      director: "David Fincher",
      actors: "Brad Pitt, Edward Norton, Helena Bonham Carter",
      rating: "8.8",
      plot: "Nezadovoljni kancelarijski radnik upoznaje Tylera Durdena i osniva tajni borilački klub.",
      description: "Provokativan film koji se bavi identitetom, društvom i unutarnjim haosom čovjeka.",
      image: "https://m.media-amazon.com/images/M/MV5BMmEzNTYzYzUtNDliMC00NDdhLWFmNTEtYTEyZjQ2YjgxN2VlXkEyXkFqcGc@._V1_.jpg"
    },
    {
      title: "The Matrix",
      year: "1999",
      duration: "136 min",
      genre: "Sci-Fi, Akcija",
      director: "The Wachowskis",
      actors: "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss",
      rating: "8.7",
      plot: "Programer Neo otkriva da je svijet koji poznaje zapravo simulacija.",
      description: "Revolucionaran film koji je redefinirao sci-fi i akcijski žanr.",
      image: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3NTAtOTUwOC00ZjQxLWE0ODMtZjI0Y2NhNmY2N2Q1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },
    {
      title: "Gladiator",
      year: "2000",
      duration: "155 min",
      genre: "Akcija, Drama, Historijski",
      director: "Ridley Scott",
      actors: "Russell Crowe, Joaquin Phoenix, Connie Nielsen",
      rating: "8.5",
      plot: "Rimski general postaje gladijator nakon izdaje i bori se za osvetu.",
      description: "Epski spektakl s velikim bitkama, emocijom i snažnom pričom o časti.",
      image: "https://m.media-amazon.com/images/M/MV5BNjViNWQzNmUtYzA2MS00ZWYxLTlkYzEtYjAyN2ZiMWVlMGU1XkEyXkFqcGc@._V1_.jpg"
    },
    {
      title: "Avatar",
      year: "2009",
      duration: "162 min",
      genre: "Sci-Fi, Avantura",
      director: "James Cameron",
      actors: "Sam Worthington, Zoe Saldaña, Sigourney Weaver",
      rating: "7.9",
      plot: "Marinac ulazi u tijelo avatara i upoznaje svijet Pandore.",
      description: "Vizualno impresivan blockbuster poznat po revolucionarnoj tehnologiji i bogatom svijetu.",
      image: "https://m.media-amazon.com/images/M/MV5BYWY3MDZjN2YtMGU5Ni00YjNlLWI1MTUtMzQ3NjFkM2QxZmU2XkEyXkFqcGc@._V1_.jpg"
    },
    {
      title: "Titanic",
      year: "1997",
      duration: "194 min",
      genre: "Romansa, Drama",
      director: "James Cameron",
      actors: "Leonardo DiCaprio, Kate Winslet",
      rating: "7.9",
      plot: "Ljubavna priča dvoje mladih odvija se na slavnom brodu Titanic prije tragedije.",
      description: "Emotivan i legendaran film koji spaja veliku ljubavnu priču s historijskom katastrofom.",
      image: "https://m.media-amazon.com/images/M/MV5BMDdmZGJlMjQtMWYxMS00M2Q5LWE5ZWQtY2I0NDUxN2QzN2NhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },
    {
      title: "The Shawshank Redemption",
      year: "1994",
      duration: "142 min",
      genre: "Drama",
      director: "Frank Darabont",
      actors: "Tim Robbins, Morgan Freeman",
      rating: "9.3",
      plot: "Nevino osuđeni bankar pronalazi nadu i prijateljstvo unutar zatvorskih zidina.",
      description: "Moćna priča o nadi, prijateljstvu i ljudskoj izdržljivosti.",
      image: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtYjBlZS00N2RiLWI5YzAtNQ@@._V1_.jpg"
    },
    {
      title: "Joker",
      year: "2019",
      duration: "122 min",
      genre: "Krimi, Drama, Triler",
      director: "Todd Phillips",
      actors: "Joaquin Phoenix, Robert De Niro, Zazie Beetz",
      rating: "8.4",
      plot: "Usamljeni komičar Arthur Fleck polako tone u ludilo i postaje Joker.",
      description: "Mračan i psihološki snažan film o društvenoj izolaciji i raspadu ličnosti.",
      image: "https://m.media-amazon.com/images/M/MV5BOTNjZDIzMWQtZmQ5Yi00MmRmLTg2ODAtNzhjYjZiNjY0MGY4XkEyXkFqcGc@._V1_.jpg"
    }
  ],

  crtici: [
    {
      title: "The Lion King",
      year: "1994",
      duration: "88 min",
      genre: "Animacija, Avantura, Drama",
      director: "Roger Allers, Rob Minkoff",
      actors: "Matthew Broderick, Jeremy Irons, James Earl Jones",
      rating: "8.5",
      plot: "Mladi lav Simba mora prihvatiti svoju sudbinu i vratiti se da spasi kraljevstvo.",
      description: "Disneyjev klasik pun emocije, muzike i nezaboravnih likova.",
      image: "https://m.media-amazon.com/images/M/MV5BYTYxNGViNGEtYzFlNi00YTI1LWEzMmItZTNjMjRkZTI5NjM3XkEyXkFqcGc@._V1_.jpg"
    },
    {
      title: "Toy Story",
      year: "1995",
      duration: "81 min",
      genre: "Animacija, Komedija, Porodični",
      director: "John Lasseter",
      actors: "Tom Hanks, Tim Allen",
      rating: "8.3",
      plot: "Igračke ožive kad ljudi nisu prisutni, a rivalstvo Woodyja i Buzza pokreće avanturu.",
      description: "Prvi veliki potpuno CGI animirani film koji je obilježio generacije.",
      image: "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00MWFiLTllM2YtNDkzODVlODQ0Mzc5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },
    {
      title: "Frozen",
      year: "2013",
      duration: "102 min",
      genre: "Animacija, Avantura, Fantazija",
      director: "Chris Buck, Jennifer Lee",
      actors: "Kristen Bell, Idina Menzel, Josh Gad",
      rating: "7.4",
      plot: "Princeza Anna kreće u potragu za sestrom Elsom kako bi zaustavila vječnu zimu.",
      description: "Ogroman Disney hit s prepoznatljivim pjesmama i snažnim odnosom sestara.",
      image: "https://m.media-amazon.com/images/M/MV5BMjE0MTAzOTg3NV5BMl5BanBnXkFtZTgwMzQ5NjE1MDE@._V1_.jpg"
    },
    {
      title: "Finding Nemo",
      year: "2003",
      duration: "100 min",
      genre: "Animacija, Avantura, Komedija",
      director: "Andrew Stanton",
      actors: "Albert Brooks, Ellen DeGeneres",
      rating: "8.2",
      plot: "Riba klaun Marlin putuje oceanom kako bi pronašao svog izgubljenog sina Nema.",
      description: "Topla i zabavna priča o roditeljskoj ljubavi, hrabrosti i prijateljstvu.",
      image: "https://m.media-amazon.com/images/M/MV5BZWZlYmI1YjUtY2M3MS00ZTY1LTg0MGQtZDVhN2MxZjMxZTU0XkEyXkFqcGc@._V1_.jpg"
    },
    {
      title: "Shrek",
      year: "2001",
      duration: "90 min",
      genre: "Animacija, Komedija, Avantura",
      director: "Andrew Adamson, Vicky Jenson",
      actors: "Mike Myers, Eddie Murphy, Cameron Diaz",
      rating: "7.9",
      plot: "Mrzovoljni ogar Shrek kreće na putovanje da spasi princezu i vrati mir svom močvarnom domu.",
      description: "Duhovit animirani film koji ismijava bajkovite klišeje i osvaja svim uzrastima.",
      image: "https://m.media-amazon.com/images/M/MV5BN2FkMTRkNTQtYTI2OC00YThlLTk3MWMtOTNkN2IxYjM1Y2YxXkEyXkFqcGc@._V1_.jpg"
    },
    {
      title: "Coco",
      year: "2017",
      duration: "105 min",
      genre: "Animacija, Porodični, Fantazija",
      director: "Lee Unkrich",
      actors: "Anthony Gonzalez, Gael García Bernal",
      rating: "8.4",
      plot: "Dječak Miguel ulazi u Zemlju mrtvih kako bi otkrio porodičnu tajnu i slijedio svoj muzički san.",
      description: "Emotivna i vizualno predivna priča o porodici, sjećanju i muzici.",
      image: "https://m.media-amazon.com/images/M/MV5BYzBlN2NhNmYtYzk0ZS00M2QzLTgwYzAtZDdlYTY5YjI4MzE5XkEyXkFqcGc@._V1_.jpg"
    },
    {
      title: "Up",
      year: "2009",
      duration: "96 min",
      genre: "Animacija, Avantura, Drama",
      director: "Pete Docter",
      actors: "Edward Asner, Jordan Nagai",
      rating: "8.3",
      plot: "Starac Carl leti kućom uz pomoć balona i kreće u nevjerovatnu avanturu.",
      description: "Topla i dirljiva priča o snovima, gubitku i novim počecima.",
      image: "https://m.media-amazon.com/images/M/MV5BMTgyOTQ0NDU4Nl5BMl5BanBnXkFtZTcwMjQ5NzQ0Mg@@._V1_.jpg"
    },
    {
      title: "Inside Out",
      year: "2015",
      duration: "95 min",
      genre: "Animacija, Komedija, Porodični",
      director: "Pete Docter",
      actors: "Amy Poehler, Phyllis Smith, Bill Hader",
      rating: "8.1",
      plot: "Emocije u glavi djevojčice Riley pokušavaju joj pomoći da se nosi s velikim promjenama.",
      description: "Pametan i dirljiv crtani film koji emocije prikazuje na originalan i zabavan način.",
      image: "https://m.media-amazon.com/images/M/MV5BMDcyNTc1NjMtNjY5My00MDRhLWE0MjQtODQxYjFlMWY1YTYxXkEyXkFqcGc@._V1_.jpg"
    },
    {
      title: "Moana",
      year: "2016",
      duration: "107 min",
      genre: "Animacija, Avantura, Porodični",
      director: "Ron Clements, John Musker",
      actors: "Auliʻi Cravalho, Dwayne Johnson",
      rating: "7.6",
      plot: "Hrabra djevojka Moana kreće preko oceana kako bi spasila svoj narod.",
      description: "Vizualno lijep Disney film s avanturom, muzikom i snažnom glavnom junakinjom.",
      image: "https://m.media-amazon.com/images/M/MV5BMjAwMDg3NDc2MV5BMl5BanBnXkFtZTgwOTk0NDU2OTE@._V1_.jpg"
    },
    {
      title: "Zootopia",
      year: "2016",
      duration: "108 min",
      genre: "Animacija, Komedija, Avantura",
      director: "Byron Howard, Rich Moore",
      actors: "Ginnifer Goodwin, Jason Bateman",
      rating: "8.0",
      plot: "Zečica policajka i lisac prevarant pokušavaju riješiti veliki slučaj u modernom gradu životinja.",
      description: "Zabavan, brz i pametan animirani film s jakom porukom o predrasudama.",
      image: "https://m.media-amazon.com/images/M/MV5BMTU0MTQzNjc4Nl5BMl5BanBnXkFtZTgwNzU1NzE3NzE@._V1_.jpg"
    }
  ],

  oscar: [
    {
      title: "Parasite",
      year: "2019",
      duration: "132 min",
      genre: "Triler, Drama",
      director: "Bong Joon Ho",
      actors: "Song Kang-ho, Lee Sun-kyun, Cho Yeo-jeong",
      rating: "8.5",
      plot: "Siromašna porodica se polako infiltrira u život bogate porodice, što vodi do šokantnih posljedica.",
      description: "Briljantan film koji spaja društvenu kritiku, humor i napetost. Osvajač Oscara za najbolji film.",
      image: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTctNDU5OS00MWJhLTk1NmEtYjY3MmM4MzhhNDQyXkEyXkFqcGc@._V1_.jpg"
    },
    {
      title: "Forrest Gump",
      year: "1994",
      duration: "142 min",
      genre: "Drama, Romansa",
      director: "Robert Zemeckis",
      actors: "Tom Hanks, Robin Wright, Gary Sinise",
      rating: "8.8",
      plot: "Jednostavan, dobrodušan čovjek nesvjesno postaje dio ključnih historijskih događaja Amerike.",
      description: "Topla, inspirativna i emotivna priča koja je osvojila publiku širom svijeta.",
      image: "https://m.media-amazon.com/images/M/MV5BOTI4MDNhYTctNzhlOC00NTg2LWFjZWItODgxM2I3OTM5MmNlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },
    {
      title: "The Godfather",
      year: "1972",
      duration: "175 min",
      genre: "Krimi, Drama",
      director: "Francis Ford Coppola",
      actors: "Marlon Brando, Al Pacino, James Caan",
      rating: "9.2",
      plot: "Priča o porodici Corleone i transformaciji Michaela Corleonea u mafijaškog vođu.",
      description: "Jedan od najvećih filmova svih vremena i klasik svjetske kinematografije.",
      image: "https://m.media-amazon.com/images/M/MV5BNzc5M2I2ZjYtM2EwOS00ZWQ2LTk1M2ItZWQxODMzZjA1NTFmXkEyXkFqcGc@._V1_.jpg"
    },
    {
      title: "Schindler's List",
      year: "1993",
      duration: "195 min",
      genre: "Biografija, Drama, Historijski",
      director: "Steven Spielberg",
      actors: "Liam Neeson, Ben Kingsley, Ralph Fiennes",
      rating: "9.0",
      plot: "Njemački industrijalac spašava više od hiljadu Jevreja tokom Holokausta.",
      description: "Duboko potresan i važan film koji se smatra jednim od najznačajnijih istorijskih ostvarenja.",
      image: "https://m.media-amazon.com/images/M/MV5BYWQ0OTdhNDUtYjRjMi00M2E2LTlkMWItMGQ3MTAzOWY2YjdmXkEyXkFqcGc@._V1_.jpg"
    },
    {
      title: "Gladiator",
      year: "2000",
      duration: "155 min",
      genre: "Akcija, Drama, Historijski",
      director: "Ridley Scott",
      actors: "Russell Crowe, Joaquin Phoenix",
      rating: "8.5",
      plot: "Izdani rimski general kreće putem osvete kroz arenu gladijatora.",
      description: "Veliki epski spektakl i Oscarom nagrađen film koji je obilježio svoju eru.",
      image: "https://m.media-amazon.com/images/M/MV5BNjViNWQzNmUtYzA2MS00ZWYxLTlkYzEtYjAyN2ZiMWVlMGU1XkEyXkFqcGc@._V1_.jpg"
    },
    {
      title: "Titanic",
      year: "1997",
      duration: "194 min",
      genre: "Drama, Romansa",
      director: "James Cameron",
      actors: "Leonardo DiCaprio, Kate Winslet",
      rating: "7.9",
      plot: "Romansa između Jacka i Rose odvija se na Titanicu prije njegovog tragičnog potonuća.",
      description: "Jedan od najpoznatijih Oscarom nagrađenih filmova svih vremena.",
      image: "https://m.media-amazon.com/images/M/MV5BMDdmZGJlMjQtMWYxMS00M2Q5LWE5ZWQtY2I0NDUxN2QzN2NhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },
    {
      title: "A Beautiful Mind",
      year: "2001",
      duration: "135 min",
      genre: "Biografija, Drama",
      director: "Ron Howard",
      actors: "Russell Crowe, Jennifer Connelly, Ed Harris",
      rating: "8.2",
      plot: "Život matematičkog genija Johna Nasha obilježen je briljantnošću i borbom sa mentalnom bolešću.",
      description: "Emotivna biografska drama o genijalnosti, ljubavi i unutrašnjoj borbi.",
      image: "https://m.media-amazon.com/images/M/MV5BZTk1ZjcxYTMtYmJlNC00N2QwLWE4YWMtNjFhZjcwOTQ0NWM3XkEyXkFqcGc@._V1_.jpg"
    },
    {
      title: "The Departed",
      year: "2006",
      duration: "151 min",
      genre: "Krimi, Drama, Triler",
      director: "Martin Scorsese",
      actors: "Leonardo DiCaprio, Matt Damon, Jack Nicholson",
      rating: "8.5",
      plot: "Policajac pod krinkom i mafijaški doušnik pokušavaju razotkriti jedan drugoga.",
      description: "Napet i brutalan kriminalistički film koji je Scorseseju donio Oscar za režiju.",
      image: "https://m.media-amazon.com/images/M/MV5BMTI2OTYyNDUzNV5BMl5BanBnXkFtZTcwMTA1MTI1MQ@@._V1_.jpg"
    },
    {
      title: "12 Years a Slave",
      year: "2013",
      duration: "134 min",
      genre: "Biografija, Drama, Historijski",
      director: "Steve McQueen",
      actors: "Chiwetel Ejiofor, Michael Fassbender, Lupita Nyong'o",
      rating: "8.1",
      plot: "Slobodan crnac biva otet i prodan u ropstvo na američkom jugu.",
      description: "Težak, snažan i izuzetno važan film o brutalnoj stvarnosti ropstva.",
      image: "https://m.media-amazon.com/images/M/MV5BZmU0YzljNzEtODJiOS00N2E1LThlNDUtOTg0MzQzOGY2YzEyXkEyXkFqcGc@._V1_.jpg"
    },
    {
      title: "Everything Everywhere All at Once",
      year: "2022",
      duration: "139 min",
      genre: "Sci-Fi, Komedija, Drama",
      director: "Daniel Kwan, Daniel Scheinert",
      actors: "Michelle Yeoh, Ke Huy Quan, Stephanie Hsu",
      rating: "7.8",
      plot: "Vlasnica praonice rublja otkriva da mora spasiti multiverzum dok se bori s porodičnim problemima.",
      description: "Originalan, haotičan i emotivan film koji je osvojio više Oscara i oduševio publiku.",
      image: "https://m.media-amazon.com/images/M/MV5BYzRiY2QwMGEtZjhiZi00YjJmLWFhNzMtZjI2NGNkMzc1ODU4XkEyXkFqcGc@._V1_.jpg"
    }
  ]
};

const movieGrid = document.getElementById("movie-grid");
const detailsPanel = document.getElementById("details-panel");
const navButtons = document.querySelectorAll(".nav-btn");
const categoryTitle = document.getElementById("category-title");
const searchInput = document.getElementById("searchInput");

let currentCategory = "serije";

function renderMovies(category, searchTerm = "") {
  const items = movieData[category];
  const filtered = items.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  movieGrid.innerHTML = "";

  if (filtered.length === 0) {
    movieGrid.innerHTML = `
      <div class="no-results">
        <h3>Nema rezultata</h3>
        <p>Pokušaj s drugim nazivom.</p>
      </div>
    `;
    return;
  }

  filtered.forEach((item, index) => {
    const card = document.createElement("div");
    card.classList.add("movie-card");

    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}" class="movie-poster">
      <div class="movie-info">
        <h3>${item.title}</h3>
        <p class="movie-meta"><strong>Godina:</strong> ${item.year}</p>
        <p class="movie-meta"><strong>Žanr:</strong> ${item.genre}</p>
        <span class="badge">IMDb ${item.rating}</span>
      </div>
    `;

    card.addEventListener("click", () => renderDetails(item));
    movieGrid.appendChild(card);

    if (index === 0 && !searchTerm) {
      renderDetails(item);
    }
  });
}

function renderDetails(item) {
  detailsPanel.innerHTML = `
    <div class="details-content">
      <img src="${item.image}" alt="${item.title}">
      <h3>${item.title}</h3>
      <p><strong>Godina:</strong> ${item.year}</p>
      <p><strong>Trajanje:</strong> ${item.duration}</p>
      <p><strong>Žanr:</strong> ${item.genre}</p>
      <p><strong>Režiser:</strong> ${item.director}</p>
      <p><strong>Glumci:</strong> ${item.actors}</p>
      <p><strong>IMDb ocjena:</strong> ${item.rating}</p>
      <p><strong>Opis:</strong> ${item.description}</p>
      <p><strong>Radnja:</strong> ${item.plot}</p>
    </div>
  `;
}

navButtons.forEach(button => {
  button.addEventListener("click", () => {
    navButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    currentCategory = button.dataset.category;
    categoryTitle.textContent = button.textContent;
    searchInput.value = "";
    renderMovies(currentCategory);
  });
});

searchInput.addEventListener("input", (e) => {
  renderMovies(currentCategory, e.target.value);
});

renderMovies(currentCategory);