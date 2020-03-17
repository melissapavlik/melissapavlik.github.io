var config = {

//header and title//

	style: 'mapbox://styles/mjpavlik/ck3g4hyst04r61dmidsyauhgj',
	accessToken: 'pk.eyJ1IjoibWpwYXZsaWsiLCJhIjoiY2pncGN1a2YxMmpzejJ3czNhNW1tdHQ1ZiJ9.GYwDslJIFBDN5KlkfzQHRQ',
	showMarkers: false,
	theme: 'dark',
	alignment: '',
 	title: '<h1 style="background-color: #1c1c1c; opacity: 0.98;font-size:200px; font-style:bold; margin-top:25px; margin-bottom:0px; color: #CFCFCF; line-height: 200px;">10 Conflicts</h1> <h1 style="font-size:80px; margin-left:350px; text-align:right; padding-right:20px; background-color: #C95200; opacity:0.9; font-style:italic; margin-top:5px; line-height:100px; margin-bottom:0px;">to Worry About in 2020</h1>',
 	subtitle: 'As political violence continues to erupt worldwide, ACLED reports on ten conflicts worth watching throughout the coming year.',
 	byline: 'Produced by ACLED Research Analyst Mel Pavlik</br><i/>Based on ACLED report 10 Conflicts to Worry About in 2020</i>',
 	footer: 'Source: © ACLED 2019. Data can be found here: This is based on ACLED report here:',

// sections begin

	chapters: [

//world-intro//

		{
			id: 'world-intro',
			title: 'Where to focus in 2020',
			image: '',
			description: 'In 2019, the world witnessed a drastic increase in violent disorder that assumed many forms: protests from Lebanon to Hong Kong and Iraq to Chile; geopolitical competition in Yemen and Syria; dominant insurgencies in Somalia and Afghanistan; a cartel-insurgency in Mexico; and a diffuse, adaptable militant threat across the Sahel. Two problems immediately stand out: the world is significantly more violent now than a decade ago, and today’s conflict forms are strongly localized — types of violence, agents, targets, and solutions are unique to their local context. This is partially because governments in the world’s most violent places are no longer in control of their territories, nor show any interest or ability to resume control through direct or indirect authority. Governments are also much more likely to use violence against their citizens without international reproach. The rise of authoritarianism — and impunity — has generated significant public reaction in the form of mass protest movements, but it has also increased the level of violence imposed upon civilians and political competition.',
			location: {
				center: [14.22310, 21.33435],
				zoom: 1.46,
				pitch: 0.00,
				bearing: 0.00
			},
			callback: 'showLegend',
			onChapterEnter: [
				{
					layer: 'all-data-1',
					opacity: 0.8
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
				}
			],
			onChapterExit: [
				{
					layer: 'all-data-1',
					opacity: 0.8
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
				}
		  ]
		},

//world-data2polygons//

		{
			id: 'world-data2polygons',
			title: '',
			image: '',
			description: '',
			location: {
				center: [14.22310, 21.33435],
				zoom: 1.46,
				pitch: 0.00,
				bearing: 0.00
			},
			callback: 'hideLegend',
			onChapterEnter: [
				{
					layer: 'all-data-1',
					opacity: 0.8
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
					layer: 'polygons_world',
					opacity: 0
				}
			],
			onChapterExit: [
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
					layer: 'polygons_world',
					opacity: 1
				}
		  ]
		},

//world-text

		{
			id: 'world-text',
			title: '',
			image: '',
			description: 'In this report, ACLED has chosen 10 conflicts that demonstrate how violent political disorder is evolving in places it has festered for decades — such as Afghanistan — as well as in relatively new spaces — such as the United States. Across these 10 cases, observers have often concentrated on active threats and acts of violence, and less so on the latent risks that may produce new agents, modalities, targets, and opportunities for violence. If the past decade offers any lessons, it is that conflict can take many forms, and can arise from a range of local vulnerabilities if stoked. Here, we review 10 situations in which conflict is likely to change and worsen in the coming year, creating new dilemmas for governments and citizens.',
			location: {
				center: [14.22310, 21.33435],
				zoom: 1.46,
				pitch: 0.00,
				bearing: 0.00
			},
			callback: 'hideLegend',
			onChapterEnter: [
				{
					layer: 'polygons_world',
					opacity: 1
				}
			],
			onChapterExit: [
				{
					layer: 'polygons_world',
					opacity: 1
				}
		  ]
		},

//world2north-america//

		{
			id: 'world2north-america',
			title: '',
			image: '',
			description: '',
			location: {
				center: [-105.30480, 39.64788],
				zoom: 2.82,
				pitch: 0.00,
				bearing: 0.00
			},
			callback: 'showLegend',
			onChapterEnter: [
				{
					layer: 'polygons_world',
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 1
				}
			],
			onChapterExit: [
				{
					layer: 'polygons_world',
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 1
				}
			]
		},

//north-america-intro//

		{
			id: 'north-america-intro',
			title: '<span style="font-size:100px;line-height:100px; color:#white;text-align:left;font-style:bold;"> North America</span> <span style="font-size:40px;line-height:60px;color:white;text-align:left;font-style:italic;background-color:black;"> Ongoing political violence threatens to escalate</span>',
			image: '',
			description: '',
			location: {
				center: [-105.30480, 39.64788],
				zoom: 2.82,
				pitch: 0.00,
				bearing: 0.00
			},
			callback: 'showLegend',
			onChapterEnter: [
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'na-data',
					opacity: 0.8
				}
			],
			onChapterExit: [
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'na-data',
					opacity: 0.8
				}
		  ]
		},

