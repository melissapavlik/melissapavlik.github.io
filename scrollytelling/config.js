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
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
					opacity: 0
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
				},
				{
					layer: 'polygons_world',
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
					opacity: 0
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
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
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
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
					opacity: 0
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
			onChapterEnter: [
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
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
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
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
					opacity: 0
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
			onChapterEnter: [
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 1
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 1
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
					opacity: 0
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
			onChapterEnter: [
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
					opacity: 0.8
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
					opacity: 0.8
				}
		  ]
		},

//north-america2us//

		{
			id: 'north-america2us',
			title: '',
			image: '',
			description: '',
			location: {
				center: [-97.69364, 38.45774],
				zoom: 3.86,
				pitch: 0.00,
				bearing: 0.00
			},
			onChapterEnter: [
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0.8
				},
				{
					layer: 'na-data',
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
					opacity: 00
				},
				{
					layer: 'polygons_world',
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0.8
				},
				{
					layer: 'na-data',
					opacity: 0
				}
		  ]
		},

//us-intro//

		{
			id: 'us-intro',
			title: '<span style="font-size:100px; line-height:150px; color:white;font-style:bold;background-color:black;"> United States </span><span style="background-color:#0D657D;color:white;line-height:50px;text-align:center;">Developed, democratic political system at risk of turning violent</span>',
			image: '',
			description: '<span style="background-color:black;">In the summer of 2019, ACLED launched a pilot project to systematically track all forms of political violence and demonstration activity across the US in real-time. Over three months from July through September, ACLED collected data on approximately 3,200 events; while the vast majority of these events are peaceful protests, the project also recorded political violence events ranging from mass shootings and hate crimes to non-state militia activity and police brutality.</span>',
			location: {
				center: [-97.69364, 38.45774],
				zoom: 3.86,
				pitch: 0.00,
				bearing: 0.00
			},
			onChapterEnter: [
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0.8
				},
				{
					layer: 'na-data',
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0.8
				},
				{
					layer: 'na-data',
					opacity: 0
				}
		  ]
		},

//us-data2states//

		{
			id: 'us-data2states',
			title: '',
			image: '',
			description: '',
			location: {
				center: [-97.69364, 38.45774],
				zoom: 3.86,
				pitch: 0.00,
				bearing: 0.00
			},
			onChapterEnter: [
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0.8
				},
				{
					layer: 'na-data',
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 1
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
					opacity: 0
				}
		  ]
		},

//us-text//

		{
			id: 'us-text',
			title: '<span style="font-size:50px; line-height:60px; color:white; text-align:center; font-style:bold; font-style:italic;"> The U.S. is home to a robust protest environment and rare, but deadly violence.</span>',
			image: 'images/us-event-fatality-donut.png',
			description: '<span style="color:cfcfcf;line-height:30px;1">While violent events make up only 1% of the pilot data, they resulted in nearly 50 fatalities – a disproportionately deadly trend linked primarily to mass shootings. ACLED also records 16 events involving excessive force by police, more than half of which target racial and ethnic minorities. ACLED also records over 3,100 demonstration events across all 50 states, ranging from a minimum of three events in Wyoming to a maximum of almost 600 in California. During the three-month pilot period, more demonstration events were recorded in the US than in almost any other country in the ACLED dataset — second only to India, a country with more than four times the population of the US.</span>',
			location: {
				center: [-119.95849, 37.72505],
				zoom: 3.23,
				pitch: 0.00,
				bearing: 0.00
			},
			onChapterEnter: [
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 1
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 1
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
					opacity: 0
				}
		  ]
		},

//us2mexico//

		{
			id: 'us2mexico',
			title: '',
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
						opacity: 0
					},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0.8
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0.8
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
					opacity: 0
				}
		  ]
		},

//mexico-intro//

		{
			id: 'mexico-intro',
			title: '<p style="font-size:100px; line-height:150px; color:white; text-align:center; font-style:bold;"> Mexico </span><span style="background-color:#5F9ED1; color:black; line-height:50px; text-align:center;"></br>High risk of cartel criminal market developing into an insurgency</p>',
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0.8
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0.8
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
					opacity: 0
				}
		  ]
		},

