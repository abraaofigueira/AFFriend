


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
      appbar = MUI.CreateAppBarElegant( "AFFriend Academy","home","more_vert");
      appbar.SetOnMenuTouch(OnMenuTouch);
      appbar.SetSize(null,0.07);
      appbar.SetOnControlTouch(OnCtrlTouch)
      layAppbar.AddChild( appbar );
      
      //cria uma webview
     webView = app.CreateWebView( 1,1,"NoErrors","FILLXY" );
     layhome.AddChild( webView );
// Crie uma WebView e adicione-a a uma janela
//var webView = app.CreateWebView(1, 1, "FillX, FillY");

      webView.LoadUrl( "https://www.algoritmusia.com" );
       layhome.AddChild( webView );


// Opção 2: Controles de Zoom
webView.SetZoom(true); // Habilita o controle de zoom
//webView.SetZoom(true); // Habilita o zoom em tela cheia

// Opção 3: Armazenamento na Web
//webView.SetLocalStoragePath("/sdcard/AFFriend"); // Define o diretório de armazenamento local
app.SetSharedApp("AFFriend"  )
webView.SetDescription( "AFFriend\n\nO nosso app foi projectado para integrar uma página"+
"de rendas automatizadas em dólares." )
// Opção 4: Geolocalização
// Habilita o acesso à geolocalização
//webView.SetGeolocationEnabled(true); 
// Opção 5: Manipulação de eventos
webView.SetOnConsole(function(data) {
  // Manipule a mensagem recebida da WebView
  console.log("Mensagem recebida: " + data);
});

webView.SetOnError(function(errorCode, description, url) {
  // Manipule erros de carregamento da WebView
  console.log("Erro de carregamento: " + description);
});

// Opção 6: Controle de Domínio
//webView.SetOnUrl("https://www.algoritmusia.com", "https://www.google.com"]); // Especifica os domínios permitidos
webView.SetOnConsole(function(url){
 //NOVA PAGINA
 webView.LoadUrl( url );
    });
    
    //Evento para voltar a página anterior quando 9 botão back do dispositivo é pressionado

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
      class Main extends App
{
    home_function()
    {
        // Create a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Add a button to the main layout to show the actionsheet when click
        this.btn = ui.addButton(this.main, "Show Bottom Sheet", "Primary")
        this.btn.setOnTouch( this.btn_onTouch )

        // Create a bottom sheet with the given options.
        // HideOnAction: Hide the bottomsheet on action click.
        // CloseAction and MoreAction: Add a left close action and right more action.
        // NoCancel: Prevent the bottomsheet from closing when the more action is click.
        this.bts = ui.addBottomSheet("", "HideOnAction,CloseAction,MoreAction,NoCancel");
        this.bts.title = "My details"
        this.bts.description = "This is a long description."
        this.bts.setOnAction( this.onAction );

        // Create a button and add it to the bottomsheet layout.
        var btn = ui.addButton(this.bts.layout, "Button", "Primary");
        btn.margins = [0, "1rem", 0, "1rem"];
    }

    btn_onTouch()
    {
        // show the bottomsheet
        this.bts.show();
    }

    onAction(name, icon) {
        ui.showPopup( name );
    }
}
    }

      
 