//north-america2mexico//

		{
			id: 'north-america2mexico',
			title: '',
			image: '',
			description: '',
			location: {
				center: [-108.64804, 21.96790],
				zoom: 4.21,
				pitch: 0.00,
				bearing: 0.00
			},
			callback: 'showLegend',
			onChapterEnter: [
				{
					layer: 'na-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0.8
				}
			],
			onChapterExit: [
				{
					layer: 'na-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0.8
				}
		  ]
		},

//mexico-intro//

		{
			id: 'mexico-intro',
			title: '<span style="font-size:100px; line-height:150px; color:white; text-align:center; font-style:bold;"> Mexico </span><span style="background-color:#5F9ED1; color:black; line-height:50px; text-align:center;"></br>High risk of cartel criminal market developing into an insurgency</span>',
			image: '',
			description: '',
			location: {
				center: [-108.64804, 21.96790],
				zoom: 4.21,
				pitch: 0.00,
				bearing: 0.00
			},
			callback: 'showLegend',
			onChapterEnter: [
				{
					layer: 'mex-data',
					opacity: 0.8
				}
			],
			onChapterExit: [
				{
					layer: 'mex-data',
					opacity: 0.8
				}
		  ]
		},

//mexico-data2rf//

		{
			id: 'mexico-data2rf',
			title: '',
			image: '',
			description: '',
			location: {
				center: [-108.64804, 21.96790],
				zoom: 4.21,
				pitch: 0.00,
				bearing: 0.00
			},
			callback: 'hideLegend',
			onChapterEnter: [
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0.8
				}
			],
			onChapterExit: [
				{
					layer: 'mex-rf-data',
					opacity: 0.8
				},
				{
					layer: 'mex-data',
					opacity: 0
				}
		  ]
		},

//mexico-text//

		{
			id: 'mexico-text',
			title: '<span style="font-size:50px; line-height:60px; text-align:center; font-style:bold; font-style:italic; color:#A2C8EC;"> As cartels in Mexico fragment and increase their power, violence spreads.</span>',
			image: '',
			description: 'ACLED’s coming coverage of Mexico demonstrates an active and lethal political violence landscape, dominated by drug and criminal violence. The violence in Mexico overwhelmingly affects civilians. A weak security apparatus, coupled with the fragmentation of armed groups, indicates that conflict will continue to spread and intensify into 2020, possibly developing into an insurgency.</br></br><b> To the right, dots are sized by the number of reported fatalities per event: the larger the dot, the higher the fatalities.',
			location: {
				center: [-108.64804, 21.96790],
				zoom: 4.21,
				pitch: 0.00,
				bearing: 0.00
			},
			callback: 'hideLegend',
			onChapterEnter: [
				{
					layer: 'mex-rf-data',
					opacity: 0.8
				}
			],
			onChapterExit: [
				{
					layer: 'mex-rf-data',
					opacity: 0.8
				}
		  ]
		},

//mexico2us//

		{
			id: 'mexico2us',
			title: '',
			image: '',
			description: '',
			location: {
				center: [-97.69364, 38.45774],
				zoom: 3.86,
				pitch: 0.00,
				bearing: 0.00
			},
			callback: 'hideLegend',
			onChapterEnter: [
				{
					layer: 'us-data',
					opacity: 0.8
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				}
			],
			onChapterExit: [
				{
					layer: 'us-data',
					opacity: 0.8
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				}
		  ]
		},

//us-intro//

		{
			id: 'us-intro',
			title: '<span style="font-size:100px; line-height:150px; color:white;font-style:bold;background-color:black;"> United States </span><span style="background-color:#0D657D;color:white;line-height:50px;text-align:center;"></br>Developed, democratic political system at risk of turning violent</span>',
			image: '',
			description: '<span style="background-color:black;">ACLED collected pilot data on the political violence and protest landscape in the United States from July - September 2019, revealing a vibrant protest environment across all 50 states, and limited but lethal political violence. Demonstrations made up over 97% of reported events, the vast majority of which were peaceful. Dozens of reported fatalities were attributable to mass shootings and to excessive force by the police.</span>',
			location: {
				center: [-97.69364, 38.45774],
				zoom: 3.86,
				pitch: 0.00,
				bearing: 0.00
			},
			callback: 'showLegend',
			onChapterEnter: [
				{
					layer: 'us-data',
					opacity: 0.8
				}
			],
			onChapterExit: [
				{
					layer: 'us-data',
					opacity: 0.8
				}
		  ]
		},

