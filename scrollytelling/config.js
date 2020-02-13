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

//world-overview-1//

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
				}
		  ]
		},

//world-overview-2//

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
				}
			]
		},

//world-overview-3//

		{
			id: 'world-overview-3',
			title: ' ',
			image: '',
			description: '<p style="font-size:25px; line-height:30px;"> Ten areas across five regions call for particularly close attention in the coming year: these countries and sub-regions feature conflicts and disorder which threaten to have an outsized impact on global disorder, represent a massive shift from past patterns, or could devolve significantly as the decade begins.</p>',
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
				}
		  ]
		},

//north-america-1//

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
				}
			]
		},

//north-america-2//

		{
			id: 'north-america-2',
			title: '<span style="font-size:100px;line-height:100px; color:#FFBB7A;text-align:left;font-style:bold;-webkit-text-stroke-width: 1px;-webkit-text-stroke-color: black;"> North America</span> <span style="font-size:40px;line-height:60px;color:white;text-align:left;font-style:italic;background-color:black;"> Ongoing political violence threatens to escalate</span>',
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
				}
			]
		},

//us-1//

		{
			id: 'us-1',
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
				}
			]
		},

//us-2//

		{
			id: 'us-2',
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
				}
			]
		},

//us-3//

		{
			id: 'us-3',
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
				}
			]
		},

//us-4//

		{
			id: 'us-4',
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
				}
			]
		},

//mexico-1//

		{
	id: 'mexico-1',
	title: '<span style="font-size:100px; line-height:100px; color:white; text-align:center; font-style:bold; background-color:black;"> Mexico </span><span style="background-color:#a2c8ec; color:black; line-height:50px; text-align:center;"> </br> High risk of cartel criminal market developing into an insurgency </span>',
	image: '',
	description: '',
	location: {
		center: [-108.64804, 21.96790],
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
		}
	]
},

//mexico-2//

		{
			id: 'mexico-2',
			title: '<span style="font-size:100px; line-height:100px; color:white; text-align:center; font-style:bold; background-color:black;"> Mexico </span><span style="background-color:#a2c8ec; color:black; line-height:50px; text-align:center;"> </br> High risk of cartel criminal market developing into an insurgency </span>',
			image: '',
			description: '',
			location: {
				center: [-108.64804, 21.96790],
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
				}
			]
		},

//mexico-3//

		{
			id: 'mexico-3',
			title: '<span style="font-size:50px; line-height:60px; color:white; text-align:center; font-style:bold; font-style:italic;"> As cartels in Mexico fragment and increase their power, violence spreads. </span>',
			image: '',
			description: 'A deteriorating security situation, caused in part by weak public institutions and frequent political turnover, has made Mexico one of the most violent countries in the world. 2019 saw a record number of homicides across the country, particularly concentrated in the south. ',
			location: {
				center: [-108.64804, 21.96790],
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
				}
			]
		},

//world-overview-4//

		{
			id: 'world-overview-4',
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
					opacity: 0.9
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
				}
			],
			onChapterExit: [
				{
					layer: 'polygons',
					opacity: 0.9
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
				}
			]
		},

//africa-1//

		{
			id: 'africa-1',
			title: '',
			image: '',
			description: '',
			location: {
				center: [53.88551, 1.44802],
				zoom: 2.54,
				pitch: 0.00,
				bearing: 0.00
			},
			onChapterEnter: [
				{
					layer: 'polygons',
					opacity: 0.9
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
				}
			],
			onChapterExit: [
				{
					layer: 'polygons',
					opacity: 0.9
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
				}
			]
		},

