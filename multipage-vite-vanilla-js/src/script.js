const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZWYzNjNmOWY5YTNjNTUzNTE0OWM5MDk3MGZhMjMxMSIsIm5iZiI6MTczMzUxMDAxOS40MTYsInN1YiI6IjY3NTM0MzgzODcxYTQyYzljMjQ1NDFhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FgU6EplfTnUB-e6GZZfUI7lO0Ad71oYwG54qzjXpozo",
    },
  };
  fetch(
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", options
  )
    .then((res) => res.json())
    .then(({ results }) => {
      console.log(results);
      const topRatedMovies = document.getElementById("top-rated");
  
      for (let index = 0; index < results.length; index++) {
        topRatedMovies.innerHTML += `
        <div class="img-container">
              <h2>${results[index].original_title} </h2>
        <img src="https://image.tmdb.org/t/p/w500${results[index].poster_path}" alt="${results[index].original_title}" />
        <p><span id="star">&#11088;</span>${results[index].vote_count}   <span id="thumbs">&#128077</span></p>
        </div>
  
        `;
        // const img =document.createElement("img");
        // img.className = "image-poster";

        // topRatedMovies.appendChild(img);
      }
    })
    .catch((err) => console.error(err));
  