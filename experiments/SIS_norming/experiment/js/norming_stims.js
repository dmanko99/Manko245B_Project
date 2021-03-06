
var wnames = ["Peter",
"Brad",
"Ethan",
"Ian",
"Cody",
"Brett",
"Paul",
"Connor",
"Jack",
"Logan",
"Roger",
"Dylan",
"Hunter",
"Dustin",
"Ryan"]

var bnames = ["Trevon",
"Tyree",
"Deion",
"Marquis",
"Jermaine",
"Lamont",
"Tyrone",
"Deandre",
"Tremayne",
"Lamar",
"Kareem",
"Hakeem",
"Jamal",
"Rasheed",
"Deshawn"]

var firsts = _.shuffle(_.sample(wnames, 10).concat(_.sample(bnames, 10)))

var criticals = [
	{
		"story":"or/and stealing",
		"storyline":"FIRST has stolen a car and a bicycle.",
		"tag":"evoke",
		"scaleType":0,
		"stimType":"critical",
		"list":1
	},{
		"story":"or/and violent crime",
		"storyline":"FIRST has been found guilty of theft and violent crime.",
		"tag":"evoke",
		"scaleType":0,
		"stimType":"critical",
		"list":2
	},{
		"story":"or/and threat",
		"storyline":"FIRST has threatened a judge and a police officer.",
		"tag":"evoke",
		"scaleType":0,
		"stimType":"critical",
		"list":3
	},{
		"story":"or/and not stealing",
		"storyline":"FIRST has had his car and his bicycle stolen.",
		"tag":"repress",
		"scaleType":0,
		"stimType":"critical",
		"list":3
	},{
		"story":"or/and not violent crime",
		"storyline":"FIRST has been a victim of theft and violence.",
		"tag":"repress",
		"scaleType":0,
		"stimType":"critical",
		"list":1
	},{
		"story":"or/and not police",
		"storyline":"FIRST has worked as a judge and a police officer.",
		"tag":"repress",
		"scaleType":0,
		"stimType":"critical",
		"list":2
	},{
		"story":"some/all criminal",
		"storyline":"All of FIRST's friends are criminals.",
		"tag":"evoke",
		"scaleType":1,
		"stimType":"critical",
		"list":1
	},{
		"story":"some/all violent",
		"storyline":"All of FIRST's brothers are violent.",
		"tag":"evoke",
		"scaleType":1,
		"stimType":"critical",
		"list":2
	},{
		"story":"some/all prison",
		"storyline":"All of FIRST's cousins have spent time in prison.",
		"tag":"evoke",
		"scaleType":1,
		"stimType":"critical",
		"list":3
	},{
		"story":"some/all respect",
		"storyline":"All of FIRST's friends respect the police.",
		"tag":"repress",
		"scaleType":1,
		"stimType":"critical",
		"list":3
	},{
		"story":"some/all police",
		"storyline":"All of FIRST's brothers are police officers.",
		"tag":"repress",
		"scaleType":1,
		"stimType":"critical",
		"list":1
	},{
		"story":"some/all prison work",
		"storyline":"All of FIRST's cousins work at a prison.",
		"tag":"repress",
		"scaleType":1,
		"stimType":"critical",
		"list":2
	},{
		"story":"looks like/is criminal",
		"storyline":"FIRST is a criminal.",
		"tag":"evoke",
		"scaleType":2,
		"stimType":"critical",
		"list":1
	},{
		"story":"looks like/is thief",
		"storyline":"FIRST is a thief.",
		"tag":"evoke",
		"scaleType":2,
		"stimType":"critical",
		"list":2
	},{
		"story":"looks like/is dangerous",
		"storyline":"FIRST is a dangerous person.",
		"tag":"evoke",
		"scaleType":2,
		"stimType":"critical",
		"list":3
	},{
		"story":"looks like/is police",
		"storyline":"FIRST is a police officer.",
		"tag":"repress",
		"scaleType":2,
		"stimType":"critical",
		"list":3
	},{
		"story":"looks like/is nonviolent",
		"storyline":"FIRST is a nonviolent person.",
		"tag":"repress",
		"scaleType":2,
		"stimType":"critical",
		"list":1
	},{
		"story":"looks like/is respect",
		"storyline":"FIRST is someone who respects the law.",
		"tag":"repress",
		"scaleType":2,
		"stimType":"critical",
		"list":2
	},{
		"story":"possible/certain jail",
		"storyline":"FIRST has spent time in prison.",
		"tag":"evoke",
		"scaleType":3,
		"stimType":"critical",
		"list":1
	},{
		"story":"possible/certain stealing",
		"storyline":"FIRST has stolen a TV. ",
		"tag":"evoke",
		"scaleType":3,
		"stimType":"critical",
		"list":2
	},{
		"story":"possible/certain mugged",
		"storyline":"FIRST has mugged someone in a local park.",
		"tag":"evoke",
		"scaleType":3,
		"stimType":"critical",
		"list":3
	},{
		"story":"possible/certain police",
		"storyline":"FIRST would make a good police officer.",
		"tag":"repress",
		"scaleType":3,
		"stimType":"critical",
		"list":3
	},{
		"story":"possible/certain not violence",
		"storyline":"FIRST avoids violent people.",
		"tag":"repress",
		"scaleType":3,
		"stimType":"critical",
		"list":1
	},{
		"story":"possible/certain not mugged",
		"storyline":"FIRST has been mugged in a local park. ",
		"tag":"repress",
		"scaleType":3,
		"stimType":"critical",
		"list":2
	},{
		"story":"n/n+m crime",
		"storyline":"FIRST has committed more than three violent crimes.",
		"tag":"evoke",
		"scaleType":4,
		"stimType":"critical",
		"list":1
	},{
		"story":"n/n+m prison",
		"storyline":"FIRST has been sent to prison more than three times.",
		"tag":"evoke",
		"scaleType":4,
		"stimType":"critical",
		"list":2
	},{
		"story":"n/n+m murder",
		"storyline":"FIRST has threatened to kill more than three people.",
		"tag":"evoke",
		"scaleType":4,
		"stimType":"critical",
		"list":3
	},{
		"story":"n/n+m stolen",
		"storyline":"FIRST has had his wallet stolen more than three times.",
		"tag":"repress",
		"scaleType":4,
		"stimType":"critical",
		"list":3
	},{
		"story":"n/n+m victims",
		"storyline":"FIRST knows more than three victims of violent crime.",
		"tag":"repress",
		"scaleType":4,
		"stimType":"critical",
		"list":1
	},{
		"story":"n/n+m police",
		"storyline":"FIRST has more than three relatives who are police officers.",
		"tag":"repress",
		"scaleType":4,
		"stimType":"critical",
		"list":2
	}]