//mexico-text//

		{
			id: 'mexico-text',
			title: '<span style="font-size:50px; line-height:60px; text-align:center; font-style:bold; font-style:italic; color:#A2C8EC;"> As cartels in Mexico fragment and increase their power, violence spreads.</span>',
			image: '',
			description: 'A deteriorating security situation, caused in part by weak public institutions and frequent political turnover, has made Mexico one of the most violent countries in the world. 2019 saw a record number of homicides across the country, particularly concentrated in the south.',
			location: {
				center: [-108.64804, 21.96790],
				zoom: 4.21,
				pitch: 0.00,
				bearing: 0.00
			},
			onChapterEnter: [
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0.8
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0.8
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
					opacity: 0
				}
		  ]
		},

//mexico2world//

		{
			id: 'mexico2world',
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 1
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
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
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 1
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
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
			onChapterEnter: [
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 1
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 1
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
					opacity: 0
				}
		  ]
		},

//africa-intro//

		{
			id: 'africa-intro',
			title: '<span style="font-size:100px; line-height:150px; text-align:right; font-style:bold; color:#A2C8EC;">Africa</span><span style="font-size:40px; line-height:60px; text-align:right; font-style:italic; background-color:black; color:white;"></br>Conflict with the potential to crumble states and wreak regional havoc</span>',
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
					opacity: 0
				},
				{
					layer: 'polygons_world',
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 1
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0.8
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
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
			onChapterEnter: [
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0.8
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 1
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
					opacity: 0
				}
		  ]
		},

//sahel-intro//

		{
			id: 'sahel-intro',
			title: '<span style="font-size:100px; line-height:100px; color:#C95200; font-style:bold;">The Sahel</span><span style="font-size:40px; line-height:50px; color:white; font-style:italic;"> Mali, Burkina Faso, Niger, Mauritania and Chad </span><span style="background-color:black; color:white; line-height:50px;"></br> High risk of conflicts diffusing and infecting neighbors</span>',
			image: '',
			description:'' ,
			location: {
				center: [-4.29098, 15.79492],
				zoom: 4.09,
				pitch: 0.00,
				bearing: 0.00
			},
			onChapterEnter: [
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 1
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 1
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
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
			onChapterEnter: [
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 1
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0.8
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
					opacity: 0
				}
		  ]
		},

//sahel-text//

		{
			id: 'sahel-text',
			title: '',
			image: '',
			description: '',
			location: {
				center: [-4.29098, 15.79492],
				zoom: 4.09,
				pitch: 0.00,
				bearing: 0.00
			},
			onChapterEnter: [
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0.8
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0.8
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
					opacity: 0
				}
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
			onChapterEnter: [
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0.8
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
					opacity: 0
				}
		  ]
		},

//ethiopia-intro//

		{
			id: 'ethiopia-intro',
			title: '<span style="font-size:100px; line-height:150px; color:white; font-style:bold;">Ethiopia</span><span style="background-color:#A2C8EC; color:black; line-height:50px;"></br>At risk of increased fragmentation despite a popular and promising leader</span>',
			image: '',
			description: '',
			location: {
				center: [46.75444, 9.06499],
				zoom: 5.17,
				pitch: 0.00,
				bearing: 0.00
			},
			onChapterEnter: [
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0.8
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0.8
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
					opacity: 0
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
			onChapterEnter: [
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0.8
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0.8
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
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
			onChapterEnter: [
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0.8
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0.8
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
					opacity: 0
				}
		  ]
		},

//somalia-text//

		{
			id: 'somalia-text',
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0.8
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0.8
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
					opacity: 0
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
			onChapterEnter: [
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
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
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
					opacity: 0
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
				center: [47.23947, 26.89468],
				zoom: 3.87,
				pitch: 0.00,
				bearing: 0.00
			},
			onChapterEnter: [
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 1
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 1
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
					opacity: 0
				}
		  ]
		},