//africa-2//

		{
			id: 'africa-2',
			title: '<span style="font-size:100px; line-height:100px; color:#FF7F0E; text-align:right; font-style:bold;-webkit-text-stroke-width: 1px;-webkit-text-stroke-color: black;">Africa</span><span style="font-size:40px;line-height:60px;color:white;text-align:right;font-style:italic;background-color:black;"></br>Conflict with the potential to crumble states and wreak regional havoc.</span>',
			image: '',
			description: 'There exist multiple conflicts across Africa which threaten civilians and regional stability. However, three in particular - those in the Sahel, in Somalia, and in Ethiopia -  may see shifts in the coming year that will produce long-lasting and far-reaching consequences. Al Shabaab threatens the fragile Somali government, as across the continent Islamist groups grow more organized and lethal in the Sahel. Meanwhile, new political openness in Ethiopia has led long-simmering ethnic conflicts to devolve into open violence.',
			location: {
				center: [53.88551, 1.44802],
				zoom: 2.54,
				pitch: 0.00,
				bearing: 0.00
			},
			onChapterEnter: [
				{
					layer: 'polygons',
					opacity: 0.9
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
				}
			],
			onChapterExit: [
				{
					layer: 'polygons',
					opacity: 0.9
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
				}
			]
		},

//sahel-1//

		{
			id: 'sahel-1',
			title: '<span style="font-size:100px; line-height:100px; color:white; font-style:bold;">The Sahel:</span><span style="font-size:40px; line-height:50px; color:white; font-style:italic;"> Mali, Burkina Faso, Niger, Mauritania and Chad </span><span style="background-color:#ffbb7a; color:black; line-height:50px; text-align:center;"></br> High risk of conflicts diffusing and infecting neighbors </span>',
			image: '',
			description:'' ,
			location: {
				center: [-1.80370, 13.99233],
				zoom: 3.97,
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
				}
			]
		},

//sahel-2//

		{
			id: 'sahel-2',
			title: '',
			image: '',
			description: '',
			location: {
				center: [-1.80370, 13.99233],
				zoom: 3.97,
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
				}
			]
		},

//sahel-3//

		{
			id: 'sahel-3',
			title: '',
			image: '',
			description: '',
			location: {
				center: [-1.80370, 13.99233],
				zoom: 3.97,
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
				}
			]
		},

//ethiopia-1//

		{
			id: 'ethiopia-1',
			title: 'Ethiopia: At risk of increased fragmentation despite a popular and promising leader',
			image: '',
			description: '',
			location: {
				center: [45.42018, 9.07741],
				zoom: 5.14,
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
				}
			]
		},

//ethiopia-2//

		{
			id: 'ethiopia-2',
			title: '',
			image: '',
			description: '',
			location: {
				center: [45.42018, 9.07741],
				zoom: 5.14,
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
				}
			]
		},

//somalia-1//

		{
			id: 'somalia-1',
			title: 'Somalia: High risk of Al Shabaab adapting to dominate and isolate a weak government',
			image: '',
			description: '',
			location: {
				center: [44.02895, 5.29517],
				zoom: 5.01,
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
				}
			]
		},

//somalia-2//

		{
			id: 'somalia-2',
			title: '',
			image: '',
			description: '',
			location: {
				center: [44.02895, 5.29517],
				zoom: 5.01,
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
				}
			]
		},

//world-overview-5//

		{
			id: 'world-overview-5',
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
				}
			]
		},

//middle-east-1//

		{
			id: 'middle-east-1',
			title: '',
			image: '',
			description: '',
			location: {
				center: [47.23947, 26.89468],
				zoom: 3.87,
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
				}
			]
		},

//middle-east-2//

		{
			id: 'middle-east-2',
			title: 'The Middle East',
			image: '',
			description: '',
			location: {
				center: [47.23947, 26.89468],
				zoom: 3.87,
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
				}
			]
		},

//lebanon-1//

		{
			id: 'lebanon-1',
			title: 'Lebanon: At risk of protests evolving into organized violence',
			image: '',
			description: '',
			location: {
				center: [35.10882, 33.87781],
				zoom: 7.78,
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
				}
			]
		},

//lebanon-2//

		{
			id: 'lebanon-2',
			title: '',
			image: '',
			description: '',
			location: {
				center: [35.10882, 33.87781],
				zoom: 7.78,
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
				}
			]
		},