var exclusions = [
	{
		"story":"math1",
		"storyline":"5 + 4 = 9",
		"tag":"exclusion_right",
		"scaleType":9,
		"stimType":"exclusion",
		"list":"all"
	},{
		"story":"math2",
		"storyline":"10 - 5 = 5",
		"tag":"exclusion_right",
		"scaleType":9,
		"stimType":"exclusion",
		"list":"all"
	},{
		"story":"math3",
		"storyline":"10 + 2 = 13",
		"tag":"exclusion_wrong",
		"scaleType":9,
		"stimType":"exclusion",
		"list":"all"
	},{
		"story":"math4",
		"storyline":"5 - 3 = 1",
		"tag":"exclusion_wrong",
		"scaleType":9,
		"stimType":"exclusion",
		"list":"all"}]

var fillers = [
	{
		"story":"sports",
		"storyline":"FIRST watches sports.",
		"tag":"filler_highbias",
		"scaleType":9,
		"stimType":"filler",
		"list":"all"
	},{
		"story":"dog",
		"storyline":"FIRST owns a dog or has owned a dog. ",
		"tag":"filler_highbias",
		"scaleType":9,
		"stimType":"filler",
		"list":"all"
	},{
		"story":"sister",
		"storyline":"FIRST has at least one sister.",
		"tag":"filler_highbias",
		"scaleType":9,
		"stimType":"filler",
		"list":"all"
	},{
		"story":"alcohol",
		"storyline":"FIRST drinks alcohol with his friends. ",
		"tag":"filler_highbias",
		"scaleType":9,
		"stimType":"filler",
		"list":"all"
	},{
		"story":"movies",
		"storyline":"FIRST enjoys watching movies. ",
		"tag":"filler_highbias",
		"scaleType":9,
		"stimType":"filler",
		"list":"all"
	},{
		"story":"plane crash",
		"storyline":"FIRST has been in a plane crash and survived.",
		"tag":"filler_lowbias",
		"scaleType":9,
		"stimType":"filler",
		"list":"all"
	},{
		"story":"lottery",
		"storyline":"FIRST has won the lottery twice.",
		"tag":"filler_lowbias",
		"scaleType":9,
		"stimType":"filler",
		"list":"all"
	},{
		"story":"dentist",
		"storyline":"FIRST looks forward to his dental appointments.",
		"tag":"filler_lowbias",
		"scaleType":9,
		"stimType":"filler",
		"list":"all"
	},{
		"story":"lightning",
		"storyline":"FIRST has been struck by lightning.",
		"tag":"filler_lowbias",
		"scaleType":9,
		"stimType":"filler",
		"list":"all"
	},{
		"story":"quadruplets",
		"storyline":"FIRST is the father of quadruplets.",
		"tag":"filler_lowbias",
		"scaleType":9,
		"stimType":"filler",
		"list":"all"
	}
	]

