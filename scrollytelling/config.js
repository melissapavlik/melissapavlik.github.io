var config = {

//header and title//

	style: 'mapbox://styles/mjpavlik/ck3g4hyst04r61dmidsyauhgj',
	accessToken: 'pk.eyJ1IjoibWpwYXZsaWsiLCJhIjoiY2pncGN1a2YxMmpzejJ3czNhNW1tdHQ1ZiJ9.GYwDslJIFBDN5KlkfzQHRQ',
	showMarkers: false,
	theme: 'dark',
	alignment: '',
 	title: '<h1 style="background-color: #1c1c1c; opacity: 0.98;font-size:200px; font-style:bold; margin-top:25px; margin-bottom:0px; color: #CFCFCF; line-height: 200px;">10 Conflicts</h1> <h1 style="font-size:100px; margin-left:480px; text-align:right; padding-right:20px; background-color: #C95200; opacity:0.9; font-style:italic; margin-top:5px; line-height:100px; margin-bottom:0px;">to Watch in 2020</h1>',
 	subtitle: 'As political violence continues to erupt worldwide, ten countries are especially worth watching throughout the coming year.',
 	byline: 'By: Melissa Pavlik',
 	footer: 'Source: © ACLED 2019. Data can be found here: This is based on ACLED report here:',

<!-- sections begin-->

	chapters: [

//chapter1:world-overview-1//

		{
			id: 'world-overview-1',
			title: 'Where to focus in 2020',
			image: '',
			description: '2019 saw disorder mount across the world. Coups, popular demonstrations, assassinations, and election violence rocked countries across nearly every continent, and the year’s developments promise to shape political violence for years to come.',
			location: {
				center: [14.22310, 21.33435],
				zoom: 1.46,
				pitch: 0.00,
				bearing: 0.00
			},
			onChapterEnter: [
				{
					layer: 'polygons',
					opacity: 0
				},
				{
					layer: 'all-data-1',
					opacity: 0.83
				},
				{
					layer: 'all-data-2',
					opacity: 0.6
				},
				{
					layer: 'all-data-3',
					opacity: 0.3
				},
				{
					layer: 'all-data-4',
					opacity: 0.05
				},
				{
					layer: 'states-w-numbers',
					opacity: 0.0
				},
				{
					layer: 'mex-rf-density',
					opacity: 0.0
				}
			],
			onChapterExit: [
				{
					layer: 'polygons',
					opacity: 0
				},
				{
					layer: 'all-data-1',
					opacity: 0.83
				},
				{
					layer: 'all-data-2',
					opacity: 0.6
				},
				{
					layer: 'all-data-3',
					opacity: 0.3
				},
				{
					layer: 'all-data-4',
					opacity: 0.05
				},
				{
					layer: 'states-w-numbers',
					opacity: 0.0
				},
				{
					layer: 'mex-rf-density',
					opacity: 0.0
				}
		  ]
		},

//chapter2:world-overview-2//

		{
			id: 'world-overview-2',
			title: '',
			image: '',
			description: '',
			location: {
				center: [14.22310, 21.33435],
				zoom: 1.46,
				pitch: 0.00,
				bearing: 0.00
			},
			onChapterEnter: [
				{
					layer: 'polygons',
					opacity: 1.0
				},
				{
					layer: 'all-data-1',
					opacity: 0.0
				},
				{
					layer: 'all-data-2',
					opacity: 0.0
				},
				{
					layer: 'all-data-3',
					opacity: 0.0
				},
				{
					layer: 'all-data-4',
					opacity: 0.0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0.0
				},
				{
					layer: 'mex-rf-density',
					opacity: 0.0
				}
			],
			onChapterExit: [
				{
					layer: 'polygons',
					opacity: 1
				},
				{
					layer: 'all-data-1',
					opacity: 0
				},
				{
					layer: 'all-data-2',
					opacity: 0
				},
				{
					layer: 'all-data-3',
					opacity: 0
				},
				{
					layer: 'all-data-4',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'mex-rf-density',
					opacity: 0
				}
			]
		},

//chapter3:world-overview-3//

		{
			id: 'world-overview-3',
			title: ' ',
			image: '',
			description: '<p  style="font-size:25px;line-height:30px;"> Ten countries across four regions call for particularly close attention in the coming year: these countries feature conflicts and disorder which threaten to have an outsized impact on global disorder, represent a massive shift from past patterns, or could devolve significantly as the decade begins.</p>',
			location: {
				center: [14.22310, 21.33435],
				zoom: 1.46,
				pitch: 0.00,
				bearing: 0.00
			},
			onChapterEnter: [
				{
					layer: 'polygons',
					opacity: 1.0
				},
				{
					layer: 'all-data-1',
					opacity: 0.0
				},
				{
					layer: 'all-data-2',
					opacity: 0.0
				},
				{
					layer: 'all-data-3',
					opacity: 0.0
				},
				{
					layer: 'all-data-4',
					opacity: 0.0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0.0
				},
				{
					layer: 'mex-rf-density',
					opacity: 0.0
				}
			],
			onChapterExit: [
				{
					layer: 'polygons',
					opacity: 1.0
				},
				{
					layer: 'all-data-1',
					opacity: 0.0
				},
				{
					layer: 'all-data-2',
					opacity: 0.0
				},
				{
					layer: 'all-data-3',
					opacity: 0.0
				},
				{
					layer: 'all-data-4',
					opacity: 0.0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0.0
				},
				{
					layer: 'mex-rf-density',
					opacity: 0.0
				}
		  ]
		},

//chapter4:north-america-1//

		{
			id: 'north-america-1',
			title: '',
			image: '',
			description: '',
			location: {
				center: [-105.30480, 39.64788],
				zoom: 2.82,
				pitch: 0.00,
				bearing: 0.00
			},
			onChapterEnter: [
				{
					layer: 'polygons',
					opacity: 1.0
				},
				{
					layer: 'all-data-1',
					opacity: 0.0
				},
				{
					layer: 'all-data-2',
					opacity: 0.0
				},
				{
					layer: 'all-data-3',
					opacity: 0.0
				},
				{
					layer: 'all-data-4',
					opacity: 0.0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0.0
				},
				{
					layer: 'mex-rf-density',
					opacity: 0.9
				}
			],
			onChapterExit: [
				{
					layer: 'polygons',
					opacity: 0.0
				},
				{
					layer: 'all-data-1',
					opacity: 0.83
				},
				{
					layer: 'all-data-2',
					opacity: 0.6
				},
				{
					layer: 'all-data-3',
					opacity: 0.3
				},
				{
					layer: 'all-data-4',
					opacity: 0.05
				},
				{
					layer: 'states-w-numbers',
					opacity: 0.0
				},
				{
					layer: 'mex-rf-density',
					opacity: 0.0
				}
			]
		},

//chapter5:north-america-2//

		{
			id: 'north-america-2',
			title: '<span style="font-size:100px;line-height:100px; color:#FFBB7A;text-align:left;font-style:bold;"> North America</span> <span style="font-size:40px;line-height:60px;color:white;text-align:left;font-style:italic;background-color:black;"> Ongoing political violence threatens to escalate</span>',
			image: '',
			description: 'Two countries in North America - the United States and Mexico - pose unique threats to their respective polities and the world at large. The United States - long considered a stable and proficient democracy, and the wealthiest and most powerful country in the world, has seen mass unrest and lone acts of violence which proven to be remarkably deadly. In Mexico, organized criminal gangs, long violence, have increased in frequency and in power, promising political elements to come.',
			location: {
				center: [-105.30480, 39.64788],
				zoom: 2.82,
				pitch: 0.00,
				bearing: 0.00
			},
			onChapterEnter: [
				{
					layer: 'polygons',
					opacity: 0.0
				},
				{
					layer: 'all-data-1',
					opacity: 0.83
				},
				{
					layer: 'all-data-2',
					opacity: 0.6
				},
				{
					layer: 'all-data-3',
					opacity: 0.3
				},
				{
					layer: 'all-data-4',
					opacity: 0.05
				},
				{
					layer: 'states-w-numbers',
					opacity: 0.0
				},
				{
					layer: 'mex-rf-density',
					opacity: 0.0
				}
			],
			onChapterExit: [
				{
					layer: 'polygons',
					opacity: 0.0
				},
				{
					layer: 'all-data-1',
					opacity: 0.83
				},
				{
					layer: 'all-data-2',
					opacity: 0.6
				},
				{
					layer: 'all-data-3',
					opacity: 0.3
				},
				{
					layer: 'all-data-4',
					opacity: 0.05
				},
				{
					layer: 'states-w-numbers',
					opacity: 0.0
				},
				{
					layer: 'mex-rf-density',
					opacity: 0.0
				}
			]
		},

//chapter6:us-1//

		{
			id: 'us-1',
			title: '<span style="font-size:100px; line-height:100px; color:white;text-align:center;font-style:bold;background-color:black;"> United States </span><span style="background-color:#ffbb7a;color:black;line-height:50px;text-align:center;">Developed, democratic political system at risk of turning violent</span>',
			image: '',
			description: '',
			location: {
				center: [-101.55207, 38.27297],
				zoom: 3.80,
				pitch: 0.00,
				bearing: 0.00
			},
			onChapterEnter: [
				{
					layer: 'polygons',
					opacity: 0
				},
				{
					layer: 'all-data-1',
					opacity: 0.83
				},
				{
					layer: 'all-data-2',
					opacity: 0.6
				},
				{
					layer: 'all-data-3',
					opacity: 0.3
				},
				{
					layer: 'all-data-4',
					opacity: 0.05
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'mex-rf-density',
					opacity: 0.0
				}
			],
			onChapterExit: [
				{
					layer: 'polygons',
					opacity: 0.0
				},
				{
					layer: 'all-data-1',
					opacity: 0.83
				},
				{
					layer: 'all-data-2',
					opacity: 0.6
				},
				{
					layer: 'all-data-3',
					opacity: 0.3
				},
				{
					layer: 'all-data-4',
					opacity: 0.05
				},
				{
					layer: 'states-w-numbers',
					opacity: 0.0
				},
				{
					layer: 'mex-rf-density',
					opacity: 0.0
				}
			]
		},

//chapter7:us-2//

		{
			id: 'us-2',
			title: '',
			image: '',
			description: '',
			location: {
				center: [-101.55207, 38.27297],
				zoom: 3.80,
				pitch: 0.00,
				bearing: 0.00
			},
			onChapterEnter: [
				{
					layer: 'polygons',
					opacity: 0
				},
				{
					layer: 'all-data-1',
					opacity: 0.83
				},
				{
					layer: 'all-data-2',
					opacity: 0.6
				},
				{
					layer: 'all-data-3',
					opacity: 0.3
				},
				{
					layer: 'all-data-4',
					opacity: 0.05
				},
				{
					layer: 'states-w-numbers',
					opacity: 0.0
				},
				{
					layer: 'mex-rf-density',
					opacity: 0.0
				}
			],
			onChapterExit: [
				{
					layer: 'polygons',
					opacity: 0.0
				},
				{
					layer: 'all-data-1',
					opacity: 0.0
				},
				{
					layer: 'all-data-2',
					opacity: 0.0
				},
				{
					layer: 'all-data-3',
					opacity: 0.0
				},
				{
					layer: 'all-data-4',
					opacity: 0.0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0.8
				},
				{
					layer: 'mex-rf-density',
					opacity: 0.0
				}
			]
		},

//chapter8:us-3//

		{
			id: 'us-3',
			title: '<span style="font-size:50px; line-height:60px; color:white; text-align:center; font-style:bold; font-style:italic;"> The U.S. is home to a robust protest environment and rare, but deadly violence.</span>',
			image: 'images/us-event-fatality-donut.png',
			description: '<span style="color:cfcfcf;line-height:30px;1">ACLED’s pilot project collected data on political violence and protest events in the U.S. from July through September 2019, which included thousands of peaceful protests across all 50 states. Political violence events were limited, but disproportionately lethal: these include mass shootings, hate crimes, militia activity, and police brutality, and resulted in nearly 50 fatalities. </span>',
			location: {
				center: [-101.55207, 38.27297],
				zoom: 3.80,
				pitch: 0.00,
				bearing: 0.00
			},
			onChapterEnter: [
				{
					layer: 'polygons',
					opacity: 0.0
				},
				{
					layer: 'all-data-1',
					opacity: 0.0
				},
				{
					layer: 'all-data-2',
					opacity: 0.0
				},
				{
					layer: 'all-data-3',
					opacity: 0.0
				},
				{
					layer: 'all-data-4',
					opacity: 0.0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0.8
				},
				{
					layer: 'mex-rf-density',
					opacity: 0.0
				}
			],
			onChapterExit: [
				{
					layer: 'polygons',
					opacity: 0
				},
				{
					layer: 'all-data-1',
					opacity: 0
				},
				{
					layer: 'all-data-2',
					opacity: 0
				},
				{
					layer: 'all-data-3',
					opacity: 0
				},
				{
					layer: 'all-data-4',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0.8
				},
				{
					layer: 'mex-rf-density',
					opacity: 0.0
				}
			]
		},

//chapter9:mexico-1//

		{
			id: 'mexico-1',
			title: '<span style="font-size:100px; line-height:100px; color:white; text-align:center; font-style:bold; background-color:black;"> Mexico </span><span style="background-color:#a2c8ec; color:black; line-height:50px; text-align:center;"> </br> High risk of cartel criminal market developing into an insurgency </span>',
			image: '',
			description: '',
			location: {
				center: [-110.73732, 21.89743],
				zoom: 4.21,
				pitch: 0.00,
				bearing: 0.00
			},
			onChapterEnter: [
				{
					layer: 'polygons',
					opacity: 0.0
				},
				{
					layer: 'all-data-1',
					opacity: 0.83
				},
				{
					layer: 'all-data-2',
					opacity: 0.6
				},
				{
					layer: 'all-data-3',
					opacity: 0.3
				},
				{
					layer: 'all-data-4',
					opacity: 0.05
				},
				{
					layer: 'states-w-numbers',
					opacity: 0.0
				},
				{
					layer: 'mex-rf-density',
					opacity: 0.0
				}
			],
			onChapterExit: [
				{
					layer: 'polygons',
					opacity: 0.0
				},
				{
					layer: 'all-data-1',
					opacity: 0.83
				},
				{
					layer: 'all-data-2',
					opacity: 0.6
				},
				{
					layer: 'all-data-3',
					opacity: 0.3
				},
				{
					layer: 'all-data-4',
					opacity: 0.05
				},
				{
					layer: 'states-w-numbers',
					opacity: 0.0
				},
				{
					layer: 'mex-rf-density',
					opacity: 0.0
				}
			]
		},

//chapter10:mexico-2//

		{
			id: 'mexico-2',
			title: '<span style="font-size:50px; line-height:60px; color:white; text-align:center; font-style:bold; font-style:italic;"> As cartels in Mexico fragment and increase their power, violence spreads. </span>',
			image: '',
			description: 'A deteriorating security situation, caused in part by weak public institutions and frequent political turnover, has made Mexico one of the most violent countries in the world. 2019 saw a record number of homicides across the country, particularly concentrated in the south. ',
			location: {
				center: [-110.73732, 21.89743],
				zoom: 4.21,
				pitch: 0.00,
				bearing: 0.00
			},
			onChapterEnter: [
				{
					layer: 'polygons',
					opacity: 0.0
				},
				{
					layer: 'all-data-1',
					opacity: 0.0
				},
				{
					layer: 'all-data-2',
					opacity: 0.0
				},
				{
					layer: 'all-data-3',
					opacity: 0.0
				},
				{
					layer: 'all-data-4',
					opacity: 0.0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0.0
				},
				{
					layer: 'mex-rf-density',
					opacity: 0.9
				}
			],
			onChapterExit: [
				{
					layer: 'polygons',
					opacity: 0.0
				},
				{
					layer: 'all-data-1',
					opacity: 0.0
				},
				{
					layer: 'all-data-2',
					opacity: 0.0
				},
				{
					layer: 'all-data-3',
					opacity: 0.0
				},
				{
					layer: 'all-data-4',
					opacity: 0.0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0.0
				},
				{
					layer: 'mex-rf-density',
					opacity: 0.9
				}
			]
		},

//chapterx//

	]
};
