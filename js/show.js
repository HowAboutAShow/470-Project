/*global _config*/

function requestMore() {
    console.log('executed');
    $.ajax({
        method: 'POST',
        url: 'https://6c1u98yjzd.execute-api.us-east-2.amazonaws.com/prod' + '/moreshows',
        headers: {
            Authorization: 'IvAwgUkhii67Tnv8jjlZBae27wwPXecs4u1E7OCX',
        },
        data: JSON.stringify({
                id: "none",
                rating: "none",
                importance: "none"
        }),
        contentType: 'application/json',
        //success: move,
        error: function ajaxError(jqXHR, textStatus, errorThrown) {
        }
    });
    console.log('after ajax');
}

function requestShow(pickupLocation) {
    console.log('executed');
    var comedy = document.getElementById("comedy");
    var comSelection = comedy.options[comedy.selectedIndex].text;
    var comedyI = document.getElementById("comedyImp");
    var comImportance = comedyI.options[comedyI.selectedIndex].text;
    var drama = document.getElementById("drama");
    var dramaSelection = drama.options[drama.selectedIndex].text;
    var dramaI = document.getElementById("dramaImp");
    var dramaImportance = dramaI.options[dramaI.selectedIndex].text;
    var action = document.getElementById("action");
    var actionSelection = action.options[action.selectedIndex].text;
    var actionI = document.getElementById("actionImp");
    var actionImportance = actionI.options[actionI.selectedIndex].text;
    var adventure = document.getElementById("adventure");
    var adventureSelection = adventure.options[adventure.selectedIndex].text;
    var adventureI = document.getElementById("adventureImp");
    var adventureImportance = adventureI.options[adventureI.selectedIndex].text;
    var animation = document.getElementById("animation");
    var animationSelection = animation.options[animation.selectedIndex].text;
    var animationI = document.getElementById("animationImp");
    var animationImportance = animationI.options[animationI.selectedIndex].text;
    var biography = document.getElementById("biography");
    var biographySelection = biography.options[biography.selectedIndex].text;
    var biographyI = document.getElementById("biographyImp");
    var biographyImportance = biographyI.options[biographyI.selectedIndex].text;
    var crime = document.getElementById("crime");
    var crimeSelection = crime.options[crime.selectedIndex].text;
    var crimeI = document.getElementById("crimeImp");
    var crimeImportance = crimeI.options[crimeI.selectedIndex].text;
    var documentary = document.getElementById("documentary");
    var documentarySelection = documentary.options[documentary.selectedIndex].text;
    var documentaryI = document.getElementById("documentaryImp");
    var documentaryImportance = documentaryI.options[documentaryI.selectedIndex].text;
    var family = document.getElementById("family");
    var familySelection = family.options[family.selectedIndex].text;
    var familyI = document.getElementById("familyImp");
    var familyImportance = familyI.options[familyI.selectedIndex].text;
    var fantasy = document.getElementById("fantasy");
    var fantasySelection = fantasy.options[fantasy.selectedIndex].text;
    var fantasyI = document.getElementById("fantasyImp");
    var fantasyImportance = fantasyI.options[fantasyI.selectedIndex].text;
    var history = document.getElementById("history");
    var historySelection = history.options[history.selectedIndex].text;
    var historyI = document.getElementById("historyImp");
    var historyImportance = historyI.options[historyI.selectedIndex].text;
    var horror = document.getElementById("horror");
    var horrorSelection = horror.options[horror.selectedIndex].text;
    var horrorI = document.getElementById("horrorImp");
    var horrorImportance = horrorI.options[horrorI.selectedIndex].text;
    var music = document.getElementById("music");
    var musicSelection = music.options[music.selectedIndex].text;
    var musicI = document.getElementById("musicImp");
    var musicImportance = musicI.options[musicI.selectedIndex].text;
    var musical = document.getElementById("musical");
    var musicalSelection = musical.options[musical.selectedIndex].text;
    var musicalI = document.getElementById("musicalImp");
    var musicalImportance = musicalI.options[musicalI.selectedIndex].text;
    var mystery = document.getElementById("mystery");
    var mysterySelection = mystery.options[mystery.selectedIndex].text;
    var mysteryI = document.getElementById("mysteryImp");
    var mysteryImportance = mysteryI.options[mysteryI.selectedIndex].text;
    var romance = document.getElementById("romance");
    var romanceSelection = romance.options[romance.selectedIndex].text;
    var romanceI = document.getElementById("romanceImp");
    var romanceImportance = romanceI.options[romanceI.selectedIndex].text;
    var sports = document.getElementById("sports");
    var sportsSelection = sports.options[sports.selectedIndex].text;
    var sportsI = document.getElementById("sportsImp");
    var sportsImportance = sportsI.options[sportsI.selectedIndex].text;
    /*var superHero = document.getElementById("superHero");
    var superHeroSelection = superHero.options[superHero.selectedIndex].text;
    var superHeroI = document.getElementById("superHeroImp");
    var superHeroImportance = superHeroI.options[superHeroI.selectedIndex].text;*/
    var thriller = document.getElementById("thriller");
    var thrillerSelection = thriller.options[thriller.selectedIndex].text;
    var thrillerI = document.getElementById("thrillerImp");
    var thrillerImportance = thrillerI.options[thrillerI.selectedIndex].text;
    var war = document.getElementById("war");
    var warSelection = war.options[war.selectedIndex].text;
    var warI = document.getElementById("warImp");
    var warImportance = warI.options[warI.selectedIndex].text;
    var western = document.getElementById("western");
    var westernSelection = western.options[western.selectedIndex].text;
    var westernI = document.getElementById("westernImp");
    var westernImportance = westernI.options[westernI.selectedIndex].text;
    var scifi = document.getElementById("scifi");
    var scifiSelection = scifi.options[scifi.selectedIndex].text;
    var scifiI = document.getElementById("scifiImp");
    var scifiImportance = scifiI.options[scifiI.selectedIndex].text;
    //var str = comedy + drama + action + scifi;
    $.ajax({
        method: 'POST',
        url: _config.api.invokeUrl + '/api',
        headers: {
            Authorization: 'IvAwgUkhii67Tnv8jjlZBae27wwPXecs4u1E7OCX',
            //Ratings: str,
        },
        data: JSON.stringify({
            genres: [
                {
                    genre: "Comedy",
                    rating: comSelection,
                    importance: comImportance
                },
                {
                    genre: "Drama",
                    rating: dramaSelection,
                    importance: dramaImportance
                },
                {
                    genre: "Action",
                    rating: actionSelection,
                    importance: actionImportance
                },
                {
                    genre: "Adventure",
                    rating: adventureSelection,
                    importance: adventureImportance
                },
                {
                    genre: "Animation",
                    rating: animationSelection,
                    importance: adventureImportance
                },
                {
                    genre: "Biography",
                    rating: biographySelection,
                    importance: biographyImportance
                },
                {
                    genre: "Crime",
                    rating: crimeSelection,
                    importance: crimeImportance
                },
                {
                    genre: "Documentary",
                    rating: documentarySelection,
                    importance: documentaryImportance
                },
                {
                    genre: "Family",
                    rating: familySelection,
                    importance: familyImportance
                },
                {
                    genre: "History",
                    rating: historySelection,
                    importance: historyImportance
                },
                {
                    genre: "Horror",
                    rating: horrorSelection,
                    importance: horrorImportance
                },
                {
                    genre: "Music",
                    rating: musicSelection,
                    importance: musicImportance
                },
                {
                    genre: "Musical",
                    rating: musicalSelection,
                    importance: musicalImportance
                },
                {
                    genre: "Mystery",
                    rating: mysterySelection,
                    importance: mysteryImportance
                },
                {
                    genre: "Romance",
                    rating: romanceSelection,
                    importance: romanceImportance
                },
                {
                    genre: "Sports",
                    rating: sportsSelection,
                    importance: sportsImportance
                },
                {
                    genre: "Thriller",
                    rating: thrillerSelection,
                    importance: thrillerImportance
                },
                {
                    genre: "War",
                    rating: warSelection,
                    importance: warImportance
                },
                {
                    genre: "Western",
                    rating: westernSelection,
                    importance: westernImportance
                },
                {
                    genre: "Scifi",
                    rating: scifiSelection,
                    importance: scifiImportance
                }
            ]
        }),
        contentType: 'application/json',
        success: move,
        error: function ajaxError(jqXHR, textStatus, errorThrown) {
            //console.error('Error requesting ride: ', textStatus, ', Details: ', errorThrown);
            //console.error('Response: ', jqXHR.responseText);
            //alert('An error occured when requesting your unicorn:\n' + jqXHR.responseText);
        }
    });
    console.log('after ajax');
}


