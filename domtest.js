//   ------------------------body-------------------------------
      let body = document.getElementById("body");
      body.style.backgroundColor = "#FEE4C3";
      body.style.margin = "0";
      body.style.padding = "0";
      body.style.height = "100vh";
//   ------------------------parentdiv--------------------------
      let mainDiv = document.getElementById("main-div");
      mainDiv.style.margin = "auto";
      mainDiv.style.display = "flex";
      mainDiv.style.flexDirection = "column";
      mainDiv.style.alignItems = "center";
      mainDiv.style.paddingTop = "40px";
     
//   -------------------------div1--------------------------------
      let div1 = document.getElementById("div1");
      div1.style.display = "flex";
      div1.style.gap = "10px";
//   -------------------------secondDiv----------------------------
      let secondDiv = document.getElementById("div2");
      secondDiv.style.display = "flex";
      secondDiv.style.gap = "10px";
      secondDiv.style.marginTop = "20px";
//   --------------------------heading-tag--------------------------
      let heading = document.getElementsByTagName("h2")[0];
      heading.style.color = "#FFF3E7";
      heading.style.backgroundColor = "#A62A2A";
      heading.style.textAlign = "center";
      heading.style.padding = "15px 252px";
//   ---------------------------book-list---------------------------
      let booksList = document.getElementById("book-list");
      booksList.style.backgroundColor = "#F5F5F5";
      booksList.style.width = "250px";
      booksList.style.height = "210px";
      booksList.style.borderRadius = "10px";
      booksList.style.border = "3px solid #3C3634";

      let paragraph = document.getElementsByClassName("paragraph")[0];
      paragraph.style.fontSize = "22px";
      paragraph.style.fontWeight = "bold";
      paragraph.style.marginLeft = "3px";
      paragraph.style.color = "#8BF4D4";
     

      let listName = document.getElementsByClassName("list-name")[0];
      listName.style.marginTop = "-5px";

      let bookLi1 = document.getElementsByClassName("book-li")[0];
      bookLi1.style.color = "#6AECC0";
      let bookLi2 = document.getElementsByClassName("book-li")[1];
      bookLi2.style.color = "#1B1A1A";
      let bookLi3 = document.getElementsByClassName("book-li")[2];
      bookLi3.style.color = "#A0B1BF";
      let bookLi4 = document.getElementsByClassName("book-li")[3];
      bookLi4.style.color = "#1B1A1A";
      let bookLi5 = document.getElementsByClassName("book-li")[4];
      bookLi5.style.color = "#1B1A1A";

//   --------------------------fruit-list-------------------------------
      let fruitList = document.getElementById("fruit-list");
      fruitList.style.backgroundColor = "#F5F5F5";
      fruitList.style.width = "250px";
      fruitList.style.height = "210px";
      fruitList.style.borderRadius = "10px";
      fruitList.style.border = "3px solid #3C3634";

      let paragraph2 = document.getElementsByClassName("paragraph")[1];
      paragraph2.style.fontSize = "22px";
      paragraph2.style.fontWeight = "bold";
      paragraph2.style.marginLeft = "3px";
      paragraph2.style.color = "#B2EA49";


      let listName1 = document.getElementsByClassName("list-name")[1];
      listName1.style.marginTop = "-5px";
   
      let fruitItem = document.getElementsByClassName("fruit-li");
      for(let i = 0; i < fruitItem.length; i++){
          if( i === 3){
            fruitItem[i].style.color = "#96A1AA";
          
          }
          else if( i === 6 ){
            fruitItem[i].style.color = "#7D4C69";
          }
          else{
            fruitItem[i].style.color = "#1B1A1A";
          }
      }

    
