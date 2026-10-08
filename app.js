/**
 * Grand Palace Hotel & Resort - Management Dashboard
 * Full Interactive Logic, Charts, Multilingual (Somali & English), and Real-time State
 */

// Initial State Data
const state = {
  lang: 'so', // 'so' or 'en'
  theme: 'dark', // 'dark' or 'light'
  filterRoomStatus: 'all',
  filterBookingStatus: 'all',
  searchQuery: '',
  
  // Luxury Rooms Database with High-Res Hotel Photography
  rooms: [
    {
      id: 101,
      number: "Suite 101",
      title_so: "Presidential Royal Suite",
      title_en: "Presidential Royal Suite",
      category: "Presidential",
      price: 480,
      status: "occupied", // 'available', 'occupied', 'cleaning'
      beds: "1 King Bed + Balcony Jacuzzi",
      floor: "Dabaqa 3-aad (3rd Floor)",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80",
      description_so: "Suite boqortooyo oo leh aragti heer sare ah, qol fadhi oo gaar ah, jacuzzi gaar ah iyo adeeg shaqsi ah oo 24 saac ah.",
      description_en: "A palatial luxury suite featuring panoramic ocean views, private living hall, master jacuzzi and round-the-clock dedicated butler service.",
      amenities: ["Ocean View", "Jacuzzi", "King Bed", "Fast Wi-Fi", "Free Breakfast", "Smart 65\" TV", "Mini Bar"]
    },
    {
      id: 102,
      number: "Suite 102",
      title_so: "Ocean View Luxury Suite",
      title_en: "Ocean View Luxury Suite",
      category: "Ocean View",
      price: 290,
      status: "available",
      beds: "1 King Bed",
      floor: "Dabaqa 2-aad (2nd Floor)",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1000&q=80",
      description_so: "Qol raaxo leh oo si toos ah u eegaya badda buluugga ah, leh barxad qorraxda loogu talagalay iyo naqshad casri ah.",
      description_en: "Elegantly appointed master suite overlooking the ocean, private terrace, and contemporary minimalist design.",
      amenities: ["Ocean View", "King Bed", "Balcony", "Free Wi-Fi", "Breakfast", "AC"]
    },
    {
      id: 201,
      number: "Room 201",
      title_so: "Executive King Suite",
      title_en: "Executive King Suite",
      category: "Executive",
      price: 220,
      status: "available",
      beds: "1 Super King Bed",
      floor: "Dabaqa 2-aad (2nd Floor)",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1000&q=80",
      description_so: "Waxaa loogu talagalay madaxda iyo ganacsatada, leh miis shaqo oo ballaaran, internet aad u dheereeya iyo jawi degan.",
      description_en: "Tailored for executives and business travelers, featuring an ergonomic workstation, ultra-high speed internet, and soundproof tranquility.",
      amenities: ["Workstation", "Coffee Maker", "Fast Wi-Fi", "Smart TV", "Safe Deposit"]
    },
    {
      id: 202,
      number: "Room 202",
      title_so: "Deluxe Double Garden",
      title_en: "Deluxe Double Garden",
      category: "Deluxe",
      price: 160,
      status: "occupied",
      beds: "2 Queen Beds",
      floor: "Dabaqa 1-aad (1st Floor)",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80",
      description_so: "Qol labo sariirood ah oo u jeeda beerta cagaaran ee hoteelka, ku habboon saaxiibada ama reerka yar.",
      description_en: "Generous double bed layout with lush tropical garden view, ideal for companions or small families.",
      amenities: ["Garden View", "2 Queen Beds", "Free Wi-Fi", "Breakfast", "Mini Fridge"]
    },
    {
      id: 301,
      number: "Penthouse 301",
      title_so: "Penthouse Panoramic Sky Suite",
      title_en: "Penthouse Panoramic Sky Suite",
      category: "Presidential",
      price: 550,
      status: "available",
      beds: "1 Ultra King Bed + Terrace",
      floor: "Dabaqa Sare (Top Roof)",
      rating: 5.0,
      image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1000&q=80",
      description_so: "Qolka ugu sarreeya hoteelka oo leh aragti 360-degree ah ee magaalada iyo badda, barkad yar oo gaar ah iyo naqshad heer caalami ah.",
      description_en: "Top-floor penthouse with 360-degree skyline views, personal plunge pool, and signature ultra-luxury furnishings.",
      amenities: ["360 Sky View", "Private Pool", "Ultra King Bed", "Chef Service", "Wi-Fi 6"]
    },
    {
      id: 302,
      number: "Room 302",
      title_so: "Superior Single Room",
      title_en: "Superior Single Room",
      category: "Standard",
      price: 95,
      status: "cleaning",
      beds: "1 Double Bed",
      floor: "Dabaqa 1-aad (1st Floor)",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1000&q=80",
      description_so: "Qol hal qof ah oo aad u nadaafad badan, qiime jaban oo leh dhammaan agabyada aasaasiga ah ee raaxada leh.",
      description_en: "Cozy single traveler room with clean modern lines, premium bedding, and all essential amenities.",
      amenities: ["Double Bed", "Fast Wi-Fi", "Desk", "Rain Shower", "Air Conditioning"]
    },
    {
      id: 401,
      number: "Villa 401",
      title_so: "Family Luxury Villa",
      title_en: "Family Luxury Villa",
      category: "Deluxe",
      price: 340,
      status: "occupied",
      beds: "3 Bedrooms (Family)",
      floor: "Dhulka Gaarka ah (Ground Villa)",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1000&q=80",
      description_so: "Guri villa ah oo loogu talagalay qoysaska, leh jiko gaar ah, barxad carruurtu ku cayaaraan iyo nasasho buuxda.",
      description_en: "Standalone family villa with integrated private kitchen, private lawn patio, and quiet retreat ambiance.",
      amenities: ["Private Lawn", "Full Kitchen", "3 Bedrooms", "Kids Area", "Breakfast Included"]
    },
    {
      id: 402,
      number: "Suite 402",
      title_so: "Deluxe Ocean Balcony",
      title_en: "Deluxe Ocean Balcony",
      category: "Ocean View",
      price: 210,
      status: "available",
      beds: "1 King Bed",
      floor: "Dabaqa 2-aad (2nd Floor)",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1000&q=80",
      description_so: "Qol qurux badan oo leh balakoon weyn oo qabow, sariir weyn iyo alaab casri ah.",
      description_en: "Spacious master balcony room catching cool sea breezes, high ceiling and sleek timber finishes.",
      amenities: ["Balcony", "Ocean Breeze", "King Bed", "Smart TV", "Fast Wi-Fi"]
    }
  ],

  // Bookings Record
  bookings: [
    {
      id: "BK-9021",
      guestName: "Axmed Cabdullaahi Nuur",
      guestPhone: "+252 61 588 9911",
      guestAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      roomId: 101,
      roomNumber: "Suite 101",
      roomType: "Presidential Royal Suite",
      checkIn: "2026-10-06",
      checkOut: "2026-10-10",
      amount: 1920,
      paymentStatus: "Paid",
      bookingStatus: "Checked In"
    },
    {
      id: "BK-9022",
      guestName: "Maryan Yuusuf Cumar",
      guestPhone: "+252 61 744 3322",
      guestAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      roomId: 202,
      roomNumber: "Room 202",
      roomType: "Deluxe Double Garden",
      checkIn: "2026-10-07",
      checkOut: "2026-10-11",
      amount: 640,
      paymentStatus: "Paid",
      bookingStatus: "Checked In"
    },
    {
      id: "BK-9023",
      guestName: "Maxamed Xasan Barre",
      guestPhone: "+252 61 900 1144",
      guestAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      roomId: 401,
      roomNumber: "Villa 401",
      roomType: "Family Luxury Villa",
      checkIn: "2026-10-08",
      checkOut: "2026-10-13",
      amount: 1700,
      paymentStatus: "Pending",
      bookingStatus: "Checked In"
    },
    {
      id: "BK-9024",
      guestName: "Leyla Faarax Diiriye",
      guestPhone: "+252 61 322 7788",
      guestAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
      roomId: 102,
      roomNumber: "Suite 102",
      roomType: "Ocean View Luxury Suite",
      checkIn: "2026-10-09",
      checkOut: "2026-10-12",
      amount: 870,
      paymentStatus: "Paid",
      bookingStatus: "Confirmed"
    },
    {
      id: "BK-9025",
      guestName: "Cabdiraxmaan Jaamac",
      guestPhone: "+252 61 655 4400",
      guestAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
      roomId: 302,
      roomNumber: "Room 302",
      roomType: "Superior Single Room",
      checkIn: "2026-10-04",
      checkOut: "2026-10-08",
      amount: 380,
      paymentStatus: "Paid",
      bookingStatus: "Checked Out"
    }
  ]
};

