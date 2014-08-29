
	var selectPage = "";
	
	
	if(splash == 0){
			setTimeout(function(){
			//$("#splashScreen").animate({top:'-3000px'},500);
			$("#splashScreen").fadeToggle(500);
			modalToggle();
			},4000);//5000
	
			$(".splashImages").fadeToggle(500);
			
			splash = 1;
	}	
			
			$("#btn-play").click(function(){
				//hideMainMenu();
				//selectPage = $(this).attr("id");
				//changePage();
				
				
				
			});
			
			
			
			
			function changePage(){
				if(selectPage == "btn-choice-2"){
					selectPage == "main-menu-page.html";
				}else if(selectPage == "btn-play"){
					selectPage = "main-game-page.html";
				}else if (selectPage == "btn-play2"){
					selectPage = "board-game-over.html"
				}else if(selectPage == "btn-play5"){
					selectPage = "board-login.html";
				}else if(selectPage == "btn-play4"){
					selectPage = "board-register.html";
				}else if(selectPage == "btn-play3"){
					selectPage = "board-high-scores.html";
				}else{
					alert();
				}
				var page = selectPage;
				
				setTimeout(function(){
					upAndChangePage();
				},100),
				setTimeout(function(){
					$("#page-wrapper").load(page);
				},500),
				setTimeout(function(){
					
				},2000);
			}
			
			$("#show").click(function(){
				showMainMenu();
			});
			
			$("#showMainGame").click(function(){
				showMainGame();
				
			});
			
			$("#hideMainGame").click(function(){
				hideMainGame();
				setTimeout(function(){
					showMainMenu();
					
				},500);
				
			});
			
			$("#btn-choice-1").click(function(){
				
				
			});
			
			$("#btn-main-menu").click(function(){
					
				hideBoard();
				setTimeout(function(){
					hideMainGame();
				},500);
				
				
			});
			$("#btn-back-to-main-menu-from-game-over").click(function(){
					
				//hideBoard();
				//setTimeout(function(){
				//	hideMainGame();
				//},500);
				pageWrapper2Up();
				selectPage = "#main-menu";
				changePage();
				
			});
			
			
			function hideMainMenu(){
				$("#main-menu").animate({top:'10px'},100);
				setTimeout(function(){
					$("#main-menu").animate({top:'-2000px'},1000);
				},10),
				
				setTimeout(function(){showMainGame();
				},500);
				
				
			}
			
			
			
			function showMainMenu(){
				
					$("#main-menu").animate({top:'60px'});
					setTimeout(function(){
					$("#main-menu").animate({top:'10px'},200);
					},100);
					
			}
			
			
			function showMainGame(){
				
					$("#main-game").animate({top:'-620px'});
					setTimeout(function(){
					$("#main-game").animate({top:'-580px'},200);
					},100);
					
			}
			
			function hideMainGame(){
				
					$("#main-game").animate({top:'-400px'});
					setTimeout(function(){
					$("#main-game").animate({top:'-2000px'},200);
					},100);
				
			}
			
			function modalToggle(){
				$(".modalDarkBg").fadeToggle(500);
			}
			
			
			function showBoard(){
				$("#board").animate({top:'-1100px'},600);
			}
			function hideBoard(){
				$("#board").animate({top:'+=1100px'},200);
			}
			
			
			function upAndChangePage(){
				$("#page-wrapper").animate({top:'+=200px'},200);
				
				setTimeout(function(){
					$("#page-wrapper").animate({top:'-1200px'},200);
					$("#page-wrapper").animate({top:'-1024px'},20);
					//$("#page-wrapper").animate({top:'+=1024px'},200);
					
					$("#page-wrapper").animate({top:'+=1054px'},200);
					$("#page-wrapper").animate({top:'-=50px'},200);
					},100);
			
			}
			
			/* pageWrapper2  START*/
			$("#upWrapper2").click(function(){pageWrapper2Up()});
			function pageWrapper2Up(){
				$("#page-wrapper2-bg").hide();
				$("#page-wrapper2").animate({top:'+=150px'},10);
				
				setTimeout(function(){
					//$("#page-wrapper2").animate({top:'-1200px'},350);
					$("#page-wrapper2").animate({top:'-1024px'},20);
					//$("#page-wrapper").animate({top:'+=1024px'},200);
					//$("page-wrapper2").hide();
					//$("#page-wrapper2").animate({top:'+=1054px'},200);
					//$("#page-wrapper2").animate({top:'-=50px'},200);
					},100);
			
			}
			
			$("#btn-down-wrapper2").click(function(){pageWrapper2Down()});
			function pageWrapper2Down(){
				$("#page-wrapper2-bg").show();
				$("#page-wrapper2").show();
				//$("#page-wrapper2").animate({top:'+=200px'},400);
				
				setTimeout(function(){
					//$("#page-wrapper2").animate({top:'-1200px'},350);
					//$("#page-wrapper2").animate({top:'-1024px'},500);
					//$("#page-wrapper2").animate({top:'+=1024px'},200);
					//$("page-wrapper2").hide();
					$("#page-wrapper2").animate({top:'+=1074px'},10);
					$("#page-wrapper2").animate({top:'-=50px'},5);
					},1);
			
			}
			/* pageWrapper2  END*/
			
			/* pageWrapper3  START*/
			
			$("#btn-up-wrapper3").click(function(){pageWrapper3Up()});
			function pageWrapper3Up(){
				$("#page-wrapper3-bg").hide();
				$("#page-wrapper3").animate({top:'+=150px'},150);
				
				setTimeout(function(){
					//$("#page-wrapper2").animate({top:'-1200px'},350);
					$("#page-wrapper3").animate({top:'-1024px'},600);
					//$("#page-wrapper").animate({top:'+=1024px'},200);
					//$("page-wrapper2").hide();
					//$("#page-wrapper2").animate({top:'+=1054px'},200);
					//$("#page-wrapper2").animate({top:'-=50px'},200);
					},100);
			
			}
			
			$("#downWrapper3").click(function(){pageWrapper3Down();});
			function pageWrapper3Down(){
				$("#page-wrapper3-bg").show();
				$("#page-wrapper3").show();
				//$("#page-wrapper2").animate({top:'+=200px'},400);
				
				setTimeout(function(){
					//$("#page-wrapper2").animate({top:'-1200px'},350);
					//$("#page-wrapper2").animate({top:'-1024px'},500);
					//$("#page-wrapper2").animate({top:'+=1024px'},200);
					//$("page-wrapper2").hide();
					$("#page-wrapper3").animate({top:'+=1074px'},200);
					$("#page-wrapper3").animate({top:'-=50px'},200);
					},100);
			
			}
			/* pageWrapper3  END*/
			/* pageWrapper4  START*/
			$("#btn-up-wrapper4").click(function(){pageWrapper4Up()});
			function pageWrapper4Up(){
				$("#page-wrapper4-bg").hide();
				$("#page-wrapper4").animate({top:'+=150px'},150);
				
				setTimeout(function(){
					//$("#page-wrapper2").animate({top:'-1200px'},350);
					$("#page-wrapper4").animate({top:'-1024px'},600);
					//$("#page-wrapper").animate({top:'+=1024px'},200);
					//$("page-wrapper2").hide();
					//$("#page-wrapper2").animate({top:'+=1054px'},200);
					//$("#page-wrapper2").animate({top:'-=50px'},200);
					},100);
			
			}
			
			$("#downWrapper4").click(function(){pageWrapper4Down();});
			function pageWrapper4Down(){
				$("#page-wrapper4-bg").show();
				$("#page-wrapper4").show();
				//$("#page-wrapper2").animate({top:'+=200px'},400);
				
				setTimeout(function(){
					//$("#page-wrapper2").animate({top:'-1200px'},350);
					//$("#page-wrapper2").animate({top:'-1024px'},500);
					//$("#page-wrapper2").animate({top:'+=1024px'},200);
					//$("page-wrapper2").hide();
					$("#page-wrapper4").animate({top:'+=1074px'},200);
					$("#page-wrapper4").animate({top:'-=50px'},200);
					},10);
			
			}
			/* pageWrapper4  END*/
		/*new START */
		
		$("#btn-play").click(function(){
				
				selectPage = "#main-game";//id of the windowContainer
				changePage();
				$(".customModal").fadeToggle();
				setTimeout(function(){
					startRsg();
				},800);
				savePreviousScore();
			});
		$("#btn-play").hover(function(){
			
		});
		$(".btn-back-to-main-menu").click(function(){
				selectPage = "#main-menu";
				changePage();
				
			});
		
		$("#btn-leaderboard").click(function(){
			selectPage = "#board-modal-leaderboard";
			getLeaderboard();
			changePage();
				
			});
		$("#btn-register").click(function(){
				//selectPage = "#board-modal-register";
				//changePage();
				
				pageWrapper4Down();
				
			});
			
		
		$("#btn-option").click(function(){
				//selectPage = "#board-modal-login";
				//changePage();
				pageWrapper3Down();
			});
		$(".my-btn-login").click(function(){
				//selectPage = "#board-modal-login";
				//changePage();
				pageWrapper3Down();
			});
		$("#btn-btn-choice-3").click(function(){
				//gameOver();
				//to do -- paglabas ng game over dapat nakapatong
			});
			
		
		$("#btn-play-again").click(function(){
				//selectPage = "#main-game";//id of the windowContainer
				//changePage();
				pageWrapper2Up();
				
				//gameStart();
			});
		$("#btn-score-post-online").click(function(){
				//to do -- lalagyan pa ng functions
				
				//check if login
					//if login 
					//post online message "Score posted Online!"
				//if not login
				postScoreOnline();
				//pageWrapper3Down();
			});
			
		
			
		/*	
		function gameOver(){
			/* change page first START*/
			//selectPage = "#board-game-over";
			//changePage();
			/*pageWrapper2Down();
			/* change page first END*/
		/*}*/
		
		
		function changePage(){
				//assign value for selectPage on button Click in each button
				
				var page = selectPage;
				setTimeout(function(){
					upAndChangePage();
				},100),
				setTimeout(function(){
					$(".windowContainer").hide();
					$(page).show();
				},500),
				setTimeout(function(){
					
				},2000);
		}
		/*new END */
		
		
		
		
	
		
		
		
		
		