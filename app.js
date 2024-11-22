$("header").html(`<div class="top_header"></div>
      <div class="top_nav">
        <div class="container">
          <div class="header_flex">
            <div class="header_bars">
              <div class="bar">Menü</div>
            </div>
            <div class="header_social">
              <ul>
                <li>
                  <a href="/" title="instagram"
                    ><i class="fa-brands fa-instagram"></i
                  ></a>
                </li>
                <li>
                  <a href="/" title="facebook"
                    ><i class="fa-brands fa-facebook-f"></i
                  ></a>
                </li>
                <li>
                  <a href="/" title="linkedin"
                    ><i class="fa-brands fa-linkedin-in"></i
                  ></a>
                </li>
              </ul>
            </div>
            <div class="header_logo">
              <a href="/" title="DroneSoccer"><img src="img/logo.png" alt="Logo" /></a>
            </div>
            <div class="header_phone">
              <a href="/" class="header_phone" title="Hemen Ulaşın">
                <div>
                  <i class="fa-solid fa-phone"></i>
                </div>
                <div>
                  <span class="phone_text">Hemen Ulaşın</span>
                  <span class="phone_number">0545 504 0565</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="header_links">
          <ul>
            <li>
              <a href="/" title="Anasayfa">Anasayfa</a>
            </li>
            <li>
              <a href="/hakkimizda.html" title="Hakkımızda">Hakkımızda</a>
            </li>
            <li>
              <a href="/haberler.html" title="Haberler">Haberler</a>
            </li>
            <li>
              <a href="/topluluk.html" title="Topluluk">Topluluk</a>
            </li>
            <li>
              <a href="/takimlar.html" title="Takımlar">Takımlar</a>
            </li>
            <li>
              <a href="/ligler.html" title="Ligler">Ligler</a>
            </li>
            <li>
              <a href="/etkinlikler.html" title="Etkinlikler">Etkinlikler</a>
            </li>
            <li>
              <a href="/is-birlikleri.html" title="İş Birlikleri">İş Birlikleri</a>
            </li>
            <li>
              <a href="/iletisim.html" title="İletişim">İletişim</a>
            </li>
          </ul>
        </div>
        <div class="header_overlay"></div>
      </div>`);
$(".bar").click(function () {
  $(".header_links, .header_overlay").addClass("open");
});
$(".header_overlay").click(function () {
  $(".header_links, .header_overlay").removeClass("open");
});

var news_slider = new Swiper(".news_slider", {
  slidesPerView: 3,
  spaceBetween: 16,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});

var teams_slider = new Swiper(".teams_slider", {
  slidesPerView: 3,
  spaceBetween: 16,
  navigation: {
    nextEl: ".teams_arrow_right",
    prevEl: ".teams_arrow_left",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});