//   --------------------------place-list-------------------------------
      let placeList = document.getElementById("place-list");
      placeList.style.backgroundColor = "#F5F5F5";
      placeList.style.width = "250px";
      placeList.style.height = "210px";
      placeList.style.borderRadius = "10px";
      placeList.style.border = "3px solid #3C3634";

      let paragraph3 = document.getElementsByClassName("paragraph")[2];
      paragraph3.style.fontSize = "22px";
      paragraph3.style.fontWeight = "bold";
      paragraph3.style.marginLeft = "3px";
      paragraph3.style.color = "#4190B9";


      let listName2 = document.getElementsByClassName("list-name")[2];
      listName2.style.marginTop = "-5px";
      
      let placeLi1 = document.getElementsByClassName("place-li")[0];
      placeLi1.style.color = "#1B1A1A";
      let placeLi2 = document.getElementsByClassName("place-li")[1];
      placeLi2.style.color = "#B7CAD5";
      let placeLi3 = document.getElementsByClassName("place-li")[2];
      placeLi3.style.color = "#1B1A1A";
      let placeLi4 = document.getElementsByClassName("place-li")[3];
      placeLi4.style.color = "#1B1A1A";
      
//   --------------------------using-dom-------------------------------
//   --------------------------movie-list-------------------------------

    let movieDiv = document.createElement("div");
    movieDiv.setAttribute("id", "movie-list");
    movieDiv.innerHTML = `
    <p class="paragraph">List of movies</p>
    <ul class="list-name">
        <li class="movie-li">Movie name 1</li>
        <li class="movie-li">Movie name 2</li>
        <li class="movie-li">Movie name 3</li>
        <li class="movie-li">Movie name 4</li>
    </ul>`;

    movieDiv.style.backgroundColor = "#F5F5F5";
    movieDiv.style.width = "250px";
    movieDiv.style.height = "155px";
    movieDiv.style.borderRadius = "10px";
    movieDiv.style.border = "3px solid #3C3634";

    let movieParagraph = movieDiv.getElementsByClassName("paragraph")[0];
    movieParagraph.style.fontSize = "22px";
    movieParagraph.style.fontWeight = "bold";
    movieParagraph.style.marginLeft = "3px";
    movieParagraph.style.color = "#C219CA";  

    let movielistName = movieDiv.getElementsByClassName("list-name")[0];
    movielistName.style.marginTop = "-5px";

    let movieLi1 = movieDiv.getElementsByClassName("movie-li")[0];
    movieLi1.style.color = "#1B1A1A";
    let movieLi2 = movieDiv.getElementsByClassName("movie-li")[1];
    movieLi2.style.color = "#1B1A1A";
    let movieLi3 = movieDiv.getElementsByClassName("movie-li")[2];
    movieLi3.style.color = "#A2A578";
    let movieLi4 = movieDiv.getElementsByClassName("movie-li")[3];
    movieLi4.style.color = "#1B1A1A";

    let div2 = document.getElementById("div2");
    div2.appendChild(movieDiv);


//   --------------------------sport-list-------------------------------

    let sportDiv = document.createElement("div");
    sportDiv.setAttribute("id", "sport-list");
    sportDiv.innerHTML = `
    <p class="paragraph">List of sports</p>
    <ul class="list-name">
        <li class="sport-li">sport name 1</li>
        <li class="sport-li">sport name 2</li>
        <li class="sport-li">sport name 3</li>
        <li class="sport-li">sport name 4</li>
    </ul>`;

    sportDiv.style.backgroundColor = "#F5F5F5";
    sportDiv.style.width = "250px";
    sportDiv.style.height = "155px";
    sportDiv.style.borderRadius = "10px";
    sportDiv.style.border = "3px solid #3C3634";

    let sportParagraph = sportDiv.getElementsByClassName("paragraph")[0];
    sportParagraph.style.fontSize = "22px";
    sportParagraph.style.fontWeight = "bold";
    sportParagraph.style.marginLeft = "3px";
    sportParagraph.style.color = "#B53535";  

    let sportlistName = sportDiv.getElementsByClassName("list-name")[0];
    sportlistName.style.marginTop = "-5px";

    let sportLi1 = sportDiv.getElementsByClassName("sport-li")[0];
    sportLi1.style.color = "#ACBCD0";
    let sportLi2 = sportDiv.getElementsByClassName("sport-li")[1];
    sportLi2.style.color = "#1B1A1A";
    let sportLi3 = sportDiv.getElementsByClassName("sport-li")[2];
    sportLi3.style.color = "#ACBCD0";
    let sportLi4 = sportDiv.getElementsByClassName("sport-li")[3];
    sportLi4.style.color = "#1B1A1A";
    div2.appendChild(sportDiv);
   