var scales = [
	{weak: "or", strong: "and"},
	{weak: "some", strong: "all"},
	{weak: "looks like", strong: "is"},
	{weak: "possible", strong: "certain"},
	{weak: "three", strong: "more than three"}
]

scales[9] = "filler"
 
// var stories = [
// 	{
// 		story: "or/and stealing",
// 		storyline: "FIRST has stolen a car and a bicycle.",
// 		tag: "evoke",
// 		scaleType: 0,
// 	},
// 	{
// 		story: "or/and violent crime",
// 		storyline: "FIRST has been found guilty of theft and violent crime.",
// 		tag: "evoke",
// 		scaleType: 0,
// 	},
// 	{
// 		story: "or/and threat",
// 		storyline: "FIRST has threatened a judge and a police officer.",
// 		tag: "evoke",
// 		scaleType: 0,
// 	},
// 	{
// 		story: "or/and not stealing",
// 		storyline: "FIRST has had his car and his bicycle stolen.",
// 		tag: "repress",
// 		scaleType: 0,
// 	},
// 	{
// 		story: "or/and not violent crime",
// 		storyline: "FIRST has been a victim of theft and violence.",
// 		tag: "repress",
// 		scaleType: 0,
// 	},
// 	{
// 		story: "or/and not police",
// 		storyline: "FIRST has worked as a judge and a police officer.",
// 		tag: "repress",
// 		scaleType: 0,
// 	},
// 	{
// 		story: "some/all criminal",
// 		storyline: "All of FIRST's friends are criminals.",
// 		tag: "evoke",
// 		scaleType: 1,
// 	},
// 	{
// 		story: "some/all violent",
// 		storyline: "All of FIRST's brothers are violent.",
// 		tag: "evoke",
// 		scaleType: 1,
// 	},
// 	{
// 		story: "some/all prison",
// 		storyline: "All of FIRST's cousins have spent time in prison.",
// 		tag: "evoke",
// 		scaleType: 1,
// 	},	
// 	{
// 		story: "some/all respect",
// 		storyline: "All of FIRST's friends respect the police.",
// 		tag: "repress",
// 		scaleType: 1,
// 	},
// 	{
// 		story: "some/all police",
// 		storyline: "All of FIRST's brothers are police officers.",
// 		tag: "repress",
// 		scaleType: 1,
// 	},
// 	{
// 		story: "some/all prison work",
// 		storyline: "All of FIRST's cousins work at a prison.",
// 		tag: "repress",
// 		scaleType: 1,
// 	},
// 	{
// 		story: "looks like/is criminal",
// 		storyline: "FIRST is a criminal.",
// 		tag: "evoke",
// 		scaleType: 2,
// 	},
// 	{
// 		story: "looks like/is thief",
// 		storyline: "FIRST is a thief.",
// 		tag: "evoke",
// 		scaleType: 2,
// 	},
// 	{
// 		story: "looks like/is dangerous",
// 		storyline: "FIRST is a dangerous person.",
// 		tag: "evoke",
// 		scaleType: 2,
// 	},
// 	{
// 		story: "looks like/is police",
// 		storyline: "FIRST is a police officer.",
// 		tag: "repress",
// 		scaleType: 2,
// 	},
// 	{
// 		story: "looks like/is judge",
// 		storyline: "FIRST is a judge.",
// 		tag: "repress",
// 		scaleType: 2,
// 	},
// 	{
// 		story: "looks like/is respect",
// 		storyline: "FIRST is someone who respects the law.",
// 		tag: "repress",
// 		scaleType: 2,
// 	},
// 	{
// 		story: "possible/certain jail",
// 		storyline: "It is certain that FIRST is an inmate.",
// 		tag: "evoke",
// 		scaleType: 3,
// 	},
// 	{
// 		story: "possible/certain stealing",
// 		storyline: "It is certain that FIRST stole a TV from Walmart last week.",
// 		tag: "evoke",
// 		scaleType: 3,
// 	},
// 	{
// 		story: "possible/certain violence",
// 		storyline: "It is certain that FIRST has attacked someone at the park.",
// 		tag: "evoke",
// 		scaleType: 3,
// 	},
// 	{
// 		story: "possible/certain not jail",
// 		storyline: "It is certain that FIRST is a prison guard.",
// 		tag: "repress",
// 		scaleType: 3,
// 	},
// 	{
// 		story: "possible/certain police",
// 		storyline: "It is certain that FIRST wants to be a police officer.",
// 		tag: "repress",
// 		scaleType: 3,
// 	},
// 	{
// 		story: "possible/certain not violence",
// 		storyline: "It is certain that FIRST avoids violent people.",
// 		tag: "repress",
// 		scaleType: 3,
// 	},
// 	{
// 		story: "may/will prison",
// 		storyline: "FIRST will one day be sent to prison.",
// 		tag: "evoke",
// 		scaleType: 4,
// 	},
// 	{
// 		story: "may/will violent",
// 		storyline: "FIRST will one day commit a violent crime.",
// 		tag: "evoke",
// 		scaleType: 4,
// 	},
// 	{
// 		story: "may/will no police",
// 		storyline: "FIRST will one day attack a police officer.",
// 		tag: "evoke",
// 		scaleType: 4,
// 	},
// 	{
// 		story: "may/will police",
// 		storyline: "FIRST will one day join the police force.",
// 		tag: "repress",
// 		scaleType: 4,
// 	},
// 	{
// 		story: "may/will crime",
// 		storyline: "FIRST will one day get mugged.",
// 		tag: "repress",
// 		scaleType: 4,
// 	},
// 	{
// 		story: "may/will judge",
// 		storyline: "FIRST will become a judge.",
// 		tag: "repress",
// 		scaleType: 4,
// 	},
// 	{
// 		story: "n/n+m crime",
// 		storyline: "FIRST has committed more than three violent crimes.",
// 		tag: "evoke",
// 		scaleType: 5,
// 	},
// 	{
// 		story: "n/n+m prison",
// 		storyline: "FIRST has been sent to prison more than three times.",
// 		tag: "evoke",
// 		scaleType: 5,
// 	},
// 	{
// 		story: "n/n+m murder",
// 		storyline: "FIRST has threatened to kill more than three people.",
// 		tag: "evoke",
// 		scaleType: 5,
// 	},
// 	{
// 		story: "n/n+m stolen",
// 		storyline: "FIRST has had his wallet stolen more than three times.",
// 		tag: "repress",
// 		scaleType: 5,
// 	},
// 	{
// 		story: "n/n+m victims",
// 		storyline: "FIRST knows more than three victims of violent crime.",
// 		tag: "repress",
// 		scaleType: 5,
// 	},
// 	{
// 		story: "n/n+m police",
// 		storyline: "FIRST has more than three relatives who are police officers.",
// 		tag: "repress",
// 		scaleType: 5,
// 	}
// ]