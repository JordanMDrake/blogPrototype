// turn this whole thing into a function


// module.exports.getDate = getDate;




// function getDate() {

//     // var today = new Date();
//   // var currentDay = today.getDay();

//   // if (currentDay === 6 || currentDay === 7) {
//   //   res.write("Yay! It's the weekend!");
//   // } else {
//   //   res.write("Booo, it's the middle of the week. ");
//   //   res.write("No fun, but almost there!");
//   //   res.send();


//   // TODO: toLocaleDateString()

//   // var today = new Date();

        // let options = {
        //     weekday: "long",
        //     day: "numeric",
        //     month: "long"
        // };

//   // var day = today.toLocaleDateString("en-US", options);
//   // res.render("list", {kindOfDay: day, newListItem: item})    <%= kindOfDay %> on list page


// }



// TODO written more succinctly, the above function can be converted into an anonymous function and assigned to a variable
//      this clarifies exactly what we are exporting and cuts down on redundant, potentially confusing code
//      additionally, because exporting data is so common, the 'module' keyword can be omitted as a further shortcut

                // exports.getDate = function() {
                //     const today = new Date();

                //     const options = {
                //         weekday: "long",
                //         day: "numeric",
                //         month: "long"
                //     };

                //     return today.toLocaleDateString("en-US", options);
                // };

// ^^ easy-peasy







//  TODO this is how to send more than one function through the server via Node
// module.exports.getDay = getDay;

// function getDay() {
//     console.log("This is the information provided by the getDat function");
// }





// app.post("/", function(req, res) {
//   item = req.body.newItem;
//   console.log(item);

//   res.redirect("/");

// });