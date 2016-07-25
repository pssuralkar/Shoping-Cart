app.controller('MainController', ['$scope',
                                 function($scope){       $scope.title = 'Welcome';                          	$scope.promo = 'This is my promo';           
                                                  $scope.availabel = 'Avalabel';
                                                  $scope.products =  [ 
                  { 
                    name: 'The Book of Trees', 
                    price: 19, 
                    pubdate: new Date('2014', '03', '08'), 
                    cover: 'img/the-book-of-trees.jpg',
                    likes: 0,
                  }, 
                  { 
                    name: 'Program or be Programmed', 
                    price: 8, 
                    pubdate: new Date('2013', '08', '01'), 
                    cover: 'img/program-or-be-programmed.jpg',
                    likes: 0,
                  },
                                                    {
                                                      name: 'Pankaj new book',
price: 22,
                                                      pubdate: new Date('2016', '02', '02'),
                                                      cover: 'img/program-or-be-programmed.jpg',
                                                      likes: 0,
                                                    },
                                                    {
                                                      name: 'Rashmi new book',
                                                      price: 82,
                                                      pubdate: new Date ('2016', '08','02'),
                                                      cover: 'img/program-or-be-programmed.jpg',
                                                      likes: 0,
                                                    }
                                                    
                                                    
                ];
                                                  $scope.pluseOne= function(index){
     $scope.products[index].like +=1;
   }; 
                                                  
                                                  
                                                  
                                                  
                                                 }]);