 // Fonction de désactivation de l'affichage des "tooltips"
    
	function deactivateTooltips() 
	{
		var tooltips = document.querySelectorAll('.tooltip'),
		tooltipsLength = tooltips.length;
		for (var i = 0 ; i < tooltipsLength ; i++) 
		{
			tooltips[i].style.display = 'none';
		}
	}
	
	
// La fonction ci-dessous permet de récupérer la "tooltip" qui correspond à notre input
	
	function getTooltip(elements) 
	{	
		while (elements = elements.nextSibling) 
		{
			if (elements.className === 'tooltip') 
			{
				return elements;
			}
		}
		return false;
	}
 
 
 // Fonctions de vérification du formulaire, elles renvoient "true" si tout est ok

var check = {}; // On met toutes nos fonctions dans un objet littéral
 
check['login'] = function() 
{
    var login = document.getElementById('login'),
    tooltipStyle = getTooltip(login).style;
    if (login.value.length >= 4) 
	{
		login.className = 'correct';
		tooltipStyle.display = 'none';
		return true;
    } 
	else 
	{
		login.className = 'incorrect';
		tooltipStyle.display = 'inline-block';
		return false;
    }
};


check['pwd1'] = function() 
{
	var pwd1 = document.getElementById('pwd1'),
    tooltipStyle = getTooltip(pwd1).style;
    if (pwd1.value.length >= 6) 
	{
		pwd1.className = 'correct';
		tooltipStyle.display = 'none';
		return true;
    } 
	else 
	{
    pwd1.className = 'incorrect';
    tooltipStyle.display = 'inline-block';
    return false;
    }
};


check['pwd2'] = function() 
{
	var pwd1 = document.getElementById('pwd1'),
    pwd2 = document.getElementById('pwd2'),
    tooltipStyle = getTooltip(pwd2).style; 
    if (pwd1.value == pwd2.value && pwd2.value != '') 
	{
		pwd2.className = 'correct';
		tooltipStyle.display = 'none';
		return true;
    } 
	else 
	{
		pwd2.className = 'incorrect';
		tooltipStyle.display = 'inline-block';
		return false;
    }
};


// Mise en place des événements

    (function() 
	{ // Utilisation d'une IIFE pour éviter les variables globales.
		var myForm = document.getElementById('myForm'),
		inputs = document.querySelectorAll('input[type=text], input[type=password]'),
		inputsLength = inputs.length;
		for (var i = 0 ; i < inputsLength ; i++) 
		{
			inputs[i].addEventListener('keyup', function(e) 
			{
				check[e.target.id](e.target.id); // "e.target" représente l'input actuellement modifié
			}, false);
		} 
		myForm.addEventListener('submit', function(e) 
		{
			var result = true;  
			for (var i in check) 
			{
				result = check[i](i) && result;
			}
			if (result) 
			{
				alert('Le formulaire est bien rempli.');
			}
			e.preventDefault();
		}, false);
		myForm.addEventListener('reset', function() 
		{
			for (var i = 0 ; i < inputsLength ; i++) 
			{
				inputs[i].className = '';
			}			
			deactivateTooltips();
		}, false);  
    })();
	
	
// Maintenant que tout est initialisé, on peut désactiver les "tooltips"

deactivateTooltips();