// Multilingual Dictionary
const i18n = {
  so: {
    nav_main: "MAAMULKA GUUD",
    nav_dashboard: "Dulmar Guud (Dashboard)",
    nav_rooms: "Qolalka & Qaybaha",
    nav_bookings: "Boos-qabsashada",
    nav_guests: "Macaamiisha (Guests)",
    nav_finance: "DHAQAAHAHA & WARBIXINTA",
    nav_analytics: "Warbixinta & Dakhliga",
    nav_services: "Adeegyada Qolalka",
    nav_settings: "Habaynta Hoteelka",
    btn_quick_booking: "Boos Qabasho Degdeg ah",
    btn_new_reservation: "Boos Cusub",
    notifications_title: "Ogeysiisyada",
    hero_badge: "Nidaamka Casriga ah ee Maamulka Hoteelka",
    hero_title: "Kusoo Dhawoow Grand Palace Resort",
    hero_desc: "Ku maamul qolalka, boos-qabsashada macaamiisha, dakhliga iyo adeegyada hoteelka hal meel oo casri ah oo leh xog degdeg ah.",
    btn_explore_rooms: "Eeg Dhammaan Qolalka",
    btn_add_booking_now: "Diiwaangeli Macmiil",
    kpi_occupancy: "Heerka Qolalka Buuxa",
    kpi_revenue: "Dakhliga Maanta",
    kpi_revenue_sub: "Shalay: $4,450 USD",
    kpi_checkins: "Soo Gelid & Ka Tagid",
    kpi_checkins_sub: "6 macmiil ayaa weli la sugayaa",
    in_label: "Soo galay",
    out_label: "Baxay",
    kpi_guests: "Macaamiisha Joogta Hadda",
    kpi_guests_sub: "Qanacsanaanta macaamiisha: 98%",
    guest_label: "Qof",
    chart_revenue_title: "Dhaqdhaqaaqa Dakhliga & Boosaska Toddobaadka",
    chart_revenue_subtitle: "Muddada: Isniin - Axad (Todobaadkan)",
    chart_room_types_title: "Qaybaha Qolalka",
    chart_status_live: "Xaaladda Hadda",
    chart_room_types_sub: "Qeybinta qolalka la degan yahay iyo noocyadooda",
    rooms_heading: "Qolalka Hoteelka & Xaaladdooda",
    rooms_subheading: "Kala shaandhee qolalka bannaan, kuwa la degan yahay iyo kuwa nadiifinta ku jira.",
    filter_all: "Dhammaan (All)",
    filter_available: "Bannaan (Available)",
    filter_occupied: "La Degan (Occupied)",
    filter_cleaning: "Nadiifin (Cleaning)",
    status_available: "Bannaan",
    status_occupied: "La Degan",
    status_cleaning: "Nadiifin ku jirta",
    table_title: "Boos-Qabsashadii Ugu Dambeysay",
    table_subtitle: "Liiska macaamiisha qabsaday qolalka iyo xaaladda bixinta lacagta",
    opt_all_status: "Dhammaan Xaaladaha",
    opt_checked_in: "Soo Galay (Checked In)",
    opt_confirmed: "La Xaqiijiyay (Confirmed)",
    opt_checked_out: "Baxay (Checked Out)",
    btn_add_guest: "Ku Dar Macmiil",
    th_guest: "Macmiilka",
    th_room: "Qolka & Nooca",
    th_dates: "Taariikhda (In / Out)",
    th_payment: "Bixinta Lacagta",
    th_status: "Xaaladda",
    th_actions: "Falka (Actions)",
    modal_title: "Boos-qabasho Cusub",
    modal_sub: "Geli xogta macmiilka iyo qolka uu doonayo",
    modal_name_label: "Magaca Macmiilka",
    modal_room_label: "Dooro Qolka",
    modal_phone_label: "Telefoonka Macmiilka",
    modal_checkin_label: "Taariikhda Soo Gelidda",
    modal_checkout_label: "Taariikhda Ka Bixidda",
    modal_payment_label: "Xaaladda Lacagta",
    modal_booking_status_label: "Xaaladda Booska",
    opt_paid: "Waa La Bixiyay (Paid)",
    opt_pending: "Waa Dhiman tahay (Pending)",
    btn_cancel: "Ka Noqo",
    btn_save_booking: "Keydi Booska",
    per_night: "habeenkiiba",
    room_amenities_label: "Adeegyada Qolka",
    card_restaurant_title: "Cunto & Makhaayad Casri ah",
    card_restaurant_desc: "Adeegga qolka 24/7 iyo cunnooyin caalami ah iyo kuwo maxalli ah oo tayo sare leh.",
    card_pool_title: "Barkadda & Spa Raaxo",
    card_pool_desc: "Barkad kulul iyo mid qabow oo u furan dhammaan martida suite-ka iyo VIP-da.",
    card_transport_title: "Gawaarida Garoonka (VIP Shuttle)",
    card_transport_desc: "Gaadiid toos ah oo kaaga qaadaya garoonka diyaaradaha kuna keenaya hoteelka."
  },
  en: {
    nav_main: "MAIN MENU",
    nav_dashboard: "Overview (Dashboard)",
    nav_rooms: "Rooms & Suites",
    nav_bookings: "Reservations",
    nav_guests: "Guests Directory",
    nav_finance: "FINANCE & REPORTS",
    nav_analytics: "Analytics & Revenue",
    nav_services: "Room Services",
    nav_settings: "Hotel Settings",
    btn_quick_booking: "Quick Booking",
    btn_new_reservation: "New Reservation",
    notifications_title: "Notifications",
    hero_badge: "Modern Luxury Hotel Management System",
    hero_title: "Welcome to Grand Palace Resort",
    hero_desc: "Manage luxury suites, guest reservations, real-time revenue, and housekeeping all in one unified, intelligent platform.",
    btn_explore_rooms: "Explore All Suites",
    btn_add_booking_now: "Register Guest",
    kpi_occupancy: "Room Occupancy Rate",
    kpi_revenue: "Today's Revenue",
    kpi_revenue_sub: "Yesterday: $4,450 USD",
    kpi_checkins: "Check-ins & Check-outs",
    kpi_checkins_sub: "6 guests expected today",
    in_label: "Checked In",
    out_label: "Checked Out",
    kpi_guests: "Current In-House Guests",
    kpi_guests_sub: "Guest satisfaction: 98%",
    guest_label: "Guests",
    chart_revenue_title: "Weekly Revenue & Booking Dynamics",
    chart_revenue_subtitle: "Period: Monday - Sunday (Current Week)",
    chart_room_types_title: "Room Categories",
    chart_status_live: "Live Status",
    chart_room_types_sub: "Distribution of occupied suites and category breakdown",
    rooms_heading: "Hotel Suites & Live Status",
    rooms_subheading: "Filter by available, currently occupied, or rooms under maintenance and cleaning.",
    filter_all: "All Suites",
    filter_available: "Available",
    filter_occupied: "Occupied",
    filter_cleaning: "Cleaning",
    status_available: "Available",
    status_occupied: "Occupied",
    status_cleaning: "Cleaning",
    table_title: "Recent Bookings & Guest Ledger",
    table_subtitle: "Live ledger of guest stays, room assignments, and financial settlement status",
    opt_all_status: "All Statuses",
    opt_checked_in: "Checked In",
    opt_confirmed: "Confirmed",
    opt_checked_out: "Checked Out",
    btn_add_guest: "Add Guest",
    th_guest: "Guest Name",
    th_room: "Room & Category",
    th_dates: "Dates (In / Out)",
    th_payment: "Payment Status",
    th_status: "Booking Status",
    th_actions: "Actions",
    modal_title: "New Guest Reservation",
    modal_sub: "Fill in guest details and select an available luxury room",
    modal_name_label: "Guest Full Name",
    modal_room_label: "Select Suite",
    modal_phone_label: "Contact Phone",
    modal_checkin_label: "Check-In Date",
    modal_checkout_label: "Check-Out Date",
    modal_payment_label: "Payment Status",
    modal_booking_status_label: "Booking Status",
    opt_paid: "Paid in Full",
    opt_pending: "Payment Pending",
    btn_cancel: "Cancel",
    btn_save_booking: "Confirm Booking",
    per_night: "per night",
    room_amenities_label: "Suite Amenities",
    card_restaurant_title: "Signature Dining & Room Service",
    card_restaurant_desc: "24/7 gourmet culinary menu and international executive room service.",
    card_pool_title: "Infinity Pool & Wellness Spa",
    card_pool_desc: "Heated infinity pool, hydrotherapy, and private cabanas for VIP guests.",
    card_transport_title: "VIP Executive Airport Shuttle",
    card_transport_desc: "Complimentary luxury chauffeur service to and from international airport."
  }
};

