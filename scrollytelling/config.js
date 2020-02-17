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
			description: '2019 saw disorder mount across the world. Coups, popular demonstrations, assassinations, and election violence rocked countries across nearly every continent, and the year’s developments promise to shape political violence for years to come.',
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
			title: 'Where to focus in 2020',
			image: '',
			description: 'Ten areas across five regions call for particularly close attention in the coming year: these areas feature conflicts and disorder which threaten to have an outsized impact on global disorder, represent a massive shift from past patterns, or could devolve significantly as the decade begins.',
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
			title: '<span style="font-size:100px;line-height:100px; color:#E59F6F;text-align:left;font-style:bold;"> North America</span> <span style="font-size:40px;line-height:60px;color:white;text-align:left;font-style:italic;background-color:black;"> Ongoing political violence threatens to escalate</span>',
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
				center: [-101.55207, 38.27297],
				zoom: 3.80,
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
			description: '',
			location: {
				center: [-101.55207, 38.27297],
				zoom: 3.80,
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
				center: [-101.55207, 38.27297],
				zoom: 3.80,
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
			description: '<span style="color:cfcfcf;line-height:30px;1">ACLED’s pilot project collected data on political violence and protest events in the U.S. from July through September 2019, which included thousands of peaceful protests across all 50 states. Political violence events were limited, but disproportionately lethal: these include mass shootings, hate crimes, militia activity, and police brutality, and resulted in nearly 50 fatalities. </span>',
			location: {
				center: [-101.55207, 38.27297],
				zoom: 3.80,
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
			title: '<span style="font-size:100px; line-height:150px; color:white; text-align:center; font-style:bold;"> Mexico </span><span style="background-color:#5F9ED1; color:black; line-height:50px; text-align:center;"></br>High risk of cartel criminal market developing into an insurgency</span>',
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
					opacity: 0.8
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
					opacity: 0,8
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

//iran-text//

		{
			id: 'iran-text',
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
					opacity: 0.8
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
					opacity: 0.8
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
				center: [68.02622, 43.61508],
				zoom: 3.64,
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
					opacity: 1
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

//central-south-asia-intro//

		{
			id: 'central-south-asia-intro',
			title: '<span style="font-size:100px; background-color:black; line-height:150px; color:#F88D2F; text-align:right; font-style:bold;">Central Asia</span><span style="font-size:40px; line-height:60px; color:white; text-align:right; font-style:italic; background-color:#CFCFCF; color:black;"></br> The most lethal war in the world makes Central Asia a dangerous region. </span>',
			image: '',
			description: 'The center of instability in Central Asia remains Afghanistan, even as other counries in the region suffr from spillover instability and rising protest movements.',
			location: {
				center: [68.02622, 43.61508],
				zoom: 3.64,
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

//india-jk//

		{
			id: 'india-jk',
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
