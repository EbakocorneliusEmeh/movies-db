import "./style.css";

const app = document.getElementById("app");

const div = document.createElement("div");

div.innerHTML = `
<header>
      <div class="back">
        <div>
            <img src="../images/Logo.png" alt=""> <img src="../images/SaintStream.png" alt=""> 

        </div>
        <div>
          <nav>
          <ul>
            <li><a href="./multipage-vite-vanilla-js/index.html">Home</a></li>
            <li><a href="/detail.html">Discover</a></li>
            <li><a href="/detail.html">MovieRelease</a></li>
            <li><a href="/detail.html">Forum</a></li>
            <li><a href="/detail.html">About</a></li>
          </ul>
            
          </nav>
        </div>
        <div class="sone">
         <img class="search" src="/images/search-imgool.png" alt="">
         <img class="notifications" src="/images/download (1)imggg.png" alt="">
         <img class="avater" src="/images/avater.png" alt="">
         <img class="drop" src="/images/drop down.png" alt="">
        </div>
      </div>

      <section id="hero">
        <button class="one">season 3</button>
        <h1 class="two">The Mandalorain</h1>
        <h5 class="twoo">2h40m . 2022 . fantasty . Actions</h5>
        <p class="twooo">The third season of the American television <br> series The Mandalorain stars pedro pascal as the <br> title character, a bountry hunter  traveling to <br> Mandalorain to redeem  his past tansgressions  <br>with his adopted son Grogu  being aided on their <br> journey  by fellow Mandalorain  Bo-Katan kryze.</p>
        <div class="two">
        <button id="btn1"><img width="25" height="25" src="https://img.icons8.com/ios-filled/50/1A1A1A/circled-play.png" alt="circled-play"/>Play Now</button>
        <button id="btn2"><img width="25" height="25" src="https://img.icons8.com/ios-filled/50/1A1A1A/circled-play.png" alt="circled-play"/>Watch Trailer</button>
        <button id="btn3"><img width="25" height="25" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/bookmark-ribbon.png" alt="bookmark-ribbon"/>Add wacthlist</button>
        <div class="bako">
          <img src="/images/WhatsApp Imag dis.jpg" alt="" class="b-img">
          <img src="/images/WhatsApp Image netfl.jpg" alt="" class="b-img">
          <img src="/images/WhatsApp Image hbm.jpg" alt="" class="b-img">
          <img src="/images/WhatsApp Image pix.jpg" alt="" class="b-img">
          <img src="/images/WhatsApp Image mav.jpg" alt="" class="b-img">
          <img src="/images/WhatsApp Image star.jpg" alt="" class="b-img">
          <img src="/images/WhatsApp Image nat.jpg" alt="" class="b-img">
        </div>
        </div>
        
      </section>
    </header>

    <section id="movies">
        <div class="favouritemovies"></div>
    </section>
      <div id="aaa">
      </div>
      <div id="image-container"></div> 



      <div class="thre">
      <div class="ther">
        <p>Explore by the genre</p>
        <h2>
          Guardian Of The <br> Galaxy; Volume 3
        </h2>
        <h5>2H40M.2022.Superhero . Actions</h5>
      </div>
      <div class="tomp">
      <button id="button"><img width="25" height="25" src="https://img.icons8.com/ios-filled/50/1A1A1A/circled-play.png" alt="circled-play"/>Play Now</button>
      <button id="button3"><img width="25" height="25" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/bookmark-ribbon.png" alt="bookmark-ribbon"/>Add wacthlist</button>
      </div>

      <div class="opop">
       <div class="opp"> < </div>
       <div class="upp"> > </div>
     </div>
      <div class="zump">
      <div class="muk">
      <img src="/images/imagehero.png" alt="">
   </div>
     <div class="mok"><img src="/images/imagedram.png" alt=""></div>
     <div class="mke"><img src="/images/imagesit.png" alt=""></div>
     <div class="muuk"><img src="/images/imahetra.png" alt=""></div>
     <div class="moke"><img src="/images/imagecome.png" alt=""></div>
    <div class="muok"><img src="/images/imagefan.png" alt=""></div>
    </div>

      <footer>
    <div class="jude">
      <div class="penn">
        <div class="pppe">
           <p>Home </p> 
           <p>Discover /</p>
           <p>Influence /</p>
           <p>Release /</p>
        </div>
       <div class="logos">
          <img width="50" height="50" src="https://img.icons8.com/ios/50/1A1A1A/instagram-new--v1.png" alt="instagram-new--v1" class="amba"/>
          <img width="50" height="50" src="https://img.icons8.com/ios/50/1A1A1A/facebook-new.png" alt="facebook-new" class="amba"/>
          <img width="50" height="50" src="https://img.icons8.com/ios/50/1A1A1A/twitterx--v2.png" alt="twitterx--v2" class="amba"/>
         <img width="50" height="50" src="https://img.icons8.com/ios-glyphs/30/1A1A1A/google-logo--v1.png" alt="google-logo--v1" class="amba"/>
       </div>
       </div>
  
    <div class="parata">
      <h1>Our plantform is trusted <br> by millions $ features <br> brst update movies <br> all around the world.</h1>
  
      <div class="ben">
      <p>privacy</p>
      <p>Team of service</p>
      <p>Language</p>
      </div>
    </div>
    </div>
    </footer> 

`;

app.append(div);

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZWYzNjNmOWY5YTNjNTUzNTE0OWM5MDk3MGZhMjMxMSIsIm5iZiI6MTczMzUxMDAxOS40MTYsInN1YiI6IjY3NTM0MzgzODcxYTQyYzljMjQ1NDFhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FgU6EplfTnUB-e6GZZfUI7lO0Ad71oYwG54qzjXpozo",
  },
};
fetch(
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
  options
)
  .then((res) => res.json())
  .then(({ results }) => {
    console.log(results);
    const aaaDiv = document.getElementById("aaa");

    for (let index = 0; index < results.length; index++) {
      aaa.innerHTML += `
      <div class="img-container">
            <h2>${results[index].original_title} </h2>
      <img src="https://image.tmdb.org/t/p/w500${results[index].poster_path}" alt="${results[index].original_title}" />
      <p><span id="star">&#11088;</span>${results[index].vote_count}   <span id="thumbs">&#128077</span></p>
      </div>

      `;
    }
  })
  .catch((err) => console.error(err));