//us2world//

		{
			id: 'us2world',
			title: '',
			image: '',
			description: '',
			location: {
				center: [14.22310, 21.33435],
				zoom: 1.46,
				pitch: 0.00,
				bearing: 0.00
			},
			callback: 'hideLegend',
			onChapterEnter: [
				{
					layer: 'polygons_world',
					opacity: 1
				},
				{
					layer: 'us-data',
					opacity: 0
				}
			],
			onChapterExit: [
				{
					layer: 'polygons_world',
					opacity: 1
				},
				{
					layer: 'us-data',
					opacity: 0
				}
		  ]
		},

//world2africa//

		{
			id: 'world2africa',
			title: '',
			image: '',
			description: '',
			location: {
				center: [53.88551, 1.44802],
				zoom: 2.54,
				pitch: 0.00,
				bearing: 0.00
			},
			callback: 'hideLegend',
			onChapterEnter: [
				{
					layer: 'polygons_world',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 1
				}
			],
			onChapterExit: [
				{
					layer: 'polygons_world',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 1
				}
		  ]
		},

//africa-intro//

		{
			id: 'africa-intro',
			title: '<span style="font-size:100px; line-height:150px; text-align:right; font-style:bold; color:#A2C8EC;">Africa</span><span style="font-size:40px; line-height:60px; text-align:right; font-style:italic; background-color:black; color:white;"></br>Conflict with the potential to crumble states and wreak regional havoc</span>',
			image: '',
			description: '',
			location: {
				center: [53.88551, 1.44802],
				zoom: 2.54,
				pitch: 0.00,
				bearing: 0.00
			},
			callback: 'hideLegend',
			onChapterEnter: [
				{
					layer: 'polygons_africa',
					opacity: 1
				}
			],
			onChapterExit: [
				{
					layer: 'polygons_africa',
					opacity: 0
				}
		  ]
		},

//africa2sahel//

		{
			id: 'africa2sahel',
			title: '',
			image: '',
			description:'' ,
			location: {
				center: [-4.29098, 15.79492],
				zoom: 4.09,
				pitch: 0.00,
				bearing: 0.00
			},
			callback: 'showLegend',
			onChapterEnter: [
				{
					layer: 'africa-data',
					opacity: 0.8
				}
			],
			onChapterExit: [
				{
					layer: 'africa-data',
					opacity: 0.8
				}
		  ]
		},

//sahel-intro//

		{
			id: 'sahel-intro',
			title: '<span style="font-size:100px; line-height:100px; color:#C95200; font-style:bold;">The Sahel</span> <span style="background-color:black; color:white; line-height:50px;"></br> High risk of conflicts diffusing and infecting neighbors</span>',
			image: '',
			description:'Political violence in the Sahel - made up of Niger, Chad, Burkina Faso, Mauritania, and Mali - continued to escalate in 2019. Nearly twice as many reported fatalities occurred across these countries in 2019 than in 2018, making this past year the deadliest in over 20 years. A variety of local and global Islamist groups, overlapping objectives, and poor response from security forces have contributed to this insecurity.' ,
			location: {
				center: [-4.29098, 15.79492],
				zoom: 4.09,
				pitch: 0.00,
				bearing: 0.00
			},
			callback: 'hideLegend',
			onChapterEnter: [
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0.8
				}
			],
			onChapterExit: [
				{
					layer: 'sahel-label',
					opacity: 1
				},
				{
					layer: 'africa-data',
					opacity: 0
				}
		  ]
		},

//sahel-data2year//

		{
			id: 'sahel-data2year',
			title: '',
			image: '',
			description: '',
			location: {
				center: [-4.29098, 15.79492],
				zoom: 4.09,
				pitch: 0.00,
				bearing: 0.00
			},
			callback: 'hideLegend',
			onChapterEnter: [
				{
					layer: 'sahel-label',
					opacity: 1
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				}
			],
			onChapterExit: [
				{
					layer: 'sahel-data-by-year',
					opacity: 0.8
				},
				{
					layer: 'sahel-label',
					opacity: 0
				}
		  ]
		},

