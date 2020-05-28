const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

// Note: AudioPlayer is defined in audio-player.js
const audioFile = 'https://p.scdn.co/mp3-preview/bfead324ff26bdd67bb793114f7ad3a7b328a48e?cid=9697a3a271d24deea38f8b7fbfa0e13c';
const audioPlayer = AudioPlayer('.player', audioFile);

const search = (ev) => {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

// 1. tracks
const getTracks = (term) => {
  // first clear out the HTML:
  document.querySelector('#tracks').innerHTML = "";
  //build the url and fetch
  let url = 'https://www.apitutor.org/spotify/simple/v1/search?type=track&q=' + term;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      if (data.length === 0) {
        document.querySelector("#tracks").innerHTML = "nothing found";
      }
      else {
      let counter = 0;
      for (const track of data) {
      // limiting the results to only the first 5
          if (counter === 5) {
              break;
          }
    // create the template
          const template = `
              <section class="track-item preview" data-preview-track="${track.preview_url}">
                  <img src="${track.album.image_url}">
                  <i class="fas play-track fa-play" aria-hidden="true"></i>
                  <div class="label">
                  <h3>${track.name}</h3>
                  <p>
                    ${track.artist.name}
                  </p>
                  </div>
              </section>
              `;
          document.querySelector('#tracks').innerHTML += template;
          ++counter;
        }
    // after the for loop has completed and the DOM has been populated,
    // we need to add the click event handlers to play the song:
      const trackElements = document.querySelectorAll('.track-item');
      for (const item of trackElements) {
      item.onclick = (ev) => {
        // play the song:
        const preview_url = ev.currentTarget.getAttribute('data-preview-track');
        audioPlayer.setAudioFile(preview_url);
        audioPlayer.play();
        document.querySelector('footer.track-item').innerHTML = ev.currentTarget.innerHTML;
      }
      }
    }
    });
};



//  2. albumns
const getAlbums = (term) => {
  document.querySelector('#albums').innerHTML = "";
  let url = 'https://www.apitutor.org/spotify/simple/v1/search?type=album&q=' + term;
  // issue the fetch command:
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      if (data.length === 0) {
        document.querySelector("#albums").innerHTML = "nothing found";
      }
      else {
          for (const album of data) {
          const template = `
          <section class="album-card" id="${album.id}">
        <div>
            <img src="${album.image_url}">
            <h3>${album.name}</h3>
            <div class="footer">
                <a href="${album.spotify_url}" target="_blank">
                    view on spotify
                </a>
            </div>
        </div>
    </section>`;
      document.querySelector('#albums').innerHTML += template;
}
}
    });
};




// 3. artist
const getArtist = (term) => {
  // build the url:
  let url = 'https://www.apitutor.org/spotify/simple/v1/search?type=artist&q=' + term;
  // issue the fetch command:
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      if (data.length === 0) {
        document.querySelector("#artist").innerHTML = "nothing found";
      }
      else {
            const artist = data[0];
            const template = `
              <section class="artist-card" id="${artist.id}">
                <div>
                  <img src="${artist.image_url}">
                  <h3>${artist.name}</h3>
                  <div class="footer">
                      <a href="${artist.spotify_url}" target="_blank">
                        view on spotify
                      </a>
                  </div>
                </div>
            </section>`;
        document.querySelector('#artist').innerHTML = template;
    }
    });
};


document.querySelector('#search').onkeyup = (ev) => {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
};