// Charts references
let revenueChartInstance = null;
let roomCategoryChartInstance = null;
let selectedRoomForDetail = null;

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();
  renderKPIs();
  initCharts();
  renderRooms();
  renderBookingsTable();
  populateRoomSelectDropdown();
  setupEventListeners();
  setDefaultDates();
});

// Setup Default Dates for Booking Modal (Today and 3 days later)
function setDefaultDates() {
  const today = new Date();
  const next3Days = new Date();
  next3Days.setDate(today.getDate() + 3);

  const format = (d) => d.toISOString().split('T')[0];
  const inElem = document.getElementById('checkInDateInput');
  const outElem = document.getElementById('checkOutDateInput');
  if (inElem) inElem.value = format(today);
  if (outElem) outElem.value = format(next3Days);
}

// Language Handling
function initLanguage() {
  const savedLang = localStorage.getItem('grand_hotel_lang') || 'so';
  setLanguage(savedLang);
}

function setLanguage(lang) {
  state.lang = lang;
  localStorage.setItem('grand_hotel_lang', lang);
  
  const currentLangLabel = document.getElementById('currentLangLabel');
  if (currentLangLabel) {
    currentLangLabel.textContent = lang === 'so' ? 'Soomaali' : 'English';
  }

  // Translate all DOM elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(elem => {
    const key = elem.getAttribute('data-i18n');
    if (i18n[lang] && i18n[lang][key]) {
      elem.textContent = i18n[lang][key];
    }
  });

  // Re-render rooms and table to update localized titles & status badges
  renderRooms();
  renderBookingsTable();
  updateChartsThemeAndLanguage();
}

