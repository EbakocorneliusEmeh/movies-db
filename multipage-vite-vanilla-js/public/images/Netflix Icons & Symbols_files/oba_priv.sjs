var oba= 0,
    info = {
                    title: "PIA Advertising GmbH",
                    text: "nutzt u.a. die ADITION Adserving-Technologie. Mehr ",
                    url: "https://pia-advertising.com/opt-out/",
                    linkText: "Informationen zum Datenschutz/Opt-Out "
                    },    domId = "obaButton_7447144318277389322",
    position = "top-right"||'top-right';

   if (info != null || oba != 0) {
     if (typeof $ADP == 'object') {   
       try {
        $ADP&&$ADP.Registry&&function() {

          if (!oba) { oba = $ADP.Registry.generateId(); }

          if (info!=null) { $ADP.Registry.register(oba,info);}

          if (domId) {
            $ADP.Registry.createPlayer(oba,{
                 domId: domId,
                 position: position
            });
          }
        }();
        }catch(e) {}   
     } else {
        var infostr = info!=null?'&title=PIA+Advertising+GmbH&text=nutzt+u.a.+die+ADITION+Adserving-Technologie.+Mehr+&url=https%3A%2F%2Fpia-advertising.com%2Fopt-out%2F&linkText=Informationen+zum+Datenschutz%2FOpt-Out+':'';
        var proto = ((window.location.protocol.match(/http/i))?window.location.protocol:"http:");
        var oba_script = document.createElement('script');
        oba_script.setAttribute('type','text/javascript');
        oba_script.setAttribute('charset','utf-8');
        oba_script.setAttribute('src',proto+'//imagesrv.adition.com/js/adplayer/adplayer_privacy.sjs?oba='+oba+'&domId='+domId+infostr+'&pos='+position);
        document.getElementsByTagName('head')[0].appendChild(oba_script);
     }
   }