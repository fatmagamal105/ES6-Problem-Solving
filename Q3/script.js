function course(options={courseName,duration,owner}) {

    var obj = {
        courseName: "not set",
        duration: 0,
        owner:"ITI"
    }

    options = Object.assign({},obj,options)
    console.log(options)

}

var Course = course({
    courseName : "Frontend and Cross-mobile platform",
    duration :"3 month",
})