// Theme (Dark / Light Mode)
function initTheme() {
  const savedTheme = localStorage.getItem('grand_hotel_theme') || 'dark';
  applyTheme(savedTheme);
}

function applyTheme(theme) {
  state.theme = theme;
  localStorage.setItem('grand_hotel_theme', theme);
  const html = document.documentElement;
  if (theme === 'dark') {
    html.classList.add('dark');
  } else {
    html.classList.remove('dark');
  }
  updateChartsThemeAndLanguage();
}

function toggleTheme() {
  const newTheme = state.theme === 'dark' ? 'light' : 'dark';
  applyTheme(newTheme);
  showToast(
    state.lang === 'so' 
      ? `Habka waxaa loo beddelay: ${newTheme === 'dark' ? 'Habeen (Dark)' : 'Maalin (Light)'}`
      : `Theme switched to: ${newTheme === 'dark' ? 'Dark Mode' : 'Light Mode'}`
  );
}

// Render Key Metrics (KPIs)
function renderKPIs() {
  const totalRooms = state.rooms.length;
  const occupiedRooms = state.rooms.filter(r => r.status === 'occupied').length;
  const occupancyPercentage = ((occupiedRooms / totalRooms) * 100).toFixed(1);
  
  // Occupancy Element
  const occElem = document.getElementById('occupancyRate');
  if (occElem) occElem.textContent = `${occupancyPercentage}%`;

  // Calculate today's revenue from bookings
  const revenueTotal = state.bookings
    .filter(b => b.paymentStatus === 'Paid')
    .reduce((sum, b) => sum + b.amount, 0);
  const revElem = document.getElementById('todayRevenue');
  if (revElem) revElem.textContent = `$${revenueTotal.toLocaleString()} USD`;

  // Checkins & Checkouts count
  const checkedInCount = state.bookings.filter(b => b.bookingStatus === 'Checked In').length;
  const checkedOutCount = state.bookings.filter(b => b.bookingStatus === 'Checked Out').length;
  
  const inElem = document.getElementById('checkinCount');
  const outElem = document.getElementById('checkoutCount');
  if (inElem) inElem.textContent = checkedInCount;
  if (outElem) outElem.textContent = checkedOutCount;

  // Active Guests
  const guestsElem = document.getElementById('activeGuestsCount');
  if (guestsElem) guestsElem.textContent = checkedInCount * 2 + 12; // Realistic guest calculation
}

