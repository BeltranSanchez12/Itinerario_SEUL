// Full itinerary data extracted from PDF
window.ITINERARY = {
  meta: {
    title: "Seúl 2026",
    subtitle: "Itinerario familiar · 8 personas",
    dates: "12 — 17 mayo 2026",
    base: "Apartamento en Hongdae (Mapo-gu)",
    star: "Festival de Farolillos de Loto · Sábado 16",
    exchange: "1 € ≈ 1.450 KRW (mayo 2026)"
  },

  days: [
    {
      n: 1, dow: "Mar", date: "12 may", neighborhood: "Hongdae · Yeonnam",
      title: "Llegada y aterrizaje en el barrio",
      summary: "Aterrizaje suave. Solo descansar, paseo cerca del apartamento y cena temprana. La idea es no forzar y resetear el jet lag durmiendo a hora coreana esa misma noche.",
      walked: "~3 km",
      schedule: [
        { time: "10:50", act: "Aterrizaje ICN T1 — vuelo EY 0822 desde Abu Dabi", area: "Incheon", cost: "—", note: "Maletas, baño, agua. Margen 60-90 min." },
        { time: "12:30", act: "Comprar T-money en 7-Eleven aeropuerto + AREX", area: "Incheon → Hongik", cost: "~5 €/p", note: "AREX 'All Stop' (no Express): 53 min, 4.500 KRW" },
        { time: "13:30", act: "Llegada apartamento Hongdae", area: "Hongdae", cost: "—", note: "Check-in, deshacer maletas, ducha" },
        { time: "16:30", act: "Paseo Yeonnam-dong + Gyeongui Line Forest Park", area: "Yeonnam-dong", cost: "Gratis", note: "El 'Yeontral Park' — plano, cafeterías indie" },
        { time: "18:00", act: "Cena: chimaek (pollo+cerveza) o BBQ suave", area: "Hongdae", cost: "20-25 €/p", note: "Yoogane o Jokbal Yongmun" },
        { time: "20:30", act: "A casa, intentamos dormir 7-8 h", area: "Hongdae", cost: "—", note: "Crucial para reset del jet lag" }
      ],
      stops: [
        {
          name: "Aeropuerto Incheon T1", kr: "인천공항 제1터미널",
          desc: "<strong>TRUCO T-money:</strong> compramosla en el 7-Eleven del terminal de llegadas y cargamos ya 30.000 KRW (~22 €). Nnos cubre todo el viaje. La devolución de saldo es engorrosa — gastarla toda en compras los últimos días.",
          lat: 37.4602, lng: 126.4407, fallback_class: "airport",
          gallery: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Incheon_International_Airport_Terminal_1_at_Night.jpg/800px-Incheon_International_Airport_Terminal_1_at_Night.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Incheon_International_Airport_Terminal_1_Departure_Hall.jpg/800px-Incheon_International_Airport_Terminal_1_Departure_Hall.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Incheon_International_Airport_06.jpg/800px-Incheon_International_Airport_06.jpg"]
        },
        {
          name: "AREX 'All Stop' a Hongik Univ.", kr: "공항철도 일반열차",
          desc: "53 min, 4.500 KRW = ~3,30 €/p. El Express va a Seoul Station y obliga a transbordar con maletas — no compensa. Si el grupo está reventado, taxi van 8 plazas ~80-100 €.",
          lat: 37.5581082, lng: 126.9259574,
          place_id: "ChIJExW378KYfDUR8aFijbcqirQ",
          photo: "https://lh3.googleusercontent.com/place-photos/AJRVUZN8uM8zsA_x44bE8E9KgYXxR5uyAXrK2KoSLMpQBQsXV3XpBGcFRbTDQI3IOcZK82WQofvwNSVno6F7yknEhkQZltzbYg94J6HfRyCLH2YjpTaKik54zSDCez5VF-gBO1eUY1ym3UJDFeQz-LrF7KOQMQ=s4800-w800-h600",
          gallery: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/AREX_Train_at_Incheon_Airport.jpg/800px-AREX_Train_at_Incheon_Airport.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Hongik_Univ._Station_Platform.jpg/800px-Hongik_Univ._Station_Platform.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Seoul_Subway_Line_2_train.jpg/800px-Seoul_Subway_Line_2_train.jpg"]
        },
        {
          name: "Gyeongui Line Forest Park", kr: "경의선숲길",
          desc: "El 'Yeontral Park'. Antigua vía de tren reconvertida en parque lineal totalmente plano, lleno de cafeterías indie. A 10 min andando del apartamento. Si alguien está reventado, se queda — nadie obligado.",
          lat: 37.5662075, lng: 126.9192364,
          place_id: "ChIJH5tDs-WYfDURJGb8yuqKRwg",
          photo: "https://lh3.googleusercontent.com/place-photos/AJRVUZOc7jyzF4yWtHbZiBHNDA6DBT9vqJn0F9wS8qNpv5-50YKbE3EBCqHUn8OKIWyO4ZotgfnppWBNjEREiX9zU5aUs-FNSPf10YZD7Tn4oUDaiWIxshzLDNxDGD8k3fTfXwaJ7NYjkY0gOkbGkA=s4800-w800-h600",
          gallery: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Gyeongui_Line_Forest_Park_in_Yeonnam-dong.jpg/800px-Gyeongui_Line_Forest_Park_in_Yeonnam-dong.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Yeonnam-dong_Cafe_Street.jpg/800px-Yeonnam-dong_Cafe_Street.jpg"]
        }
      ],
      meals: [
        { type: "Cena · Principal", name: "Yoogane Hongdae", kr: "유가네 닭갈비", price: "15-20 €/p", note: "Cadena famosa de dak-galbi (pollo picante salteado con queso). Sirve grupos sin reserva, mesas con sillas, picante moderado controlable. Pillar mesa antes de las 19:00." },
        { type: "Cena · Alternativa", name: "Hongdae Jokbal Yongmun", kr: "홍대 족발집", price: "~22 €/p", note: "Jokbal (codillo) y bossam (cerdo en hojas). No picante, muy coreano." },
        { type: "Plan C ultraligero", name: "Cualquier kalguksu de barrio", kr: "칼국수", price: "~10 €/p", note: "Sopa de fideos hechos a mano. Reconfortante y blando para cena de jet lag." }
      ],
      tips: [
        { icon: "⚠️", text: "<strong>NO recomendado esta cena:</strong> marisco vivo, sannakji o cosas aventuradas. Mejor introducir la gastronomía gradualmente." },
        { icon: "💡", text: "Yeonnam-dong está a 10 min andando del apartamento. Plano y agradable para estirar piernas sin pretensión." }
      ]
    },
{
  n: 2, dow: "Mié", date: "13 may", neighborhood: "Jongno · Myeongdong",
  title: "Palacios, Bukchon y Myeongdong",
  summary: "El día clásico imprescindible. Cambio de guardia en el palacio principal, samgyetang icónico para almorzar, hanok village con truco anti-cuesta, paseo por Insadong, tarde-noche de compras y cena en Myeongdong, y cierre con las fuentes de colores en Banpo.",
  walked: "~9-11 km",
  schedule: [
    { time: "09:00", act: "Desayuno cerca del apartamento", area: "Hongdae", cost: "5-8 €/p", note: "Cafetería local o Paris Baguette" },
    { time: "09:30", act: "Metro Hongik (L2) → Samseong (L2) directo", area: "→ Gangnam", cost: "1.500 KRW", note: "35 min. Vamos primero al sur" },
    { time: "10:15", act: "Templo Bongeunsa (farolillos del festival)", area: "Gangnam", cost: "Gratis", note: "1h. Templo del s. VIII rodeado de rascacielos" },
    { time: "11:30", act: "Metro Samseong (L2) → Euljiro 3-ga → Anguk (L3)", area: "→ Anguk", cost: "1.500 KRW", note: "~30 min. Salida 1 de Anguk" },
    { time: "12:15", act: "Llegada Palacio Gyeongbokgung", area: "Jongno", cost: "3.000 KRW", note: "Gratis si vamos en hanbok (alquiler 15-25 €/p)" },
    { time: "13:00", act: "⭐ Cambio de guardia puerta interior (13:00)", area: "Jongno", cost: "—", note: "Pase del mediodía/tarde" },
    { time: "13:30", act: "Paseo palacio (Gyeonghoeru + Hyangwonjeong)", area: "Jongno", cost: "Incluido", note: "1h, no agotar — el palacio es enorme" },
    { time: "14:30", act: "⭐ Almuerzo: Tosokchon Samgyetang", area: "Jongno", cost: "~14 €/p", note: "5 min andando del palacio. Cola 20 min, sin reservas" },
    { time: "15:45", act: "Taxi a la zona alta de Bukchon", area: "→ Bukchon", cost: "5.000 KRW total", note: "Pedir 'Bukchon-ro 11-gil view'. Evita la cuesta" },
    { time: "16:00", act: "Bukchon Hanok Village (bajamos)", area: "Bukchon", cost: "Gratis", note: "Voz baja, gente vive ahí" },
    { time: "17:00", act: "Insadong + Ssamzigil", area: "Insadong", cost: "Compras", note: "Calle plana. Artesanía, hanji, té coreano" },
    { time: "18:00", act: "Metro Jongno 3-ga (L3) → Euljiro 1-ga (L2) — 1 parada", area: "→ Myeongdong", cost: "1.500 KRW", note: "También se puede andar (15 min, plano)" },
    { time: "18:30", act: "Myeongdong: compras + Olive Young flagship", area: "Myeongdong", cost: "Variable", note: "10% off a turistas con pasaporte. La calle se anima al anochecer" },
    { time: "19:45", act: "Catedral de Myeongdong (paseo rápido)", area: "Myeongdong", cost: "Gratis", note: "Neogótica, oasis tranquilo entre el bullicio" },
    { time: "20:15", act: "⭐ Cena: Myeongdong Kyoja (Bib Gourmand)", area: "Myeongdong", cost: "~9 €/p", note: "Walk-in, sirven en 5 min. Kalguksu + mandu" },
    { time: "21:15", act: "Metro Euljiro 1-ga (L2) → Express Bus Terminal (L3) + paseo a Banpo", area: "→ Banpo", cost: "1.500 KRW", note: "Salida 8-1, 15 min andando al césped sur" },
    { time: "21:45", act: "🌈 Banpo Bridge Rainbow Fountain (último pase)", area: "Banpo", cost: "Gratis", note: "Show de 20 min. Llevamos algo para sentarnos" },
    { time: "22:30", act: "Taxi/metro vuelta a Hongdae", area: "→ Hongdae", cost: "1.500-15.000 KRW", note: "Taxi más cómodo a esa hora" }
  ],
  stops: [
    {
      name: "Bongeunsa Temple", kr: "봉은사",
      desc: "Templo budista del s. VIII rodeado por los rascacielos de Gangnam. Buda gigante de 23 m en lo alto. Calmado, contraste muy fotogénico. Para esta semana ya tendrán los farolillos del festival colgados — especialmente bonito como apertura del día.",
      lat: 37.514852, lng: 127.0573766,
      place_id: "ChIJgZn6QWmkfDURaU3kwlecaEU",
      photo: "https://lh3.googleusercontent.com/place-photos/AJRVUZMP6E-WR1JcGd3Lc0p2kGokq_vjmfvPb-zyeVkw3kA-oK47CRBHcsb9Kxla3mcOPPBk3bGUGJFfVoQdGN6umyRo24rW5nkmI5p_HIEqqlID8G7to8hsc53Jf2hjj-y6YMsFWDDHihag3-wBZgo=s4800-w800-h600",
      gallery: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Bongeunsa_Temple_Buddha.jpg/800px-Bongeunsa_Temple_Buddha.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Bongeunsa_Temple_Seoul.jpg/800px-Bongeunsa_Temple_Seoul.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Bongeunsa_lanterns_for_Buddha_birthday.jpg/800px-Bongeunsa_lanterns_for_Buddha_birthday.jpg"]
    },
    {
      name: "Palacio Gyeongbokgung", kr: "경복궁",
      desc: "El palacio principal de la dinastía Joseon. Hay dos cambios de guardia: el grande de Gwanghwamun a las 10:00 y 14:00, y el de Heungnyemun a las 11:00 y 13:00. <strong>Recomendamos el de las 11:00</strong> — más margen y menos masa.",
      lat: 37.579617, lng: 126.977041,
      place_id: "ChIJod7tSseifDUR9hXHLFNGMIs",
      photo: "https://lh3.googleusercontent.com/place-photos/AJRVUZOcmqYnSdxQarwQxFVMTsplEg-MRjSxfUX_36kp2aZ1YB9jQhQOYyEhkpMs3mO0Hahhm52tLbOWtX7BzHLZS1gAxwn2eA4KxnlPKyXyEoaUhpo2HaTpDgMAGuEIzm8diO8eCQH4JlPGYayVw4Q=s4800-w800-h600",
      gallery: ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Korea-Seoul-Gyeongbokgung-Geunjeongjeon-01.jpg/800px-Korea-Seoul-Gyeongbokgung-Geunjeongjeon-01.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Royal_Guard_Changing_Ceremony_at_Gyeongbokgung.jpg/800px-Royal_Guard_Changing_Ceremony_at_Gyeongbokgung.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Gyeonghoeru_Pavilion_Gyeongbokgung.jpg/800px-Gyeonghoeru_Pavilion_Gyeongbokgung.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Hyangwonjeong_Pavilion_at_Gyeongbokgung_Palace.jpg/800px-Hyangwonjeong_Pavilion_at_Gyeongbokgung_Palace.jpg"]
    },
    {
      name: "Tosokchon Samgyetang", kr: "토속촌 삼계탕",
      desc: "El samgyetang más famoso de Seúl. Pollo entero relleno de arroz, ginseng, dátiles y ajo, en sopa cremosa nutritiva y nada picante. Walk-in, mesa rotación 30 min, sillas occidentales. Pedir clásico (15.000 KRW) o pollo negro (22.000 KRW).",
      lat: 37.5777786, lng: 126.9715909,
      place_id: "ChIJb5OOGL6ifDURU29ID3t8aOA",
      photo: "https://lh3.googleusercontent.com/place-photos/AJRVUZMv900juEdcU5t8iQfAG92k4PXQhGGgZw9p37aM0zIY6uttlq1_axmbnSVsPO8swN0YDHrUm7ejex4ZskX-pxGLwCe_8vfl9zCI7W7jK2FLCPGXS10FSVRqnobguMC1oqYz3vUZ_E5VFTxaqnWatPqf5A=s4800-w800-h600",
      gallery: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Korean_cuisine-Samgyetang-01.jpg/800px-Korean_cuisine-Samgyetang-01.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Samgyetang_2.jpg/800px-Samgyetang_2.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Korean.cuisine-Samgyetang-04.jpg/800px-Korean.cuisine-Samgyetang-04.jpg"]
    },
    {
      name: "Bukchon Hanok Village", kr: "북촌한옥마을",
      desc: "<strong>Truco para nuestro grupo:</strong> NO subimos andando — es una cuesta muy larga. Cogemos 2 taxis Kakao desde Tosokchon directamente al mirador alto ('Bukchon-ro 11-gil photo spot'). Bajamos dando un paseo, parando en Cafe Onion Anguk. Aquí vive gente — voz baja.",
      lat: 37.5814696, lng: 126.9849519,
      place_id: "ChIJT8H4r9qifDURmuXJ_6m6vM0",
      photo: "https://lh3.googleusercontent.com/place-photos/AJRVUZOm1F-plWHf9vC_X76tcZFXSwkFycLWEAdO2rU16_vM9TyrqJWpc0YfBJZEVLCRH8sBUjZjJm2iflZVvlgfO12eAo80hJPT2SOiAxZj2AOBMslxIW53ONUD3uH_DnPKkMV6PKy4L_PrzGhICyE=s4800-w800-h600",
      gallery: ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Bukchon_Hanok_Village_-_panoramio_%282%29.jpg/800px-Bukchon_Hanok_Village_-_panoramio_%282%29.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Bukchon_Hanok_Village_in_Seoul.jpg/800px-Bukchon_Hanok_Village_in_Seoul.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Bukchon-ro_11-gil_Bukchon_Hanok_Village.jpg/800px-Bukchon-ro_11-gil_Bukchon_Hanok_Village.jpg"]
    },
    {
      name: "Insadong · Ssamzigil", kr: "인사동 쌈지길",
      desc: "Calle de la artesanía coreana. Plana, ideal después de Bukchon. Ssamzigil es un edificio en espiral con tiendas de hanji (papel coreano), cerámicas, té, sellos personalizables. Bueno para regalos.",
      lat: 37.5743024, lng: 126.9849036,
      place_id: "ChIJQRutlcKifDURiMoaUPYmWX4",
      photo: "https://lh3.googleusercontent.com/place-photos/AJRVUZMjfE9oPhpgX5jOLW_fjtbyvtrDJzLobQudHP2ECVkobkbEjuREFglg4H7BjZPyQXAzJ6OkaxblkN5m8NoLta_9nwH_SMReZ3gukWd1gl2ZxvciF1RHvUtxcwT3-2NfOtbbscF9S0KO-IIzGxs=s4800-w800-h600",
      gallery: ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Insadong_street.jpg/800px-Insadong_street.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Ssamziegil_in_Insadong.jpg/800px-Ssamziegil_in_Insadong.jpg"]
    },
    {
      name: "Myeongdong & Olive Young flagship", kr: "명동 · 올리브영",
      desc: "Meca de compras: K-beauty, Daiso, Line Friends, Innisfree, Etude. <strong>Olive Young da 10% off a turistas con pasaporte.</strong> La calle peatonal se anima al anochecer — llegamos en el momento perfecto.",
      lat: 37.5636365, lng: 126.9826582,
      place_id: "ChIJU0xOY-WifDURDH3iL0g38FU",
      photo: "https://lh3.googleusercontent.com/place-photos/AJRVUZNXQz5LKXLR0EQYI3D8Gb8q_lgZCdGxR9PqBIjF-aZ8L5jVkVWHm-4_kFvHvBpz9YlD3KQkfCGkMNwvDpwQrFYlOFnFKbJaUZBLvFVx8XkIuMvgCjvXNBR9aV2PnQvVgqkrOGD9_BzQEFNfHk=s4800-w800-h600",
      gallery: ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Myeongdong_Shopping_Street_Seoul.jpg/800px-Myeongdong_Shopping_Street_Seoul.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Myeongdong_Night_Market.jpg/800px-Myeongdong_Night_Market.jpg"]
    },
    {
      name: "Catedral de Myeongdong", kr: "명동성당",
      desc: "Catedral neogótica, la católica más importante de Corea. Acceso libre, oasis tranquilísimo en medio del bullicio comercial. Hay misa diaria si alguien quiere ir.",
      lat: 37.5633851, lng: 126.987436,
      place_id: "ChIJs2hQTOWifDURk8inZqIttEQ",
      photo: "https://lh3.googleusercontent.com/place-photos/AJRVUZN2eL6PbzpAUqiLoUIaqXhZJnGkl5X0HLtC0rWCGgt03mvEheZbJqFZF0Vu6PAxTYHeqcKb5Sq4m_hGSZrELk4hl5ZhP5b4j04rbWjoYGox98dHHOe8R6NhYCgWKqtuzdGxlBquyO5qq9XS=s4800-w800-h600",
      gallery: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Myeongdong_Cathedral_in_Seoul.jpg/800px-Myeongdong_Cathedral_in_Seoul.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Myeongdong_Cathedral_at_night.jpg/800px-Myeongdong_Cathedral_at_night.jpg"]
    },
    {
      name: "Banpo Bridge Rainbow Fountain", kr: "반포대교 무지개분수",
      desc: "Cierre de la noche junto al río Han. Espectáculo de fuentes más largo del mundo (Guinness). Pase de las 21:00 (20 min). Metro Express Bus Terminal, salida 8-1, 15 min andando hasta Banpo Hangang Park (lado sur). <strong>Se cancela si llueve o sopla viento &gt;7 m/s.</strong>",
      lat: 37.5126335, lng: 126.9984783,
      place_id: "ChIJeVnK5X-hfDURv2fEEK-332M",
      photo: "https://lh3.googleusercontent.com/places/ANXAkqHNWXSy4-seTQfe_HIULGGFlxmNytBdo6lp2j12ZBCvKXtBNl5n1JrI0BSa9Ep87rhJjLYLyPQFPlxHFIur2FrC9w61OnZ4Lg=s4800-w800-h600",
      gallery: ["https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Banpo_Bridge_Rainbow_Fountain.jpg/800px-Banpo_Bridge_Rainbow_Fountain.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Banpo_Bridge_Moonlight_Rainbow_Fountain.jpg/800px-Banpo_Bridge_Moonlight_Rainbow_Fountain.jpg"]
    }
  ],
  meals: [
    { type: "Almuerzo principal", name: "Tosokchon Samgyetang", kr: "토속촌 삼계탕", price: "~14 €/p", note: "Walk-in, mesas de 4 (tendremos 2 mesas). Plato: ginseng chicken soup tradicional." },
    { type: "Cena principal", name: "Myeongdong Kyoja", kr: "명동교자", price: "~9 €/p", note: "Bib Gourmand. Walk-in, sirven en 5 min. Kalguksu de carne (8.000 KRW) + mandu para compartir. Bueno para grupo grande." },
    { type: "Cena alternativa", name: "Gogung Suragan", kr: "고궁수라간", price: "~14 €/p", note: "Bibimbap tradicional de Jeonju en cuenco de piedra caliente. Suave, ideal para mayores." },
    { type: "Cena alternativa 2", name: "Wang Bi Jib", kr: "왕비집", price: "~30 €/p", note: "BBQ Hanwoo en Myeongdong, mesas grandes con extractor, acepta grupos. Reservar." }
  ],
  tips: [
    { icon: "💡", text: "<strong>Hanbok:</strong> alquiler 15-25 €/p (3-4h) y entrada al palacio gratis. Para 8 contamos 90 min de preparación. Tiendas: Hanboknam, Oneday Hanbok." },
    { icon: "💡", text: "Olive Young da 10% de descuento a turistas con pasaporte — recordadlo al pagar." },
    { icon: "🚻", text: "Baños limpios: dentro del palacio, oficina de turismo de Insadong, Ssamzigil y Olive Young de Myeongdong." }
  ],
  gallery: ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Myeongdong_Shopping_Street_Seoul.jpg/800px-Myeongdong_Shopping_Street_Seoul.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Myeongdong_Night_Market.jpg/800px-Myeongdong_Night_Market.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Myeongdong_Cathedral_in_Seoul.jpg/800px-Myeongdong_Cathedral_in_Seoul.jpg"]
},
{
  n: 3, dow: "Jue", date: "14 may", neighborhood: "Gangnam · Centro · Ikseon-dong",
  title: "Gangnam, canal, mercados y hanoks",
  summary: "Mañana en Gangnam con la biblioteca Starfield y foto de Gangnam Style, almuerzo de gomtang histórico (Bib Gourmand desde 1939), paseo por el canal Cheonggyecheon, snacks callejeros en Gwangjang, arquitectura de Zaha Hadid en DDP al anochecer y cierre con cena en los hanoks reconvertidos de Ikseon-dong.",
  walked: "~10-11 km (todo plano)",
  schedule: [
    { time: "09:30", act: "Desayuno rápido en Hongdae", area: "Hongdae", cost: "8 €/p", note: "Pancake Originals (suflé) o café local" },
    { time: "10:15", act: "Metro Hongik (L2) → Samseong (L2) directo", area: "→ Gangnam", cost: "1.500 KRW", note: "35 min" },
    { time: "11:00", act: "COEX Mall + Starfield Library (foto + paseo)", area: "Gangnam", cost: "Gratis", note: "Biblioteca de 13 m, Kakao Friends store, Aland" },
    { time: "12:00", act: "Estatua Gangnam Style (foto rápida)", area: "Gangnam", cost: "Gratis", note: "5 min, salida 5 de Samseong" },
    { time: "12:15", act: "Metro Samseong (L2) → Euljiro 1-ga (L2)", area: "→ Myeongdong", cost: "1.500 KRW", note: "30 min. Salida 5 o 6" },
    { time: "13:00", act: "⭐ Almuerzo: Hadongkwan (gomtang Bib Gourmand)", area: "Myeongdong", cost: "~12 €/p", note: "Desde 1939. Walk-in only, dine-in only. Sirven en 2 min. Llegar antes de las 14:00 — cierra a las 16:00" },
    { time: "14:00", act: "Andar 10 min al norte → Cheonggye Plaza", area: "Centro", cost: "—", note: "Plano. Escultura roja-azul 'Spring'" },
    { time: "14:30", act: "Paseo canal Cheonggyecheon (1,5 km hacia el este)", area: "Centro", cost: "Gratis", note: "Bajar al nivel del agua, fresquito. Si veis cansancio, salimos antes y taxi" },
    { time: "15:45", act: "⭐ Snacks callejeros en Gwangjang Market", area: "Jongno", cost: "8-12 €/p", note: "Bindaetteok, mayak gimbap, tteokbokki. Ligero — la cena es en Ikseon" },
    { time: "16:45", act: "Andar 5 min a Ikseon-dong", area: "Ikseon-dong", cost: "—", note: "Paseo por los callejones de hanoks" },
    { time: "17:00", act: "Café en Ikseon-dong (Madang Flower Café u Onion)", area: "Ikseon-dong", cost: "~5 €/p", note: "Patio precioso, ideal para sentarse y descansar" },
    { time: "18:30", act: "Metro Jongno 3-ga (L1) → Dongdaemun (L1) — 1 parada", area: "→ Dongdaemun", cost: "1.500 KRW", note: "Para ver DDP al anochecer" },
    { time: "19:00", act: "Heunginjimun Gate + DDP (Zaha Hadid)", area: "Dongdaemun", cost: "Gratis", note: "Foto curvas LED. <strong>⭐ Aquí arranca el desfile de farolillos del sábado</strong> — reconocimiento de zona" },
    { time: "20:15", act: "Vuelta a Ikseon-dong (taxi o andando 15 min)", area: "→ Ikseon-dong", cost: "5.000 KRW", note: "Andando es plano y los callejones de noche están bonitos" },
    { time: "20:45", act: "⭐ Cena: Ikseon Aetteut o GUO", area: "Ikseon-dong", cost: "25-30 €/p", note: "Reservamos Catch Table 2-3 días antes" },
    { time: "22:15", act: "Metro Jongno 3-ga (L3 → L2) vuelta a Hongdae", area: "→ Hongdae", cost: "1.500 KRW", note: "30 min" }
  ],
  stops: [
    {
      name: "Starfield Library · COEX", kr: "별마당 도서관",
      desc: "Centro comercial subterráneo gigante con la biblioteca de 13 m de altura llena de libros. Gratis, foto inevitable. Al lado: Kakao Friends store, Aland (moda joven), food court enorme. Apertura del día antes de bajar a Myeongdong.",
      lat: 37.5100586, lng: 127.0601188,
      place_id: "ChIJu5Gg2hWkfDURl7NN7FpFnis",
      photo: "https://lh3.googleusercontent.com/place-photos/AJRVUZNeBbCYfJTh68vn2IDlvU4_hMmAiikKyt9-NFcy2jOahsKakstkKmrM61rOJv51o_0BJ_haoJBJ9c9AbhBO81QMYUit7TnhZcOlS9dsioGcN2ubq5sQMQQQFMKtU2g4lcDbwG8Bkqr-EzfE=s4800-w800-h600",
      gallery: ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Starfield_Library_COEX.jpg/800px-Starfield_Library_COEX.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Starfield_COEX_Mall_Library.jpg/800px-Starfield_COEX_Mall_Library.jpg"]
    },
    {
      name: "Hadongkwan ⭐", kr: "하동관",
      desc: "Gomtang (sopa de hueso de ternera) desde 1939, Bib Gourmand de Michelin. Solo caldo claro, ternera en lonchas y arroz — ajustáis sal y cebolleta al gusto. Cero picante, muy reconfortante. <strong>Walk-in only, dine-in only.</strong> Sirven en 2 minutos: se pide y paga en la entrada, luego te sientas. <strong>Cierra a las 16:00 (a veces antes si se acaba el caldo)</strong> — llegar como muy tarde a las 14:00. ~18.000 KRW.",
      lat: 37.5643946, lng: 126.9850185,
      place_id: "ChIJvZjTMWC9fDURxnT8dx21N3U",
      photo: "",
      gallery: ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Korean_soup-Seolleongtang-01.jpg/800px-Korean_soup-Seolleongtang-01.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Gomtang.jpg/800px-Gomtang.jpg"]
    },
    {
      name: "Cheonggye Plaza & Stream", kr: "청계광장 · 청계천",
      desc: "Arroyo restaurado en 2005 que atraviesa el centro. Empezamos en la plaza (escultura 'Spring' enorme) y bajamos al nivel del agua. 1,5 km hacia el este. Plano, sombra y bancos. Si veis cansancio, salimos antes y taxi.",
      lat: 37.5691686, lng: 126.9780272,
      place_id: "ChIJk8x74-yifDURXVhW9zZEvZk",
      photo: "https://lh3.googleusercontent.com/place-photos/AJRVUZPOxErn6PYqD0w362jZ4B7ylPSdeUfQqAjjeNStacQxibrDEre0ukGIg-D8WOkXwTwisns8JXv40N-R5HszUjPo3dBhfGLHwG3eoKH1FxmEF6EX5pvC9636AcQw6i3Bga_DK83gaqD2uTNfIHs=s4800-w800-h600",
      gallery: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Cheonggyecheon_stream_Seoul.jpg/800px-Cheonggyecheon_stream_Seoul.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Cheonggye_Plaza_Spring_sculpture.jpg/800px-Cheonggye_Plaza_Spring_sculpture.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Cheonggyecheon_at_night.jpg/800px-Cheonggyecheon_at_night.jpg"]
    },
    {
      name: "Gwangjang Market ⭐", kr: "광장시장",
      desc: "El mercado callejero más famoso de Seúl. Vamos a probar 3-4 cosas como snack, no a cenar (cena es en Ikseon-dong). <strong>Para 8: nos dividimos en 2 mesas de 4</strong> (es muy difícil sentar a 8 juntos). Algunos puestos cobran 'seat charge' a turistas — preguntamos antes.",
      lat: 37.5700398, lng: 126.9996036,
      place_id: "ChIJm3V0fu2ifDURRJ8IMUijVtY",
      photo: "https://lh3.googleusercontent.com/place-photos/AJRVUZNIXp11iS1ITR-liMqBwcf_Z9eiRGYiI40JmVdWiHta3sbndnMpDJHFnemY0Ikn8oIxUChp9KMJBE3Tb7PVXWqIKthnosgwb3MbrVfkKt3-LDcaHYmXj35nr9k9C1bx_oQ6u2Q6e05o4tIISSE=s4800-w800-h600",
      gallery: ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Gwangjang_Market_food_stalls.jpg/800px-Gwangjang_Market_food_stalls.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Bindaetteok_at_Gwangjang_Market.jpg/800px-Bindaetteok_at_Gwangjang_Market.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Mayak_Gimbap_Gwangjang.jpg/800px-Mayak_Gimbap_Gwangjang.jpg"]
    },
    {
      name: "Ikseon-dong Hanok Village", kr: "익선동",
      desc: "El barrio joya. Hanoks de los años 30 reconvertidos en cafeterías, restaurantes y boutiques de diseño. Más auténtico que Bukchon de noche, ambiente menos turístico y más coreano joven. Pasamos la tarde-noche aquí: café antes de DDP y cena de vuelta.",
      lat: 37.5737132, lng: 126.9901271,
      place_id: "ChIJe4Jbot2ifDUR2zWhruwyaow",
      photo: "https://lh3.googleusercontent.com/place-photos/AJRVUZOx5jj-1RDCPrNXHvz7_mWOIuWATPjFcNnSoAMtao8VshVFnCbZGGDVPU1tRcnWzfxsVL2AkYOyoIG1eIxFyRaLf7tPqDlXFITVAt9OnfEvspbPpMDzrTEcMzf7gw2RNeg1mawLN34n2Du0udM=s4800-w800-h600",
      gallery: ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Ikseon-dong_alley.jpg/800px-Ikseon-dong_alley.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Ikseon-dong_hanok_cafe.jpg/800px-Ikseon-dong_hanok_cafe.jpg"]
    },
    {
      name: "Heunginjimun & DDP", kr: "흥인지문 · 동대문디자인플라자",
      desc: "Puerta histórica del este de Seúl junto al DDP, edificio futurista de Zaha Hadid (aluminio curvado). Túneles LED al anochecer dan fotos brutales. <strong>⭐ AQUÍ ARRANCA EL DESFILE DE FAROLILLOS DEL SÁBADO.</strong> Os familiarizáis con la zona ahora.",
      lat: 37.5710717, lng: 127.0096571,
      place_id: "ChIJm6x0HTujfDURbf9iX8DtJ2A",
      photo: "https://lh3.googleusercontent.com/place-photos/AJRVUZNBRr2-q2qIRorjp6A6ZqZAB6wu9CoTCkPO1GMZseFjOn9QTU3XjSpSCyhqoXnVeQGw-YpJK_TooZpTVp2Gqpbb2OW1qyEZi0GUNZeRn2zODb9zKmW5eD_duMfDHIhCA1C5PdOZB8xS21e4=s4800-w800-h600",
      gallery: ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Dongdaemun_Design_Plaza_Seoul.jpg/800px-Dongdaemun_Design_Plaza_Seoul.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/DDP_at_night_LED_Roses.jpg/800px-DDP_at_night_LED_Roses.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Heunginjimun_Gate.jpg/800px-Heunginjimun_Gate.jpg"]
    }
  ],
  market_picks: [
    { name: "Bindaetteok", kr: "빈대떡", price: "~5 €", note: "Tortita de mungo crujiente. No picante." },
    { name: "Mayak gimbap", kr: "마약김밥", price: "~3 €", note: "'Kimbap-droga': mini rollos con mostaza dulce. Adictivo, no picante." },
    { name: "Yukhoe", kr: "육회", price: "~15 €", note: "Steak tartar coreano con pera y huevo. Solo si nos atrevemos con carne cruda." },
    { name: "Tteokbokki", kr: "떡볶이", price: "~5 €", note: "Pastel de arroz con salsa picante. Avisamos de tolerancia." },
    { name: "Sundae", kr: "순대", price: "~5 €", note: "Morcilla coreana. Auténtico pero no para todos." },
    { name: "Kalguksu de almeja", kr: "조개칼국수", price: "~6 €", note: "Por si todavía hay hambre." }
  ],
  meals: [
    { type: "Almuerzo principal", name: "Hadongkwan", kr: "하동관", price: "~12 €/p", note: "Bib Gourmand desde 1939. Gomtang clásico, suave y reconfortante. Walk-in only, dine-in only. <strong>Cierra a las 16:00.</strong>" },
    { type: "Backup almuerzo", name: "Jinjuhwoegwan", kr: "진주회관", price: "~10 €/p", note: "Si Hadongkwan ya cerró o cola muy larga: kongnamul gukbap (sopa de brotes de soja con arroz), clásico de City Hall, muy suave." },
    { type: "Cena principal", name: "Ikseon Aetteut", kr: "익선애뜻", price: "~25 €/p", note: "Cerdo a la parrilla con arroz, fusión moderna en hanok reconvertido. Reservamos Catch Table 2-3 días antes." },
    { type: "Cena alternativa", name: "GUO", kr: "구오", price: "~18 €/p", note: "Sheng jian bao viral en Seúl. Walk-in con cola, mesas pequeñas." },
    { type: "Cena alternativa 2", name: "Bistro Toma", kr: "토마", price: "~30 €/p", note: "Fusión japo-coreana muy estética. Reserva." }
  ],
  tips: [
    { icon: "⏰", text: "<strong>Hadongkwan cierra a las 16:00</strong> (a veces antes si se acaba el caldo). Llegar como muy tarde a las 14:00. Cerrado los domingos." },
    { icon: "💡", text: "<strong>Para 8 en Gwangjang:</strong> nos dividimos en 2 mesas de 4. Snack ligero — la cena es en Ikseon-dong." },
    { icon: "💡", text: "Reserva en Ikseon Aetteut por Catch Table con 2-3 días de antelación — el restaurante es pequeño." },
    { icon: "🚻", text: "Baños públicos: COEX, DDP y la oficina de turismo de Insadong (de paso)." }
  ]
},
    {
      n: 4, dow: "Vie", date: "15 may", neighborhood: "Suwon (excursión)",
      title: "Suwon · muralla y palacio anexo",
      summary: "Excursión de día a Suwon, ciudad amurallada al sur de Seúl. Recorremos Hwaseong Fortress (Patrimonio UNESCO, muralla de 5,7 km del s. XVIII) y el Hwaseong Haenggung (palacio anexo del rey Jeongjo). Almuerzo de galbi de Suwon — el famoso original. Vuelta a Seúl a media tarde y noche libre / cena tranquila en Hongdae.",
      walked: "~7-9 km",
      schedule: [
        { time: "09:00", act: "Desayuno en Hongdae", area: "Hongdae", cost: "8 €/p", note: "Cafetería local" },
        { time: "10:00", act: "Metro Hongik (L2) → Seoul Station (L1) → Suwon", area: "→ Suwon", cost: "~2.000 KRW", note: "Línea 1 directa, ~50-60 min. Alternativa: KTX desde Seoul Station, 30 min, ~5 €/p." },
        { time: "11:15", act: "Llegada Suwon Station + taxi a Paldalmun", area: "Suwon", cost: "~5 €", note: "Puerta sur de la muralla, punto de entrada" },
        { time: "11:30", act: "⭐ Hwaseong Fortress — paseo por la muralla", area: "Suwon", cost: "1.000 KRW", note: "Subir hasta Seojangdae (mirador oeste). 1h30 de paseo cómodo." },
        { time: "13:00", act: "⭐ Almuerzo: galbi de Suwon (Yeonpo Galbi)", area: "Suwon", cost: "~25 €/p", note: "El galbi de Suwon es el original. Reservar para 8 si se puede." },
        { time: "14:30", act: "Hwaseong Haenggung Palace", area: "Suwon", cost: "1.500 KRW", note: "Palacio anexo, más íntimo que Gyeongbokgung. ~1h." },
        { time: "15:45", act: "Hwaseong Trolley (opcional, si cansados)", area: "Suwon", cost: "~3 €/p", note: "Tranvía turístico que recorre la muralla. 30 min." },
        { time: "16:30", act: "Tren vuelta a Seúl", area: "→ Seúl", cost: "~2.000 KRW", note: "Línea 1 a Seoul Station + L2 a Hongik" },
        { time: "18:00", act: "Llegada Hongdae, descanso", area: "Hongdae", cost: "—", note: "Tarde libre, ducha si toca" },
        { time: "20:00", act: "Cena tranquila en Hongdae", area: "Hongdae", cost: "20-25 €/p", note: "Mapo Galmaegi (cerdo a la parrilla) o Itsushi Sushi (barra)." }
      ],
      stops: [
        {
          name: "Hwaseong Fortress", kr: "수원 화성",
          desc: "<strong>Patrimonio UNESCO.</strong> Muralla de 5,7 km construida en 1796 por el rey Jeongjo, mezcla técnicas defensivas coreanas, chinas y europeas. Cuatro puertas (Paldalmun al sur es la principal), torres de vigilancia, atalayas y el mirador de Seojangdae con vistas a toda la ciudad. Se puede recorrer entera en 2-3 h o solo el tramo sur en 1h30.",
          lat: 37.2882, lng: 127.0146, fallback_class: "monument",
          place_id: "ChIJrzFiGRPiZTURdaazt6S4cD0",
          photo: "https://commons.wikimedia.org/wiki/Special:FilePath/Paldal%20Gate%20-%20Hwaseong%20Fortress%20-%202008-10-17.JPG?width=800",
          gallery: ["https://commons.wikimedia.org/wiki/Special:FilePath/Paldal%20Gate%20-%20Hwaseong%20Fortress%20-%202008-10-17.JPG?width=800","https://commons.wikimedia.org/wiki/Special:FilePath/Jangan%20Gate%20-%20Hwaseong%20Fortress%20-%20Nighttime%20western%20view%20-%202008-10-23.JPG?width=800","https://commons.wikimedia.org/wiki/Special:FilePath/Hwaseong%20Fortress%20-%20UNESCO%20World%20Heritage%20-%20A%20perspective%20on%20architecture.jpg?width=800"]
        },
        {
          name: "Hwaseong Haenggung Palace", kr: "화성행궁",
          desc: "Palacio temporal anexo donde se alojaba el rey Jeongjo cuando visitaba la fortaleza y la tumba de su padre. Reconstruido a partir de 2003. Más íntimo y manejable que Gyeongbokgung. Los fines de semana hay representaciones de artes marciales tradicionales en la explanada principal.",
          lat: 37.2820, lng: 127.0143, fallback_class: "monument",
          place_id: "ChIJoR4GvNziZTURBCgSoQs_jX0",
          photo: "https://commons.wikimedia.org/wiki/Special:FilePath/Hwaseong%20Fortress%20-%20UNESCO%20World%20Heritage%20-%20King%27s%20palace.jpg?width=800",
          gallery: ["https://commons.wikimedia.org/wiki/Special:FilePath/Hwaseong%20Fortress%20-%20UNESCO%20World%20Heritage%20-%20King%27s%20palace.jpg?width=800","https://commons.wikimedia.org/wiki/Special:FilePath/Hwaseong%20Fortress%20-%20UNESCO%20World%20Heritage%20-%20Flags.jpg?width=800"]
        },
        {
          name: "Suwon Station → Paldalmun", kr: "수원역 · 팔달문",
          desc: "Llegamos a Suwon Station (L1). De ahí, taxi 5 min hasta Paldalmun (la puerta sur de la muralla, punto natural para empezar). Bus 11/13/36 también va, ~15 min. Vuelta igual: taxi a la estación y L1 a Seoul Station.",
          lat: 37.2659, lng: 127.0007, fallback_class: "transit",
          gallery: []
        }
      ],
      meals: [
        { type: "Almuerzo principal", name: "Yeonpo Galbi", kr: "연포갈비", price: "~25 €/p", note: "Galbi de Suwon — el original. Costilla marinada a la parrilla. Mesa con sillas, acepta grupos. 5 min andando del palacio." },
        { type: "Alternativa Suwon", name: "Bonsuwon Galbi", kr: "본수원갈비", price: "~30 €/p", note: "Otra referencia clásica del galbi de Suwon, más turística pero muy fiable. Reservar." },
        { type: "Cena Hongdae", name: "Mapo Galmaegi", kr: "마포갈매기", price: "~22 €/p", note: "Cerdo a la parrilla (diafragma), casero, popular entre coreanos." },
        { type: "Cena alternativa", name: "Itsushi Sushi", kr: "잇스시", price: "~15 €/p", note: "Sushi en barra hecho al momento, baratísimo. Mesa pequeña: vamos en 2 turnos." }
      ],
      tips: [
        { icon: "🚆", text: "<strong>Tren:</strong> Línea 1 desde Seoul Station es la opción simple (T-money funciona, sin reserva). KTX es 20 min más rápido pero requiere billete y solo compensa si vamos justos de tiempo." },
        { icon: "💡", text: "<strong>Si el grupo está cansado:</strong> nos centramos en Paldalmun + Haenggung + tranvía y saltamos el resto de la muralla. Las vistas mejores están en la zona sur (Paldalmun → Seojangdae)." },
        { icon: "🥩", text: "El <strong>galbi de Suwon</strong> es el plato de la ciudad — el rey Jeongjo lo popularizó. Si comemos galbi en algún sitio del viaje, mejor aquí que en Seúl." }
      ]
    },

    {
      n: 5, dow: "Sáb", date: "16 may", neighborhood: "Hongdae → Jongno", festival: true,
      title: "⭐⭐⭐ Desfile de Farolillos de Loto",
      summary: "EL día. Mañana muy tranquila y horizontal en Hongdae para reservar piernas. Tarde-noche es el evento estrella: el desfile que recorre 3,5 km de Jongno con miles de farolillos hechos a mano. PATRIMONIO INMATERIAL UNESCO.",
      walked: "~6 km + 2,5 h de pie",
      schedule: [
        { time: "10:30", act: "Brunch tortitas infladas en Hongdae/Yeonnam", area: "Hongdae", cost: "12 €/p", note: "Pancake Originals o Layered" },
        { time: "12:00", act: "Paseo Mangwon Market (15 min andando)", area: "Mangwon", cost: "Gratis", note: "Mercado local auténtico, no turístico" },
        { time: "13:30", act: "Almuerzo callejero en Mangwon", area: "Mangwon", cost: "8-10 €/p", note: "Tteokbokki, hotteok, mandu, fritos" },
        { time: "14:30", act: "Vuelta apartamento, descanso obligatorio", area: "Hongdae", cost: "—", note: "1-2h. Dormir si hace falta. Hidratarse" },
        { time: "16:30", act: "Metro Hongik → Anguk (transbordo Euljiro 3-ga)", area: "→ Anguk", cost: "1.500 KRW", note: "Salimos 15 min antes por si va lleno" },
        { time: "17:00", act: "⭐ Templo Jogyesa (lanterns de día)", area: "Insadong", cost: "Gratis", note: "Ver decoración del festival con luz" },
        { time: "18:00", act: "Cena rápida en Insadong (kalguksu o jjigae)", area: "Insadong", cost: "12 €/p", note: "Comida sencilla, después se llena" },
        { time: "19:00", act: "⭐⭐ INICIO DEL DESFILE — ubicaros en Jongno", area: "Jongno", cost: "Gratis", note: "Ver detalle abajo" },
        { time: "19-21:30", act: "Desfile (Heunginjimun → Jongno → Jogyesa)", area: "Jongno", cost: "Gratis", note: "Pasa lentamente; no hay que moverse" },
        { time: "21:30", act: "Daedong Hanmadang (post-fiesta) en Jonggak", area: "Jonggak", cost: "Gratis", note: "Pétalos rosas, ganggangsullae circle dance" },
        { time: "22:00", act: "Metro vuelta o taxi (metros saturados)", area: "→ Hongdae", cost: "1.500 / 15 €", note: "El metro a esa hora va lleno" }
      ],
      stops: [
        {
          name: "Mangwon Market", kr: "망원시장",
          desc: "Mercado local auténtico, no turístico, a 15 min andando del apartamento. Probar: chamchi gimbap, mandu fritos, hotteok dulce, fish cakes en caldo. Mucho más relajado que Gwangjang.",
          lat: 37.5559018, lng: 126.9062854,
          place_id: "ChIJA6gxryiZfDURJvmbeBvdz_Y",
          photo: "https://lh3.googleusercontent.com/places/ANXAkqGhYIujmfkBt_FdPTv-GGK914EuKaVOfIY1oTxAncSCnd0AicnB-8FypPsm80ESDTc2vUQOcoBC6N3qSJtRL6Gm9Y36mvrALJE=s4800-w800-h600",
          gallery: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Mangwon_Market_Seoul.jpg/800px-Mangwon_Market_Seoul.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Korean_street_food_tteokbokki.jpg/800px-Korean_street_food_tteokbokki.jpg"]
        },
        {
          name: "Templo Jogyesa", kr: "조계사",
          desc: "Cuartel general del budismo Jogye en Corea. La semana del festival lo llenan de <strong>miles de farolillos formando un techo de colores</strong>. Verlo de día nnos ahorra el atasco de la noche cuando termina el desfile aquí.",
          lat: 37.5738369, lng: 126.982202,
          place_id: "ChIJHYhJ5OmifDURMOSQ2D-6lFY",
          photo: "https://lh3.googleusercontent.com/place-photos/AJRVUZM7hcD-y1UpNkSYwo9rhp0TesHnzDRVrZAFg8W3QmoFc03k3CCZcC3rIaIFtVx79PJlY022o3Oc9cayVJ4jyEUS1NwdotbGbOb9u5jtrUBgRdTGaTQx9dsJaffE84R_NHD0M7TDo6ox8dh2=s4800-w800-h600",
          gallery: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Jogyesa_temple_lanterns.jpg/800px-Jogyesa_temple_lanterns.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Jogyesa_lotus_lanterns.jpg/800px-Jogyesa_lotus_lanterns.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Jogyesa_temple_Seoul.jpg/800px-Jogyesa_temple_Seoul.jpg"]
        },
        {
          name: "Inicio del desfile · Heunginjimun", kr: "흥인지문",
          desc: "Punto de salida del Gran Desfile a las 19:00. La ruta oficial: Heunginjimun → Jongno (avenida) → Templo Jogyesa. 3,5 km de recorrido, ~2h30 de duración. Pasa por Jonggak ~20:30, termina en Jogyesa ~21:30.",
          lat: 37.5710717, lng: 127.0096571,
          place_id: "ChIJm6x0HTujfDURbf9iX8DtJ2A",
          photo: "https://lh3.googleusercontent.com/place-photos/AJRVUZNBRr2-q2qIRorjp6A6ZqZAB6wu9CoTCkPO1GMZseFjOn9QTU3XjSpSCyhqoXnVeQGw-YpJK_TooZpTVp2Gqpbb2OW1qyEZi0GUNZeRn2zODb9zKmW5eD_duMfDHIhCA1C5PdOZB8xS21e4=s4800-w800-h600",
          gallery: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Yeondeunghoe_lotus_lantern_parade.jpg/800px-Yeondeunghoe_lotus_lantern_parade.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Lotus_lantern_festival_Seoul.jpg/800px-Lotus_lantern_festival_Seoul.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Yeondeunghoe_parade_lanterns.jpg/800px-Yeondeunghoe_parade_lanterns.jpg"]
        }
      ],
      festival_blocks: [
        { tag: "Eoulim Madang", time: "16:30-18:00", title: "Calentamiento", desc: "En el estadio de Dongguk University. Si queremos verlo desde dentro, vamos hacia 16:00. NO recomendado: cansa antes del desfile principal." },
        { tag: "Gran Desfile", time: "19:00-21:30", title: "El evento estrella", desc: "Salida desde Heunginjimun Gate. Pasa por Jonggak ~20:30 y termina en Jogyesa ~21:30." },
        { tag: "Daedong Hanmadang", time: "21:30-23:00", title: "Post-fiesta", desc: "En el cruce de Jonggak. Danza ganggangsullae circular, pétalos de loto rosa cayendo, música tradicional." }
      ],
      where_to_watch: [
        { kind: "good", title: "Recomendado", text: "Jongno entre Jonggak y Jongno 3-ga (parte intermedia). Llegamos 18:30, ocupamos acera, el desfile pasa hacia las 20:00. Ni la masa de la salida ni el embudo del final." },
        { kind: "good", title: "Cómodo (cafetería)", text: "Cafeterías con ventanal sobre Jongno (Hollys, Starbucks Jongno). Nnos dejan ver sentados pagando solo un café. Se llenan rápido." },
        { kind: "bad", title: "NO vamos a Heunginjimun", text: "El inicio: cuello de botella, multitud agresiva, mal vista para 2,5h de pie." },
        { kind: "bad", title: "NO vamos al final (Jogyesa)", text: "La masa es densa al final del recorrido." }
      ],
      tips: [
        { icon: "🎒", text: "<strong>Llevamos:</strong> cojín pequeño/manta para sentarnos en la acera, paraguas (el desfile sigue lloviendo), agua, snacks." },
        { icon: "♿", text: "<strong>Movilidad limitada:</strong> vamos pronto a buscar sitio (~18:00) y montamos camp. Una vez sentados no tenemos que movernos. Salida metro Jonggak (L1 salida 1) es la más cómoda." },
        { icon: "🍰", text: "<strong>Plan B:</strong> comprar el café en cafetería con vistas a Jongno y nos sentamos dentro — mejor incluso que la acera." }
      ]
    },

    {
      n: 6, dow: "Dom", date: "17 may", neighborhood: "Hongdae → ICN",
      title: "Compras última hora · vuelta",
      summary: "Vuelo a las 17:50. Tiempo para una mañana tranquila en Hongdae, comprar cosmética/regalos de última hora, comer ligero, recoger maletas y AREX al aeropuerto con margen.",
      walked: "~3 km",
      schedule: [
        { time: "07:30", act: "Salida temprana", area: "Hongdae", cost: "—", note: "Madrugón ligero para subir al Lotte Tower antes del aeropuerto" },
        { time: "08:00", act: "Metro Hongik (L2) → Jamsil (L2) directo", area: "→ Jamsil", cost: "1.500 KRW", note: "~45 min" },
        { time: "08:45", act: "Café rápido en Lotte World Mall", area: "Jamsil", cost: "5 €/p", note: "Mientras esperamos apertura" },
        { time: "09:30", act: "⭐ Seoul Sky · Lotte Tower (apertura)", area: "Jamsil", cost: "~25 €/p", note: "Reserva Klook previa. Vistas claras de mañana, sin colas" },
        { time: "11:00", act: "Metro Jamsil → Hongik vuelta", area: "→ Hongdae", cost: "1.500 KRW", note: "~45 min" },
        { time: "12:00", act: "Compras finales: Daiso, Olive Young, Artbox", area: "Hongdae", cost: "Variable", note: "Skincare, snacks, regalos" },
        { time: "13:00", act: "Almuerzo ligero (tonkatsu o ramen)", area: "Hongdae", cost: "10 €/p", note: "Cerca del apartamento" },
        { time: "13:30", act: "Vuelta apartamento, recoger maletas", area: "Hongdae", cost: "—", note: "Margen para imprevistos" },
        { time: "14:00", act: "Caminar a Hongik Univ. Station con maletas", area: "Hongdae", cost: "—", note: "5-10 min según calle" },
        { time: "14:15", act: "AREX 'All Stop' a Incheon T1", area: "→ ICN", cost: "4.500 KRW", note: "53 min directo, sin transbordos" },
        { time: "15:10", act: "Llegada ICN T1, check-in Etihad EY 0823", area: "Incheon", cost: "—", note: "Counter abre 3h antes (14:50)" },
        { time: "17:50", act: "✈️ Despegue a Abu Dabi", area: "ICN", cost: "—", note: "" }
      ],
      stops: [
        {
          name: "Seoul Sky · Lotte Tower ⭐", kr: "서울스카이 · 롯데월드타워",
          desc: "El rascacielos más alto de Corea (555 m, piso 123). Vistas 360°. <strong>Reservamos Klook con franja apertura 09:30</strong> — más barato y sin colas. <strong>⚠️ Vértigo:</strong> Sky Deck tiene suelo de cristal, se puede saltar. Subimos antes del aeropuerto, dejamos las maletas hechas en el apartamento.",
          lat: 37.5125295, lng: 127.102305,
          place_id: "ChIJu7dpc45FezURhLMS5U5eaJk",
          photo: "https://lh3.googleusercontent.com/places/ANXAkqHSKoBQq_7QZiDPhSiKGhBL-EhHowxYeYwBEZVZWvAM7EHfrEqpg41OfDu7DIdRV0_KTTLagyIowiMfIvvMf_VciOjIaMsdaZ0=s4800-w800-h600",
          gallery: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Lotte_World_Tower_Seoul.jpg/800px-Lotte_World_Tower_Seoul.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Seoul_Sky_Observation_Deck.jpg/800px-Seoul_Sky_Observation_Deck.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Seoul_skyline_from_Lotte_Tower.jpg/800px-Seoul_skyline_from_Lotte_Tower.jpg"]
        },
        {
          name: "Olive Young Hongdae", kr: "올리브영 홍대중앙",
          desc: "Cosmética coreana: esencias, cremas, sérums. <strong>10% off con pasaporte.</strong> Última oportunidad antes del aeropuerto. Haechan Bldg, 68 Eoulmadang-ro, Mapo-gu.",
          lat: 37.5552, lng: 126.9234, fallback_class: "shop",
          place_id: "ChIJq6qqqsCYfDURRjFmJq8wEvk",
          photo: "https://commons.wikimedia.org/wiki/Special:FilePath/Olive%20Young%20Logo.svg?width=800",
          gallery: ["https://commons.wikimedia.org/wiki/Special:FilePath/Olive%20Young%20Logo.svg?width=800"]
        },
        {
          name: "Daiso Hongdae", kr: "다이소 홍대점",
          desc: "El bazar coreano de 7 plantas, justo detrás de la salida 4 de Hongik Univ. Calcetines, papelería, accesorios cocina, regalos baratos buenísimos. Todo a 1-5 €. 182 Yanghwa-ro, Mapo-gu.",
          lat: 37.5571, lng: 126.9239, fallback_class: "shop",
          place_id: "ChIJN9MMMLuYfDURO4S8c2nIEwk",
          photo: "https://commons.wikimedia.org/wiki/Special:FilePath/DAISO%20logo.png?width=800",
          gallery: ["https://commons.wikimedia.org/wiki/Special:FilePath/DAISO%20logo.png?width=800"]
        },
        {
          name: "Hongik Univ. Station → ICN", kr: "홍대입구역 → 인천공항",
          desc: "AREX 'All Stop' sale cada 12 min, 53 min hasta T1, 4.500 KRW. T-money funciona, no necesita reserva.",
          lat: 37.5581082, lng: 126.9259574,
          place_id: "ChIJExW378KYfDUR8aFijbcqirQ",
          gallery: ["https://lh3.googleusercontent.com/place-photos/AJRVUZN8uM8zsA_x44bE8E9KgYXxR5uyAXrK2KoSLMpQBQsXV3XpBGcFRbTDQI3IOcZK82WQofvwNSVno6F7yknEhkQZltzbYg94J6HfRyCLH2YjpTaKik54zSDCez5VF-gBO1eUY1ym3UJDFeQz-LrF7KOQMQ=s4800-w800-h600"]
        }
      ],
      tips: [
        { icon: "💰", text: "<strong>Tax Refund:</strong> si superamos 30.000 KRW (~22 €) en una sola tienda con etiqueta 'Tax Free', pedimos refund en kioscos del aeropuerto. Compra sin abrir + pasaporte. Máquinas en ICN T1 planta 4." },
        { icon: "🛍️", text: "Stylenanda Pink Hotel para moda y maquillaje 3CE — si gusta a la pareja joven." },
        { icon: "🚖", text: "Si somos muchos con maletas grandes, consideramos 2 taxis van (~80-100 € cada uno)." }
      ]
    }
  ],

  before: {
    docs: [
      { title: "Pasaporte", text: "Vigencia mínima 6 meses tras regreso (hasta noviembre 2026)." },
      { title: "e-Arrival Card", text: "Declaración de llegada online — rellenamos hasta 3 días antes del vuelo. Sustituye al formulario en papel. Gratis: <a href='https://e-arrivalcard.go.kr/' target='_blank' rel='noopener' style='color:var(--loto);text-decoration:underline'>e-arrivalcard.go.kr</a>" },
      { title: "Comprobantes", text: "Tarjeta de embarque + hotel/Airbnb a mano por si lo piden en Incheon." },
      { title: "Seguro de viaje", text: "Cobertura médica mínima 30.000 €." }
    ],
    money: [
      { title: "T-money", text: "Recargable en 7-Eleven o GS25 al llegar (~3.000 KRW + saldo). Para metro, bus, taxi y tiendas. Una por persona." },
      { title: "WOWPASS (alternativa)", text: "T-money + tarjeta prepago internacional. Mi voto: T-money normal, más simple para todos." },
      { title: "Tarjetas", text: "Visa/Mastercard funcionan en cualquier sitio. Avisar al banco. Llevar 200-300 € en KRW por persona en efectivo para mercados." }
    ],
    apps: [
      { name: "Revolut", note: "<strong>Imprescindible para Corea:</strong> cambio interbancario sin comisión, retirada en cajeros sin recargo (hasta 200 €/mes en plan gratis), pagos en KRW al cambio real, notificaciones instantáneas y bloqueo de tarjeta en 1 clic. <a href='https://revolut.com/referral/?referral-code=beltransanchez12!MAY1-26-VR-ES&geo-redirect' target='_blank' rel='noopener' style='color:var(--loto);text-decoration:underline'>Darse de alta (link)</a>" },
      { name: "KakaoMap / Naver Map", note: "Google Maps NO funciona bien para rutas en Corea. Usar Naver." },
      { name: "Subway Korea", note: "App del metro, en inglés, súper limpia. Calcula rutas y tiempos." },
      { name: "Papago", note: "Traductor coreano-español. La cámara para leer menús es ORO." },
      { name: "Kakao T", note: "Uber coreano. Cuenta + tarjeta extranjera. Imprescindible para 2 taxis cuando 8 no caben." },
      { name: "Catch Table", note: "App coreana de reservas. Muchos sitios populares solo se reservan aquí." },
      { name: "Olive Young", note: "Descuentos en cosmética coreana." }
    ],
    pack: [
      { title: "Ropa", text: "Mayo en Seúl: 15-23 °C. Capas. Chaqueta ligera por la noche (10-14 °C en el desfile). <a href='https://www.google.com/search?q=tiempo+seul' target='_blank' rel='noopener' style='color:var(--loto);text-decoration:underline'>Tiempo Google</a> · <a href='https://www.windguru.cz/2110' target='_blank' rel='noopener' style='color:var(--loto);text-decoration:underline'>Windguru</a> · <a href='https://www.accuweather.com/en/kr/seoul/226081/weather-forecast/226081' target='_blank' rel='noopener' style='color:var(--loto);text-decoration:underline'>AccuWeather</a>" },
      { title: "Lluvia", text: "Paraguas plegable — puede llover 1-2 días." },
      { title: "Calzado", text: "MUY cómodo. Caminaremos 8-12 km algunos días." },
      { title: "Enchufes", text: "Tipo C/F (los mismos que España). NO necesitamos adaptador." },
      { title: "Botiquín", text: "Paracetamol, ibuprofeno, antihistamínicos, electrolitos. Medicación específica de cada uno." },
      { title: "Mochila", text: "Una pequeña por persona: agua, paraguas, cargador, T-money." }
    ],
    reservations: [
      { what: "Seoul Sky (Lotte Tower) domingo 17 mañana apertura", when: "1 semana", how: "Klook / web oficial. ~25 €/p. Franja 09:30" },
      { what: "Restaurantes Ikseon-dong (Aetteut, Toma)", when: "3-5 días", how: "Catch Table app. Para 8 probamos también Tabling" },
      { what: "Born&Bred (Bib Gourmand BBQ Hanwoo)", when: "1 semana", how: "Catch Table o WhatsApp. Cena de capricho" }
    ]
  },

  warnings: [
    {
      tag: "Reservas", color: "gold",
      title: "Catch Table para 8 personas",
      body: "<strong>Crítico reservamos 3-7 días antes</strong> vía Catch Table o Tabling: Ikseon Aetteut, Bistro Toma, Born&Bred, Maple Tree House. Aceptan walk-in para 8: Tosokchon, Myeongdong Kyoja, Yoogane, Marugame Udon. En Gwangjang nos dividimos en 2 mesas de 4."
    },
    {
      tag: "Movilidad", color: "red",
      title: "Taxi Kakao para subir a Bukchon",
      body: "La cuesta desde el palacio hasta Bukchon es larga y dura. <strong>Cogemos 2 taxis Kakao</strong> directamente desde Tosokchon al mirador alto (pedimos 'Bukchon-ro 11-gil photo spot'). Bajamos caminando — mucho más cómodo para el grupo."
    },
    {
      tag: "Transporte", color: "gold",
      title: "T-money en 7-Eleven del aeropuerto",
      body: "Comprar T-money al aterrizar (3.000 KRW) y cargar 30.000 KRW (~22 €). Cubre todo el viaje en metro y bus. La devolución de saldo es engorrosa: <strong>gastarla toda en compras</strong> los últimos días (7-Eleven, GS25, Daiso)."
    }
  ],

  budget: [
    { item: "Alojamiento (apartamento Hongdae)", perp: "Ya pagado", total: "—" },
    { item: "Transporte interno (T-money + taxis + AREX i/v)", perp: "21-28 €", total: "~200 €" },
    { item: "Comidas (6 días)", perp: "240-310 €", total: "~2.000-2.500 €" },
    { item: "Atracciones (Lotte Tower, palacio, hanbok opcional)", perp: "40-55 €", total: "~400 €" },
    { item: "Compras y caprichos (cosmética, regalos, snacks)", perp: "140-275 €", total: "~1.500 €" },
    { item: "Margen 10% imprevistos", perp: "44-67 €", total: "~400 €" },
    { item: "TOTAL POR PERSONA (sin alojamiento ni vuelos)", perp: "485-735 €", total: "—", highlight: true },
    { item: "TOTAL GRUPO (8 personas)", perp: "—", total: "~4.500-5.500 €", highlight: true }
  ],

  budget_notes: [
    "Horquilla baja: comemos la mayoría de almuerzos en sitios económicos (mercados, Bib Gourmand) y cenas variadas.",
    "Horquilla alta: 1-2 cenas de capricho premium tipo Born&Bred (~50 €/p).",
    "NO incluye seguro de viaje (~30-50 €/p para 7 días) ni vuelos.",
    "Las compras son la variable más impredecible: la cosmética coreana es barata pero engancha. Algún miembro puede gastar 500 € fácil entre Olive Young, Daiso y boutiques."
  ],

  phrases: [
    { es: "Hola", kr: "안녕하세요", pron: "annyeonghaseyo" },
    { es: "Gracias", kr: "감사합니다", pron: "kamsahamnida" },
    { es: "Sí / No", kr: "네 / 아니요", pron: "ne / aniyo" },
    { es: "Por favor (al pedir)", kr: "주세요", pron: "juseyo" },
    { es: "¿Cuánto cuesta?", kr: "얼마예요?", pron: "eolmayeyo?" },
    { es: "La cuenta, por favor", kr: "계산해 주세요", pron: "gyesanhae juseyo" },
    { es: "Para 8 personas", kr: "여덟 명이요", pron: "yeodol myeong-iyo" },
    { es: "No muy picante, por favor", kr: "안 맵게 해주세요", pron: "an maepge haejuseyo" },
    { es: "¿Dónde está el baño?", kr: "화장실 어디예요?", pron: "hwajangsil eodiyeyo?" },
    { es: "Está delicioso", kr: "맛있어요", pron: "masisseoyo" },
    { es: "Perdón / disculpe", kr: "죄송합니다", pron: "joesonghamnida" },
    { es: "No hablo coreano", kr: "한국어 못 해요", pron: "hangugeo mot haeyo" },
    { es: "¿Habla inglés?", kr: "영어 할 수 있어요?", pron: "yeongeo hal su isseoyo?" },
    { es: "Ayúdeme, por favor", kr: "도와주세요", pron: "dowajuseyo" },
    { es: "¡Salud!", kr: "건배!", pron: "geonbae!" }
  ],

  plan_b: {
    rain: [
      { title: "Museo Nacional de Corea (Yongsan)", text: "Gratis, gigantesco, edificio precioso. 3-4h." },
      { title: "COEX + Starfield + Aquarium", text: "Todo bajo techo, comer dentro." },
      { title: "DDP exhibits + Dongdaemun shopping malls", text: "Doota, Migliore, Lotte Fitin." }
    ],
    tired: [
      { title: "Brunch tarde en Hongdae", text: "Sin prisa." },
      { title: "Cafetería con vista al río Han", text: "Cafe Mr. Holmes Bakehouse Hannam o Anthracite Hapjeong." },
      { title: "Cena temprana, casa pronto", text: "Día low energy completo." }
    ],
    home: [
      { title: "Mapo Galmaegi", kr: "마포갈매기", text: "Cerdo a la parrilla (diafragma). Casero, popular entre coreanos. ~22 €/p." },
      { title: "Itsushi Sushi", kr: "잇스시", text: "Sushi en barra hecho al momento, baratísimo. ~15 €/p. Mesa pequeña: vamos en 2 turnos." }
    ],
    restaurants: [
      { title: "Bib Gourmand · Seoul", logo: "michelin", text: "<strong>Bib Gourmand</strong> es la categoría Michelin para restaurantes de calidad excepcional con buena relación calidad-precio (menú completo bajo cierto umbral). Ideal para grupo de 8 sin gastar el sueldo. <a href='https://guide.michelin.com/en/kr/restaurants/bib-gourmand?location=Seoul%2C' target='_blank' rel='noopener' style='color:var(--loto);text-decoration:underline'>guide.michelin.com — Bib Gourmand Seoul</a>" },
      { title: "Naver · Michelin Korea", text: "<a href='https://search.naver.com/search.naver?query=미쉐린+가이드+서울+2026' target='_blank' rel='noopener' style='color:var(--loto);text-decoration:underline'>Búsqueda Naver</a> · cobertura coreana de la guía con reseñas locales." },
      { title: "25 Must-Eat Restaurants (Will Fly For Food)", text: "<a href='https://www.willflyforfood.net/seoul-food-guide-25-must-eat-restaurants-in-seoul-south-korea/' target='_blank' rel='noopener' style='color:var(--loto);text-decoration:underline'>willflyforfood.net</a> · guía exhaustiva con direcciones y platos clave por restaurante." },
      { title: "Time Out Seoul · Restaurants", text: "<a href='https://www.timeout.com/seoul/restaurants' target='_blank' rel='noopener' style='color:var(--loto);text-decoration:underline'>timeout.com/seoul/restaurants</a> · selección actualizada por barrios y estilos." },
      { title: "Catch Table (app)", text: "<strong>App de reservas coreana</strong> — sin ella es imposible reservar grupo de 8 en sitios populares. Muchos restaurantes solo aceptan reservas aquí." }
    ]
  }
};
