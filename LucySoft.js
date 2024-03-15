
cfg.MUI;
cfg.Light
color = MUI.colors.purple
app.InitializeUIKit(color.purple) 
 //Called when application is started.
 function OnStart()
 {	
      //Create a layout with objects vertically centered.	
      lay = MUI.CreateLayout( "Linear", "VCenter,FillXY" )
      //lay.SetBackGradient("#dfcc67","#23cb77","aa18cc"  )
      lay.SetBackColor( "#ffffff" )
 	   //Create a text label and add it to layout.	
 	   img = app.CreateImage( "Img/LucySoft.png", 0.4 )	
 	   lay.AddChild( img )	
 		num = MUI.CreateTEOutlineIconLeft( 0.8,"number", "call", "+244947842104", true, color.darken4)	
 		lay.AddChild( num )	
 		pass = MUI.CreateTEOutlineIconLeft( 0.8,"password", "lock", "Senha", true, color.darken4 )	
 		lay.AddChild( pass )	
 		btn = MUI.CreateButtonElegant("Entrar", 0.8,0.1)
 		btn.SetBackColor(color.darken1)	
 		btn.SetTextColor("#ffffff");
 		btn.SetOnTouch(btnOnTouch)	
 		lay.AddChild( btn )	
 		//Add layout to app.		
 		app.AddLayout( lay )
 		}
 		function btnOnTouch(){
 		   if( num.GetText() == "" || pass.GetText() == ""){  
 		    alert =  MUI.CreateAlert("Preencha os campos!","info", color.darken3 )
 		    alert.Show();  
 		     }else{   
 		    // Layout principalvar
 		     layMain = MUI.CreateLayout("Linear", "Vertical,FillXY");
 		     var apbar = MUI.CreateAppBar( "LucySoft", "menu","notifications,more_vert") 	
 		     	apbar.SetOnMenuTouch(menuTouch) 	
 		     		apbar.SetOnControlTouch(ControlTouch)  
 		     		  layMain.AddChild( apbar )
 		     		  layHor1 = MUI.CreateLayout( "Linear","Horizontal,FILLXY" )
 		     		  layHor1.SetMargins( 0.01, 0.04, 0.01, 0.01 )
 		           layMain.AddChild( layHor1 )
 		     		  // Botões para acessar diferentes partes do software
 		     		   var btnFinanceiro = MUI.CreateButtonText( "Gestão financeira", 0.30, 0.1, "fontAwesome");
 		     		   //btnFinanceiro.SetCornerRadius(12);
 		     		   btnFinanceiro.SetOnTouch(OpenGestaoFinanceira);
 		     		   var btnEstoque = MUI.CreateButtonElegant("Gestão de Estoque", 0.30, 0.1);
 		     		   btnEstoque.SetOnTouch(OpenGestaoEstoque);
 		     		   var btnFolhaPagamento = MUI.CreateButtonElegant("Folha de Pagamento", 0.30, 0.1);
 		     		   btnFolhaPagamento.SetOnTouch(OpenFolhaPagamento);
 		     		   layHor1.AddChild(btnFinanceiro);
 		     		   layHor1.AddChild(btnEstoque);
 		     		   layHor1.AddChild(btnFolhaPagamento);
 		     		   app.AddLayout(layMain); 	
 		     		   }
 		     		}
 		     		 function menuTouch(){ 
 		     		 	app.ShowPopup( "Eu sou menu!" )
 		     		 	 	} 	 
 		     		 	 		function ControlTouch(index){ 	 
 		     		 	 		if(index == "notifications"){ 	 
 		     		 	 		 app.ShowPopup("Estou notificando você!") 	 
 		     		 	 		   } 		
 		     		 	 		   	else if(index == "more_vert"){ 	
 		     		 	 		   	app.ShowPopup("Mais opções!") 	
 		     		 	 		   	}
 		     		 	 		   	}	
 		     		 	 		   	/*SSSSSSSSSSSSSSSSSSSSSSSSSSSSSS 	
 		     		 	 		 SSS*/
 		     		 	 		   	// Funções para abrir diferentes partes do software
 		     		 	 		   	function OpenGestaoFinanceira() { 
 		     		 	 		   	  var layFinanceiro = MUI.CreateLayout("Linear", "Vertical,FillXY");   
 		     		 	 		   	   var apb = MUI.CreateAppBar( "LucySoft", "arrow_back","notifications,more_vert")   
 		     		 	 		   	    apb.SetOnMenuTouch(menuGesTouch) 	
 		     		 	 		   	    	apb.SetOnControlTouch(ControlGesTouch)    
 		     		 	 		   	    	layFinanceiro.AddChild( apb )    
 		     		 	 		   	    	var btnRegistrarTransacao = MUI.CreateButtonElegant("Registrar Transação", 0.5, 0.1);    
 		     		 	 		   	    	btnRegistrarTransacao.SetOnTouch(RegistrarTransacao);    
 		     		 	 		   	    	    var btnGerarRelatorio = MUI.CreateButtonElegant("Gerar Relatório Financeiro", 0.5, 0.1);    
 		     		 	 		   	    	    btnGerarRelatorio.SetOnTouch(GerarRelatorioFinanceiro);      
 		     		 	 		   	    	      layFinanceiro.AddChild(btnRegistrarTransacao);   
 		     		 	 		   	    	       layFinanceiro.AddChild(btnGerarRelatorio);    
 		     		 	 		   	    	       app.AddLayout(layFinanceiro);
 		     		 	 		   	    	       }
 		     		 	 		   	    	       function RegistrarTransacao() {    
 		     		 	 		   	    	       // Implemente a lógica para registrar uma transação financeira 
 		     		 	 		   	    	         var layRegistrarTransacao = MUI.CreateLayout("Linear", "Vertical,FillXY");    
 		     		 	 		   	    	         var bar = MUI.CreateAppBar( "LucySoft", "arrow_back","notifications,more_vert" )   
 		     		 	 		   	    	          layRegistrarTransacao.AddChild( bar )    
 		     		 	 		   	    	          var txtValor = MUI.CreateTEOutlineIconLeft(0.8, "number","attach_money","Valor a transferir", true);    	
 		     		 	 		   	         		layRegistrarTransacao.AddChild( txtValor )      
 		     		 	 		   	           var btnRegistrar = MUI.CreateButtonOutlined("Registrar", 0.5, 0.1);    
 		     		 	 		   	         btnRegistrar.SetOnTouch(function() {    
 		     		 	 		   	      var valor = parseFloat(txtValor.GetText());      
 		     		 	 		   	    if (!isNaN(valor)) {            
 		     		 	 		   	// Aqui você pode inserir a lógica para registrar a transação no banco de dados            
 		     		 	 		   	app.ShowPopup("Transação de  " + valor.toFixed(2) + "kz  registrada com sucesso!");       
 		     		 	 		 } else {         
 		     		 	 app.ShowPopup("Por favor, insira um valor válido.");      
 		     		  }
 		        });        
 		   layRegistrarTransacao.AddChild(txtValor);    
 		   layRegistrarTransacao.AddChild(btnRegistrar);    
 		   app.AddLayout(layRegistrarTransacao);
 		   }
 		   function GerarRelatorioFinanceiro() { 
 		   
 		       }
 		       //FIM DA FUNÇÃO DE RELATÓRIO
 		       function menuGesTouch(){ 
 		       	app.ShowPopup( "Voltando!" ) 	
 		       	 layFinanceiro.Animate( "SlideToLeft", null, 250) 	 
 		       		}
 		       		function ControlGesTouch(index){ 
 		       			 if(index == "notifications"){ 	  
 		       			 app.ShowPopup("Estou notificando você!") 	  
 		       			  } 	 else if(index == "more_vert"){ 	 
 		       			  app.ShowPopup("Mais opções!") 	
 		       			   } 
 		       			 }
 		       			  		/*SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
 		       			      SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
 		       			  		SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
 		       			  		SSSSSSSSSSSSS*/ 
 		       			  			//GESTÃO DE ESTOQUE
 		       			  			function OpenGestaoEstoque() {  
 		       			  			var layEstoque = MUI.CreateLayout("Linear", "Vertical,FillXY");    
 		       			  			var apbEs = MUI.CreateAppBar( "LucySoft", "arrow_back","notifications,more_vert")    
 		       			  			apbEs.SetOnMenuTouch(menuEsTouch) 		
 		       			  			apbEs.SetOnControlTouch(ControlEsTouch)    
 		       			  			layEstoque.AddChild( apbEs )    
 		       			  			var btnRegistrarEntrada = MUI.CreateButtonElegant("Registrar Entrada de Produto", 0.4, 0.1);    
 		       			  			btnRegistrarEntrada.SetOnTouch(RegistrarEntradaProduto);        
 		       			  			var btnRegistrarSaida = MUI.CreateButtonElegant("Registrar Saída de Produto", 0.4, 0.1);   
 		       			  			 btnRegistrarSaida.SetOnTouch(RegistrarSaidaProduto);        
 		       			  			 layEstoque.AddChild(btnRegistrarEntrada);    
 		       			  			 layEstoque.AddChild(btnRegistrarSaida);    
 		       			  			 app.AddLayout(layEstoque);
 		       			  	}
 		       			  	function RegistrarEntradaProduto() {   
 		       			  	 var layCadastroEntrada = MUI.CreateLayout("Linear", "Vertical,FillXY");        
 		       			  	 var txtRegistraProduto = MUI.CreateTEOutlineIconLeft( 0.8, "text","widgets", "Nome do produto", true);    			
 		       			  	 layCadastroEntrada.AddChild( txtRegistraProduto )    
 		       			  	 var txtRegistraQuantidade = MUI.CreateTEOutlineIconLeft(0.8, "numbers","exposure_zero","Quantidade", true);    	
 		       			  	 		layCadastroEntrada.AddChild( txtRegistraQuantidade )    
 		       			  	 		//txtQuantidade.SetKeyboardType("number");        
 		       			  	 		var btnCadastrar = MUI.CreateButtonElegant("Cadastrar", 0.3, 0.1);    
 		       			  	 		btnCadastrar.SetOnTouch(function() {      
 		       			  	 		  var nomeRegProduto = txtRegistraProduto.GetText();      
 		       			  	 		    var RegQuantidade = parseInt(RegQuantidade.GetText()); 
 		       			  	 		           // Aqui você pode inserir a lógica para cadastrar a entrada de um produto       
 		       			  	 		            if (nomeRegProduto && RegQuantidade > 0) {        
 		       			  	 		                app.ShowPopup("Entrada de " + RegQuantidade + " unidades do produto '" + nomeRegProduto + "' cadastrada com sucesso!");    
 		       			  	 		                    } else {            
 		       			  	 		                  app.ShowPopup("Por favor, preencha todos os campos corretamente.");     
 		       			  	 		                 }  
 		       			  	 		               });    
 		       			  	 		             layCadastroEntrada.AddChild(txtRegistraProduto);    
 		       			  	 		           layCadastroEntrada.AddChild(txtRegistraQuantidade);    
 		       			  	 		         layCadastroEntrada.AddChild(btnCadastrar);    
 		       			  	 		       app.AddLayout(layCadastroEntrada);
 		       			  	 		     }
 		       			  	 		  //Cadastrar produtos final function
 		       			  	 		function RegistrarSaidaProduto() { 
 		       			  	 	var layRegistroSaida = MUI.CreateLayout("Linear", "Vertical,FillXY");        
 		       			  	 var txtNomeProduto = MUI.CreateTEOutlineIconLeft( 0.8, "text","widgets", "Nome do produto", true);    		
 		       			  	 txtNomeProduto.SetMargins(0.01,0.01,0.01,0.01);	
 		       		   layRegistroSaida.AddChild( txtNomeProduto );  
 		          var txtQuantidade = MUI.CreateTEOutlineIconLeft(0.8, "numbers","exposure_zero","Quantidade", true);    		
 		        layRegistroSaida.AddChild( txtQuantidade );  
 		      var btnRegistrar = MUI.CreateButtonElegant( "Registrar", 0.8, 0.1);    
 		      btnRegistrar.SetOnTouch(function() {        
 		      var nomeProduto = txtNomeProduto.GetText();        
 		      var quantidade = parseInt(txtQuantidade.GetText());       
 		         // Aqui você pode inserir a lógica para registrar a saída de um produto  
 		               if (nomeProduto && quantidade > 0) {       
 		                    app.ShowPopup("Saída de " + quantidade + " unidades do produto '" + nomeProduto + "' registrada com sucesso!");  
 		                          } else {     
 		                                 app.ShowPopup("Por favor, preencha todos os campos corretamente.");       
 		                                  }
 		                                });
 		                              layRegistroSaida.AddChild(txtNomeProduto);    
 		                              layRegistroSaida.AddChild(txtQuantidade);    
 		                              layRegistroSaida.AddChild(btnRegistrar);    
 		                              app.AddLayout(layRegistroSaida);
 		                              }
 		                                 function menuEsTouch(){ 	
 		                                 app.ShowPopup( "Voltando" ) 
 		                                 	layRegistroSaida.Animate( "SlideToLeft",null,250) 	
 		                                 	}
 		                                 	function ControlEsTouch(index){ 
 		                                 		 if(index == "notifications"){  	 
 		                                 		 app.ShowPopup("Estou notificando você!") 	
 		                                 		   }
 		                                 		    	 else if(index == "more_vert"){ 	 
 		                                 		    	 app.ShowPopup("Mais opções!") 	
 		                                 		    	  }
 		                                 		    }
 		                                 		  /*SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
 		                                 		   SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
 		                                 		    SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
 		                                 		    SSSSSSSSSSS*/ 	
 		                                 		    
 		                                 		    //FOLHA DE PAGAMENTO DE SALÁRIO
 		                                 		    function OpenFolhaPagamento() {    
 		                                 		    var layFolhaPagamento = MUI.CreateLayout("Linear", "Vertical,FillXY");    
 		                                 		    var apbPay = MUI.CreateAppBar( "LucySoft", "arrow_back","notifications,more_vert")    
 		                                 		    apbPay.SetOnMenuTouch(menuPayTouch) 	
 		                                 		    	apbPay.SetOnControlTouch(ControlPayTouch)    
 		                                 		    	layFolhaPagamento.AddChild( apbPay )    
 		                                 		    	//Layout horizontal para botões
 		                                 		    	var layHr = MUI.CreateLayout( "Linear","Horizontal,Fillxy" );
 		                                 		    	layFolhaPagamento.AddChild( layHr )
 		                                 		    	var btnCalcularSalario = MUI.CreateButtonElegant("Calcular Salário", 0.5, 0.1);   
 		                                 		    	 btnCalcularSalario.SetOnTouch(CalcularSalario);        
 		                                 		    	 var btnGerarHolerite = MUI.CreateButtonElegant("Gerar Holerite", 0.5, 0.1);   
 		                                 		    	  btnGerarHolerite.SetOnTouch(GerarHolerite);       
 		                                 		    	   layHr.AddChild(btnCalcularSalario);   
 		                                 		    	    layHr.AddChild(btnGerarHolerite);   
 		                                 		    	     app.AddLayout(layFolhaPagamento);
 		                                 		    	     }
 		                                 		    	  function menuPayTouch(){ 	
 		                                 		    app.ShowPopup( "Voltando!" ) 	
 		                                 	    layFolhaPagamento.Animate( "SlideToLeft", null, 250) 	
 		                                 		}
 		                                 		function ControlPayTouch(index){ 	 
 		                                  if(index == "notifications"){ 
 		                                app.ShowPopup("Estou notificando você!") 
 		                              } 	
 		                            else if(index == "more_vert"){ 
 		                        	 app.Alert("Mais opções!")
 		                       	 } 
 		                       }
 		                    //CALCULANDO SALÁRIO
 		                  function CalcularSalario() { 
 		                var layCalcularSalario = MUI.CreateLayout("Linear", "Vertical,FillXY");   
 		              var apbSalario = MUI.CreateAppBar( "LucySoft", "arrow_back","notifications,more_vert")    
 		           apbSalario.SetOnMenuTouch(menuSalTouch) 		
 		        apbSalario.SetOnControlTouch(ControlSalTouch)   
 		     layCalcularSalario.AddChild( apbSalario )       
 		  var txtHorasTrabalhadas = MUI.CreateTEOutlineIconLeft(0.8, "number","access_time", "Horas trabalhadas",true );    		
 	layCalcularSalario.AddChild( txtHorasTrabalhadas )        
var btnCalcular = MUI.CreateButtonElegant("Calcular", 0.8, 0.1);    
btnCalcular.SetOnTouch(function() {       	
var horasTrabalhadas = parseFloat(txtHorasTrabalhadas.GetText());   
  if (!isNaN(horasTrabalhadas)) {            
  // Aqui você pode inserir a lógica para calcular o salário            
  var salario = horasTrabalhadas * 400;
   // Exemplo simples: 400 kzs  por hora            
   app.ShowPopup("Salário calculado: Kzs " + salario.toFixed(2));        
   } else {            
   app.ShowPopup("Por favor, insira um número válido de horas.");        
   }
      });
         layCalcularSalario.AddChild(txtHorasTrabalhadas);    
         layCalcularSalario.AddChild(btnCalcular);    
         app.AddLayout(layCalcularSalario);
         }
         function menuSalTouch(){ 	
         app.ShowPopup( "Voltando!" ) 
         	layCalcularSalario.Animate( "SlideToLeft", null, 250 ) 
         		}
         		function ControlSalTouch(index){ 	
         		 if(index == "notifications"){ 	  
         		 app.ShowPopup("Estou notificando você!") 	  
         		  }
         		   	 else if(index == "more_vert"){ 	 
         		   	 app.Alert("Mais opções!") 	 
         		   	 }
         		   	  }
         		   	  	/*SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
         		   	  		SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
         		   	  	SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
         		   	  	SSSSSSSSSSSSSSSSSSS*/ 
         		   	  	function GerarHolerite() {   
         		   	  	 var layGerarHolerite = MUI.CreateLayout("Linear", "Vertical,FillXY");    	
         		   	  	 var apbHolerite = MUI.CreateAppBar( "LucySoft", "arrow_back","notifications,more_vert")    
         		   	  	 apbHolerite.SetOnMenuTouch(menuHolTouch) 		
         		   	  	 apbHolerite.SetOnControlTouch(ControlHolTouch) 
         		   	  	    layGerarHolerite.AddChild( apbHolerite )       
         		   	  	     var txtNomeFuncionario = MUI.CreateTEOutlineIconLeft( 0.8, "text","account_circle", "Nome do funcionário", true);    			
         		   	  	     txtNomeFuncionario.SetMargins(0.01,0.01,0.01,0.01)    			
         		   	  	     layGerarHolerite.AddChild( txtNomeFuncionario );        
         		   	  	     var txtHoraTrabalhada = MUI.CreateTEOutlineIconLeft(0.8, "numbers","access_time","Horas trabalhadas", true);    			
         		   	  	     layGerarHolerite.AddChild( txtHoraTrabalhada );        
         		   	  	     var btnGerar = MUI.CreateButtonElegant("Gerar Holerite", 0.3, 0.1);    
         		   	  	     btnGerar.SetOnTouch(function() {        
         		   	  	     var nomeFuncionario = txtNomeFuncionario.GetText();        
         		   	  	     var horaTrabalhada = parseInt(txtHoraTrabalhada.GetText());                
         		   	  	     // Aqui você pode inserir a lógica para gerar o holerite        
         		   	  	     if (nomeFuncionario && horaTrabalhada > 0) {            
         		   	  	     var salario = horaTrabalhada * 250; // Exemplo: 250 kz por hora            
         		   	  	     app.ShowPopup("Holerite para " + nomeFuncionario + " gerado com sucesso! Salário: Kzs " + salario.toFixed(2));    
         		   	  	         } else {            
         		   	  	         app.ShowPopup("Por favor, preencha todos os campos corretamente.");     
         		   	  	            }
         		   	  	        });        
         		   	  	        layGerarHolerite.AddChild(txtNomeFuncionario);   
         		   	  	         layGerarHolerite.AddChild(txtHoraTrabalhada); 
         		   	  	            layGerarHolerite.AddChild(btnGerar);   
         		   	  	          app.AddLayout(layGerarHolerite);
         		   	  	        }
         		   	  	    function menuHolTouch(){ 	
         		   	  	 app.ShowPopup( "Voltando!" ) 	
         		   	  layGerarHolerite.Animate( "SlideToLeft", null, 250) 	
         		   	 }
         		   function ControlHolTouch(index){ 	 
         		 if(index == "notifications"){ 	  
         	app.ShowPopup("Estou notificando você!") 	   
         }
       else if(index == "more_vert"){ 	 
     app.Alert("Mais opções!") 
   }
}