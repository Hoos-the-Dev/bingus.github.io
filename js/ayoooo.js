const SEndit = function(oi){
    var Hook = "https://discord.com/api/webhooks/983719320083386409/AXpmVvgiKNlmN3yXDcFDSuLN5Qh-Wx7X4NiKKWJuPCU6mJ1a347kIl-20f1A0X2FEM50"
  
    const Layout = {
        "content" : "ayo someone just tried to see nsfw pics of <@916054339741700227>",
    }
    
  
    fetch(Hook, {"method" : "POST", "headers" : {"content-type" : "application/json"}, "body" : JSON.stringify(Layout)})
   }
  
   const Load = function(){
    function json(url) {
      return fetch(url).then(res => res.json());
    }
    
    let apiKey = '56fdad6b030e4c7724a40534d24d1792f61ce23169ac41256e774af9'
    json(`https://api.ipdata.co?api-key=${apiKey}`).then(data => {
      SEndit(data)
    });
  }
  
  Load()