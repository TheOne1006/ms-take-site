import * as React from 'react';
import { FC } from 'react';
import { Card as MuiCard, CardContent, withStyles } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AccessAlarms from '@material-ui/icons/AccessAlarms';

import {
  FilterList,
  FilterListItem,
  TextField,
  FilterLiveSearch,
  TextInput,
  Filter,
  FilterProps,
} from 'react-admin';


const Card = withStyles(theme => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      order: -1, // display on the left rather than on the right of the list
      width: '15em',
      marginRight: '1em',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}))(MuiCard)

const ListFilters = (props: Omit<FilterProps, 'children'>) => (
  <Filter {...props}>
    <TextInput source="phoneCode" alwaysOn />
  </Filter>
);

const Aside: FC = () => {
  return (
    <Card>
      <CardContent>
        <ListFilters />
        <FilterList
          label="resources.messages.filters.receiveTime"
          icon={<AccessAlarms />}
        >
          <FilterListItem
            label="resources.messages.filters.last_1_quarter"
            value={{
              receiveTimeNearly: 15,
            }}
          />
          <FilterListItem
            label="resources.messages.filters.last_1_hour"
            value={{
              receiveTimeNearly: 60,
            }}
          />
          <FilterListItem
            label="resources.messages.filters.last_half_day"
            value={{
              receiveTimeNearly: 720,
            }}
          />
        </FilterList>
      </CardContent>
    </Card>
  );
};

export default Aside;
