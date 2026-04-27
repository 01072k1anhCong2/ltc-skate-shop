import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Ltc SkateShop',
  description: 'Your soul finds its true fluidity when your feet become one with the board, day after day. Premium skateboards and gear.',
  keywords: 'skateboarding, buy skateboards, skate gear, ltc skate, skateboard decks, ván trượt chính hãng, đồ skate',
};

export default Meta;
