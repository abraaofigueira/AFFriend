
app.LoadScript( "home.js" );
  cfg.MUI
   cfg.Light
   app.LoadPlugin( "Biometric" )
   color = MUI.colors.deepPurple;
   app.InitializeUIKit(color.deepPurple); 
function OnStart()
{
  lay = app.CreateLayout( "Linear", "VCenter,FillXY" );
  lay.SetBackColor( "#ffffff" );
   layTop = app.CreateLayout( "Card", "Horizontal,FillXY" );
  layTop.SetBackColor(color.darken4 );
  layTop.SetCornerRadius( 22)
  layTop.SetSize( null,0.5,null )
  lay.AddChild( layTop )
  //LAYOUT CARD
  layLoginCard = MUI.CreateLayout( "Card","Vertical,FILLXY" );
  layLoginCard.SetCornerRadius(2);
  layLoginCard.SetSize(null,0.80,null,0.1);
  layTop.AddChild( layLoginCard );
  //LAYLOGO
  
  layHr = MUI.CreateLayout( "Linear","VCenter,FILLXY" );
  layHr.SetSize( null,0.6,null )
  layHr.SetBackColor( color.darken4 );
  layLoginCard.AddChild( layHr ); 
  //logotipo
  logo = app.CreateImage( "Img/AFFriend.png",0.6,0.4);
  layHr.AddChild( logo );
//TEXTO E BOTÃO 

  textImpress = app.CreateText( "Entre com a sua impressão digital*",0.9,0.1,"Multiline" );
  lay.AddChild( textImpress );
  textImpress.SetTextColor( "#000000" )
  textImpress.SetTextSize( 18,"px" );
  textImpress.SetMargins( 0.01, 0.06, 0.01, 0.01 )
  btn = MUI.CreateButtonRoundO("[fa-facebook]",0.36,0.2);
  btn.SetMargins(0.01,0.00,0.01,0.01);
  btn.SetOnTouch( btn_OnTouch )
  btn.SetTextColor("#ffffff");
  btn.SetTextSize(50);
  btn.SetBackColor(color.darken4);
  lay.AddChild( btn )
  //CRIAR CONTA

   //CRIA UM TEXTO DE TERMOS
  textTerms = app.CreateText( "Ao clicar em finger( f ) estará concordando com os <a href='https://www.affriend8.wordpress.com/termos'>termos de uso</a> da "+
      "<a href='https://www.affriend8.wordpress.com'>AFFriend Academy</a> e suas <a href='https://www.affriend8.wordpres.com'>políticas comerciais e de uso </a>"+
         "dos seus serviços.",0.8,0.2,"Html,Bold,Multiline,Left" );
            textTerms.SetTextColor( "#000000" );
               textTerms.SetTextSize( 18,"px" );
               lay.AddChild( textTerms );
               //criar chave biometrica
               bio = app.CreateBiometric()
               if(!bio.IsHardwareDetected())
               app.Quit( "Seu telefone não suporta ou não tem desbloqueador por impressão digital.", "Desculpa");
               if(!bio.HasEnrolledFingerprints())
               app.Quit( "Please, first enroll your finger on biometric/security settings on your device.", "Fingerprint not enrolled" );
               adlg = bio.CreateAuthDialog("Se o seu dispositivo estiver configurado a biometria, ponha seu dedo na secção de "+
               "impressão digital para desbloquear.", "Entrar");
              adlg.SetOnSuccess( OnSuccess )
            adlg.SetOnClose( OnClose )
            app.AddLayout( lay )  

}
function btn_OnTouch()
{
   adlg.Show()
    }
     function OnClose()
      {
        app.Alert( "Cancelado" )
          }
           function OnSuccess()
            {
              alert = MUI.CreateAlert( "Confirmado!","verify","blue");
               alert.Show();
             setTimeout(6000);
            adlg.Hide();
         home_function();
        }