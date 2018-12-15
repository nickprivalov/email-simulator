export interface Email {
    fromName: string,
    fromEmail: string,
    subject: string,
    content: string,
    security: string,
    danger: string 
}

// courtesy of:  www.generatedata.com
export const EMAILS: Email[] = [
	{
		"fromName": "Casey Mejia",
		"fromEmail": "non.lacinia@tincidunt.com",
		"subject": "varius. Nam porttitor scelerisque neque. Nullam nisl. Maecenas malesuada fringilla est.",
		"content": "sagittis. Duis gravida. Praesent eu nulla at sem molestie sodales. Mauris blandit enim consequat purus. Maecenas libero est, congue a, aliquet vel, vulputate eu, odio. Phasellus at augue id ante dictum cursus. Nunc mauris elit, dictum eu, eleifend nec, malesuada ut, sem. Nulla interdum. Curabitur dictum. Phasellus in felis. Nulla tempor augue ac ipsum. Phasellus",
		"security": "None",
		"danger": "fraudSender"
	},
	{
		"fromName": "Hasad Shaffer",
		"fromEmail": "tellus@ridiculus.net",
		"subject": "consectetuer ipsum nunc id enim. Curabitur massa.",
		"content": "scelerisque mollis. Phasellus libero mauris, aliquam eu, accumsan sed, facilisis vitae, orci. Phasellus dapibus quam quis diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce aliquet magna a neque. Nullam ut nisi a odio semper cursus. Integer mollis. Integer tincidunt aliquam arcu. Aliquam ultrices iaculis odio. Nam interdum enim non nisi. Aenean eget metus. In nec orci. Donec nibh. Quisque nonummy ipsum non arcu. Vivamus",
		"security": "None",
		"danger": "fraudLink"
	},
	{
		"fromName": "Solomon Clay",
		"fromEmail": "ornare.lectus.ante@sitamet.net",
		"subject": "mi tempor lorem, eget mollis lectus pede et risus. Quisque libero",
		"content": "at sem molestie sodales. Mauris blandit enim consequat purus. Maecenas libero est, congue a, aliquet vel, vulputate eu, odio. Phasellus at augue id ante dictum cursus. Nunc mauris elit, dictum eu, eleifend nec, malesuada ut, sem. Nulla interdum. Curabitur dictum. Phasellus in felis. Nulla tempor augue ac ipsum. Phasellus vitae mauris sit amet lorem semper auctor. Mauris vel",
		"security": "S/MIME",
		"danger": "fraudLink"
	},
	{
		"fromName": "Anjolie Christensen",
		"fromEmail": "non.feugiat.nec@sapien.ca",
		"subject": "eget, venenatis a, magna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam",
		"content": "vehicula et, rutrum eu, ultrices sit amet, risus. Donec nibh enim, gravida sit amet, dapibus id, blandit at, nisi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel nisl. Quisque fringilla euismod enim. Etiam gravida molestie arcu. Sed eu nibh vulputate mauris sagittis placerat. Cras dictum ultricies ligula. Nullam enim. Sed nulla",
		"security": "TLS",
		"danger": "fraudLink"
	},
	{
		"fromName": "Xantha Langley",
		"fromEmail": "Integer.tincidunt.aliquam@orciDonecnibh.net",
		"subject": "orci luctus et ultrices posuere cubilia Curae; Donec tincidunt. Donec vitae erat vel pede",
		"content": "gravida nunc sed pede. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel arcu eu odio tristique pharetra. Quisque ac libero nec ligula consectetuer rhoncus. Nullam velit",
		"security": "TLS",
		"danger": "fraudSender"
	},
	{
		"fromName": "Emerson Dickson",
		"fromEmail": "Curabitur@euodio.org",
		"subject": "Vivamus euismod urna. Nullam lobortis quam a felis ullamcorper viverra. Maecenas iaculis aliquet diam.",
		"content": "Morbi accumsan laoreet ipsum. Curabitur consequat, lectus sit amet luctus vulputate, nisi sem semper erat, in consectetuer ipsum nunc id enim. Curabitur massa. Vestibulum accumsan neque et nunc. Quisque ornare tortor at risus. Nunc ac sem ut dolor dapibus gravida. Aliquam tincidunt, nunc ac mattis ornare, lectus ante dictum mi, ac mattis velit justo nec ante. Maecenas mi felis, adipiscing fringilla,",
		"security": "S/MIME",
		"danger": "fraudSender"
	},
	{
		"fromName": "Daniel Long",
		"fromEmail": "convallis.ligula@dolorNullasemper.co.uk",
		"subject": "ornare, lectus ante dictum mi, ac mattis velit justo nec",
		"content": "Sed id risus quis diam luctus lobortis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Mauris ut quam vel sapien imperdiet ornare. In faucibus. Morbi vehicula. Pellentesque tincidunt tempus risus. Donec egestas. Duis ac arcu. Nunc",
		"security": "TLS",
		"danger": "fraudLink"
	},
	{
		"fromName": "Larissa Kelly",
		"fromEmail": "ante.dictum@tacitisociosquad.org",
		"subject": "Proin dolor. Nulla semper tellus id nunc interdum feugiat. Sed nec metus facilisis lorem",
		"content": "nascetur ridiculus mus. Proin vel nisl. Quisque fringilla euismod enim. Etiam gravida molestie arcu. Sed eu nibh",
		"security": "S/MIME",
		"danger": "fraudLink"
	},
	{
		"fromName": "Zelenia Richard",
		"fromEmail": "libero.Proin@ultricesmaurisipsum.org",
		"subject": "fringilla. Donec feugiat metus sit amet ante.",
		"content": "blandit enim consequat purus. Maecenas libero est, congue a, aliquet vel, vulputate eu, odio. Phasellus at augue id ante dictum cursus. Nunc mauris elit, dictum eu, eleifend nec, malesuada ut, sem. Nulla",
		"security": "None",
		"danger": "fraudLink"
	},
	{
		"fromName": "Evan Robertson",
		"fromEmail": "nec.eleifend@ornareplaceratorci.org",
		"subject": "felis purus ac tellus. Suspendisse sed dolor. Fusce mi lorem, vehicula et,",
		"content": "facilisis vitae, orci. Phasellus dapibus quam quis diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce aliquet magna a neque. Nullam ut nisi a odio semper cursus.",
		"security": "None",
		"danger": "matchPattern"
	},
	{
		"fromName": "Gary Kirk",
		"fromEmail": "et@vehiculaet.ca",
		"subject": "ipsum primis in faucibus orci luctus",
		"content": "montes, nascetur ridiculus mus. Donec dignissim magna a tortor. Nunc commodo auctor velit. Aliquam nisl. Nulla eu neque pellentesque massa lobortis ultrices. Vivamus rhoncus. Donec est. Nunc ullamcorper, velit in aliquet lobortis, nisi nibh lacinia orci, consectetuer euismod est arcu ac orci. Ut semper pretium neque. Morbi quis urna. Nunc quis arcu vel quam dignissim pharetra. Nam ac nulla. In tincidunt congue turpis. In condimentum. Donec at",
		"security": "None",
		"danger": "matchPattern"
	},
	{
		"fromName": "Jolie Long",
		"fromEmail": "iaculis@vel.co.uk",
		"subject": "lectus ante dictum mi, ac mattis velit justo nec ante. Maecenas mi felis,",
		"content": "dolor. Quisque tincidunt pede ac urna. Ut tincidunt vehicula risus. Nulla eget metus eu erat semper rutrum. Fusce dolor quam, elementum at, egestas a, scelerisque sed, sapien. Nunc pulvinar arcu et pede. Nunc sed orci lobortis augue scelerisque mollis. Phasellus",
		"security": "None",
		"danger": "fraudLink"
	},
	{
		"fromName": "Noelani Cherry",
		"fromEmail": "nec.tellus.Nunc@pellentesqueegetdictum.org",
		"subject": "Suspendisse eleifend. Cras sed leo. Cras vehicula",
		"content": "convallis, ante lectus convallis est, vitae sodales nisi magna sed dui. Fusce aliquam, enim nec tempus scelerisque, lorem ipsum sodales purus, in molestie tortor nibh sit amet orci. Ut sagittis lobortis mauris. Suspendisse aliquet molestie tellus. Aenean egestas hendrerit neque. In ornare sagittis felis. Donec tempor, est",
		"security": "None",
		"danger": "fraudLink"
	},
	{
		"fromName": "Michael Mckinney",
		"fromEmail": "ipsum.sodales@convallisligulaDonec.ca",
		"subject": "pretium neque. Morbi quis urna. Nunc quis arcu",
		"content": "orci. Donec nibh. Quisque nonummy ipsum non arcu. Vivamus sit amet risus. Donec egestas. Aliquam nec enim. Nunc ut erat. Sed nunc est, mollis non, cursus non, egestas a, dui. Cras pellentesque. Sed dictum. Proin eget odio. Aliquam vulputate ullamcorper magna. Sed eu eros.",
		"security": "S/MIME",
		"danger": "fraudSender"
	},
	{
		"fromName": "Kim Stout",
		"fromEmail": "Duis.a.mi@cursus.ca",
		"subject": "odio sagittis semper. Nam tempor diam dictum sapien. Aenean massa. Integer vitae",
		"content": "nascetur ridiculus mus. Donec dignissim magna a tortor. Nunc commodo auctor velit. Aliquam nisl. Nulla eu neque pellentesque massa lobortis ultrices. Vivamus rhoncus. Donec est. Nunc ullamcorper, velit in aliquet lobortis, nisi nibh lacinia orci, consectetuer euismod est arcu ac orci. Ut semper pretium neque. Morbi quis",
		"security": "None",
		"danger": "fraudSender"
	},
	{
		"fromName": "Simon Mcknight",
		"fromEmail": "nec.mauris.blandit@eratvelpede.net",
		"subject": "malesuada fames ac turpis egestas.",
		"content": "amet ornare lectus justo eu arcu. Morbi sit amet massa. Quisque porttitor eros nec tellus. Nunc lectus pede, ultrices a, auctor non, feugiat nec, diam. Duis mi enim, condimentum eget, volutpat ornare, facilisis eget, ipsum. Donec sollicitudin adipiscing ligula. Aenean gravida nunc sed pede. Cum sociis natoque penatibus et magnis dis parturient montes,",
		"security": "None",
		"danger": "matchPattern"
	},
	{
		"fromName": "Juliet Suarez",
		"fromEmail": "at@mattisIntegereu.ca",
		"subject": "Sed malesuada augue ut lacus. Nulla tincidunt,",
		"content": "vitae, erat. Vivamus nisi. Mauris nulla. Integer urna. Vivamus molestie dapibus ligula. Aliquam erat volutpat. Nulla dignissim. Maecenas ornare egestas ligula. Nullam",
		"security": "TLS",
		"danger": "script"
	},
	{
		"fromName": "Whoopi Bond",
		"fromEmail": "arcu@ullamcorperviverra.co.uk",
		"subject": "nonummy ultricies ornare, elit elit fermentum risus, at fringilla purus mauris a nunc. In at",
		"content": "porttitor vulputate, posuere vulputate, lacus. Cras interdum. Nunc sollicitudin commodo ipsum. Suspendisse non leo. Vivamus nibh dolor, nonummy ac, feugiat non, lobortis quis, pede. Suspendisse dui. Fusce diam nunc, ullamcorper eu, euismod ac, fermentum vel, mauris. Integer sem elit, pharetra ut, pharetra sed, hendrerit a, arcu. Sed et libero.",
		"security": "TLS",
		"danger": "matchPattern"
	},
	{
		"fromName": "Kevyn Rice",
		"fromEmail": "Proin@sagittisDuisgravida.co.uk",
		"subject": "congue turpis. In condimentum. Donec at arcu. Vestibulum ante ipsum primis",
		"content": "quis diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce aliquet magna a neque. Nullam ut nisi a odio semper cursus. Integer mollis. Integer tincidunt aliquam arcu. Aliquam ultrices iaculis odio. Nam interdum enim non nisi. Aenean eget metus. In nec orci. Donec nibh. Quisque nonummy ipsum",
		"security": "TLS",
		"danger": "fraudLink"
	},
	{
		"fromName": "Lewis Taylor",
		"fromEmail": "euismod@velit.edu",
		"subject": "venenatis lacus. Etiam bibendum fermentum metus. Aenean sed pede nec ante blandit",
		"content": "non justo. Proin non massa non ante bibendum ullamcorper. Duis cursus, diam at pretium aliquet, metus urna convallis erat, eget tincidunt dui augue eu tellus. Phasellus elit pede, malesuada vel,",
		"security": "S/MIME",
		"danger": "matchPattern"
	},
	{
		"fromName": "Nash Glover",
		"fromEmail": "interdum.libero.dui@turpisegestas.edu",
		"subject": "ipsum. Curabitur consequat, lectus sit amet luctus",
		"content": "Sed eget lacus. Mauris non dui nec urna suscipit nonummy. Fusce fermentum fermentum arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus ornare. Fusce mollis. Duis sit",
		"security": "S/MIME",
		"danger": "fraudLink"
	},
	{
		"fromName": "Hedley Mckinney",
		"fromEmail": "sodales@Nulla.org",
		"subject": "vel, mauris. Integer sem elit, pharetra ut, pharetra sed, hendrerit a, arcu. Sed et libero.",
		"content": "ac libero nec ligula consectetuer rhoncus. Nullam velit dui, semper et, lacinia vitae, sodales at, velit. Pellentesque ultricies dignissim lacus. Aliquam rutrum lorem ac risus. Morbi metus. Vivamus euismod urna. Nullam lobortis quam a felis ullamcorper viverra. Maecenas iaculis aliquet diam. Sed diam lorem, auctor quis, tristique ac, eleifend vitae, erat. Vivamus nisi. Mauris nulla. Integer urna.",
		"security": "TLS",
		"danger": "script"
	},
	{
		"fromName": "Gemma Rowe",
		"fromEmail": "mauris.sit.amet@Aeneansedpede.net",
		"subject": "auctor vitae, aliquet nec, imperdiet nec, leo. Morbi neque tellus, imperdiet non, vestibulum nec, euismod",
		"content": "metus urna convallis erat, eget tincidunt dui augue eu tellus. Phasellus elit pede, malesuada vel, venenatis vel, faucibus id, libero. Donec consectetuer mauris id sapien. Cras dolor dolor, tempus non, lacinia at, iaculis quis, pede. Praesent eu dui. Cum sociis natoque penatibus et magnis dis",
		"security": "None",
		"danger": "fraudSender"
	},
	{
		"fromName": "Blair Fernandez",
		"fromEmail": "Nulla@etcommodo.ca",
		"subject": "fringilla cursus purus. Nullam scelerisque neque sed sem egestas blandit. Nam nulla magna,",
		"content": "egestas. Sed pharetra, felis eget varius ultrices, mauris ipsum porta elit, a feugiat tellus lorem eu metus. In lorem. Donec elementum, lorem ut aliquam iaculis, lacus pede sagittis augue, eu tempor erat neque non quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam fringilla cursus purus. Nullam scelerisque neque sed sem egestas blandit. Nam nulla magna, malesuada vel, convallis in,",
		"security": "None",
		"danger": "script"
	},
	{
		"fromName": "Cameran Finley",
		"fromEmail": "Proin.dolor@eratVivamusnisi.com",
		"subject": "Morbi metus. Vivamus euismod urna.",
		"content": "auctor. Mauris vel turpis. Aliquam adipiscing lobortis risus. In mi pede, nonummy ut, molestie in, tempus",
		"security": "S/MIME",
		"danger": "fraudSender"
	},
	{
		"fromName": "Fulton Greer",
		"fromEmail": "tincidunt@Pellentesque.net",
		"subject": "diam. Sed diam lorem, auctor",
		"content": "nec, malesuada ut, sem. Nulla interdum. Curabitur dictum. Phasellus in felis. Nulla tempor augue ac ipsum. Phasellus vitae mauris sit amet lorem semper auctor. Mauris vel turpis. Aliquam adipiscing lobortis risus. In mi pede, nonummy ut, molestie in, tempus eu, ligula. Aenean euismod mauris eu elit. Nulla facilisi. Sed neque. Sed eget lacus. Mauris non dui nec urna suscipit nonummy. Fusce fermentum fermentum arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices",
		"security": "TLS",
		"danger": "fraudSender"
	},
	{
		"fromName": "Rudyard Benton",
		"fromEmail": "libero.at@orcilacus.edu",
		"subject": "consequat enim diam vel arcu. Curabitur ut odio vel est tempor bibendum.",
		"content": "dolor, tempus non, lacinia at, iaculis quis, pede. Praesent eu dui. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eget magna. Suspendisse tristique neque venenatis lacus. Etiam bibendum fermentum metus. Aenean sed pede nec ante blandit viverra. Donec tempus,",
		"security": "None",
		"danger": "script"
	},
	{
		"fromName": "Veronica Short",
		"fromEmail": "lobortis.mauris@utmolestie.net",
		"subject": "Suspendisse eleifend. Cras sed leo. Cras vehicula aliquet libero. Integer in",
		"content": "rutrum eu, ultrices sit amet, risus. Donec nibh enim, gravida sit amet, dapibus id, blandit at, nisi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel nisl. Quisque fringilla euismod enim. Etiam gravida molestie arcu. Sed eu nibh vulputate mauris sagittis placerat. Cras dictum ultricies ligula. Nullam enim. Sed nulla ante, iaculis nec, eleifend non, dapibus rutrum, justo. Praesent luctus. Curabitur",
		"security": "TLS",
		"danger": "fraudSender"
	},
	{
		"fromName": "Jacqueline Barron",
		"fromEmail": "feugiat.nec@semper.com",
		"subject": "magna nec quam. Curabitur vel lectus. Cum sociis natoque penatibus",
		"content": "molestie in, tempus eu, ligula. Aenean euismod mauris eu elit. Nulla facilisi. Sed neque. Sed eget lacus. Mauris non dui nec urna suscipit nonummy. Fusce fermentum fermentum arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus ornare. Fusce mollis. Duis sit amet diam eu dolor egestas rhoncus. Proin nisl sem, consequat nec, mollis vitae, posuere at, velit. Cras lorem",
		"security": "None",
		"danger": "script"
	},
	{
		"fromName": "Herrod Garcia",
		"fromEmail": "fermentum.metus@nullaante.org",
		"subject": "luctus aliquet odio. Etiam ligula tortor, dictum eu,",
		"content": "amet ultricies sem magna nec quam. Curabitur vel lectus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec dignissim magna a tortor. Nunc commodo",
		"security": "TLS",
		"danger": "fraudSender"
	},
	{
		"fromName": "Vernon Hansen",
		"fromEmail": "tempor.bibendum@justofaucibuslectus.co.uk",
		"subject": "est. Nunc ullamcorper, velit in aliquet lobortis, nisi nibh lacinia orci,",
		"content": "feugiat placerat velit. Quisque varius. Nam porttitor scelerisque neque. Nullam nisl. Maecenas malesuada fringilla est. Mauris eu turpis. Nulla aliquet. Proin velit. Sed malesuada augue ut lacus. Nulla tincidunt, neque vitae semper egestas, urna justo faucibus lectus, a sollicitudin orci sem eget massa. Suspendisse eleifend. Cras sed leo. Cras vehicula aliquet libero. Integer in magna. Phasellus dolor elit, pellentesque a, facilisis non, bibendum",
		"security": "None",
		"danger": "matchPattern"
	},
	{
		"fromName": "Michelle Holman",
		"fromEmail": "enim@tincidunt.org",
		"subject": "elit, pellentesque a, facilisis non, bibendum sed, est.",
		"content": "mus. Proin vel nisl. Quisque fringilla euismod enim. Etiam gravida molestie arcu. Sed eu nibh vulputate mauris sagittis placerat. Cras dictum ultricies ligula. Nullam enim. Sed nulla ante, iaculis",
		"security": "S/MIME",
		"danger": "matchPattern"
	},
	{
		"fromName": "Matthew Mcknight",
		"fromEmail": "elementum@ante.edu",
		"subject": "montes, nascetur ridiculus mus. Proin",
		"content": "commodo auctor velit. Aliquam nisl. Nulla eu neque pellentesque massa lobortis ultrices. Vivamus rhoncus. Donec est. Nunc ullamcorper, velit in aliquet lobortis, nisi nibh lacinia orci, consectetuer euismod est arcu",
		"security": "S/MIME",
		"danger": "matchPattern"
	},
	{
		"fromName": "Curran Barron",
		"fromEmail": "Duis.elementum.dui@venenatisamagna.ca",
		"subject": "sit amet, faucibus ut, nulla. Cras eu tellus eu",
		"content": "fermentum vel, mauris. Integer sem elit, pharetra ut, pharetra sed, hendrerit a, arcu. Sed et libero. Proin mi. Aliquam gravida mauris ut mi. Duis risus odio, auctor vitae, aliquet nec, imperdiet nec, leo. Morbi neque tellus, imperdiet non, vestibulum nec, euismod in, dolor. Fusce feugiat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam auctor, velit eget laoreet posuere,",
		"security": "TLS",
		"danger": "matchPattern"
	},
	{
		"fromName": "Melyssa Parks",
		"fromEmail": "euismod@odio.org",
		"subject": "malesuada ut, sem. Nulla interdum. Curabitur dictum. Phasellus in",
		"content": "est. Nunc ullamcorper, velit in aliquet lobortis, nisi nibh lacinia orci, consectetuer",
		"security": "TLS",
		"danger": "fraudLink"
	},
	{
		"fromName": "Troy Boone",
		"fromEmail": "nunc@sitamet.com",
		"subject": "quis turpis vitae purus gravida sagittis. Duis gravida. Praesent eu nulla at sem",
		"content": "fermentum risus, at fringilla purus mauris a nunc. In at pede. Cras vulputate velit eu sem. Pellentesque ut ipsum ac mi eleifend egestas. Sed pharetra, felis eget varius ultrices, mauris ipsum porta elit, a feugiat tellus lorem eu metus. In lorem. Donec elementum, lorem ut aliquam iaculis,",
		"security": "TLS",
		"danger": "matchPattern"
	},
	{
		"fromName": "Tyler Strong",
		"fromEmail": "orci.tincidunt@magnaSuspendissetristique.edu",
		"subject": "Vestibulum ut eros non enim commodo hendrerit. Donec porttitor tellus",
		"content": "lorem, auctor quis, tristique ac, eleifend vitae, erat. Vivamus nisi. Mauris nulla. Integer urna. Vivamus molestie dapibus ligula. Aliquam erat volutpat. Nulla dignissim. Maecenas ornare egestas ligula. Nullam feugiat placerat velit. Quisque varius. Nam porttitor scelerisque neque. Nullam nisl. Maecenas malesuada fringilla est. Mauris eu turpis. Nulla aliquet. Proin velit. Sed",
		"security": "None",
		"danger": "matchPattern"
	},
	{
		"fromName": "Paul Davidson",
		"fromEmail": "dictum.eu.placerat@consectetueripsumnunc.edu",
		"subject": "imperdiet dictum magna. Ut tincidunt orci quis lectus. Nullam suscipit,",
		"content": "magna nec quam. Curabitur vel lectus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec dignissim magna a tortor. Nunc commodo auctor velit. Aliquam nisl. Nulla eu neque pellentesque massa lobortis",
		"security": "TLS",
		"danger": "fraudSender"
	},
	{
		"fromName": "Jakeem Shepherd",
		"fromEmail": "dignissim.Maecenas@etultrices.org",
		"subject": "Proin vel arcu eu odio tristique pharetra. Quisque ac",
		"content": "libero. Proin mi. Aliquam gravida mauris ut mi. Duis risus odio, auctor vitae, aliquet nec, imperdiet nec, leo. Morbi neque tellus, imperdiet non, vestibulum nec, euismod in, dolor. Fusce feugiat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam auctor, velit eget laoreet posuere, enim nisl",
		"security": "TLS",
		"danger": "matchPattern"
	},
	{
		"fromName": "Rana Fox",
		"fromEmail": "vestibulum.massa.rutrum@loremfringillaornare.co.uk",
		"subject": "mauris sapien, cursus in, hendrerit consectetuer, cursus et, magna. Praesent interdum ligula eu enim.",
		"content": "Nunc commodo auctor velit. Aliquam nisl. Nulla eu neque pellentesque massa lobortis ultrices. Vivamus rhoncus. Donec est. Nunc ullamcorper,",
		"security": "None",
		"danger": "matchPattern"
	},
	{
		"fromName": "Perry Macdonald",
		"fromEmail": "non.sapien@lobortisultricesVivamus.org",
		"subject": "augue malesuada malesuada. Integer id magna et ipsum",
		"content": "pellentesque a, facilisis non, bibendum sed, est. Nunc laoreet lectus quis massa. Mauris vestibulum, neque sed dictum eleifend, nunc risus varius orci, in consequat enim",
		"security": "TLS",
		"danger": "fraudSender"
	},
	{
		"fromName": "Bryar Lyons",
		"fromEmail": "placerat.orci@aliquetnec.ca",
		"subject": "Sed et libero. Proin mi. Aliquam gravida",
		"content": "semper cursus. Integer mollis. Integer tincidunt aliquam arcu. Aliquam ultrices iaculis odio. Nam interdum enim non",
		"security": "TLS",
		"danger": "script"
	},
	{
		"fromName": "Tyler Carr",
		"fromEmail": "non@senectusetnetus.org",
		"subject": "ornare sagittis felis. Donec tempor, est ac mattis",
		"content": "et, rutrum eu, ultrices sit amet, risus. Donec nibh enim, gravida sit amet, dapibus id, blandit at, nisi. Cum sociis",
		"security": "TLS",
		"danger": "matchPattern"
	},
	{
		"fromName": "Karina Gomez",
		"fromEmail": "Lorem.ipsum@felisDonectempor.com",
		"subject": "molestie dapibus ligula. Aliquam erat volutpat. Nulla dignissim. Maecenas",
		"content": "id magna et ipsum cursus vestibulum. Mauris magna. Duis dignissim tempor arcu. Vestibulum ut eros non enim commodo hendrerit. Donec porttitor tellus non magna. Nam ligula elit, pretium et, rutrum non, hendrerit id, ante. Nunc mauris sapien, cursus in, hendrerit consectetuer, cursus et, magna. Praesent interdum ligula eu enim. Etiam imperdiet dictum magna. Ut tincidunt orci quis lectus. Nullam suscipit, est",
		"security": "S/MIME",
		"danger": "fraudLink"
	},
	{
		"fromName": "Lila Morse",
		"fromEmail": "ut.odio@turpisegestas.co.uk",
		"subject": "mattis velit justo nec ante. Maecenas mi felis, adipiscing fringilla, porttitor vulputate,",
		"content": "condimentum eget, volutpat ornare, facilisis eget, ipsum. Donec sollicitudin adipiscing ligula. Aenean gravida nunc sed pede. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel arcu eu odio tristique pharetra. Quisque ac libero nec ligula consectetuer rhoncus. Nullam velit dui, semper et, lacinia vitae, sodales at, velit. Pellentesque ultricies dignissim lacus. Aliquam rutrum lorem ac risus. Morbi metus. Vivamus euismod urna. Nullam lobortis quam a felis",
		"security": "S/MIME",
		"danger": "fraudLink"
	},
	{
		"fromName": "Martina Palmer",
		"fromEmail": "ut.eros.non@Vestibulumanteipsum.co.uk",
		"subject": "molestie sodales. Mauris blandit enim consequat purus. Maecenas libero est, congue",
		"content": "at, nisi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel nisl. Quisque fringilla euismod enim. Etiam gravida molestie arcu. Sed eu nibh vulputate mauris sagittis placerat. Cras dictum ultricies ligula. Nullam",
		"security": "TLS",
		"danger": "fraudSender"
	},
	{
		"fromName": "Russell Cochran",
		"fromEmail": "ullamcorper.Duis@adipiscingnonluctus.edu",
		"subject": "enim commodo hendrerit. Donec porttitor tellus non magna. Nam",
		"content": "congue a, aliquet vel, vulputate eu, odio. Phasellus at augue id ante dictum cursus. Nunc mauris elit, dictum eu, eleifend nec, malesuada ut, sem. Nulla interdum. Curabitur dictum. Phasellus in felis. Nulla tempor augue ac ipsum. Phasellus vitae mauris sit amet lorem semper auctor. Mauris vel turpis. Aliquam adipiscing lobortis risus. In mi pede, nonummy ut, molestie in, tempus eu, ligula. Aenean euismod mauris eu elit. Nulla facilisi.",
		"security": "TLS",
		"danger": "fraudLink"
	},
	{
		"fromName": "Ronan Romero",
		"fromEmail": "malesuada.vel@nibhQuisque.org",
		"subject": "ultrices posuere cubilia Curae; Phasellus ornare. Fusce mollis.",
		"content": "Nulla interdum. Curabitur dictum. Phasellus in felis. Nulla tempor augue ac ipsum. Phasellus vitae mauris sit amet lorem semper auctor. Mauris vel turpis. Aliquam adipiscing lobortis risus. In mi pede, nonummy ut, molestie in, tempus eu, ligula. Aenean euismod mauris eu elit. Nulla facilisi. Sed neque. Sed eget lacus. Mauris non dui nec urna suscipit nonummy. Fusce fermentum fermentum",
		"security": "S/MIME",
		"danger": "fraudSender"
	},
	{
		"fromName": "Hayes Monroe",
		"fromEmail": "Nunc@id.com",
		"subject": "ipsum. Donec sollicitudin adipiscing ligula. Aenean gravida nunc sed pede. Cum sociis natoque",
		"content": "Nunc pulvinar arcu et pede. Nunc sed orci lobortis augue scelerisque mollis. Phasellus libero mauris, aliquam eu, accumsan sed, facilisis vitae, orci. Phasellus dapibus quam quis diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce aliquet magna a neque. Nullam ut nisi a odio semper cursus. Integer mollis. Integer tincidunt aliquam arcu. Aliquam ultrices iaculis odio. Nam interdum enim",
		"security": "S/MIME",
		"danger": "script"
	},
	{
		"fromName": "Maia Oneil",
		"fromEmail": "eget.ipsum.Suspendisse@Fuscediam.net",
		"subject": "magna a neque. Nullam ut nisi a odio semper cursus. Integer mollis.",
		"content": "nibh vulputate mauris sagittis placerat. Cras dictum ultricies ligula. Nullam enim. Sed nulla ante, iaculis nec, eleifend non, dapibus rutrum, justo. Praesent luctus. Curabitur egestas nunc sed libero. Proin sed turpis nec mauris blandit mattis. Cras eget nisi dictum augue malesuada malesuada. Integer id magna et ipsum cursus vestibulum. Mauris magna. Duis",
		"security": "TLS",
		"danger": "script"
	},
	{
		"fromName": "Chester Wright",
		"fromEmail": "semper.rutrum.Fusce@imperdiet.co.uk",
		"subject": "scelerisque scelerisque dui. Suspendisse ac metus vitae",
		"content": "magna nec quam. Curabitur vel lectus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus",
		"security": "None",
		"danger": "fraudSender"
	},
	{
		"fromName": "Gavin Sears",
		"fromEmail": "Nulla.eu.neque@nibhDonecest.org",
		"subject": "In nec orci. Donec nibh. Quisque nonummy ipsum non arcu.",
		"content": "ante dictum mi, ac mattis velit justo nec ante. Maecenas mi felis, adipiscing fringilla, porttitor vulputate,",
		"security": "S/MIME",
		"danger": "matchPattern"
	},
	{
		"fromName": "Kerry Owen",
		"fromEmail": "nisi@atvelitCras.org",
		"subject": "arcu. Nunc mauris. Morbi non sapien molestie orci tincidunt adipiscing. Mauris molestie pharetra nibh.",
		"content": "Ut nec urna et arcu imperdiet ullamcorper. Duis at lacus. Quisque purus sapien, gravida non, sollicitudin a, malesuada id, erat. Etiam vestibulum massa rutrum magna. Cras convallis convallis dolor. Quisque tincidunt pede ac urna. Ut tincidunt vehicula risus. Nulla eget metus eu erat",
		"security": "TLS",
		"danger": "fraudSender"
	},
	{
		"fromName": "Indira Mcdaniel",
		"fromEmail": "semper@pede.org",
		"subject": "urna. Vivamus molestie dapibus ligula. Aliquam erat volutpat. Nulla dignissim. Maecenas ornare egestas ligula.",
		"content": "euismod ac, fermentum vel, mauris. Integer sem elit, pharetra ut, pharetra sed, hendrerit a, arcu. Sed et libero. Proin mi. Aliquam gravida mauris ut mi. Duis risus odio, auctor vitae, aliquet nec, imperdiet nec, leo. Morbi neque tellus, imperdiet non, vestibulum nec, euismod in, dolor. Fusce feugiat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam auctor, velit eget laoreet posuere, enim",
		"security": "TLS",
		"danger": "fraudLink"
	},
	{
		"fromName": "Jenette Vazquez",
		"fromEmail": "Proin@eterosProin.co.uk",
		"subject": "risus quis diam luctus lobortis.",
		"content": "orci. Donec nibh. Quisque nonummy ipsum non arcu. Vivamus sit amet risus. Donec egestas. Aliquam nec enim. Nunc ut erat. Sed nunc est, mollis non, cursus non, egestas a, dui. Cras pellentesque. Sed dictum. Proin eget odio. Aliquam vulputate ullamcorper magna. Sed eu eros. Nam consequat dolor vitae dolor. Donec",
		"security": "None",
		"danger": "fraudSender"
	},
	{
		"fromName": "Margaret Frye",
		"fromEmail": "Integer.id.magna@loremvitaeodio.co.uk",
		"subject": "ornare, lectus ante dictum mi, ac",
		"content": "Nullam nisl. Maecenas malesuada fringilla est. Mauris eu turpis. Nulla aliquet. Proin velit. Sed malesuada augue ut lacus. Nulla tincidunt, neque vitae semper egestas, urna justo faucibus lectus, a sollicitudin orci sem eget massa. Suspendisse eleifend. Cras sed leo. Cras vehicula aliquet libero. Integer in magna. Phasellus dolor elit, pellentesque a, facilisis non, bibendum sed, est. Nunc laoreet lectus quis massa. Mauris vestibulum, neque sed dictum",
		"security": "None",
		"danger": "fraudSender"
	},
	{
		"fromName": "Paula Daugherty",
		"fromEmail": "aliquet@vulputate.net",
		"subject": "dui. Suspendisse ac metus vitae",
		"content": "dui lectus rutrum urna, nec luctus felis purus ac tellus. Suspendisse sed dolor. Fusce mi lorem, vehicula et, rutrum eu, ultrices sit amet, risus. Donec nibh enim, gravida sit amet, dapibus id, blandit at, nisi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur",
		"security": "S/MIME",
		"danger": "fraudLink"
	},
	{
		"fromName": "Emma Emerson",
		"fromEmail": "aliquet@faucibus.edu",
		"subject": "sem. Nulla interdum. Curabitur dictum. Phasellus in felis. Nulla tempor augue ac ipsum. Phasellus vitae",
		"content": "purus ac tellus. Suspendisse sed dolor. Fusce mi lorem, vehicula et, rutrum eu, ultrices sit amet, risus. Donec nibh enim, gravida sit amet, dapibus id, blandit at, nisi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel nisl. Quisque fringilla euismod enim. Etiam gravida",
		"security": "None",
		"danger": "fraudLink"
	},
	{
		"fromName": "Jaime Dominguez",
		"fromEmail": "dapibus@Phaselluslibero.net",
		"subject": "ac mattis ornare, lectus ante",
		"content": "Aliquam vulputate ullamcorper magna. Sed eu eros. Nam consequat dolor vitae dolor. Donec fringilla. Donec feugiat metus",
		"security": "TLS",
		"danger": "fraudLink"
	},
	{
		"fromName": "Ivan Greene",
		"fromEmail": "libero.Integer@et.com",
		"subject": "est, congue a, aliquet vel, vulputate eu, odio. Phasellus at augue id",
		"content": "amet massa. Quisque porttitor eros nec tellus. Nunc lectus pede, ultrices a, auctor non, feugiat nec, diam. Duis mi enim, condimentum eget, volutpat ornare, facilisis eget, ipsum. Donec sollicitudin adipiscing ligula. Aenean gravida nunc sed",
		"security": "TLS",
		"danger": "script"
	},
	{
		"fromName": "Hyacinth Richardson",
		"fromEmail": "mus.Donec@etmalesuada.net",
		"subject": "velit. Aliquam nisl. Nulla eu neque pellentesque massa lobortis",
		"content": "Proin eget odio. Aliquam vulputate ullamcorper magna. Sed eu eros. Nam",
		"security": "None",
		"danger": "script"
	},
	{
		"fromName": "Kenneth Dodson",
		"fromEmail": "nec.ante@feugiatnecdiam.ca",
		"subject": "nec orci. Donec nibh. Quisque nonummy ipsum",
		"content": "vulputate ullamcorper magna. Sed eu eros. Nam consequat dolor vitae dolor. Donec fringilla. Donec feugiat metus sit amet ante. Vivamus non lorem vitae odio sagittis semper. Nam tempor diam dictum sapien. Aenean massa. Integer vitae nibh. Donec est mauris, rhoncus id, mollis nec, cursus a, enim. Suspendisse aliquet, sem ut cursus luctus, ipsum",
		"security": "None",
		"danger": "script"
	},
	{
		"fromName": "Germane Rowe",
		"fromEmail": "vel@afacilisisnon.net",
		"subject": "aliquet lobortis, nisi nibh lacinia orci, consectetuer euismod est arcu ac orci. Ut semper pretium",
		"content": "at lacus. Quisque purus sapien, gravida non, sollicitudin a, malesuada id, erat. Etiam vestibulum massa rutrum magna. Cras convallis convallis dolor. Quisque tincidunt pede ac",
		"security": "None",
		"danger": "matchPattern"
	},
	{
		"fromName": "Jackson Mcgee",
		"fromEmail": "Cras@risusNunc.co.uk",
		"subject": "nulla at sem molestie sodales. Mauris blandit enim",
		"content": "natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel arcu eu odio tristique pharetra. Quisque ac libero nec ligula consectetuer rhoncus. Nullam velit dui, semper et, lacinia vitae, sodales at, velit. Pellentesque ultricies dignissim lacus. Aliquam rutrum lorem ac risus. Morbi metus. Vivamus euismod urna. Nullam lobortis",
		"security": "S/MIME",
		"danger": "script"
	},
	{
		"fromName": "Burke Hensley",
		"fromEmail": "orci.consectetuer@variuset.net",
		"subject": "pretium neque. Morbi quis urna. Nunc quis",
		"content": "mi. Aliquam gravida mauris ut mi. Duis risus odio, auctor vitae, aliquet nec, imperdiet nec, leo. Morbi neque tellus, imperdiet non, vestibulum nec, euismod in, dolor. Fusce feugiat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam auctor, velit eget laoreet posuere, enim nisl elementum purus, accumsan interdum libero",
		"security": "S/MIME",
		"danger": "matchPattern"
	},
	{
		"fromName": "Hilel Harrington",
		"fromEmail": "Vestibulum.accumsan@aliquet.ca",
		"subject": "Sed malesuada augue ut lacus. Nulla",
		"content": "lorem eu metus. In lorem. Donec elementum, lorem ut aliquam iaculis, lacus pede sagittis augue, eu tempor",
		"security": "TLS",
		"danger": "script"
	},
	{
		"fromName": "Shaeleigh Sparks",
		"fromEmail": "purus@fermentum.net",
		"subject": "eu lacus. Quisque imperdiet, erat nonummy ultricies ornare, elit elit fermentum risus, at",
		"content": "neque. Nullam ut nisi a odio semper cursus. Integer mollis. Integer tincidunt aliquam arcu. Aliquam ultrices iaculis odio. Nam interdum enim non nisi. Aenean eget metus. In nec orci. Donec nibh. Quisque nonummy ipsum non arcu. Vivamus sit amet risus. Donec",
		"security": "S/MIME",
		"danger": "matchPattern"
	},
	{
		"fromName": "Kelly Pickett",
		"fromEmail": "Cras.dictum.ultricies@etliberoProin.org",
		"subject": "sit amet, consectetuer adipiscing elit. Curabitur",
		"content": "vestibulum massa rutrum magna. Cras convallis convallis dolor. Quisque tincidunt pede ac urna. Ut tincidunt vehicula risus. Nulla eget metus eu erat semper rutrum. Fusce dolor quam, elementum at, egestas a, scelerisque sed, sapien. Nunc pulvinar arcu et pede. Nunc sed orci lobortis augue scelerisque mollis. Phasellus libero mauris, aliquam eu, accumsan sed, facilisis vitae, orci. Phasellus dapibus quam quis diam. Pellentesque",
		"security": "S/MIME",
		"danger": "fraudLink"
	},
	{
		"fromName": "Lynn Preston",
		"fromEmail": "libero.nec@Vivamus.ca",
		"subject": "ac risus. Morbi metus. Vivamus euismod urna. Nullam lobortis quam a felis",
		"content": "eget varius ultrices, mauris ipsum porta elit, a feugiat tellus lorem eu metus. In lorem. Donec elementum, lorem ut aliquam iaculis, lacus pede sagittis augue, eu tempor erat neque non quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam fringilla cursus purus. Nullam scelerisque neque sed sem egestas blandit. Nam nulla magna, malesuada vel, convallis in, cursus et,",
		"security": "TLS",
		"danger": "matchPattern"
	},
	{
		"fromName": "Edward Marsh",
		"fromEmail": "dapibus.rutrum@iaculis.net",
		"subject": "semper et, lacinia vitae, sodales at, velit. Pellentesque ultricies",
		"content": "orci tincidunt adipiscing. Mauris molestie pharetra nibh. Aliquam ornare, libero at auctor ullamcorper, nisl arcu iaculis enim, sit amet ornare lectus justo eu arcu. Morbi sit amet massa. Quisque porttitor eros nec tellus. Nunc lectus pede, ultrices a, auctor non, feugiat nec, diam. Duis mi enim, condimentum eget, volutpat",
		"security": "None",
		"danger": "matchPattern"
	},
	{
		"fromName": "Chadwick Gould",
		"fromEmail": "ultrices@enim.com",
		"subject": "nisi. Aenean eget metus. In nec orci. Donec nibh. Quisque nonummy ipsum non arcu.",
		"content": "dolor sit amet, consectetuer adipiscing elit. Aliquam auctor, velit eget laoreet posuere, enim nisl elementum purus, accumsan interdum libero dui",
		"security": "S/MIME",
		"danger": "script"
	},
	{
		"fromName": "Pascale Mckee",
		"fromEmail": "Mauris@odiosagittis.net",
		"subject": "neque vitae semper egestas, urna justo faucibus lectus, a sollicitudin orci sem eget massa.",
		"content": "Cras dolor dolor, tempus non, lacinia at, iaculis quis, pede. Praesent eu dui. Cum sociis natoque penatibus",
		"security": "S/MIME",
		"danger": "fraudSender"
	},
	{
		"fromName": "Damian Neal",
		"fromEmail": "lobortis@eratvolutpat.co.uk",
		"subject": "ligula. Aenean euismod mauris eu elit. Nulla facilisi. Sed",
		"content": "velit justo nec ante. Maecenas mi felis, adipiscing fringilla, porttitor vulputate, posuere vulputate, lacus. Cras interdum. Nunc sollicitudin commodo ipsum. Suspendisse non leo. Vivamus nibh dolor, nonummy ac, feugiat non, lobortis quis, pede. Suspendisse dui. Fusce diam nunc, ullamcorper eu, euismod ac, fermentum vel, mauris. Integer sem elit, pharetra ut, pharetra sed, hendrerit a, arcu. Sed et libero. Proin mi. Aliquam gravida mauris ut mi. Duis risus odio, auctor vitae, aliquet nec, imperdiet",
		"security": "TLS",
		"danger": "fraudSender"
	},
	{
		"fromName": "Athena Camacho",
		"fromEmail": "elementum.at.egestas@tristique.edu",
		"subject": "Nullam scelerisque neque sed sem egestas blandit. Nam nulla",
		"content": "pede sagittis augue, eu tempor erat neque non quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam fringilla cursus purus. Nullam scelerisque neque sed sem egestas blandit. Nam nulla magna, malesuada vel, convallis in, cursus et, eros. Proin ultrices. Duis volutpat nunc sit amet metus. Aliquam erat volutpat. Nulla facilisis. Suspendisse commodo",
		"security": "TLS",
		"danger": "fraudLink"
	},
	{
		"fromName": "Emerald Holden",
		"fromEmail": "posuere.cubilia@ascelerisque.ca",
		"subject": "fringilla, porttitor vulputate, posuere vulputate, lacus. Cras interdum. Nunc sollicitudin commodo ipsum. Suspendisse non",
		"content": "aliquet magna a neque. Nullam ut nisi a odio semper",
		"security": "TLS",
		"danger": "matchPattern"
	},
	{
		"fromName": "Burton Butler",
		"fromEmail": "nascetur@Morbiquis.org",
		"subject": "Donec est. Nunc ullamcorper, velit in aliquet lobortis, nisi nibh lacinia orci,",
		"content": "diam vel arcu. Curabitur ut odio vel est tempor bibendum. Donec felis orci, adipiscing non, luctus sit amet, faucibus ut, nulla. Cras eu tellus eu augue porttitor interdum. Sed auctor odio a purus. Duis elementum, dui quis accumsan convallis, ante lectus convallis est, vitae sodales nisi magna sed dui. Fusce aliquam, enim nec tempus scelerisque, lorem ipsum sodales purus, in molestie tortor nibh",
		"security": "TLS",
		"danger": "script"
	},
	{
		"fromName": "Len Cox",
		"fromEmail": "nunc@dolorFusce.ca",
		"subject": "vitae, aliquet nec, imperdiet nec, leo.",
		"content": "est ac mattis semper, dui lectus rutrum urna, nec luctus felis purus ac tellus. Suspendisse sed dolor. Fusce mi lorem, vehicula et, rutrum eu, ultrices sit amet, risus. Donec nibh enim, gravida sit amet, dapibus id, blandit at, nisi. Cum sociis",
		"security": "S/MIME",
		"danger": "fraudLink"
	},
	{
		"fromName": "Alma Battle",
		"fromEmail": "at.libero@Integerid.net",
		"subject": "In at pede. Cras vulputate velit eu sem. Pellentesque ut ipsum ac mi",
		"content": "eu tempor erat neque non quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam fringilla cursus purus. Nullam scelerisque neque sed sem egestas blandit. Nam nulla magna, malesuada vel, convallis in, cursus et, eros. Proin ultrices. Duis volutpat nunc sit amet metus. Aliquam erat volutpat. Nulla facilisis. Suspendisse commodo tincidunt nibh. Phasellus nulla. Integer vulputate, risus",
		"security": "TLS",
		"danger": "fraudSender"
	},
	{
		"fromName": "Clark Carlson",
		"fromEmail": "Nullam.lobortis@aliquetmagnaa.ca",
		"subject": "Mauris magna. Duis dignissim tempor arcu. Vestibulum",
		"content": "risus, at fringilla purus mauris a nunc. In at pede. Cras vulputate velit eu sem. Pellentesque ut ipsum ac mi eleifend egestas. Sed pharetra, felis eget varius ultrices, mauris ipsum porta elit, a feugiat tellus lorem eu metus. In lorem. Donec elementum, lorem ut aliquam iaculis, lacus pede sagittis augue, eu tempor erat neque non quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam fringilla cursus purus. Nullam scelerisque",
		"security": "S/MIME",
		"danger": "fraudSender"
	},
	{
		"fromName": "Ila Saunders",
		"fromEmail": "Proin.mi.Aliquam@Curabiturdictum.com",
		"subject": "dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing",
		"content": "et magnis dis parturient montes, nascetur ridiculus mus. Proin vel arcu eu odio tristique pharetra. Quisque ac libero nec ligula consectetuer rhoncus. Nullam velit dui, semper et, lacinia vitae, sodales at, velit. Pellentesque ultricies dignissim",
		"security": "TLS",
		"danger": "matchPattern"
	},
	{
		"fromName": "Kennedy Flowers",
		"fromEmail": "Aenean@Maurisnondui.co.uk",
		"subject": "Nullam feugiat placerat velit. Quisque varius. Nam porttitor",
		"content": "accumsan convallis, ante lectus convallis est, vitae sodales nisi magna sed dui. Fusce aliquam, enim nec tempus scelerisque, lorem ipsum sodales purus, in molestie tortor nibh sit amet orci. Ut sagittis lobortis mauris. Suspendisse aliquet",
		"security": "S/MIME",
		"danger": "matchPattern"
	},
	{
		"fromName": "Fitzgerald Jacobson",
		"fromEmail": "ante.ipsum.primis@Aliquamnecenim.org",
		"subject": "scelerisque dui. Suspendisse ac metus",
		"content": "turpis vitae purus gravida sagittis. Duis gravida. Praesent eu nulla at sem molestie sodales. Mauris blandit enim consequat purus. Maecenas libero est, congue a, aliquet vel, vulputate eu, odio. Phasellus at augue id ante dictum cursus. Nunc mauris elit, dictum eu, eleifend nec, malesuada ut, sem. Nulla interdum. Curabitur dictum.",
		"security": "TLS",
		"danger": "matchPattern"
	},
	{
		"fromName": "Cade Kelley",
		"fromEmail": "ornare.sagittis.felis@semNullainterdum.net",
		"subject": "commodo ipsum. Suspendisse non leo. Vivamus nibh",
		"content": "mi lacinia mattis. Integer eu lacus. Quisque imperdiet, erat nonummy ultricies ornare, elit elit fermentum risus, at fringilla purus mauris a nunc. In at pede. Cras vulputate velit eu sem. Pellentesque ut ipsum ac mi",
		"security": "TLS",
		"danger": "script"
	},
	{
		"fromName": "Adara Gallegos",
		"fromEmail": "non.dui.nec@nullaat.edu",
		"subject": "ut quam vel sapien imperdiet ornare. In faucibus. Morbi vehicula. Pellentesque tincidunt tempus risus.",
		"content": "Morbi metus. Vivamus euismod urna. Nullam lobortis quam a felis ullamcorper viverra. Maecenas iaculis aliquet diam. Sed diam lorem, auctor quis, tristique ac, eleifend vitae, erat. Vivamus nisi. Mauris nulla. Integer urna. Vivamus molestie dapibus ligula. Aliquam erat volutpat. Nulla dignissim. Maecenas ornare egestas ligula. Nullam feugiat placerat velit. Quisque",
		"security": "None",
		"danger": "script"
	},
	{
		"fromName": "Karina Campbell",
		"fromEmail": "Donec@est.net",
		"subject": "scelerisque, lorem ipsum sodales purus, in molestie tortor nibh sit amet",
		"content": "porttitor vulputate, posuere vulputate, lacus. Cras interdum. Nunc sollicitudin commodo ipsum. Suspendisse non leo. Vivamus nibh dolor, nonummy ac, feugiat non, lobortis quis, pede. Suspendisse dui. Fusce diam nunc, ullamcorper eu, euismod ac, fermentum vel, mauris. Integer sem elit, pharetra ut, pharetra sed,",
		"security": "TLS",
		"danger": "matchPattern"
	},
	{
		"fromName": "Cameron Knight",
		"fromEmail": "Praesent.eu@justoPraesent.org",
		"subject": "sit amet metus. Aliquam erat volutpat. Nulla",
		"content": "volutpat. Nulla dignissim. Maecenas ornare egestas ligula. Nullam feugiat placerat velit. Quisque varius. Nam porttitor scelerisque neque. Nullam nisl. Maecenas malesuada fringilla est. Mauris eu turpis. Nulla",
		"security": "None",
		"danger": "script"
	},
	{
		"fromName": "Rahim Garner",
		"fromEmail": "eget@atortor.co.uk",
		"subject": "ridiculus mus. Aenean eget magna. Suspendisse tristique neque venenatis",
		"content": "lacinia at, iaculis quis, pede. Praesent eu dui. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eget magna. Suspendisse tristique neque venenatis lacus. Etiam bibendum fermentum metus. Aenean sed pede nec ante blandit viverra. Donec tempus, lorem fringilla",
		"security": "TLS",
		"danger": "script"
	},
	{
		"fromName": "Rafael Barr",
		"fromEmail": "Proin.vel@nonsapien.org",
		"subject": "ipsum. Suspendisse sagittis. Nullam vitae diam. Proin dolor. Nulla semper tellus id",
		"content": "rutrum eu, ultrices sit amet, risus. Donec nibh enim, gravida sit amet, dapibus id, blandit at, nisi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel nisl. Quisque fringilla euismod enim. Etiam gravida molestie arcu. Sed eu nibh vulputate mauris sagittis placerat. Cras dictum ultricies ligula. Nullam enim. Sed nulla ante, iaculis nec, eleifend non, dapibus rutrum, justo. Praesent luctus. Curabitur egestas nunc sed libero. Proin sed turpis",
		"security": "None",
		"danger": "script"
	},
	{
		"fromName": "Nomlanga Sellers",
		"fromEmail": "ligula.consectetuer@Nullamvitaediam.co.uk",
		"subject": "eleifend non, dapibus rutrum, justo. Praesent luctus. Curabitur",
		"content": "in molestie tortor nibh sit amet orci. Ut sagittis lobortis mauris. Suspendisse aliquet molestie tellus. Aenean egestas hendrerit neque. In ornare sagittis felis. Donec tempor, est ac mattis semper, dui lectus rutrum urna, nec luctus felis purus ac tellus. Suspendisse sed dolor. Fusce mi lorem, vehicula et, rutrum eu,",
		"security": "TLS",
		"danger": "fraudSender"
	},
	{
		"fromName": "Alfreda Ferrell",
		"fromEmail": "nibh.Phasellus@dolorFuscemi.net",
		"subject": "mauris a nunc. In at pede. Cras vulputate velit eu",
		"content": "ligula. Aenean euismod mauris eu elit. Nulla facilisi. Sed neque. Sed eget lacus. Mauris non dui nec urna suscipit nonummy. Fusce fermentum fermentum arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus ornare. Fusce mollis. Duis",
		"security": "S/MIME",
		"danger": "script"
	},
	{
		"fromName": "Shellie Bowman",
		"fromEmail": "leo.Cras@disparturientmontes.ca",
		"subject": "Suspendisse aliquet, sem ut cursus luctus, ipsum",
		"content": "dictum magna. Ut tincidunt orci quis lectus. Nullam suscipit, est ac facilisis facilisis, magna tellus faucibus leo, in lobortis tellus justo sit amet nulla. Donec non justo. Proin non massa non ante bibendum ullamcorper. Duis cursus, diam at pretium aliquet, metus urna convallis erat, eget tincidunt dui augue eu tellus. Phasellus elit pede, malesuada vel, venenatis vel, faucibus id,",
		"security": "None",
		"danger": "fraudSender"
	},
	{
		"fromName": "Amber Fischer",
		"fromEmail": "nibh@Sedid.net",
		"subject": "Proin mi. Aliquam gravida mauris",
		"content": "dictum mi, ac mattis velit justo nec ante. Maecenas mi felis, adipiscing fringilla, porttitor vulputate, posuere vulputate, lacus. Cras interdum. Nunc sollicitudin commodo ipsum. Suspendisse non leo. Vivamus nibh dolor, nonummy ac, feugiat",
		"security": "S/MIME",
		"danger": "matchPattern"
	},
	{
		"fromName": "Heidi Bullock",
		"fromEmail": "mauris.sagittis@estMauriseu.ca",
		"subject": "mus. Aenean eget magna. Suspendisse tristique",
		"content": "interdum feugiat. Sed nec metus facilisis lorem tristique aliquet. Phasellus fermentum convallis ligula. Donec luctus aliquet odio. Etiam ligula tortor, dictum eu, placerat eget, venenatis a, magna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam laoreet, libero et tristique pellentesque, tellus sem mollis dui, in sodales elit erat vitae risus. Duis a mi fringilla mi lacinia mattis. Integer eu lacus. Quisque imperdiet, erat nonummy ultricies ornare, elit elit fermentum risus,",
		"security": "S/MIME",
		"danger": "matchPattern"
	},
	{
		"fromName": "Geoffrey Sweeney",
		"fromEmail": "augue.eu@semPellentesqueut.org",
		"subject": "tristique pharetra. Quisque ac libero",
		"content": "volutpat nunc sit amet metus. Aliquam erat volutpat. Nulla facilisis. Suspendisse commodo tincidunt nibh. Phasellus nulla. Integer vulputate, risus a ultricies adipiscing, enim mi tempor lorem, eget mollis lectus pede et risus. Quisque libero lacus, varius et, euismod et, commodo",
		"security": "S/MIME",
		"danger": "fraudLink"
	},
	{
		"fromName": "Dane Erickson",
		"fromEmail": "quis.pede@auctorveliteget.net",
		"subject": "nibh. Donec est mauris, rhoncus id, mollis nec, cursus a, enim.",
		"content": "neque. Nullam nisl. Maecenas malesuada fringilla est. Mauris eu turpis. Nulla aliquet. Proin velit. Sed malesuada augue",
		"security": "TLS",
		"danger": "matchPattern"
	},
	{
		"fromName": "Quamar Hatfield",
		"fromEmail": "Nunc.lectus@a.co.uk",
		"subject": "eros. Nam consequat dolor vitae dolor. Donec fringilla. Donec",
		"content": "ridiculus mus. Proin vel arcu eu odio tristique pharetra. Quisque ac libero nec ligula consectetuer rhoncus. Nullam velit dui, semper et, lacinia vitae, sodales at, velit. Pellentesque ultricies dignissim lacus. Aliquam rutrum lorem ac risus. Morbi metus. Vivamus euismod urna. Nullam lobortis quam a felis ullamcorper viverra. Maecenas iaculis aliquet diam. Sed diam lorem, auctor quis,",
		"security": "TLS",
		"danger": "fraudLink"
	},
	{
		"fromName": "Amal Pena",
		"fromEmail": "Nunc@viverra.ca",
		"subject": "pellentesque, tellus sem mollis dui,",
		"content": "lacus. Etiam bibendum fermentum metus. Aenean sed pede nec ante blandit viverra. Donec tempus, lorem fringilla ornare placerat, orci lacus vestibulum lorem, sit amet ultricies sem magna nec quam. Curabitur vel lectus. Cum sociis natoque penatibus et magnis dis parturient",
		"security": "None",
		"danger": "fraudLink"
	},
	{
		"fromName": "Jordan Yang",
		"fromEmail": "Suspendisse@luctuslobortisClass.com",
		"subject": "dui. Fusce diam nunc, ullamcorper eu, euismod ac, fermentum vel, mauris.",
		"content": "Nulla eu neque pellentesque massa lobortis ultrices. Vivamus rhoncus. Donec est. Nunc ullamcorper, velit in aliquet lobortis, nisi nibh lacinia orci, consectetuer euismod est arcu ac orci. Ut semper pretium neque. Morbi quis urna. Nunc quis arcu vel quam dignissim pharetra. Nam ac nulla. In tincidunt congue turpis. In condimentum. Donec at arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec tincidunt. Donec vitae",
		"security": "None",
		"danger": "fraudLink"
	},
	{
		"fromName": "Rae Hancock",
		"fromEmail": "iaculis.nec@amalesuada.net",
		"subject": "arcu. Curabitur ut odio vel est tempor bibendum.",
		"content": "amet nulla. Donec non justo. Proin non massa non ante bibendum ullamcorper. Duis cursus, diam at pretium aliquet, metus urna convallis erat, eget tincidunt dui augue eu tellus. Phasellus elit pede, malesuada vel, venenatis vel, faucibus id, libero. Donec consectetuer mauris id sapien. Cras dolor dolor, tempus",
		"security": "S/MIME",
		"danger": "fraudSender"
	},
	{
		"fromName": "Ryder Jenkins",
		"fromEmail": "urna.justo@parturient.co.uk",
		"subject": "faucibus orci luctus et ultrices posuere cubilia Curae; Donec tincidunt. Donec",
		"content": "sit amet luctus vulputate, nisi sem semper erat, in consectetuer ipsum nunc id enim. Curabitur massa. Vestibulum accumsan neque et nunc. Quisque ornare tortor at risus. Nunc ac sem ut dolor dapibus gravida. Aliquam tincidunt, nunc ac mattis ornare, lectus ante dictum mi, ac mattis",
		"security": "TLS",
		"danger": "script"
	}
]