// Render Rooms Grid with High-Def Photos & Badges
function renderRooms() {
  const grid = document.getElementById('roomsGrid');
  if (!grid) return;

  const currentLang = state.lang;
  let filtered = state.rooms.filter(room => {
    // Status filter
    if (state.filterRoomStatus !== 'all' && room.status !== state.filterRoomStatus) {
      return false;
    }
    // Search query filter
    if (state.searchQuery) {
      const q = state.searchQuery.toLowerCase();
      const title = (currentLang === 'so' ? room.title_so : room.title_en).toLowerCase();
      const num = room.number.toLowerCase();
      const cat = room.category.toLowerCase();
      return title.includes(q) || num.includes(q) || cat.includes(q);
    }
    return true;
  });

  const countBadge = document.getElementById('roomsCountBadge');
  if (countBadge) {
    countBadge.textContent = `${filtered.length} ${currentLang === 'so' ? 'Qolal ah' : 'Suites'}`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full py-12 text-center text-slate-400">
        <i class="fa-solid fa-magnifying-glass text-3xl mb-3 text-slate-300"></i>
        <p class="font-medium text-base">${currentLang === 'so' ? 'Wax qolal ah lama helin.' : 'No suites match the criteria.'}</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(room => {
    const title = currentLang === 'so' ? room.title_so : room.title_en;
    
    // Status badge style & text
    let badgeClass = 'status-badge-available';
    let badgeText = i18n[currentLang].status_available;
    let badgeIcon = 'fa-check';

    if (room.status === 'occupied') {
      badgeClass = 'status-badge-occupied';
      badgeText = i18n[currentLang].status_occupied;
      badgeIcon = 'fa-user';
    } else if (room.status === 'cleaning') {
      badgeClass = 'status-badge-cleaning';
      badgeText = i18n[currentLang].status_cleaning;
      badgeIcon = 'fa-broom';
    }

    return `
      <div class="room-card bg-white dark:bg-darkbg-800 rounded-3xl border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
        <!-- Room Image Container -->
        <div class="relative h-48 overflow-hidden bg-slate-900 cursor-pointer" onclick="openRoomDetailModal(${room.id})">
          <img src="${room.image}" alt="${title}" class="room-img w-full h-full object-cover">
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/20"></div>
          
          <!-- Top Badges -->
          <div class="absolute top-3 left-3 flex items-center gap-2">
            <span class="px-2.5 py-1 rounded-full text-xs font-bold backdrop-blur-md ${badgeClass}">
              <i class="fa-solid ${badgeIcon} mr-1 text-[10px]"></i> ${badgeText}
            </span>
          </div>

          <div class="absolute top-3 right-3">
            <span class="px-2.5 py-1 rounded-full text-xs font-extrabold bg-black/50 text-white backdrop-blur-md">
              <i class="fa-solid fa-star text-amber-400 text-[10px] mr-1"></i> ${room.rating}
            </span>
          </div>

          <!-- Room Number & Price Overlay -->
          <div class="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white">
            <div>
              <span class="text-[11px] font-bold uppercase tracking-wider text-amber-300 block">${room.category}</span>
              <h4 class="font-display font-bold text-lg leading-tight drop-shadow-sm">${room.number}</h4>
            </div>
            <div class="text-right">
              <span class="font-display text-xl font-black text-white">$${room.price}</span>
              <span class="text-[10px] text-slate-300 block">/${currentLang === 'so' ? 'habeen' : 'night'}</span>
            </div>
          </div>
        </div>

        <!-- Room Body Details -->
        <div class="p-5 flex-1 flex flex-col justify-between">
          <div>
            <h5 class="font-display font-bold text-base text-slate-900 dark:text-white group-hover:text-brand-500 transition line-clamp-1 cursor-pointer" onclick="openRoomDetailModal(${room.id})">
              ${title}
            </h5>
            
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1.5">
              <i class="fa-solid fa-bed text-brand-500"></i> ${room.beds}
            </p>

            <!-- Amenities Tags -->
            <div class="flex flex-wrap gap-1.5 mt-3">
              ${room.amenities.slice(0, 3).map(am => `
                <span class="px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-darkbg-700 text-slate-600 dark:text-slate-300 text-[10px] font-medium">
                  ${am}
                </span>
              `).join('')}
              ${room.amenities.length > 3 ? `
                <span class="px-1.5 py-0.5 rounded-lg bg-slate-100 dark:bg-darkbg-700 text-slate-400 text-[10px] font-medium">
                  +${room.amenities.length - 3}
                </span>
              ` : ''}
            </div>
          </div>

          <!-- Bottom Actions -->
          <div class="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-2">
            <button onclick="openRoomDetailModal(${room.id})" class="px-3 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-darkbg-700 transition flex items-center gap-1">
              <i class="fa-regular fa-eye"></i>
              <span>${currentLang === 'so' ? 'Faahfaahin' : 'Details'}</span>
            </button>

            ${room.status === 'available' ? `
              <button onclick="bookSpecificRoom(${room.id})" class="px-3.5 py-2 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-xs font-bold transition shadow-sm flex items-center gap-1.5">
                <i class="fa-solid fa-calendar-check text-[11px]"></i>
                <span>${currentLang === 'so' ? 'Qabso' : 'Book'}</span>
              </button>
            ` : room.status === 'occupied' ? `
              <button onclick="quickCheckOut(${room.id})" class="px-3 py-2 rounded-xl bg-rose-500/10 hover:bg-rose-500 text-rose-600 hover:text-white dark:bg-rose-950/40 dark:text-rose-400 dark:hover:text-white text-xs font-bold transition flex items-center gap-1">
                <i class="fa-solid fa-arrow-right-from-bracket text-[10px]"></i>
                <span>${currentLang === 'so' ? 'Bixi' : 'Check Out'}</span>
              </button>
            ` : `
              <button onclick="markRoomAvailable(${room.id})" class="px-3 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500 text-emerald-600 hover:text-white dark:bg-emerald-950/40 dark:text-emerald-400 text-xs font-bold transition flex items-center gap-1">
                <i class="fa-solid fa-circle-check text-[10px]"></i>
                <span>${currentLang === 'so' ? 'Dhammee Nadiifinta' : 'Ready'}</span>
              </button>
            `}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Render Bookings & Guest Ledger Table
function renderBookingsTable() {
  const tbody = document.getElementById('bookingsTableBody');
  if (!tbody) return;

  const currentLang = state.lang;
  let list = state.bookings.filter(b => {
    if (state.filterBookingStatus !== 'all' && b.bookingStatus !== state.filterBookingStatus) {
      return false;
    }
    if (state.searchQuery) {
      const q = state.searchQuery.toLowerCase();
      return b.guestName.toLowerCase().includes(q) ||
             b.roomNumber.toLowerCase().includes(q) ||
             b.id.toLowerCase().includes(q);
    }
    return true;
  });

  if (list.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="6" class="py-8 text-center text-slate-400">
          ${currentLang === 'so' ? 'Wax xog boos-qabasho ah lama helin.' : 'No reservations recorded.'}
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = list.map(b => {
    const isPaid = b.paymentStatus === 'Paid';
    const payBadge = isPaid
      ? `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400">
           <i class="fa-solid fa-check text-[10px]"></i> ${isPaid ? (currentLang === 'so' ? 'Bixiyay' : 'Paid') : 'Pending'}
         </span>`
      : `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-400">
           <i class="fa-solid fa-clock text-[10px]"></i> ${currentLang === 'so' ? 'Dhiman' : 'Pending'}
         </span>`;

    let statusBadge = '';
    if (b.bookingStatus === 'Checked In') {
      statusBadge = `<span class="px-2.5 py-1 rounded-xl text-xs font-bold bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300">
        ${currentLang === 'so' ? 'Soo Galay' : 'Checked In'}
      </span>`;
    } else if (b.bookingStatus === 'Confirmed') {
      statusBadge = `<span class="px-2.5 py-1 rounded-xl text-xs font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">
        ${currentLang === 'so' ? 'Xaqiijiyay' : 'Confirmed'}
      </span>`;
    } else {
      statusBadge = `<span class="px-2.5 py-1 rounded-xl text-xs font-bold bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400">
        ${currentLang === 'so' ? 'Baxay' : 'Checked Out'}
      </span>`;
    }

    return `
      <tr class="hover:bg-slate-50/80 dark:hover:bg-darkbg-700/50 transition">
        <td class="py-4 px-4">
          <div class="flex items-center gap-3">
            <img src="${b.guestAvatar}" alt="${b.guestName}" class="w-10 h-10 rounded-xl object-cover ring-2 ring-slate-100 dark:ring-slate-700">
            <div>
              <p class="font-bold text-slate-900 dark:text-white">${b.guestName}</p>
              <p class="text-xs text-slate-400">${b.guestPhone || b.id}</p>
            </div>
          </div>
        </td>
        <td class="py-4 px-4">
          <p class="font-bold text-slate-800 dark:text-slate-200">${b.roomNumber}</p>
          <p class="text-xs text-slate-400">${b.roomType}</p>
        </td>
        <td class="py-4 px-4 text-xs font-medium text-slate-600 dark:text-slate-300">
          <div><i class="fa-solid fa-arrow-down text-emerald-500 mr-1 text-[10px]"></i> ${b.checkIn}</div>
          <div class="mt-0.5"><i class="fa-solid fa-arrow-up text-rose-500 mr-1 text-[10px]"></i> ${b.checkOut}</div>
        </td>
        <td class="py-4 px-4">
          <div>
            <p class="font-black text-slate-900 dark:text-white">$${b.amount}</p>
            ${payBadge}
          </div>
        </td>
        <td class="py-4 px-4">
          ${statusBadge}
        </td>
        <td class="py-4 px-4 text-right">
          <div class="inline-flex items-center gap-1.5">
            <button onclick="printReceipt('${b.id}')" title="Receipt" class="p-2 rounded-xl text-slate-400 hover:text-brand-500 hover:bg-slate-100 dark:hover:bg-darkbg-700 transition">
              <i class="fa-solid fa-receipt text-sm"></i>
            </button>
            <button onclick="deleteBooking('${b.id}')" title="Delete" class="p-2 rounded-xl text-slate-400 hover:text-rose-500 hover:bg-slate-100 dark:hover:bg-darkbg-700 transition">
              <i class="fa-solid fa-trash text-sm"></i>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

// Populate the Room Select options in New Booking Modal
function populateRoomSelectDropdown() {
  const select = document.getElementById('roomSelectInput');
  if (!select) return;

  const availableRooms = state.rooms.filter(r => r.status === 'available');
  if (availableRooms.length === 0) {
    select.innerHTML = `<option value="">${state.lang === 'so' ? 'Qolal bannaan ma jiraan hadda' : 'No rooms available'}</option>`;
    return;
  }

  select.innerHTML = availableRooms.map(room => {
    const title = state.lang === 'so' ? room.title_so : room.title_en;
    return `<option value="${room.id}">${room.number} - ${title} ($${room.price}/night)</option>`;
  }).join('');
}

// Setup Chart.js Analytics
function initCharts() {
  // 1. Revenue Weekly Line / Bar Hybrid Chart
  const revCtx = document.getElementById('revenueWeeklyChart');
  if (revCtx) {
    revenueChartInstance = new Chart(revCtx, {
      type: 'bar',
      data: {
        labels: ['Isniin', 'Talaado', 'Arbaco', 'Khamiis', 'Jimco', 'Sabti', 'Axad'],
        datasets: [
          {
            type: 'line',
            label: 'Dakhliga ($)',
            data: [3200, 4100, 3800, 4900, 6200, 7800, 5400],
            borderColor: '#c58d3c',
            borderWidth: 3,
            tension: 0.4,
            fill: true,
            backgroundColor: 'rgba(197, 141, 60, 0.1)',
            pointBackgroundColor: '#c58d3c',
            pointRadius: 4,
            yAxisID: 'y'
          },
          {
            type: 'bar',
            label: 'Boosas la xareeyay',
            data: [8, 12, 10, 15, 20, 24, 18],
            backgroundColor: 'rgba(59, 130, 246, 0.4)',
            borderRadius: 8,
            hoverBackgroundColor: 'rgba(59, 130, 246, 0.8)',
            yAxisID: 'y1'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: '#0f172a',
            padding: 12,
            titleFont: { size: 13, weight: 'bold' },
            bodyFont: { size: 12 }
          }
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: { color: '#94a3b8' }
          },
          y: {
            position: 'left',
            grid: { color: 'rgba(148, 163, 184, 0.1)' },
            ticks: {
              color: '#94a3b8',
              callback: val => `$${val}`
            }
          },
          y1: {
            position: 'right',
            grid: { display: false },
            ticks: { color: '#94a3b8' }
          }
        }
      }
    });
  }

  // 2. Room Category Occupancy Doughnut Chart
  const catCtx = document.getElementById('roomCategoryChart');
  if (catCtx) {
    roomCategoryChartInstance = new Chart(catCtx, {
      type: 'doughnut',
      data: {
        labels: ['Presidential Suite', 'Ocean View', 'Executive King', 'Deluxe Double'],
        datasets: [{
          data: [2, 2, 1, 3],
          backgroundColor: [
            '#f59e0b', // Amber / Gold
            '#3b82f6', // Blue
            '#10b981', // Emerald
            '#6366f1'  // Indigo
          ],
          borderWidth: 0,
          hoverOffset: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '72%',
        plugins: {
          legend: { display: false }
        }
      }
    });
  }
}

function updateChartsThemeAndLanguage() {
  if (revenueChartInstance) {
    const isEnglish = state.lang === 'en';
    revenueChartInstance.data.labels = isEnglish 
      ? ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      : ['Isniin', 'Talaado', 'Arbaco', 'Khamiis', 'Jimco', 'Sabti', 'Axad'];
    revenueChartInstance.update();
  }
}

// Event Listeners Configuration
function setupEventListeners() {
  // Mobile Sidebar Toggles
  const openSidebarBtn = document.getElementById('openSidebarBtn');
  const closeSidebarBtn = document.getElementById('closeSidebarBtn');
  const sidebar = document.getElementById('sidebar');

  if (openSidebarBtn && sidebar) {
    openSidebarBtn.addEventListener('click', () => {
      sidebar.classList.remove('-translate-x-full');
    });
  }
  if (closeSidebarBtn && sidebar) {
    closeSidebarBtn.addEventListener('click', () => {
      sidebar.classList.add('-translate-x-full');
    });
  }

  // Theme Toggle Button
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
  }

  // Language Dropdown
  const langToggleBtn = document.getElementById('langToggleBtn');
  const langDropdown = document.getElementById('langDropdown');
  if (langToggleBtn && langDropdown) {
    langToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langDropdown.classList.toggle('hidden');
    });

    langDropdown.querySelectorAll('button[data-lang]').forEach(btn => {
      btn.addEventListener('click', () => {
        const selected = btn.getAttribute('data-lang');
        setLanguage(selected);
        langDropdown.classList.add('hidden');
        showToast(selected === 'so' ? 'Luuqadda waxaa loo beddelay Soomaali' : 'Language switched to English');
      });
    });

    document.addEventListener('click', () => {
      langDropdown.classList.add('hidden');
    });
  }

  // Notification Dropdown
  const notifBtn = document.getElementById('notificationBtn');
  const notifDropdown = document.getElementById('notificationDropdown');
  if (notifBtn && notifDropdown) {
    notifBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      notifDropdown.classList.toggle('hidden');
    });
    document.addEventListener('click', () => {
      notifDropdown.classList.add('hidden');
    });
  }

  // Global Search Input
  const searchInput = document.getElementById('globalSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value.trim();
      renderRooms();
      renderBookingsTable();
    });
  }

  // Room Filter Buttons (All, Available, Occupied, Cleaning)
  const roomFilterButtons = document.querySelectorAll('.room-filter-btn');
  roomFilterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      roomFilterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.filterRoomStatus = btn.getAttribute('data-filter');
      renderRooms();
    });
  });

  // Booking Table Status Filter
  const bookingFilterSelect = document.getElementById('bookingStatusFilter');
  if (bookingFilterSelect) {
    bookingFilterSelect.addEventListener('change', (e) => {
      state.filterBookingStatus = e.target.value;
      renderBookingsTable();
    });
  }

  // Booking Form Submission
  const bookingForm = document.getElementById('newBookingForm');
  if (bookingForm) {
    bookingForm.addEventListener('submit', handleNewBookingSubmit);
  }

  // Open booking modal buttons
  const headerAddBookingBtn = document.getElementById('headerAddBookingBtn');
  if (headerAddBookingBtn) {
    headerAddBookingBtn.addEventListener('click', openBookingModal);
  }
  const quickBookSidebarBtn = document.getElementById('quickBookSidebarBtn');
  if (quickBookSidebarBtn) {
    quickBookSidebarBtn.addEventListener('click', openBookingModal);
  }

  // Sidebar navigation active state
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
      document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      const target = item.getAttribute('href');
      if (target === '#rooms') {
        scrollToRooms();
      } else if (target === '#bookings') {
        scrollToBookings();
      }
    });
  });
}

