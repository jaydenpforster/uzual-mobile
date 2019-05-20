import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { Body, Block } from './styled';
import DayHabits from './DayHabits';
import DoubleTap from './DoubleTap';

export default ({ habit, onSetDailyHabit }) => (
  <DoubleTap delay={300} onDoubleTap={() => onSetDailyHabit(habit)}>
    <Block huge>
      <Body noMargin medium>
        {habit.title} {habit.starred && '🌟'}
      </Body>
      <Body placeholder tiny>
        {habit.description}
      </Body>
      <DayHabits habits={habit.habits} habitId={habit.id} />
    </Block>
  </DoubleTap>
);
