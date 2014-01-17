function gamesCtrl($scope) {
	$scope.reverse = true;

	$scope.games=[
		{match:'1', date: 'June 12', city: 'Sao Paulo', home: 'Brazil', away: 'Croatia', group: 'A'}, 
		{match:'2', date: 'June 13', city: 'Natal', home: 'Mexico', away: 'Cameroon', group: 'A'}, 
		{match:'17', date: 'June 17', city: 'Fortaleza', home: 'Brazil', away: 'Mexico', group: 'A'}, 
		{match:'18', date: 'June 18', city: 'Manaus', home: 'Cameroon', away: 'Croatia', group: 'A'}, 
		{match:'33', date: 'June 23', city: 'Brasilia', home: 'Cameroon', away: 'Brazil', group: 'A'}, 
		{match:'34', date: 'June 23', city: 'Recife', home: 'Croatia', away: 'Mexico', group: 'A'}, 
		{match:'3', date: 'June 13', city: 'Salvador', home: 'Spain', away: 'Netherlands', group: 'B'}, 
		{match:'4', date: 'June 13', city: 'Cuiaba', home: 'Chile', away: 'Australia', group: 'B'}, 
		{match:'19', date: 'June 18', city: 'Rio De Janeiro', home: 'Spain', away: 'Chile', group: 'B'}, 
		{match:'20', date: 'June 18', city: 'Porto Alegre', home: 'Australia', away: 'Netherlands', group: 'B'}, 
		{match:'35', date: 'June 23', city: 'Curitiba', home: 'Australia', away: 'Spain', group: 'B'}, 
		{match:'36', date: 'June 23', city: 'Sao Paulo', home: 'Netherlands', away: 'Chile', group: 'B'}, 
		{match:'5', date: 'June 14', city: 'Belo Horizonte', home: 'Colombia', away: 'Greece', group: 'C'}, 
		{match:'6', date: 'June 14', city: 'Recife', home: 'Côte dIvoire', away: 'Japan', group: 'C'}, 
		{match:'21', date: 'June 19', city: 'Brasilia', home: 'Colombia', away: 'Côte dIvoire', group: 'C'}, 
		{match:'22', date: 'June 19', city: 'Natal', home: 'Japan', away: 'Greece', group: 'C'}, 
		{match:'37', date: 'June 24', city: 'Cuiaba', home: 'Japan', away: 'Colombia', group: 'C'}, 
		{match:'38', date: 'June 24', city: 'Fortaleza', home: 'Greece', away: 'Côte dIvoire', group: 'C'}, 
		{match:'7', date: 'June 14', city: 'Fortaleza', home: 'Uruguay', away: 'Costa Rica', group: 'D'}, 
		{match:'8', date: 'June 14', city: 'Manaus', home: 'England', away: 'Italy', group: 'D'}, 
		{match:'23', date: 'June 19', city: 'Sao Paulo', home: 'Uruguay', away: 'England', group: 'D'}, 
		{match:'24', date: 'June 20', city: 'Recife', home: 'Italy', away: 'Costa Rica', group: 'D'}, 
		{match:'39', date: 'June 24', city: 'Natal', home: 'Italy', away: 'Uruguay', group: 'D'}, 
		{match:'40', date: 'June 24', city: 'Belo Horizonte', home: 'Costa Rica', away: 'England', group: 'D'}, 
		{match:'9', date: 'June 15', city: 'Brasilia', home: 'Switzerland', away: 'Ecuador', group: 'E'}, 
		{match:'10', date: 'June 15', city: 'Porto Alegre', home: 'France', away: 'Honduras', group: 'E'}, 
		{match:'25', date: 'June 20', city: 'Salvador', home: 'Switzerland', away: 'France', group: 'E'}, 
		{match:'26', date: 'June 20', city: 'Curitiba', home: 'Honduras', away: 'Ecuador', group: 'E'}, 
		{match:'41', date: 'June 25', city: 'Manaus', home: 'Honduras', away: 'Switzerland', group: 'E'}, 
		{match:'42', date: 'June 25', city: 'Rio De Janeiro', home: 'Ecuador', away: 'France', group: 'E'}, 
		{match:'11', date: 'June 15', city: 'Rio De Janeiro', home: 'Argentina', away: 'Bosnia and Herzegovina', group: 'F'}, 
		{match:'12', date: 'June 16', city: 'Curitiba', home: 'Iran', away: 'Nigeria', group: 'F'}, 
		{match:'27', date: 'June 21', city: 'Belo Horizonte', home: 'Argentina', away: 'Iran', group: 'F'}, 
		{match:'28', date: 'June 21', city: 'Cuiaba', home: 'Nigeria', away: 'Bosnia and Herzegovina', group: 'F'}, 
		{match:'43', date: 'June 25', city: 'Porto Alegre', home: 'Nigeria', away: 'Argentina', group: 'F'}, 
		{match:'44', date: 'June 25', city: 'Salvador', home: 'Bosnia and Herzegovina', away: 'Iran', group: 'F'}, 
		{match:'13', date: 'June 16', city: 'Salvador', home: 'Germany', away: 'Portugal', group: 'G'}, 
		{match:'14', date: 'June 16', city: 'Natal', home: 'Ghana', away: 'USA', group: 'G'}, 
		{match:'29', date: 'June 21', city: 'Fortaleza', home: 'Germany', away: 'Ghana', group: 'G'}, 
		{match:'30', date: 'June 22', city: 'Manaus', home: 'USA', away: 'Portugal', group: 'G'}, 
		{match:'45', date: 'June 26', city: 'Recife', home: 'USA', away: 'Germany', group: 'G'}, 
		{match:'46', date: 'June 26', city: 'Brasilia', home: 'Portugal', away: 'Ghana', group: 'G'}, 
		{match:'15', date: 'June 17', city: 'Belo Horizonte', home: 'Belgium', away: 'Algeria', group: 'H'}, 
		{match:'16', date: 'June 17', city: 'Cuiaba', home: 'Russia', away: 'Korea Republic', group: 'H'}, 
		{match:'31', date: 'June 22', city: 'Rio De Janeiro', home: 'Belgium', away: 'Russia', group: 'H'}, 
		{match:'32', date: 'June 22', city: 'Porto Alegre', home: 'Korea Republic', away: 'Algeria', group: 'H'}, 
		{match:'47', date: 'June 26', city: 'Sao Paulo', home: 'Korea Republic', away: 'Belgium', group: 'H'}, 
		{match:'48', date: 'June 26', city: 'Curitiba', home: 'Algeria', away: 'Russia', group: 'H'}];

}