//sahel-text//

		{
			id: 'sahel-text',
			title: '<span style="line-height:50px; font-style:italic;">Multiple overlapping forces served to greatly expand the geography of the conflict</span>',
			image: 'images/sahel.png',
			description: 'The growing threat posed by Islamist militant groups has attracted a number of foreign powers, with intersecting deployments of French, American, African, and EU troops all present in the region — adding to an already complex security situation. Still, the most serious and destabilizing acts of violence are perpetrated by local militias, recruited by or possibly partnered with either Jihadist organizations or domestic governments. These dynamic arrangements are actively reconfiguring the political geography of states at a time when ideologies and alliances are in flux across the Sahel. </br></br><b>On the right, <span style="color:#A2C8EC;">pale blue dots represent 2019 locations</span>; black dots are 2018 locations.</b>',
			location: {
				center: [-4.29098, 15.79492],
				zoom: 4.09,
				pitch: 0.00,
				bearing: 0.00
			},
			callback: 'showLegend',
			onChapterEnter: [
			],
			onChapterExit: [
		  ]
		},

//sahel2ethiopia//

		{
			id: 'sahel2ethiopia',
			title: '',
			image: '',
			description: '',
			location: {
				center: [46.75444, 9.06499],
				zoom: 5.17,
				pitch: 0.00,
				bearing: 0.00
			},
			callback: 'showLegend',
			onChapterEnter: [
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				}
			],
			onChapterExit: [
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0.8
				}
		  ]
		},

//ethiopia-intro//

		{
			id: 'ethiopia-intro',
			title: '<span style="font-size:100px; line-height:150px; color:white; font-style:bold;">Ethiopia</span><span style="background-color:#A2C8EC; color:black; line-height:50px;"></br>At risk of increased fragmentation despite a popular and promising leader</span>',
			image: 'images/eth.png',
			description: 'Prime Minister Abiy Ahmed’s election in Spring 2018 served to open space for political dissent in Ethiopia, exposing long-standing ethno-regional rifts which became violent. The lack of strong state capacity has led to clashes between ethnic militia and communal groups, while dissatisfaction with the regime has led to an increase in protest and riot events. The fractionalized conflict threatens long-term hope for peace.',
			location: {
				center: [46.75444, 9.06499],
				zoom: 5.17,
				pitch: 0.00,
				bearing: 0.00
			},
			callback: 'showLegend',
			onChapterEnter: [
				{
					layer: 'eth-data',
					opacity: 0.8
				}
			],
			onChapterExit: [
				{
					layer: 'eth-data',
					opacity: 0.8
				}
		  ]
		},

//ethiopia2somalia//

		{
			id: 'ethiopia2somalia',
			title: '',
			image: '',
			description: '',
			location: {
				center: [44.02895, 5.29517],
				zoom: 5.01,
				pitch: 0.00,
				bearing: 0.00
			},
			callback: 'showLegend',
			onChapterEnter: [
				{
					layer: 'som-data',
					opacity: 0.8
				},
				{
					layer: 'eth-data',
					opacity: 0
				}
			],
			onChapterExit: [
				{
					layer: 'som-data',
					opacity: 0.8
				},
				{
					layer: 'eth-data',
					opacity: 0
				}
		  ]
		},

//somalia-intro//

		{
			id: 'somalia-intro',
			title: '<span style="font-size:100px; line-height:150px; background-color:#FF7F0E; color:black; font-style:bold;">Somalia</span><span style="background-color:black; color:white; line-height:50px;"></br>High risk of Al Shabaab adapting to dominate and isolate a weak government</span>',
			image: '',
			description: '',
			location: {
				center: [44.02895, 5.29517],
				zoom: 5.01,
				pitch: 0.00,
				bearing: 0.00
			},
			callback: 'showLegend',
			onChapterEnter: [
				{
					layer: 'som-data',
					opacity: 0.8
				}
			],
			onChapterExit: [
				{
					layer: 'som-data',
					opacity: 0.8
				}
		  ]
		},

//somalia-text//

		{
			id: 'somalia-text',
			title: '',
			image: '',
			description: 'Amidst an escalation of U.S. engagement and in preparation for AMISOM withdrawal, Al Shabaab remained a relentless and lethal force in Somalia’s political violence landscape in 2019. Their continued activity despite crackdowns raises concerns as to the Somali government’s ability to combat the group without AMISOM forces, especially as a national election approaches.<span style="color:#FF7F0E;"></br></br><b>On the right, an x indicates the location of an airstrike.</span>',
			location: {
				center: [44.02895, 5.29517],
				zoom: 5.01,
				pitch: 0.00,
				bearing: 0.00
			},
			callback: 'hideLegend',
			onChapterEnter: [
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0.8
				}
			],
			onChapterExit: [
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0.8
				}
		  ]
		},

//somalia2world//

		{
			id: 'somalia2world',
			title: '',
			image: '',
			description: '',
			location: {
				center: [14.22310, 21.33435],
				zoom: 1.46,
				pitch: 0.00,
				bearing: 0.00
			},
			callback: 'hideLegend',
			onChapterEnter: [
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'polygons_world',
					opacity: 0
				}
			],
			onChapterExit: [
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'polygons_world',
					opacity: 1
				}
		  ]
		},