// Modal Handlers
function openBookingModal(preselectedRoomId = null) {
  populateRoomSelectDropdown();
  const modal = document.getElementById('bookingModal');
  const modalContent = modal.querySelector('div');

  if (preselectedRoomId) {
    const sel = document.getElementById('roomSelectInput');
    if (sel) sel.value = preselectedRoomId;
  }

  modal.classList.remove('hidden');
  setTimeout(() => {
    modal.classList.remove('opacity-0');
    modalContent.classList.remove('scale-95');
  }, 10);
}

function closeBookingModal() {
  const modal = document.getElementById('bookingModal');
  const modalContent = modal.querySelector('div');
  modal.classList.add('opacity-0');
  modalContent.classList.add('scale-95');
  setTimeout(() => {
    modal.classList.add('hidden');
  }, 200);
}

// Handle Form Submission for New Booking
function handleNewBookingSubmit(e) {
  e.preventDefault();

  const guestName = document.getElementById('guestNameInput').value.trim();
  const roomId = parseInt(document.getElementById('roomSelectInput').value, 10);
  const guestPhone = document.getElementById('guestPhoneInput').value.trim();
  const checkIn = document.getElementById('checkInDateInput').value;
  const checkOut = document.getElementById('checkOutDateInput').value;
  const paymentStatus = document.getElementById('paymentStatusInput').value;
  const bookingStatus = document.getElementById('bookingStatusSelect').value;

  if (!guestName || !roomId || !checkIn || !checkOut) {
    showToast(state.lang === 'so' ? 'Fadlan buuxi dhammaan macluumaadka' : 'Please fill all required fields');
    return;
  }

  const room = state.rooms.find(r => r.id === roomId);
  if (!room) return;

  // Calculate days & total price
  const d1 = new Date(checkIn);
  const d2 = new Date(checkOut);
  const diffTime = Math.max(1, Math.ceil((d2 - d1) / (1000 * 60 * 60 * 24)));
  const totalPrice = room.price * diffTime;

  // Create new booking record
  const newBooking = {
    id: `BK-${Math.floor(1000 + Math.random() * 9000)}`,
    guestName,
    guestPhone,
    guestAvatar: `https://images.unsplash.com/photo-${['1507003211169-0a1dd7228f2d','1534528741775-53994a69daeb','1500648767791-00dcc994a43e','1494790108377-be9c29b29330'][Math.floor(Math.random()*4)]}?auto=format&fit=crop&w=200&q=80`,
    roomId: room.id,
    roomNumber: room.number,
    roomType: state.lang === 'so' ? room.title_so : room.title_en,
    checkIn,
    checkOut,
    amount: totalPrice,
    paymentStatus,
    bookingStatus
  };

  // Update room status
  room.status = (bookingStatus === 'Checked In') ? 'occupied' : 'occupied';

  // Add to bookings list
  state.bookings.unshift(newBooking);

  // Trigger Celebration Confetti!
  try {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  } catch(err) {}

  // Update views
  renderKPIs();
  renderRooms();
  renderBookingsTable();
  populateRoomSelectDropdown();
  closeBookingModal();

  // Reset Form
  document.getElementById('newBookingForm').reset();
  setDefaultDates();

  showToast(
    state.lang === 'so'
      ? `Guul! Boos-qabashada ${guestName} ee qolka ${room.number} waa la xaqiijiyay.`
      : `Success! Booking for ${guestName} (${room.number}) confirmed.`
  );
}