function completeRequest(result) {
    console.log("Response received ", result);
    movies = result;
    sessionStorage.setItem('movies', JSON.stringify(movies));
    url = 'results.html#';
    window.location = url;
    
    /*var unicorn;
    var pronoun;
    console.log('Response received from API: ', result);
    unicorn = result.Unicorn;
    pronoun = unicorn.Gender === 'Male' ? 'his' : 'her';
    displayUpdate(unicorn.Name + ', your ' + unicorn.Color + ' unicorn, is on ' + pronoun + ' way.');
    animateArrival(function animateCallback() {
        displayUpdate(unicorn.Name + ' has arrived. Giddy up!');
        WildRydes.map.unsetLocation();
        $('#request').prop('disabled', 'disabled');
        $('#request').text('Set Pickup');
    });*/
}

// Register click handler for #request button
/*$(function onDocReady() {
    $('#request').click(handleRequestClick);
    $('#signOut').click(function() {
        WildRydes.signOut();
        alert("You have been signed out.");
        window.location = "signin.html";
    });
    $(WildRydes.map).on('pickupChange', handlePickupChanged);

    WildRydes.authToken.then(function updateAuthMessage(token) {
        if (token) {
            displayUpdate('You are authenticated. Click to see your <a href="#authTokenModal" data-toggle="modal">auth token</a>.');
            $('.authToken').text(token);
        }
    });

    if (!_config.api.invokeUrl) {
        $('#noApiMessage').show();
    }
});*/