//world2middle-east//

		{
			id: 'world2middle-east',
			title: '',
			image: '',
			description: '',
			location: {
				center: [31.02814, 27.84799],
				zoom: 3.66,
				pitch: 0.00,
				bearing: 0.00
			},
			callback: 'hideLegend',
			onChapterEnter: [
				{
					layer: 'polygons_world',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 1
				}
			],
			onChapterExit: [
				{
					layer: 'polygons_world',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 1
				}
		  ]
		},

//middle-east-intro//

		{
			id: 'middle-east-intro',
			title: '<span style="font-size:100px; line-height:150px; background-color:black; color:white; text-align:right; font-style:bold;">The Middle East</span><span style="font-size:40px; line-height:60px; color:black; text-align:right; font-style:italic;background-color:#CFCFCF;"></br> A troubled region faces new challenges </span>',
			image: '',
			description: '',
			location: {
				center: [31.02814, 27.84799],
				zoom: 3.66,
				pitch: 0.00,
				bearing: 0.00
			},
			callback: 'showLegend',
			onChapterEnter: [
				{
					layer: 'me-data',
					opacity: 0.8
				},
				{
					layer: 'polygons_me',
					opacity: 0
				}
			],
			onChapterExit: [
				{
					layer: 'me-data',
					opacity: 0.8
				},
				{
					layer: 'polygons_me',
					opacity: 0
				}
		  ]
		},

//middle-east2lebanon//

		{
			id: 'middle-east2lebanon',
			title: '',
			image: '',
			description: '',
			location: {
				center: [35.10882, 33.87781],
				zoom: 7.78,
				pitch: 0.00,
				bearing: 0.00
			},
			callback: 'showLegend',
			onChapterEnter: [
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'leb-oct-dec',
					opacity: 0.8
				},
				{
					layer: 'leb-jul-sep',
					opacity: 0.8
				},
				{
					layer: 'leb-apr-jun',
					opacity: 0.8
				},
				{
					layer: 'leb-jan-mar',
					opacity: 0.8
				},
				{
					layer: 'leb-data',
					opacity: 0.8
				}
			],
			onChapterExit: [
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'leb-oct-dec',
					opacity: 0.8
				},
				{
					layer: 'leb-jul-sep',
					opacity: 0.8
				},
				{
					layer: 'leb-apr-jun',
					opacity: 0.8
				},
				{
					layer: 'leb-jan-mar',
					opacity: 0.8
				},
				{
					layer: 'leb-data',
					opacity: 0.8
				}
		  ]
		},

//lebanon-intro//

		{
			id: 'lebanon-intro',
			title: '<span style="font-size:100px; line-height:150px; color:#CFCFCF; font-style:bold;">Lebanon</span><span style="background-color:black; color:white; line-height:50px;"></br>At risk of protests evolving into organized violence</span>',
			image: '',
			description: 'In October 2019, demonstrations broke out across Lebanon, fueled by popular discontentment with corruption and a worsening economic crisis. This wave of demonstrations resulted in the resignation of Lebanon’s Prime Minister Saad Hariri, though demonstration events continued even after his departure. Despite intermittent clashes, the demonstrations were largely peaceful.',
			location: {
				center: [35.10882, 33.87781],
				zoom: 7.78,
				pitch: 0.00,
				bearing: 0.00
			},
			callback: 'showLegend',
			onChapterEnter: [
				{
					layer: 'leb-oct-dec',
					opacity: 0.8
				},
				{
					layer: 'leb-jul-sep',
					opacity: 0.8
				},
				{
					layer: 'leb-apr-jun',
					opacity: 0.8
				},
				{
					layer: 'leb-jan-mar',
					opacity: 0.8
				},
				{
					layer: 'leb-data',
					opacity: 0.8
				}
			],
			onChapterExit: [
				{
					layer: 'leb-oct-dec',
					opacity: 0.8
				},
				{
					layer: 'leb-jul-sep',
					opacity: 0.8
				},
				{
					layer: 'leb-apr-jun',
					opacity: 0.8
				},
				{
					layer: 'leb-jan-mar',
					opacity: 0.8
				},
				{
					layer: 'leb-data',
					opacity: 0.8
				}
		  ]
		},

//lebanon-q1//

		{
			id: 'lebanon-q1',
			title: '<span style="background-color:black;font-style:italic;">January - March 2019</span>',
			image: '',
			description: 'Limited activity in the first quarter of 2019...',
			location: {
				center: [35.10882, 33.87781],
				zoom: 7.78,
				pitch: 0.00,
				bearing: 0.00
			},
			callback: 'showLegend',
			onChapterEnter: [
				{
					layer: 'leb-oct-dec',
					opacity: 0
				},
				{
					layer: 'leb-jul-sep',
					opacity: 0
				},
				{
					layer: 'leb-apr-jun',
					opacity: 0
				},
				{
					layer: 'leb-jan-mar',
					opacity: 0.8
				},
				{
					layer: 'leb-data',
					opacity: 0
				}
			],
			onChapterExit: [
				{
					layer: 'leb-oct-dec',
					opacity: 0
				},
				{
					layer: 'leb-jul-sep',
					opacity: 0
				},
				{
					layer: 'leb-apr-jun',
					opacity: 0
				},
				{
					layer: 'leb-jan-mar',
					opacity: 0.8
				},
				{
					layer: 'leb-data',
					opacity: 0
				}
			]
		},

