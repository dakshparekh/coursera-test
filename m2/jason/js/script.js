// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("jason/data/name.json", 
            function (res) {
              var temp =
   document.getElementById("name").value;
                 
              if ( temp === res.student1) {
                  console.log(temp);
                var temp2= res.student1+": "
                
              }
              else if (temp === res.student2) {
                var temp3= res.question2+": "
              }
          else {
            var temp1 = "no such student";
          }
   

              document.querySelector("#content")
                .innerHTML = "<h2>" + temp+ "</h2>";

            //  document.querySelector("#content")
              //  .innerHTML = "<h2>" + temp2+ "</h2>";
          document.querySelector("#content1")
                .innerHTML = "<h2>" + temp1+ "</h2>";
            });
      });
  
  }
);