// Room Detail Modal Handlers
function openRoomDetailModal(roomId) {
  const room = state.rooms.find(r => r.id === roomId);
  if (!room) return;
  selectedRoomForDetail = room;

  const modal = document.getElementById('roomDetailModal');
  const img = document.getElementById('detailRoomImg');
  const title = document.getElementById('detailRoomTitle');
  const number = document.getElementById('detailRoomNumber');
  const price = document.getElementById('detailRoomPrice');
  const desc = document.getElementById('detailRoomDescription');
  const badge = document.getElementById('detailRoomBadge');
  const amenitiesList = document.getElementById('detailRoomAmenities');
  const toggleBtn = document.getElementById('toggleRoomStatusBtn');
  const bookBtn = document.getElementById('detailBookBtn');

  img.src = room.image;
  title.textContent = state.lang === 'so' ? room.title_so : room.title_en;
  number.textContent = `${room.number} • ${room.category} • ${room.floor}`;
  price.textContent = `$${room.price}`;
  desc.textContent = state.lang === 'so' ? room.description_so : room.description_en;

  // Badge status
  badge.className = `px-3 py-1 rounded-full text-xs font-bold ${
    room.status === 'available' ? 'bg-emerald-600' :
    room.status === 'occupied' ? 'bg-rose-600' : 'bg-amber-600'
  }`;
  badge.textContent = state.lang === 'so' ? 
    (room.status === 'available' ? 'Bannaan' : room.status === 'occupied' ? 'La Degan' : 'Nadiifin') :
    (room.status === 'available' ? 'Available' : room.status === 'occupied' ? 'Occupied' : 'Cleaning');

  // Amenities
  amenitiesList.innerHTML = room.amenities.map(a => `
    <span class="px-3 py-1 rounded-xl bg-slate-100 dark:bg-darkbg-700 text-slate-700 dark:text-slate-200 text-xs font-medium flex items-center gap-1.5">
      <i class="fa-solid fa-circle-check text-brand-500 text-[10px]"></i> ${a}
    </span>
  `).join('');

  // Toggle button text
  toggleBtn.textContent = state.lang === 'so' 
    ? (room.status === 'available' ? 'U calaamadee: Nadiifin' : 'U calaamadee: Bannaan')
    : (room.status === 'available' ? 'Mark for Cleaning' : 'Mark as Available');

  toggleBtn.onclick = () => {
    room.status = room.status === 'available' ? 'cleaning' : 'available';
    renderKPIs();
    renderRooms();
    populateRoomSelectDropdown();
    closeRoomDetailModal();
    showToast(state.lang === 'so' ? `Xaaladda qolka ${room.number} waa la cusbooneysiiyay.` : `Room ${room.number} status updated.`);
  };

  bookBtn.style.display = room.status === 'available' ? 'block' : 'none';
  bookBtn.onclick = () => {
    closeRoomDetailModal();
    openBookingModal(room.id);
  };

  modal.classList.remove('hidden');
  setTimeout(() => {
    modal.classList.remove('opacity-0');
    modal.querySelector('div').classList.remove('scale-95');
  }, 10);
}

