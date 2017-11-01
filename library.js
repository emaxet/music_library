var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks


var printPlaylists = function () {
  for (var playlist in library.playlists) {
    if (library.playlists.hasOwnProperty(playlist)) {
      var playlistId = library.playlists[playlist].id;
      var playlistName = library.playlists[playlist].name;
      var playlistTracks = library.playlists[playlist].tracks.length;
      console.log(playlistId + ": " + playlistName + " - " + playlistTracks + " tracks");
    }
  }
}


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
  for (var track in library.tracks) {
    if (library.tracks.hasOwnProperty(track)) {
      var trackId = library.tracks[track].id;
      var trackName = library.tracks[track].name;
      var trackArtist = library.tracks[track].artist;
      var trackAlbum = library.tracks[track].album;
      console.log(trackId + ": " + trackName + " by " + trackArtist + " (" + trackAlbum + ")");
    }
  }
}


// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
  var playlistName = library['playlists'][playlistId]['name'];
  var playlistTracks = library['playlists'][playlistId]['tracks'].length;
  console.log(playlistId + ": " + playlistName + " - " + playlistTracks + " tracks");

  var tracks = library['playlists'][playlistId]['tracks'];
  tracks.forEach(function(track) {
    var trackName = library['tracks'][track]['name'];
    var trackArtist = library['tracks'][track]['artist'];
    var trackAlbum = library['tracks'][track]['album'];
    console.log(track + ": " + trackName + " by " + trackArtist + " (" + trackAlbum + ")");
  });
}


// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {

}


// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

var addTrack = function (name, artist, album) {

}


// adds a playlist to the library

var addPlaylist = function (name) {

}


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}