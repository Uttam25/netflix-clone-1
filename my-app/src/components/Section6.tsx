import * as React from 'react';
import { Accordion } from './Accordion';

const news = [
	{
		
		title: 'What is Netflix',
		content: ['Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.<br/>You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There is always something new to discover, and new TV shows and movies are added every week!']
	},
	{
		
		title: 'How much does Netflix cost?',
		content: ['Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 649 to ₹ 149 a month. No extra costs, no contracts.'],
    open:true
	},
  {
		
		title: 'Where can i watch?',
		content: ['Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you are on the go and without an internet connection. Take Netflix with you anywhere.'],
    open:true
	},
  {
		
		title: 'How do I cancel?',
		content: ['Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.'],
    open:true
	},
  {
		
		title: 'What can I watch on Netflix?',
		content: ['Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.'],
    open:true
	},
	{
		
		title: 'Is Netflix good for kids?',
		content: ['The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.'],
    open:true
	}
];

const items = news.map(({open,  title, content }) => ({
	open,
	title: <h2>{title}</h2>,
	content: (
		<>
			{content.map((item: string, index: number) => (
				<p key={index}>{item}</p>
			))}
		</>
	)
}));

export const MyComponent = () => <Accordion items={items} duration={300} multiple={false} />;