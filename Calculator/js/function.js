$(document).ready(function(){
    var screen = $('#screen'); //screen variable 
    var table = new Array(); // write on screen variable
    var nr = ""; // variable takes value of pressed key
    var operation = ""; // type of operation
    var result = ""; // result of operation
    var index = ""; // index in string of var operation
    var x = ""; //base of exponentiation in expanded calculator 
    var w =""; //exponent of exponentiation in expanded calculator 
    var r ="";
    
    function addToScreen(val) {
         if (val != "b" && val != "c") { 
             table.push(val); //bonding value of pressed key
             switch (val) {
                     case "sup2":
                         result = moreOptions ("sup2");
                    break;
                     case "sup3":
                         result = moreOptions ("sup3");
                    break;
                     case "radic2":
                         result = moreOptions ("radic2");
                    break;
                     case "log":
                         result = moreOptions ("log");
                    break;
                     case "sin":
                         result = moreOptions ("sin");
                    break;
                     case "cos":
                         result = moreOptions ("cos");
                    break;
                }

             if ( val == "=") {
                 search ();
            }
         }  else {
             switch (val) {
                 case "b":
                     backspace(result); // function backspace
                break;
                 case "c":
                     clear(); // function clears variable table
                break;
            }
         }
             print (result);
          //   if (val == "=") { 
          //       search();
             //   console.log (table);
              //  console.log(val);
              //  moreOptions (val);
         
     //   } else if (val == "b") {
        //    backspace(result); // function backspace
       // } else if (val == "c")
       // {
        //    clear(); // function clears variable table
       // }
    }
    
    function moreOptions(option) {
        switch (option) {
            case "sup2":
                    table.pop();
                    x = parseFloat(table.join("")); // bonding and saving to number
                   // console.log(x);
                    r = Math.pow (x, 2);
                   //  console.log (r);
                break ;
            case "sup3":
                   table.pop();
                    x = parseFloat(table.join("")); // bonding and saving to number
                   // console.log(x);
                    r = Math.pow (x, 3);
                    // console.log (r);
                break ;
            case "radic2":
                table.pop();
               // console.log(table);
                 x = parseFloat(table.join("")); // bonding and saving to number
                   // console.log(x);
                    r = Math.sqrt (x);
                    // console.log (r);
                break ;
            case "log":
                table.pop();
                console.log(table);
                 x = parseFloat(table.join("")); // bonding and saving to number
                   // console.log(x);
                    r = Math.log (x);
                    // console.log (r);
                break ;
            case "sin":
                table.pop();
                console.log(table);
                x = parseFloat(table.join("")); // bonding and saving to number
                   // console.log(x);
                    r = Math.sin (x);
                    // console.log (r);
                break ;
            case "cos":
                table.pop();
                console.log(table);
                x = parseFloat(table.join("")); // bonding and saving to number
                   // console.log(x);
                    r = Math.cos (x);
                    // console.log (r);
                break ;
            }
        return r;
         //if (option == "sup2") { 
           //  screen.html("<p>"+"Podaj liczbe: "+"</p>");// request for number
          //  $('.key').click(function(event){
           //     x = $(this).data('nr');
           //     console.log(x);
             //       var r = Math.pow(x, 2);
            //            console.log(r);
            //       if (r) {
            //       screen.html("<p>"+ x + "&sup2;" +"</p>"+"<h1>"+ r +"</h1>");
             //       x ="";
             //      r= "";
           //       }
          //  });
             
        // } else if(option == "sup3"){ 
        //     screen.html("<p>"+"Podaj liczbe: "+"</p>");// request for number
        //     $('.key').click(function(event){
        //        x = $(this).data('nr');
        //       console.log(x);
         //       result = Math.pow(x, 3);
         //       if (result) {
         //       screen.html("<p>"+ x + "&sup2;" +"</p>"+"<h1>"+result+"</h1>");
          //      x ="";
          //      result = "";
         //       }
         //   });             
       // } else if(option == "supx"){  
   
       // } else if(option == "radic2"){  
   
       // } else if(option == "radic3"){  
   
       // } else if(option == "radicx"){  
   
       // }
    }
    
    function print (r) {
            screen.html("<p>"+table.join("")+"</p>");// write operation on screen
          //  console.log(result);
        if (r) {
            screen.html("<p>"+table.join("")+"</p>"+"<h1>"+r+"</h1>");
            }
        }

    function backspace () { // function backspace
        if (result) {
            result = "";
        } else {
            table.pop();
        }
    }
    function clear() { // function clears variable table
            result = "";
            table = [];
    }
    
    function search () {
        table.forEach(function(el, i) {
                    if (el == "+") {
                       operation = "+";
                       // console.log(action);
                        index = i;
                       // console.log(index);
                      result =  action (operation, index);
                      //  console.log(result);
                    } else if (el == "-") {
                        operation = "-";
                       // console.log(action);
                        index = i;
                       // console.log(index);
                      result = action (operation, index);
                      //   console.log(result);
                    } else if (el == "*") {
                        operation = "*";
                       // console.log(action);
                        index = i;
                       // console.log(index);
                      result = action (operation, index);
                     //    console.log(result);
                    } else if (el == "/") {
                        operation = "/";
                       // console.log(action);
                        index = i;
                       // console.log(index);
                      result = action (operation, index);
                      //   console.log(result);
                    }
                });
    }
    
function action(o, i) { // function performs operaction
           // console.log(i);
          //  console.log(a);
          var table1 = table.slice(0,i); //cutting variable table
           // console.log(table1);
         var a = parseFloat(table1.join("")); // bonding and saving to number
         //  console.log(a);
         // console.log(typeof(a));
        var table1 = table.slice(i+1,table.length); //cutting variable table
          var b = parseFloat(table1.join("")); // bonding and saving to number
        // console.log(b);
        // console.log(typeof(b));
        switch (o) {
            case "+":
                r = (a + b);
             break;
            case "-":
                r = (a - b);
             break;
            case "*":
                r = (a * b);
             break;
            case "/":
                r = (a / b);
             break;
            }
    return (r);
       // if (o == "+") {
        //  r = (a + b);
       //   return (r);
      //  } else if (o == "-") {
       //     r = (a - b);
       //     return (r);
       // } else if (o == "*") {
       //     r = (a * b);
       //     return (r);
       // } else if (o == "/") {
       //     r = (a / b);
       //     return (r);
       // } 
 }
    
    // press key
    $('.key').click(function(event){
            nr = $(this).data('nr');
           //  console.log(nr);  
            addToScreen (nr);
    });
  
    //display extra options
    $("#panel").hide();
    $("#more").click(function(){
      $("#panel").slideToggle("slow");        
    });
    
    
});