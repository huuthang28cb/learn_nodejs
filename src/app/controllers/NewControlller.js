class NewControlller{

    //[GET]/news
    index(req, res){
        res.render('new');
    }
    //[GET] /news/:slug
    show(req, res){
        res.send("NEWS DETAIL!!!");
    }
}

module.exports=new NewControlller;