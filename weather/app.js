var http = require('http');
var url = 'http://api.openweathermap.org/data/2.5/weather?q=Vellore,IN&appid=1eb192dbe7c589b8adb681612de83705&units=metric';
var server = http.createServer(function(request, response){
        // All logic wil go here.
        var request = require('request');
        request(url, function(err, res, body){
            var data = JSON. parse(body);
            response.write("<html><body><div id='container'>");
            response.write( "<h2>"+'Date :'+ new Date(data ['dt']*1000)+"</h2>");
            response.write("<h1>"+ 'City Name : ' + data['name' ] + '<br>' + "</h1>");
            response.write("<h1>"+ 'Country Name : ' + data.sys['country' ] + '<br>' + "</h1><hr>");
            response.write("<h2>"+ 'Wind speed : '+ data.wind['speed'] +' m/s'+ '<br>'+"</h2><hr>");
            response.write("<h2>"+ 'Temperture : '+ data.main['temp'] +' &degC'+ '<br>'+"</h2>");
            response.write("<h2>"+ 'Temperture(min) : '+ data.main['temp_min'] +' &degC'+ '<br>'+"</h2>");
            response.write("<h2>"+ 'Temperture(max) : '+ data.main['temp_max'] +' &degC'+ '<br>'+"</h2>");
            response.write("<h2>"+ 'Humidity : '+ data.main['humidity'] +'%'+ '<br>'+"</h2>");
            response.write("<h2>"+ 'Temperture(Feels like) : '+ data.main['feels_like'] +' &degC'+ '<br>'+"</h2><hr>");
            response.write( "<h2>"+'SunRise Time :'+ new Date(data.sys ['sunrise']*1000)+"</h2>");
            response.write( "<h2>"+'SunSet Time :'+ new Date(data.sys ['sunset']*1000)+"</h2>");
            response.write("</div></body></html>");
            response.end ();                                                 
        });

}).listen(3000);