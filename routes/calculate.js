/**
 * New node file
 */

	var ip1,ip2,result;
	

var addition = function(req,res)
{
	ip1 = req.param("input1");
	ip2 = req.param("input2");
	result = (ip1-0)+(ip2-0);
	res.render("index",{result:result});
};

var subtract = function(req,res)
{
	ip1 = req.param("input1");
	ip2 = req.param("input2");
	result = (ip1-0)-(ip2-0);
	res.render("index",{result:result});
};

var multiply = function(req,res)
{	
	ip1 = req.param("input1");
	ip2 = req.param("input2");
	result = (ip1-0)*(ip2-0);
	res.render("index",{result:result});
};

var divide = function(req,res)
{
	ip1 = req.param("input1");
	ip2 = req.param("input2");
	if(ip2==='0')
		{
		result = "Cannot divide by 0";
		res.render("index",{result:result});

		}
	else
		{
	result = (ip1-0)/(ip2-0);
	res.render("index",{result:result});
		}
};



exports.calculate = function(req,res)
{
	var operation = req.param("calculate");
	if(operation === "+")
		{
		addition(req,res);
		}
	else if(operation === "-")
	{
	subtract(req,res);
	}
	else if(operation === "*")
	{
	multiply(req,res);
	}
	else if(operation === "/")
	{
	divide(req,res);
	}
	else
	{
		res.render("index",{result:"Invalid selection!"});
	}


};


exports.addition = addition; 
exports.subtract = subtract; 
exports.multiply = multiply; 
exports.divide = divide; 
