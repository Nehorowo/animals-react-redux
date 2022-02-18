import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CardItem from './CardItem/CardItem';
import {
  fetchCards,
  setCardLiked,
  setCardUnliked,
  setFiltered,
  deleteCard,
} from '../../redux/actions/cards';
import styles from './Cards.module.css';

const Cards = () => {
  const cards = useSelector(({ cards }) => cards.items);
  const likes = useSelector(({ cards }) => cards.likes);
  const isFiltered = useSelector(({ cards }) => cards.isFiltered);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCards());
  }, []);

  const onClickLike = (id) => {
    if (likes.includes(id)) {
      dispatch(setCardUnliked(id));
    } else {
      dispatch(setCardLiked(id));
    }
  };

  const onClickDelete = (id) => {
    dispatch(deleteCard(id));
  };

  const onClickFilter = () => {
    if (isFiltered === false) {
      dispatch(setFiltered(true));
    } else {
      dispatch(setFiltered(false));
    }
  };

  return (
    <div>
      <div>
        <button className={styles.filter_btn} onClick={onClickFilter}>
          Отфильтровать
        </button>
      </div>
      <div className={styles.wrapper}>
        {isFiltered === true
          ? cards
              .filter((card) => likes.includes(card.id))
              .map((card) => (
                <CardItem
                  key={card.id}
                  name={card.name}
                  image_link={card.image_link}
                  onClickLike={onClickLike}
                  onClickDelete={onClickDelete}
                  {...card}
                  likes={likes}
                />
              ))
          : cards.map((card) => (
              <CardItem
                key={card.id}
                name={card.name}
                image_link={card.image_link}
                onClickLike={onClickLike}
                onClickDelete={onClickDelete}
                {...card}
                likes={likes}
              />
            ))}
      </div>
    </div>
  );
};

export default Cards;