//middle-east-intro//

		{
			id: 'middle-east-intro',
			title: '<span style="font-size:100px; line-height:150px; background-color:black; color:#DBEFF4; text-align:right; font-style:bold;">The Middle East</span><span style="font-size:40px; line-height:60px; color:black; text-align:right; font-style:italic;background-color:#CFCFCF;"></br> A troubled region faces new challenges </span>',
			image: '',
			description: '<span style="background-color:black;>The Midle East, long a lightning rod for instability, has seen continued insurgencies, wars, and increased government repression across the region in 2019. Lebanon, Yemen, and Iran pose particular concerns as 2020 begins.</span>',
			location: {
				center: [47.23947, 26.89468],
				zoom: 3.87,
				pitch: 0.00,
				bearing: 0.00
			},
			onChapterEnter: [
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0.8
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0.8
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
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
			onChapterEnter: [
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0.8
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0.8
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
					opacity: 0
				}
		  ]
		},

//lebanon-intro//

		{
			id: 'lebanon-intro',
			title: '<span style="font-size:100px; line-height:150px; color:#CFCFCF; font-style:bold;">Lebanon</span><span style="background-color:black; color:white; line-height:50px;"></br>At risk of protests evolving into organized violence</span>',
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0.8
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0.8
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
					opacity: 0
				}
		  ]
		},

//lebanon-q1//

		{
			id: 'lebanon-q1',
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
					opacity: 0
				}
		  ]
		},

//lebanon-q2//

		{
			id: 'lebanon-q2',
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0.8
				},
				{
					layer: 'leb-jan-mar',
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0.8
				},
				{
					layer: 'leb-jan-mar',
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
					opacity: 0
				}
		  ]
		},

//lebanon-q3//

		{
			id: 'lebanon-q3',
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
				{
					layer: 'leb-oct-dec',
					opacity: 0
				},
				{
					layer: 'leb-jul-sep',
					opacity: 0.8
				},
				{
					layer: 'leb-apr-jun',
					opacity: 0
				},
				{
					layer: 'leb-jan-mar',
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
				{
					layer: 'leb-oct-dec',
					opacity: 0
				},
				{
					layer: 'leb-jul-sep',
					opacity: 0.8
				},
				{
					layer: 'leb-apr-jun',
					opacity: 0
				},
				{
					layer: 'leb-jan-mar',
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
					opacity: 0
				}
		  ]
		},

//lebanon-q4//

		{
			id: 'lebanon-q4',
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
				{
					layer: 'leb-oct-dec',
					opacity: 0.8
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
				{
					layer: 'leb-oct-dec',
					opacity: 0.8
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
					opacity: 0
				}
		  ]
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
			onChapterEnter: [
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0.8
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0.8
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
					opacity: 0
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
			onChapterEnter: [
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0.8
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0.8
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
					opacity: 0
				}
		  ]
		},

//yemen-text//

		{
			id: 'yemen-text',
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0.8
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0.8
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
					opacity: 0
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
			onChapterEnter: [
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0.8
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0.8
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
					opacity: 0
				}
		  ]
		},

//iran-intro//

		{
			id: 'iran-intro',
			title: '<span style="font-size:100px; line-height:150px; color:black; font-style:bold;">Iran</span><span style="background-color:#FFBB7A; color:black; line-height:50px;"></br>High risk of center deteriorating amid regime escalation abroad and at home</span>',
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0.8
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0.8
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
					opacity: 0
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
			onChapterEnter: [
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
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
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
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
					opacity: 0
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
			onChapterEnter: [
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 1
				},
				{
					layer: 'polygons_sa',
					opacity: 1
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 1
				},
				{
					layer: 'polygons_sa',
					opacity: 1
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
					opacity: 0
				}
		  ]
		},

//central-south-asia-intro//

		{
			id: 'central-south-asia-intro',
			title: '<span style="font-size:100px; background-color:black; line-height:150px; color:#F88D2F; text-align:right; font-style:bold;">Central & South Asia</span><span style="font-size:40px; line-height:60px; color:white; text-align:right; font-style:italic; background-color:#CFCFCF; color:black;"></br> The most lethal war in the world makes Central Asia a dangerous region. </span>',
			image: '',
			description: 'The center of instability in Central Asia remains Afghanistan, even as other counries in the region suffr from spillover instability and rising protest movements.',
			location: {
				center: [93.91289, 33.98083],
				zoom: 2.89,
				pitch: 0.00,
				bearing: 0.00
			},
			onChapterEnter: [
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0.8
				},
				{
					layer: 'ca-afg-data',
					opacity: 0.8
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0.8
				},
				{
					layer: 'ca-afg-data',
					opacity: 0.8
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
					opacity: 0
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
				center: [70.97220, 34.04994],
				zoom: 5.36,
				pitch: 0.00,
				bearing: 0.00
			},
			onChapterEnter: [
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0.8
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0.8
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
					opacity: 0
				}
		  ]
		},

