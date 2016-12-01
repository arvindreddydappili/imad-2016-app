console.log('Loaded!');
app.get('/ui/loginform.html',function(req,res){
    res.sendFile(path.join(_dirname,'ui','loginform.html'));
});