//lebanon-q2//

		{
			id: 'lebanon-q2',
			title: '<span style="background-color:black;font-style:italic;">April - June 2019</span>',
			image: '',
			description: '...or in the second...',
			location: {
				center: [35.10882, 33.87781],
				zoom: 7.78,
				pitch: 0.00,
				bearing: 0.00
			},
			callback: 'showLegend',
			onChapterEnter: [
				{
					layer: 'leb-apr-jun',
					opacity: 0.8
				},
				{
					layer: 'leb-jan-mar',
					opacity: 0
				}
			],
			onChapterExit: [
				{
					layer: 'leb-apr-jun',
					opacity: 0.8
				},
				{
					layer: 'leb-jan-mar',
					opacity: 0
				}
			]
		},

//lebanon-q3//

		{
			id: 'lebanon-q3',
			title: '<span style="background-color:black;font-style:italic;">July - September 2019</span>',
			image: '',
			description: '...or the third.',
			location: {
				center: [35.10882, 33.87781],
				zoom: 7.78,
				pitch: 0.00,
				bearing: 0.00
			},
			callback: 'showLegend',
			onChapterEnter: [
				{
					layer: 'leb-jul-sep',
					opacity: 0.8
				},
				{
					layer: 'leb-apr-jun',
					opacity: 0
				}
			],
			onChapterExit: [
				{
					layer: 'leb-jul-sep',
					opacity: 0.8
				},
				{
					layer: 'leb-apr-jun',
					opacity: 0
				}
			]
		},

//lebanon-q4//

		{
			id: 'lebanon-q4',
			title: '<span style="background-color:black;font-style:italic;">October - December 2019</span>',
			image: '',
			description: 'In the fourth quarter of 2019, demonstration activty explodes, spreading around the country.',
			location: {
				center: [35.10882, 33.87781],
				zoom: 7.78,
				pitch: 0.00,
				bearing: 0.00
			},
			callback: 'showLegend',
			onChapterEnter: [
				{
					layer: 'leb-jul-sep',
					opacity: 0
				},
				{
					layer: 'leb-oct-dec',
					opacity: 0.8
				}
			],
			onChapterExit: [
				{
					layer: 'leb-jul-sep',
					opacity: 0
				},
				{
					layer: 'leb-oct-dec',
					opacity: 0.8
				}
			],
		},

//lebanon2yemen//

		{
			id: 'lebanon2yemen',
			title: '',
			image: '',
			description: '',
			location: {
				center: [45.49023, 15.77554],
				zoom: 6.02,
				pitch: 0.00,
				bearing: 0.00
			},
			callback: 'showLegend',
			onChapterEnter: [
				{
					layer: 'leb-oct-dec',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0.8
				}
			],
			onChapterExit: [
				{
					layer: 'leb-oct-dec',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0.8
				}
		  ]
		},

//yemen-intro//

		{
			id: 'yemen-intro',
			title: '<span style="font-size:100px; line-height:150px; color:black; font-style:bold;">Yemen</span><span style="background-color:black; color:white; line-height:50px;"></br>High risk of persistent conflict as alliances and frontlines shift</span>',
			image: '',
			description: '',
			location: {
				center: [45.49023, 15.77554],
				zoom: 6.02,
				pitch: 0.00,
				bearing: 0.00
			},
			callback: 'showLegend',
			onChapterEnter: [
				{
					layer: 'yem-data',
					opacity: 0.8
				}
			],
			onChapterExit: [
				{
					layer: 'yem-data',
					opacity: 0.8
				}
		  ]
		},

//yemen-text//

		{
			id: 'yemen-text',
			title: '<span style="line-height:50px;">2019 was the second most lethal year of Yemen’s civil war, which shows no signs of slowing</span>',
			image: '',
			description: 'The War in Yemen is not a single overarching political struggle, but a variety of interdependent and overlapping local conflicts, insurgencies, and proxy battles for regional powers seeking to maintain influence in the region. These interconnected sources of violence have accounted for over 23,000 direct-conflict related deaths in 2019, making it one of the most lethal years of the war. ',
			location: {
				center: [45.49023, 15.77554],
				zoom: 6.02,
				pitch: 0.00,
				bearing: 0.00
			},
			callback: 'hideLegend',
			onChapterEnter: [
				{
					layer: 'yem-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0.8
				}
			],
			onChapterExit: [
				{
					layer: 'yem-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0.8
				}
			]
		},

