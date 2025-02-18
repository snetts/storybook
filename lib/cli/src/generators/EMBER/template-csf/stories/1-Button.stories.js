import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

export default {
  title: 'Button',
};

export const Text = () => ({
  template: hbs`<button {{action onClick}}>Hello Button</button>`,
  context: {
    onClick: action('clicked'),
  },
});

export const Emoji = () => ({
  template: hbs`
    <button {{action onClick}}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </button>
  `,
  context: {
    onClick: action('clicked'),
  },
});

Emoji.parameters = { notes: 'My notes on a button with emojis' };

export const WithSomeEmojiAndAction = () => ({
  template: hbs`
    <button {{action onClick}}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </button>
  `,
  context: {
    onClick: action('This was clicked'),
  },
});

WithSomeEmojiAndAction.storyName = 'with some emoji and action';
WithSomeEmojiAndAction.parameters = { notes: 'My notes on a button with emojis' };

export const ButtonWithLinkToAnotherStory = () => ({
  template: hbs`
    <button {{action onClick}}>
    Go to Welcome Story
    </button>
  `,
  context: {
    onClick: linkTo('Welcome'),
  },
});

ButtonWithLinkToAnotherStory.storyName = 'button with link to another story';
