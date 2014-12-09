(function (homeController) { 

    homeController.init = function (app) { 
        app.get("/", function (req, res) {
            res.render("jade/index", { title: "Express + Jade" });
        });
    
    };

})(module.exports);