import App from '../app'
 
const dialogue = r => require.ensure([], () => r(require('../frames/dialogue/dialogue')), 'dialogue')
const singlechat = r => require.ensure([], () => r(require('../frames/conversation/singlechat')), 'singlechat')
const groupchat = r => require.ensure([], () => r(require('../frames/conversation/groupchat')), 'groupchat')
const chatmessage = r => require.ensure([], () => r(require('../frames/conversation/chatmessage/chatmessage')), 'chatmessage')
const groupchatmessage = r => require.ensure([], () => r(require('../frames/conversation/chatmessage/groupchatmessage')), 'groupchatmessage')

const addressbook = r => require.ensure([], () => r(require('../frames/addressbook/addressbook')), 'addressbook')
const details = r => require.ensure([], () => r(require('../frames/addressbook/details/details')), 'details')
const more = r => require.ensure([], () => r(require('../frames/addressbook/details/more/more')), 'more')

const find = r => require.ensure([], () => r(require('../frames/find/find')), 'find')
const friendcircle = r => require.ensure([], () => r(require('../frames/find/friendcircle/friendcircle')), 'friendcircle')
const miniapps = r => require.ensure([], () => r(require('../frames/find/miniapps/miniapps')), 'miniapps')
const me = r => require.ensure([], () => r(require('../frames/me/me')), 'me')
const personaldetails = r => require.ensure([], () => r(require('../frames/me/personaldetails/personaldetails')), 'personaldetails')
const photoalbum = r => require.ensure([], () => r(require('../frames/me/photoalbum/photoalbum')), 'photoalbum')
const collect = r => require.ensure([], () => r(require('../frames/me/collect/collect')), 'collect')
const wallet = r => require.ensure([], () => r(require('../frames/me/wallet/wallet')), 'wallet')
const cardbag = r => require.ensure([], () => r(require('../frames/me/cardbag/cardbag')), 'cardbag')

const computer = r => require.ensure([], () => r(require('../frames/computer/computer')), 'computer')
const transfer = r => require.ensure([], () => r(require('../frames/transfer/transfer')), 'transfer')
const settings = r => require.ensure([], () => r(require('../frames/me/settings/settings')), 'settings')
const search = r => require.ensure([], () => r(require('../frames/search/search')), 'search')

const newmessage = r => require.ensure([], () => r(require('../frames/me/settings/detailset/newmessage')), 'newmessage')
const disturbance = r => require.ensure([], () => r(require('../frames/me/settings/detailset/disturbance')), 'disturbance')
const chat = r => require.ensure([], () => r(require('../frames/me/settings/detailset/chat')), 'chat')
const privacy = r => require.ensure([], () => r(require('../frames/me/settings/detailset/privacy')), 'privacy')
const currency = r => require.ensure([], () => r(require('../frames/me/settings/detailset/currency')), 'currency')
const aboutwc = r => require.ensure([], () => r(require('../frames/me/settings/detailset/aboutwc')), 'aboutwc')
const help = r => require.ensure([], () => r(require('../frames/me/settings/detailset/help')), 'help')
const login = r => require.ensure([], () => r(require('../frames/me/settings/detailset/login')), 'login')

export default[{
	path:'/',
	component:App,
	children: [
		{path: '', redirect: '/dialogue'},   //?????????????????????dialogue??????
		{path: '/dialogue', component: dialogue, },//???????????????
		{
			path: '/singlechat',
			component: singlechat,
			children:[
				{
					path: '/singlechat/chatmessage',
					component: chatmessage,
				}
			]

		},		//?????????????????????	
		{
			path: '/groupchat',
			component: groupchat,
			children: [
				{
					path: '/groupchat/groupchatmessage',
					component: groupchatmessage,
				}
			]
		},			//??????	
		{path: '/addressbook', component: addressbook, meta:{ keepAlive: true},
			children: [
				{
					path: '/addressbook/details',
					component: details,		//????????????
					children: [
						{
							path: '/addressbook/details/more',
							component:more,		//??????
						}
					]
				}
			]

		},	//?????????
		{path: '/find', component: find,
			children:[
				{
					path:'/find/friendcircle',
					component:friendcircle, //?????????
				},
				{
					path:'/find/miniapps',
					component:miniapps, //?????????
				},
			]
		},	//??????
		{path: '/search', component: search},	//??????
		{path: '/me', component: me,
			children: [
				{path:'/me/settings',component: settings,//??????
					children: [
						{
							path:'/me/settings/newmessage',
							component:newmessage,		
						},	//???????????????
						{
							path:'/me/settings/disturbance',
							component:disturbance,		
						},	//????????????
						{
							path:'/me/settings/chat',
							component:chat,		
						},	//??????
						{
							path:'/me/settings/privacy',
							component:privacy,		
						},	//??????
						{
							path:'/me/settings/currency',
							component:currency,		
						},	//??????
						{
							path:'/me/settings/aboutwc',
							component:aboutwc,		
						},	//????????????
						{
							path:'/me/settings/help',
							component:help,		
						},	//???????????????
						{
							path:'/me/settings/login',
							component:login,		
						},	//??????
					]
				},	
				{
					path:'/me/personaldetails',component : personaldetails,		//????????????
				},
				{
					path:'/me/cardbag',component : cardbag,		//??????
				},
				{
					path:'/me/photoalbum',component : photoalbum,		//??????
				},
				{
					path:'/me/collect',component : collect,		//????????????
				},
				{
					path:'/me/wallet',component : wallet,		//??????
				},
 			]
		},	//???
		{path: '/computer', component: computer},	//????????????
		{path: '/transfer', component: transfer},	//??????????????????
	]
}]