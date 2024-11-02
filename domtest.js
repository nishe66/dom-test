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
      let heading = document.getElementsByTagName("h2");
      heading[0].style.color = "#FFF3E7";
      heading[0].style.backgroundColor = "#A62A2A";
      heading[0].style.textAlign = "center";
      heading[0].style.padding = "15px 252px";
//   ---------------------------book-list---------------------------
      let booksList = document.getElementById("book-list");
      booksList.style.backgroundColor = "#F5F5F5";
      booksList.style.width = "250px";
      booksList.style.height = "210px";
      booksList.style.borderRadius = "10px";
      booksList.style.border = "3px solid #3C3634";

      let paragraph = document.getElementsByClassName("paragraph");
      paragraph[0].style.fontSize = "22px";
      paragraph[0].style.fontWeight = "bold";
      paragraph[0].style.marginLeft = "3px";
      paragraph[0].style.color = "#8BF4D4";
     

      let listName = document.getElementsByClassName("list-name");
      listName[0].style.marginTop = "-5px";

      let bookLi = document.getElementsByClassName("book-li");
      bookLi[0].style.color = "#6AECC0";
      bookLi[1].style.color = "#1B1A1A";
      bookLi[2].style.color = "#A0B1BF";
      bookLi[3].style.color = "#1B1A1A";
      bookLi[4].style.color = "#1B1A1A";

//   --------------------------fruit-list-------------------------------
     
      let fruitList = document.getElementById("fruit-list");
      fruitList.style.backgroundColor = "#F5F5F5";
      fruitList.style.width = "250px";
      fruitList.style.height = "210px";
      fruitList.style.borderRadius = "10px";
      fruitList.style.border = "3px solid #3C3634";
     
      
      paragraph[1].style.fontSize = "22px";
      paragraph[1].style.fontWeight = "bold";
      paragraph[1].style.marginLeft = "3px";
      paragraph[1].style.color = "#B2EA49";
   
      listName[1].style.marginTop = "-5px";
   
      let fruitLi = document.getElementsByClassName("fruit-li");
       fruitLi[0].style.color = "#1B1A1A";
       fruitLi[1].style.color = "#1B1A1A";
       fruitLi[2].style.color = "#1B1A1A";
       fruitLi[3].style.color = "#96A1AA";
       fruitLi[4].style.color = "#1B1A1A";
       fruitLi[5].style.color = "#1B1A1A";
       fruitLi[6].style.color = "#7D4C69";
//   --------------------------place-list-------------------------------
      let placeList = document.getElementById("place-list");
      placeList.style.backgroundColor = "#F5F5F5";
      placeList.style.width = "250px";
      placeList.style.height = "210px";
      placeList.style.borderRadius = "10px";
      placeList.style.border = "3px solid #3C3634";
       
     
      paragraph[2].style.fontSize = "22px";
      paragraph[2].style.fontWeight = "bold";
      paragraph[2].style.marginLeft = "3px";
      paragraph[2].style.color = "#4190B9";
       
       
      listName[2].style.marginTop = "-5px";
      
             
      let placeLi = document.getElementsByClassName("place-li");
      placeLi[0].style.color = "#1B1A1A";
      placeLi[1].style.color = "#B7CAD5";
      placeLi[2].style.color = "#1B1A1A";
      placeLi[3].style.color = "#1B1A1A";
      
     
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

      let movieParagraph = movieDiv.getElementsByClassName("paragraph");
      movieParagraph[0].style.fontSize = "22px";
      movieParagraph[0].style.fontWeight = "bold";
      movieParagraph[0].style.marginLeft = "3px";
      movieParagraph[0].style.color = "#C219CA";  
      
      let movielistName = movieDiv.getElementsByClassName("list-name");
      movielistName[0].style.marginTop = "-5px";

      let movieLi = movieDiv.getElementsByClassName("movie-li");
      movieLi[0].style.color = "#1B1A1A";
      movieLi[1].style.color = "#1B1A1A";
      movieLi[2].style.color = "#A2A578";
      movieLi[3].style.color = "#1B1A1A";
      
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
    
      let sportParagraph = sportDiv.getElementsByClassName("paragraph");
      sportParagraph[0].style.fontSize = "22px";
      sportParagraph[0].style.fontWeight = "bold";
      sportParagraph[0].style.marginLeft = "3px";
      sportParagraph[0].style.color = "#B53535";  
      
      let sportlistName = sportDiv.getElementsByClassName("list-name");
      sportlistName[0].style.marginTop = "-5px";
      
      let sportLi = sportDiv.getElementsByClassName("sport-li");
      sportLi[0].style.color = "#ACBCD0";
      sportLi[1].style.color = "#1B1A1A";
      sportLi[2].style.color = "#ACBCD0";
      sportLi[3].style.color = "#1B1A1A";
      div2.appendChild(sportDiv);
    
      





  
    
    








    
    
    
    
    
   