//yemen-1//

		{
			id: 'yemen-1',
			title: 'Yemen: High risk of persistent conflict as alliances and frontlines shift',
			image: '',
			description: '',
			location: {
				center: [45.49023, 15.77554],
				zoom: 6.02,
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
				}
			]
		},

//yemen-2//

		{
			id: 'yemen-2',
			title: '',
			image: '',
			description: '',
			location: {
				center: [45.49023, 15.77554],
				zoom: 6.02,
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
				}
			]
		},

//yemen-3//

		{
			id: 'yemen-3',
			title: '',
			image: '',
			description: '',
			location: {
				center: [45.49023, 15.77554],
				zoom: 6.02,
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
				}
			]
		},

//iran-1//

		{
			id: 'iran-1',
			title: 'Iran: High risk of center deteriorating amid regime escalation abroad and at home',
			image: '',
			description: '',
			location: {
				center: [49.94506, 32.57550],
				zoom: 4.68,
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
				}
			]
		},

//iran-2//

		{
			id: 'iran-2',
			title: '',
			image: '',
			description: '',
			location: {
				center: [49.94506, 32.57550],
				zoom: 4.68,
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
				}
			]
		},

//iran-3//

		{
			id: 'iran-3',
			title: '',
			image: '',
			description: '',
			location: {
				center: [49.94506, 32.57550],
				zoom: 4.68,
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
				}
			]
		},

//world-overview-6//

		{
			id: 'world-overview-6',
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
				}
			]
		},

//central-asia-1//

		{
			id: 'central-asia-1',
			title: '',
			image: '',
			description: '',
			location: {
				center: [68.02622, 43.61508],
				zoom: 3.64,
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
				}
			]
		},

//central-asia-2//

		{
			id: 'central-asia-2',
			title: 'Central Asia',
			image: '',
			description: '',
			location: {
				center: [68.02622, 43.61508],
				zoom: 3.64,
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
				}
			]
		},

//afghanistan-1//

		{
			id: 'afghanistan-1',
			title: 'Afghanistan: At risk of rising violence targeting civilians ',
			image: '',
			description: '',
			location: {
				center: [70.97220, 34.04994],
				zoom: 5.36,
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
				}
			]
		},

//afghanistan-2//

		{
			id: 'afghanistan-2',
			title: '',
			image: '',
			description: '',
			location: {
				center: [70.97220, 34.04994],
				zoom: 5.36,
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
				}
			]
		},

//world-overview-7//

		{
			id: 'world-overview-7',
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
				}
			]
		},

//south asia-1//

		{
			id: 'south-asia-1',
			title: '',
			image: '',
			description: '',
			location: {
				center: [77.51391, 22.37724],
				zoom: 3.75,
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
				}
			]
		},

//south-asia-2//

		{
			id: 'south-asia-2',
			title: 'South Asia',
			image: '',
			description: '',
			location: {
				center: [77.51391, 22.37724],
				zoom: 3.75,
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
				}
			]
		},

//india-1//

		{
			id: 'india-1',
			title: 'India: High risk of recent policies derailing with uncontrollable effects',
			image: '',
			description: '',
			location: {
				center: [75.23186, 22.52183],
				zoom: 3.93,
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
				}
			]
		},

//india-2//

		{
			id: 'india-2',
			title: '',
			image: '',
			description: '',
			location: {
				center: [75.23186, 22.52183],
				zoom: 3.93,
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
				}
			]
		},

//india-3//

		{
			id: 'india-3',
			title: '',
			image: '',
			description: '',
			location: {
				center: [75.23186, 22.52183],
				zoom: 3.93,
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
				}
			]
		},

//world-overview-8//

		{
			id: 'world-overview-8',
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
				}
			]
		},

//world-overview-9//

		{
			id: 'world-overview-9',
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
				}
			]
		}
	]
};
