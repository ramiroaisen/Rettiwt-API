import { Command, createCommand } from 'commander';

import { output } from '../helper/CliUtils';
import { Rettiwt } from '../Rettiwt';

/**
 * Creates a new 'user' command which uses the given Rettiwt instance.
 *
 * @param rettiwt - The Rettiwt instance to use.
 * @returns The created 'user' command.
 */
function createUserCommand(rettiwt: Rettiwt): Command {
	// Creating the 'user' command
	const user = createCommand('user').description('Access resources releated to users');

	// Details
	user.command('details')
		.description('Fetch the details of the user with the given id/username')
		.argument('<id>', 'The username/id of the user whose details are to be fetched')
		.action(async (id: string) => {
			const details = await rettiwt.user.details(id);
			output(details);
		});

	// Followers
	user.command('followers')
		.description('Fetch the list of users who follow the given user')
		.argument('<id>', 'The id of the user')
		.argument('[count]', 'The number of followers to fetch')
		.argument('[cursor]', 'The cursor to the batch of followers to fetch')
		.action(async (id: string, count?: string, cursor?: string) => {
			const users = await rettiwt.user.followers(id, count ? parseInt(count) : undefined, cursor);
			output(users);
		});

	// Following
	user.command('following')
		.description('Fetch the list of users who are followed by the given user')
		.argument('<id>', 'The id of the user')
		.argument('[count]', 'The number of following to fetch')
		.argument('[cursor]', 'The cursor to the batch of following to fetch')
		.action(async (id: string, count?: string, cursor?: string) => {
			const users = await rettiwt.user.following(id, count ? parseInt(count) : undefined, cursor);
			output(users);
		});

	// Highlights
	user.command('highlights')
		.description('Fetch the list of highlighted tweets of the given user')
		.argument('<id>', 'The id of the user')
		.argument('[count]', 'The number of highlighted tweets to fetch')
		.argument('[cursor]', 'The cursor to the batch of highlights to fetch')
		.action(async (id: string, count?: string, cursor?: string) => {
			const tweets = await rettiwt.user.highlights(id, count ? parseInt(count) : undefined, cursor);
			output(tweets);
		});

	// Likes
	user.command('likes')
		.description('Fetch the list of tweets liked by the given user')
		.argument('<id>', 'The id of the user')
		.argument('[count]', 'The number of liked tweets to fetch')
		.argument('[cursor]', 'The cursor to the batch of liked tweets to fetch')
		.action(async (id: string, count?: string, cursor?: string) => {
			const tweets = await rettiwt.user.likes(id, count ? parseInt(count) : undefined, cursor);
			output(tweets);
		});

	// Media
	user.command('media')
		.description('Fetch the media timeline the given user')
		.argument('<id>', 'The id of the user')
		.argument('[count]', 'The number of media to fetch')
		.argument('[cursor]', 'The cursor to the batch of media to fetch')
		.action(async (id: string, count?: string, cursor?: string) => {
			const media = await rettiwt.user.media(id, count ? parseInt(count) : undefined, cursor);
			output(media);
		});

	// Replies
	user.command('replies')
		.description('Fetch the replies timeline the given user')
		.argument('<id>', 'The id of the user')
		.argument('[count]', 'The number of replies to fetch')
		.argument('[cursor]', 'The cursor to the batch of replies to fetch')
		.action(async (id: string, count?: string, cursor?: string) => {
			const replies = await rettiwt.user.replies(id, count ? parseInt(count) : undefined, cursor);
			output(replies);
		});

	// Subscriptions
	user.command('subscriptions')
		.description('Fetch the list of users who are subscribed by the given user')
		.argument('<id>', 'The id of the user')
		.argument('[count]', 'The number of subscriptions to fetch')
		.argument('[cursor]', 'The cursor to the batch of subscriptions to fetch')
		.action(async (id: string, count?: string, cursor?: string) => {
			const users = await rettiwt.user.subscriptions(id, count ? parseInt(count) : undefined, cursor);
			output(users);
		});

	// Timeline
	user.command('timeline')
		.description('Fetch the tweets timeline the given user')
		.argument('<id>', 'The id of the user')
		.argument('[count]', 'The number of tweets to fetch')
		.argument('[cursor]', 'The cursor to the batch of tweets to fetch')
		.action(async (id: string, count?: string, cursor?: string) => {
			const tweets = await rettiwt.user.timeline(id, count ? parseInt(count) : undefined, cursor);
			output(tweets);
		});

	return user;
}

export default createUserCommand;