function closeRoomDetailModal() {
  const modal = document.getElementById('roomDetailModal');
  modal.classList.add('opacity-0');
  modal.querySelector('div').classList.add('scale-95');
  setTimeout(() => {
    modal.classList.add('hidden');
  }, 200);
}

// Quick action buttons
function bookSpecificRoom(roomId) {
  openBookingModal(roomId);
}

function quickCheckOut(roomId) {
  const room = state.rooms.find(r => r.id === roomId);
  if (room) {
    room.status = 'cleaning';
    // Update corresponding booking if found
    const b = state.bookings.find(b => b.roomId === roomId && b.bookingStatus === 'Checked In');
    if (b) b.bookingStatus = 'Checked Out';
    
    renderKPIs();
    renderRooms();
    renderBookingsTable();
    populateRoomSelectDropdown();
    showToast(state.lang === 'so' ? `Qolka ${room.number} waa laga baxay, hadda waa nadiifin.` : `Room ${room.number} checked out, sent to housekeeping.`);
  }
}

function markRoomAvailable(roomId) {
  const room = state.rooms.find(r => r.id === roomId);
  if (room) {
    room.status = 'available';
    renderKPIs();
    renderRooms();
    populateRoomSelectDropdown();
    showToast(state.lang === 'so' ? `Qolka ${room.number} waa diyaar hadda.` : `Room ${room.number} is now ready & available.`);
  }
}

function deleteBooking(bookingId) {
  const idx = state.bookings.findIndex(b => b.id === bookingId);
  if (idx !== -1) {
    const b = state.bookings[idx];
    const room = state.rooms.find(r => r.id === b.roomId);
    if (room && b.bookingStatus === 'Checked In') {
      room.status = 'available';
    }
    state.bookings.splice(idx, 1);
    renderKPIs();
    renderRooms();
    renderBookingsTable();
    populateRoomSelectDropdown();
    showToast(state.lang === 'so' ? 'Boos-qabashadii waa la tirtiray.' : 'Reservation removed.');
  }
}

function printReceipt(bookingId) {
  const b = state.bookings.find(b => b.id === bookingId);
  if (!b) return;
  alert(
    state.lang === 'so'
      ? `=== RAASIDKA HOTEELKA ===\nTixraaca: ${b.id}\nMacmiilka: ${b.guestName}\nQolka: ${b.roomNumber}\nLacagta: $${b.amount} USD (${b.paymentStatus})\nTaariikhda: ${b.checkIn} ilaa ${b.checkOut}\nMahadsanid!`
      : `=== HOTEL RECEIPT ===\nReference: ${b.id}\nGuest: ${b.guestName}\nRoom: ${b.roomNumber}\nTotal: $${b.amount} USD (${b.paymentStatus})\nDates: ${b.checkIn} to ${b.checkOut}\nThank you!`
  );
}

// Quick Smooth Scroll
function scrollToRooms() {
  const el = document.getElementById('roomsSection');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

function scrollToBookings() {
  const el = document.getElementById('bookingsSection');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// Toast Notifications System
function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast-animate bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-3 text-xs font-semibold pointer-events-auto border border-slate-700 dark:border-slate-200';
  toast.innerHTML = `
    <div class="w-6 h-6 rounded-full bg-brand-500 text-white flex items-center justify-center shrink-0 text-[11px]">
      <i class="fa-solid fa-bell"></i>
    </div>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