//afg-intro//

		{
			id: 'afg-intro',
			title: '<span style="font-size:100px; line-height:150px; background-color:#093746; color:white; font-style:bold;">Afghanistan</span><span style="background-color:#CFCFCF; color:black; line-height:50px;"></br>At risk of rising violence targeting civilians</span>',
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0.8
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0.8
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
					opacity: 0
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
			onChapterEnter: [
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
					opacity:0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0.8
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0.8
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
					opacity: 0
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
			onChapterEnter: [
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0.8
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0.8
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
					opacity: 0
				}
		  ]
		},

//india-text//

		{
			id: 'india-text',
			title: '',
			image: '',
			description: '',
			location: {
				center: [68.67099, 22.51075],
				zoom: 3.94,
				pitch: 0.00,
				bearing: 0.00
			},
			onChapterEnter: [
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0.8
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0.8
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
					opacity: 0
				}
		  ]
		},

//india-jk//

		{
			id: 'india-jk',
			title: '',
			image: '',
			description: '',
			location: {
				center: [74.43137, 33.88668],
				zoom: 5.93,
				pitch: 0.00,
				bearing: 0.00
			},
			onChapterEnter: [
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0.8
				},
				{
					layer: 'jk-border',
					opacity: 1
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
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
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0.8
				},
				{
					layer: 'jk-border',
					opacity: 1
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
					opacity: 0
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
			onChapterEnter: [
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
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
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
					opacity:1
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
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
			onChapterEnter: [
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
					layer: 'polygons_world',
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
					opacity: 0
				}
			],
			onChapterExit: [
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
					layer: 'polygons_world',
					opacity: 0
				},
				{
					layer: 'polygons_na',
					opacity: 0
				},
				{
					layer: 'polygons_africa',
					opacity: 0
				},
				{
					layer: 'polygons_me',
					opacity: 0
				},
				{
					layer: 'polygons_ca',
					opacity: 0
				},
				{
					layer: 'polygons_sa',
					opacity: 0
				},
				{
					layer: 'jk-data',
					opacity: 0
				},
				{
					layer: 'jk-border',
					opacity: 0
				},
				{
					layer: 'sa-ind-data',
					opacity: 0
				},
				{
					layer: 'ca-afg-data',
					opacity: 0
				},
				{
					layer: 'iran-nov-rf',
					opacity: 0
				},
				{
					layer: 'iran-data',
					opacity: 0
				},
				{
					layer: 'yem-rf-data',
					opacity: 0
				},
				{
					layer: 'yem-data',
					opacity: 0
				},
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
					opacity: 0
				},
				{
					layer: 'leb-data',
					opacity: 0
				},
				{
					layer: 'me-data',
					opacity: 0
				},
				{
					layer: 'som-airstrike-data',
					opacity: 0
				},
				{
					layer: 'som-data',
					opacity: 0
				},
				{
					layer: 'eth-data',
					opacity: 0
				},
				{
					layer: 'sahel-data-by-year',
					opacity: 0
				},
				{
					layer: 'sahel-data',
					opacity: 0
				},
				{
					layer: 'sahel-label',
					opacity: 0
				},
				{
					layer: 'africa-data',
					opacity: 0
				},
				{
					layer: 'mex-rf-data',
					opacity: 0
				},
				{
					layer: 'mex-data',
					opacity: 0
				},
				{
					layer: 'states-w-numbers',
					opacity: 0
				},
				{
					layer: 'us-data',
					opacity: 0
				},
				{
					layer: 'na-data',
					opacity: 0
				}
		  ]
		}
	]
};