//yemen2iran//

		{
			id: 'yemen2iran',
			title: '',
			image: '',
			description: '',
			location: {
				center: [49.94506, 32.57550],
				zoom: 4.68,
				pitch: 0.00,
				bearing: 0.00
			},
			callback: 'showLegend',
			onChapterEnter: [
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0.8
				}
			],
			onChapterExit: [
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0.8
				}
		  ]
		},

//iran-intro//

		{
			id: 'iran-intro',
			title: '<span style="font-size:100px; line-height:150px; color:black; font-style:bold;">Iran</span><span style="background-color:#FFBB7A; color:black; line-height:50px;"></br>High risk of center deteriorating amid regime escalation abroad and at home</span>',
			image: '',
			description: '<span style="color:black;background-color:white;">Tensions between Iran and the U.S. escalated substantially in 2019, ultimately resulting in the assassination of Iranian general Qasem Soleimani two days into 2020. Heightened U.S. sanctions against Iran also exacerbated the struggling economy, in turn catalyzing mass demonstrations. These culminated in hundreds of reported fatalities in November, showing the regime’s capacity and willingness to suppress domestic dissent.</span>',
			location: {
				center: [49.94506, 32.57550],
				zoom: 4.68,
				pitch: 0.00,
				bearing: 0.00
			},
			callback: 'showLegend',
			onChapterEnter: [
				{
					layer: 'iran-data',
					opacity: 0.8
				}
			],
			onChapterExit: [
				{
					layer: 'iran-data',
					opacity: 0.8
				}
		  ]
		},

//iran2world//

		{
			id: 'iran2world',
			title: '',
			image: '',
			description: '',
			location: {
				center: [14.22310, 21.33435],
				zoom: 1.46,
				pitch: 0.00,
				bearing: 0.00
			},
			callback: 'hideLegend',
			onChapterEnter: [
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'polygons_world',
					opacity: 1
				}
			],
			onChapterExit: [
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'polygons_world',
					opacity: 1
				}
		  ]
		},

//world2central-south-asia//

		{
			id: 'world2central-south-asia',
			title: '',
			image: '',
			description: '',
			location: {
				center: [93.91289, 33.98083],
				zoom: 2.89,
				pitch: 0.00,
				bearing: 0.00
			},
			callback: 'hideLegend',
			onChapterEnter: [
				{
					layer: 'polygons_ca',
					opacity: 1
				},
				{
					layer: 'polygons_sa',
					opacity: 1
				},
				{
					layer: 'polygons_world',
					opacity: 0
				}
			],
			onChapterExit: [
				{
					layer: 'polygons_ca',
					opacity: 1
				},
				{
					layer: 'polygons_sa',
					opacity: 1
				},
				{
					layer: 'polygons_world',
					opacity: 0
				}
			]
		},

//central-south-asia-intro//

		{
			id: 'central-south-asia-intro',
			title: '<span style="font-size:100px; background-color:black; line-height:150px; color:white; text-align:right; font-style:bold;">Central & South Asia</span><span style="font-size:40px; line-height:60px; color:white; text-align:right; font-style:italic; background-color:#CFCFCF; color:black;"></br> The most lethal and most active countries in the world are in Asia. </span>',
			image: '',
			description: '',
			location: {
				center: [93.91289, 33.98083],
				zoom: 2.89,
				pitch: 0.00,
				bearing: 0.00
			},
			callback: 'showLegend',
			onChapterEnter: [
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0.8
				},
				{
					layer: 'ca-afg-data',
					opacity: 0.8
				}
			],
			onChapterExit: [
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0.8
				},
				{
					layer: 'ca-afg-data',
					opacity: 0.8
				}
		  ]
		},

//central-south-asia2afg//

		{
			id: 'central-south-asia2afg',
			title: '',
			image: '',
			description: '',
			location: {
				center:  [72.49961, 34.06919],
				zoom: 5.36,
				pitch: 0.00,
				bearing: 0.00
			},
			callback: 'showLegend',
			onChapterEnter: [
				{
					layer: 'ca-afg-data',
					opacity: 0.8
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				}
			],
			onChapterExit: [
				{
					layer: 'ca-afg-data',
					opacity: 0.8
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				}
		  ]
		},

//afg-intro//

		{
			id: 'afg-intro',
			title: '<span style="font-size:100px; line-height:150px; background-color:#093746; color:white; font-style:bold;">Afghanistan</span><span style="background-color:#CFCFCF; color:black; line-height:50px;"></br>At risk of rising violence targeting civilians</span>',
			image: '',
			description: '<span style="color:black;background-color:white;">The nearly two-decade conflict in Afghanistan continued to rage in 2019,  and violence affected all provinces in the country. Civilians remain heavily affected by the ongoing war, and civilian fatalities from both Taliban attacks and from airstrikes rose dramatically in 2019. While the U.S. has indicated its intention to withdraw troops throughout 2020, prospects for peace remain dim.</span>',
			location: {
				center:  [72.49961, 34.06919],
				zoom: 5.36,
				pitch: 0.00,
				bearing: 0.00
			},
			callback: 'showLegend',
			onChapterEnter: [
				{
					layer: 'ca-afg-data',
					opacity: 0.8
				}
			],
			onChapterExit: [
				{
					layer: 'ca-afg-data',
					opacity: 0.8
				}
		  ]
		},

