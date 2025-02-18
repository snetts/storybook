import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

export default {
  title: 'Button',
};

export const Text = () => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = 'Hello Button';
  btn.addEventListener('click', action('clicked'));
  return btn;
};

export const Emoji = () => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = '😀 😎 👍 💯';
  btn.addEventListener('click', action('clicked'));
  return btn;
};

Emoji.parameters = { notes: 'My notes on a button with emojis' };

export const WithSomeEmojiAndAction = () => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = '😀 😎 👍 💯';
  btn.addEventListener('click', action('This was clicked'));
  return btn;
};

WithSomeEmojiAndAction.storyName = 'with some emoji and action';
WithSomeEmojiAndAction.parameters = { notes: 'My notes on a button with emojis' };

export const ButtonWithLinkToAnotherStory = () => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = 'Go to Welcome Story';
  btn.addEventListener('click', linkTo('Welcome'));
  return btn;
};

ButtonWithLinkToAnotherStory.storyName = 'button with link to another story';
