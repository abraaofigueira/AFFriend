
 app.LoadPlugin( "UIExtras" );
 uix = app.CreateUIExtras();
//chame a função do home
function home_function()
  {
  var lay;
   if(lay)app.DestroyLayout( lay );
      //cria o layout home
      layhome = MUI.CreateLayout( "Linear","vertical, Fillxy" );
      layhome.SetBackGradient("#000000",color.darken1,color.darken3);
      
      //cria um layout para appBar
      layAppbar = MUI.CreateLayout( "Absolute","Horizontal" );
      layhome.AddChild( layAppbar );
      //Agora cria o appbar
      appbar = MUI.CreateAppBarModern( "AFFriend Academy","more_vert","rectangle","blue" );
      appbar.SetOnMenuTouch(OnMenuTouch);
      appbar.SetOnControlTouch(OnCtrlTouch)
      layAppbar.AddChild( appbar );
      
      //cria uma webview
     webView = app.CreateWebView( 1,1,"FILLXY","FILLXY" );
      
// Crie uma WebView e adicione-a a uma janela
//var webView = app.CreateWebView(1, 1, "FillX, FillY");
app.AddLayout(webView);

      webView.LoadUrl( "https://www.algoritmusia.com" );
       layhome.AddChild( webView );


// Opção 2: Controles de Zoom
webView.SetZoomControl(true); // Habilita o controle de zoom
webView.SetSupportZoom(true); // Habilita o zoom em tela cheia

// Opção 3: Armazenamento na Web
webView.SetLocalStoragePath("/sdcard/AFFriend"); // Define o diretório de armazenamento local

// Opção 4: Geolocalização
// Habilita o acesso à geolocalização
webView.SetGeolocationEnabled(true); 
// Opção 5: Manipulação de eventos
webView.SetOnMessage(function(data) {
  // Manipule a mensagem recebida da WebView
  console.log("Mensagem recebida: " + data);
});

webView.SetOnError(function(errorCode, description, url) {
  // Manipule erros de carregamento da WebView
  console.log("Erro de carregamento: " + description);
});

// Opção 6: Controle de Domínio
webView.SetAllowedUrls(["https://www.algoritmusia.com", "https://www.google.com"]); // Especifica os domínios permitidos
webView.SetOnConsoleMessage(function(url){
 //NOVA PAGINA
 webView.LoadUrl( url );
    });
    
    //Evento para voltar a página anterior quando 9 botão back do dispositivo é pressionado
    app.SetOnBack(function(){
    //Verifica se pode voltar
    if(webView.CanGoBack())
     //Voltar a página inicial
      webView.GoBack();
       else{ 
              app.Exit( );
              }
              });
    
          //ADICIONAR DRAWER
        //Criar layout para drawer com largura de 7
     /* layDrawer = MUI.CreateLayout( "Linear","VCenter,FILLXY" )
    app.AddDrawer(layDrawer);    */
 
  app.AddLayout( layhome );
  }
  //CRIA DUAS FUNÇÕES DE CONTROLO DO APLICATIVO
  //Primeira função
 function OnMenuTouch()
    {
      app.Alert( "MENU" );
    }
    //Segunda função
   function OnCtrlTouch()
    {
      app.Alert( "Control" );
    }

      
 