//afg2india//

		{
			id: 'afg2india',
			title: '',
			image: '',
			description: '',
			location: {
				center: [68.67099, 22.51075],
				zoom: 3.94,
				pitch: 0.00,
				bearing: 0.00
			},
			callback: 'showLegend',
			onChapterEnter: [
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0.8
				}
			],
			onChapterExit: [
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0.8
				}
		  ]
		},

//india-intro//

		{
			id: 'india-intro',
			title: '<span style="font-size:100px; line-height:150px; color:white; font-style:bold; background-color:black;">India</span><span style="background-color:#898989; color:black; line-height:50px;"></br>High risk of recent policies derailing with uncontrollable effects</span>',
			image: '',
			description: '',
			location: {
				center: [68.67099, 22.51075],
				zoom: 3.94,
				pitch: 0.00,
				bearing: 0.00
			},
			callback: 'showLegend',
			onChapterEnter: [
				{
					layer: 'sa-ind-data',
					opacity: 0.8
				}
			],
			onChapterExit: [
				{
					layer: 'sa-ind-data',
					opacity: 0.8
				}
		  ]
		},

//india-text//

		{
			id: 'india-text',
			title: '<span style="color:#CFCFCF; line-height:50px;">Political shifts in India introduce potential for massive escalation</span>',
			image: '',
			description: 'Several momentous moves by the Indian government contributed to the country’s movement towards Hindu nationalism, and will shape its political violence landscape for years to come. India revoked autonomy in the Jammu & Kashmir (J&K) regions, which in turn led to increased violence. Late in the year, the Citizenship Amendment Bill discriminating against Muslims provoked widespread demonstrations.',
			location: {
				center: [68.67099, 22.51075],
				zoom: 3.94,
				pitch: 0.00,
				bearing: 0.00
			},
			callback: 'showLegend',
			onChapterEnter: [
				{
					layer: 'sa-ind-data',
					opacity: 0.8
				}
			],
			onChapterExit: [
				{
					layer: 'sa-ind-data',
					opacity: 0.8
				}
		  ]
		},

//india-jk//

		{
			id: 'india-jk',
			title: '<span style="background-color:black; line-height:50px;">Tensions in J&K exploded in 2019</span>',
			image: '',
			description: '<span style="color:black;background-color:white">In October 2019, BDC elections proceeded in J&K amidst the ongoing controversy, raising questions about the legitimacy of the political process (Hindustan Times, 30 September 2019). Major opposition parties boycotted the elections citing detention of party leadership and security restrictions preventing their participation in political activities leading to the elections. Despite India’s ruling BJP having the freedom to campaign across J&K and contest unopposed by the state’s mainstream political establishment, independent candidates unexpectedly took 19 of 22 J&K districts at the polls (The Wire, 26 October 2019). The BDC election results were indicative of the growing dissociation between Kashmiri citizens and the BJP. Furthermore, strong opposition to the Indian government’s actions in J&K were reported across the country in the form of protests, violent demonstrations, and clashes with police forces.</span>',
			location: {
				center: [74.43137, 33.88668],
				zoom: 5.93,
				pitch: 0.00,
				bearing: 0.00
			},
			callback: 'showLegend',
			onChapterEnter: [
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0.8
				},
				{
					layer: 'jk-border',
					opacity: 1
				}
			],
			onChapterExit: [
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0.8
				},
				{
					layer: 'jk-border',
					opacity: 1
				}
		  ]
		},


//india2world//

		{
			id: 'india2world',
			title: '',
			image: '',
			description: '',
			location: {
				center: [14.22310, 21.33435],
				zoom: 1.46,
				pitch: 0.00,
				bearing: 0.00
			},
			callback: 'hideLegend',
			onChapterEnter: [
				{
					layer: 'polygons_world',
					opacity: 1
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				}
			],
			onChapterExit: [
				{
					layer: 'polygons_world',
					opacity:1
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				}
		  ]
		},

//world-conclusion//

		{
			id: 'world-conclusion',
			title: '',
			image: '',
			description: '',
			location: {
				center: [14.22310, 21.33435],
				zoom: 1.46,
				pitch: 0.00,
				bearing: 0.00
			},
			callback: 'hideLegend',
			onChapterEnter: [
				{
					layer: 'polygons_world',
					opacity:0
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
				}
			],
			onChapterExit: [
				{
					layer: 'polygons_world',
					opacity:0
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
				}
		  ]
		}
	]
};