function displayUpdate(text) {
    $('#updates').append($('<li>' + text + '</li>'));
}

function move(result) {
  var elem = document.getElementById("myBar");   
  var width = 10;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
        completeRequest(result);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = width * 1  + '%';
    }
  }
    
}

function showAjax(tuple, i) {
    // title (is a string): "('Bose: Dead/Alive', 'tt6883044')('Nobel', 'tt4591834')('Tabula Rasa', 'tt5197860')('The K2', 'tt5966882')('Bajo sospecha', 'tt3825328')
    var title = tuple[0].replace(/[{' '}]/g,'+');
    var id = tuple[1].replace(/[{' '}]/g,'');

    $.ajax({
        method: 'GET',
        dataType: 'json',
        url: 'http://www.omdbapi.com/?t=' + title + '&apikey=98eef2d0',
        success: function(data) {
            var rating = data.imdbRating;
            document.getElementById(i).innerHTML = title.replace(/[{'+'}]/g,' ');
            document.getElementById(i).href = 'https://imdb.com/title/'+id;
            
            if(rating == 'N/A' || rating == null) {
                document.getElementById(i+'rating').innerHTML = ': Rating Unavailable';
            }
            else {
                document.getElementById(i+'rating').innerHTML = ': ' + rating;
            }
        },
        error: function ajaxError(jqXHR, textStatus, errorThrown) {
        }
    });
}

function startUp(){
    movies = JSON.parse(sessionStorage.getItem('movies'))['result'];
    movies = movies.replace(/[{()}]/g, '');
    movies = movies.split('\'\'');

    for (i = 0; i < movies.length; i++) { 
        movie = movies[i];
        movie = movie.replace(/[{\'}]/g, '');
        movie = movie.split(',');

        movies[i] = movie;
    }
}

